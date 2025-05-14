/** @jsxImportSource react */
import { Button, Icon, Img, useToast } from '@/entities'
import { PopBoard, PopMenu, PopPhotoView } from '@/features'
import { downloadFile, formatBytes, globalStore, isEmpty, isEmptyString, proxySrcComm, RESPONSE_OK, ROUTE_PATH, scheduleStore, Server, STATUS_OK } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './schedule.style'

const initEvent = {
	scheduleId: null,
	daycareId: '',
	eventGb: '',
	eventTitle: '',
	eventDesc: '',
	eventFromDate: '',
	eventFromTm: '',
	eventToDate: '',
	eventToTm: '',
	createdAt: '',
	createdName: '',
	updatedAt: '',
}

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { scheduleId } = scheduleStore()
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) setPopMenu(true)
	}, [header.menupop])

	const [events, setEvents] = useState(initEvent)
	const [popMenu, setPopMenu] = useState(false)
	const [popDel, setPopDel] = useState(false)
	const [files, setFiles] = useState<any[]>([])
	const [imgFiles, setImgFiles] = useState<any[]>([])
	const [childList, setChildList] = useState([])
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)

	useEffect(() => {
		if (!isEmpty(scheduleId)) {
			Server.get(`/api/daycare/events/info?scheduleId=${scheduleId}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, message, data: resData } = data
					if (state === STATUS_OK) {
						setEvents(resData.events)
						setChildList(resData.child)
						setFiles(resData.files)
						setImgFiles(resData.imgFiles)
					} else {
						toast(message)
					}
				}
			})
		}
	}, [])

	//메뉴팝업
	const dataMenu = [
		{
			name: '수정',
			fnc: () => {
				router.push(`${ROUTE_PATH['13-02']}/${scheduleId}`)
			},
		},
		{
			name: '삭제',
			fnc: () => {
				setPopDel(true)
			},
		},
	]

	const handleDeleteBtn = () => {
		Server.post(`/api/daycare/events/delete/${scheduleId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, message } = data
				if (state === STATUS_OK) {
					router.push(ROUTE_PATH['13-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	// const handleDeleteFile = (id: any) => {
	// 	setFiles(files.filter((v: any) => v.fileId !== id))
	// }

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='schedule-detail-wrap'>
					<div className='view-detail'>
						<div className='view-desc'>
							<b className='tit'>{events?.eventTitle}</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : {events?.createdAt}</span>
									{events?.createdAt !== events?.updatedAt && <span className='date'>수정날짜 : {events?.updatedAt}</span>}

								</div>
								<div className='right'>
									<span className='writer'>{events?.createdName}</span>
								</div>
							</div>
						</div>
						<div className='time-box'>
							<div className='time'>
								<span className='label'>시작일 :</span>
								<span className='date'>{events?.eventFromDate?.replaceAll('-', '.')}</span>
								<span className='time'>{events?.eventFromTm}</span>
							</div>
							<div className='time'>
								<span className='label'>종료일 :</span>
								<span className='date'>{events?.eventToDate?.replaceAll('-', '.')}</span>
								<span className='time'>{events?.eventToTm}</span>
							</div>
						</div>
						<div className='content-view'>
							<p>{events?.eventDesc}</p>
							<br />
							{imgFiles?.map(img => (
								<div key={img.fileId} onClick={() => { popOpenPhotoView(proxySrcComm(img.fileDownloadId)) }}>
									<Img src={proxySrcComm(img.fileDownloadId)} alt='' />
								</div>
							))}
						</div>
						<div className='file-list' style={files?.length <= 0 ? { display: 'none' } : { display: 'block' }}>
							<ul>
								{files?.map(file => (
									<li key={uuidv4()} onClick={() => downloadFile(file.fileDownloadId)}>
										<Icon type='clip' />
										<span className='filename'>{file.orgFileName}</span>
										<div className='right'>
											<span className='byte'>{formatBytes(file.fileSize)}</span>
											{/* <Button className='btn-del' onClick={() => handleDeleteFile(file.fileId)} /> */}
										</div>
									</li>
								))}
							</ul>
						</div>
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									선택 아동: <em>{childList.length}명</em>
								</span>
							</div>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{childList.map((item: any) => (
										<SwiperSlide key={item.childId}>
											<Button className='box'>
												<div className='thumb'>
													<Img src={!isEmptyString(item?.profileImg) ? proxySrcComm(item.profileImg) : '/images/temp/temp-profile.png'} alt='' />
												</div>
												<div className='cls'>{item.className}</div>
												<div className='name'>
													<b>{item.childName}</b>
												</div>
											</Button>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</Contents>

			<PopMenu
				data={dataMenu}
				open={popMenu}
				close={() => {
					setPopMenu(false)
					setHeader({ menupop: false })
				}}
			/>
			<PopBoard type='delete' title='선택한 게시물이 삭제됩니다.' data={{ name: '일정', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
