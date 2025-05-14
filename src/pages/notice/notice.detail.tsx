/** @jsxImportSource react */
import { Button, Icon, Img, RepleInput, RepleList, useToast } from '@/entities'
import { PopBoard, PopMenu, PopPhotoView } from '@/features'
import { downloadFile, globalStore, isEmptyString, proxySrcComm, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const param: any = useParams()
	const id: string = param?.id

	const { user } = userStore()
	const { setHeader, setMenubar, setFooter } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지사항',
			back: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const [trigger, setTrigger] = useState<boolean>(false)
	const [notice, setNotice] = useState<any>()
	const [health, setHealth] = useState<any>([])
	const [files, setFiles] = useState<any[]>([])
	const [editorfiles, setEditorfiles] = useState<any[]>([])
	const [popDel, setPopDel] = useState<boolean>(false)
	const [popRepleInput, setPopRepleInput] = useState<boolean>(false)
	const [popMenu, setPopMenu] = useState<boolean>(false)
	const [popRepleMenu, setPopRepleMenu] = useState<boolean>(false)
	const [repleList, setRepleList] = useState<any[]>([])
	const [targetReply, setTargetReply] = useState<any>({
		commentId: '',
		createdName: '',
		commentText: '',
		taggedUserName: '',
		taggedUserId: '',
	})
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [photo, setPhoto] = useState('')

	useEffect(() => {
		getNotiInfo()
	}, [])

	const getNotiInfo = () => {
		const noticeId: string = id || ''

		Server.get(`/api/notice/info/${noticeId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setFiles(resData.files)
					setEditorfiles(resData.editorfiles)
					setNotice(resData.notice)
					setHealth(resData.health)
				} else {
					toast(message)
				}
			}
		})
	}

	const handleDeleteBtn = () => {
		const noticeId: string = id || ''

		Server.post(`/api/notice/common/delete/${noticeId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
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
							{(user?.rights === 'HEADT' || user?.userId === notice?.createdId) && <Button className='btn-dot-menu' onClick={() => setPopMenu(true)}></Button>}
							<b className='tit'>{notice?.noticeTitle}</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : {notice?.createdAt}</span>
									{notice?.createdAt !== notice?.updatedAt && <span className='date'>수정날짜 : {notice?.updatedAt}</span>}
								</div>
								<div className='right'>
									<span className='writer'>{notice?.createdName}</span>
								</div>
							</div>
						</div>
						<div className='content-view'>
							{notice?.noticeText}
							<br />
							{notice?.noticeGb === 'NOTICE_HTH' && (
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
											{health.map((v: any) => (
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
							<div style={{ display: 'flex', flexWrap: 'wrap' }}>
								{editorfiles && editorfiles.length > 0 && editorfiles.map((photo: any) => {
									return (
										<div
											key={photo.fileId}
											className='img'
											onClick={() => {
												popOpenPhotoView(proxySrcComm(photo.fileDownloadId))
											}}
										>
											<Img src={proxySrcComm(photo.fileDownloadId)} alt={``} />
										</div>
									)
								})}
							</div>
						</div>

						<div className='file-list' style={files && files?.length <= 0 ? { display: 'none' } : { display: 'block' }}>
							<ul>
								{files &&
									files?.map((file, id) => (
										<li key={id} onClick={() => downloadFile(file?.fileDownloadId)}>
											<Icon type='clip' />
											<span className='filename'>{file?.orgFileName}</span>
											<div className='right'>
												<span className='byte'></span>
											</div>
										</li>
									))}
							</ul>
						</div>
					</div>

					<RepleList data={repleList} onPop={[() => setPopRepleMenu(true), setTargetReply]} />
				</div>
			</Contents>

			<PopBoard type='delete' title='선택한 게시물이 삭제됩니다.' data={{ name: '공지', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
			<PopMenu
				data={[
					{
						name: '수정',
						fnc: () => {
							router.push(`${ROUTE_PATH['06-02']}/${id}`)
						},
					},
					{
						name: '삭제',
						fnc: () => setPopDel(true),
					},
				]}
				open={popMenu}
				close={() => setPopMenu(false)}
			/>

			{!isEmptyString(id) &&
				<RepleInput
					className='reple-input-wrap'
					type={'notice'}
					id={id}
					setList={setRepleList}
					popRepleInput={popRepleInput}
					setPopRepleInput={setPopRepleInput}
					targetReply={targetReply}
					setTargetReply={setTargetReply}
					trigger={trigger}
					setTrigger={setTrigger}
					popRepleMenu={popRepleMenu}
					setPopRepleMenu={setPopRepleMenu}
				/>
			}
			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
