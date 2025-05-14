/** @jsxImportSource react */
import { Button, Icon, Img, Radio, RadioGroup, useToast } from '@/entities'
import { PopBoard, PopPhotoView, PopTimePicker } from '@/features'
import { addTimeFormat, customDateFormat, dateData, downloadFile, formatBytes, globalStore, isEmptyArray, isEmptyString, noticeStore, proxySrcComm, removeNoticeStorage, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, zeroFill } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { notice, setNotice, deleteNotice } = noticeStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '미리보기',
			back: true,
			trash: !isEmptyString(notice?.noticeId),
		})
	}, [])

	const [notiTime, setNotiTime] = useState('1')
	const [popPicker, setPopPicker] = useState(false)
	const today = new Date()
	const [dateValue, setDateValue] = useState([customDateFormat(today), today.getHours(), today.getMinutes()])
	const [noticeInfo, setNoticeInfo] = useState<any>({})
	const [popDel, setPopDel] = useState(false)
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [photo, setPhoto] = useState('')

	const nextOneHour = useRef(new Date(today.getTime() + 60 * 60 * 1000))
	const nextTwoHours = useRef(new Date(today.getTime() + 2 * 60 * 60 * 1000))
	const notiTimeOption = [
		{ value: '1', label: '바로 등록', time: '' },
		{ value: '2', label: '1시간 뒤', time: `${zeroFill(nextOneHour.current.getHours(), 2)}:${zeroFill(nextOneHour.current.getMinutes(), 2)}` },
		{ value: '3', label: '2시간 뒤', time: `${zeroFill(nextTwoHours.current.getHours(), 2)}:${zeroFill(nextTwoHours.current.getMinutes(), 2)}` },
		{ value: '4', label: '일과 후', time: '16:00' },
		{ value: 'custom', label: '지정 시간' },
	]

	useEffect(() => {
		if (notice.noticeId) {
			getNoticePreview(notice.noticeGb)
		}
	}, [notice.noticeId])

	useEffect(() => {
		if (isEmptyString(notice?.noticeId)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const getNoticePreview = async (noticeGb: string) => {
		const { data, status } = await Server.get(`/api/notice/info/${notice.noticeId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				setNotice({ noticeId: notice.noticeId })
				if (noticeGb === 'common' || noticeGb === 'NOTICE_CMM') {
					setNoticeInfo({ ...notice, ...resData.notice, editorfiles: resData.editorfiles, files: resData.files })
				} else if (noticeGb === 'health') {
					setNoticeInfo({ ...notice, ...resData.notice, health: resData.health })
				}
			} else {
				toast(message)
			}
		}
	}

	const handleWriteBtn = () => {
		if (noticeInfo.noticeGb === 'common' || noticeInfo.noticeGb === 'NOTICE_CMM') {
			const formData = new FormData()
			let noticeObj: any = {
				noticeId: notice.noticeId,
				noticeTitle: noticeInfo.noticeTitle,
				noticeText: noticeInfo.noticeText,
				addTm: moment().format('YYYY-MM-DD HH:mm'),
				addYn: noticeInfo.addYn,
				holdYn: noticeInfo.holdYn,
				tempSaveYn: 'N',
				daycareId: noticeInfo.daycareId,
				classId: noticeInfo.classId,
				isFirstAddYn: noticeInfo.editYn,
			}

			switch (notiTime) {
				case '1':
					noticeObj['addYn'] = 'Y'
					break
				case '2':
					noticeObj['addTm'] = addTimeFormat(nextOneHour.current)
					break
				case '3':
					noticeObj['addTm'] = addTimeFormat(nextTwoHours.current)
					break
				case '4':
					if (new Date().getHours() < 16) {
						let nowDate = addTimeFormat(new Date()).split(' ')[0]
						nowDate += ' 16:00'
						noticeObj['addTm'] = addTimeFormat(nextTwoHours.current)
					} else {
						noticeObj['addYn'] = 'Y'
					}
					break
				case 'custom':
					break
			}

			formData.append('notice', JSON.stringify(noticeObj))

			Server.post('/api/notice/common/upsert', formData).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						deleteNotice()
						removeNoticeStorage()
						toast('공지가 등록되었습니다.')
						router.push(ROUTE_PATH['06-01'])
					} else {
						toast(message)
					}
				}
			})
		} else {
			router.push(ROUTE_PATH['06-01'])
		}
	}

	const handleDeleteBtn = () => {
		const noticeId: string = notice?.noticeId ?? ''

		Server.post(`/api/notice/common/delete/${noticeId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					deleteNotice()
					router.push(ROUTE_PATH['06-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	return (
		<>
			<Contents>
				<div className='notice-detail-wrap'>
					<div className='view-detail'>
						<div className='view-desc'>
							<b className='tit'>{noticeInfo?.noticeTitle}</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : {noticeInfo?.createdAt}</span>
									{noticeInfo?.editYn === 'Y' && <span className='date'>수정날짜 : {noticeInfo?.updatedAt}</span>}
								</div>
								<div className='right'>
									<span className='writer'>{noticeInfo?.createdName}</span>
								</div>
							</div>
						</div>
						<div className='content-view'>
							{noticeInfo?.noticeText}
							<br />
							{noticeInfo?.noticeGb === 'NOTICE_HTH' && (
								<div className='data-table'>
									<table>
										<thead>
											<tr>
												<th>번호</th>
												<th>이름</th>
												<th>차수</th>
												<th>검진일자</th>
												<th>신장</th>
												<th>몸무게</th>
												<th>다음검진시작일</th>
												<th>다음검진종료일</th>
												<th>검진기관</th>
												<th>반</th>
											</tr>
										</thead>
										<tbody>
											{noticeInfo?.health.map((v: any) => (
												<tr key={v.num}>
													<td>{v.num}</td>
													<td>{v.childName}</td>
													<td>{v.healthCnt}</td>
													<td>{v.checkDate}</td>
													<td>{v.childHeight}</td>
													<td>{v.childWeight}</td>
													<td>{v.nextCheckFromDate}</td>
													<td>{v.nextCheckToDate}</td>
													<td>{v.medicalCenter}</td>
													<td>{v.className}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
							<br />
							{!isEmptyArray(noticeInfo?.editorfiles) &&
								noticeInfo?.editorfiles.map((photo: any) => {
									// return <Img key={photo.fileId} src={proxySrcComm(photo.fileDownloadId)} alt='' />
									return (<div
										key={photo.fileId}
										className='img'
										onClick={() => {
											popOpenPhotoView(proxySrcComm(photo.fileDownloadId))
										}}
									>
										<Img src={proxySrcComm(photo.fileDownloadId)} alt={``} />
									</div>)
								})}
						</div>
						<div className='file-list' style={isEmptyArray(noticeInfo?.files) ? { display: 'none' } : { display: 'block' }}>
							<ul>
								{!isEmptyArray(noticeInfo?.files) &&
									noticeInfo?.files.map((file: any) => (
										<li key={file?.fileId} onClick={() => downloadFile(file?.fileDownloadId)}>
											<Icon type='clip' />
											<span className='filename'>{file?.orgFileName}</span>
											<div className='right'>
												<span className='byte'>{formatBytes(file?.fileSize)}</span>
											</div>
										</li>
									))}
							</ul>
						</div>
					</div>
					<div className='notice-regist-set'>
						<div className='select-box'>
							<b className='tit'>등록시간 설정</b>
							<ul>
								<RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
									{notiTimeOption.map((item, idx) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
											{item.value === 'custom' ? (
												<button className='btn-time' onClick={() => setPopPicker(true)}>
													{dateValue.length > 0 ? (
														<>
															<span className='date'>{dateValue[0]}</span>
															<span className='time'>
																{zeroFill(dateValue[1], 2)} : {zeroFill(dateValue[2], 2)}
															</span>
														</>
													) : (
														'시간을 선택해 주세요'
													)}
												</button>
											) : (
												<div className='btn-time'>{item.time}</div>
											)}
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type2 st1' onClick={handleWriteBtn}>
								등록
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} data={dateData} value={dateValue} onChange={setDateValue} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '공지', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
