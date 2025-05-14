import { Button, Img, useToast } from '@/entities'
import { alertStore, globalStore, isEmpty, proxySrcChild, proxySrcComm, RESPONSE_OK, Server, STATUS_OK, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './alert.style'

const _ = () => {
	const { toast } = useToast()

	const { user } = userStore()
	const { alert } = alertStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI 위험 해결 보고서',
			back: true,
		})
	}, [])

	const [child, setChild] = useState<Array<any>>([])
	const [alertRow, setAlertRow] = useState<any>({})
	const [photos, setPhotos] = useState<Array<File>>([])

	useEffect(() => {
		if (isEmpty(alert.alertId)) return

		Server.get(`/api/alert/solve/info/daily?alertId=${alert.alertId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setAlertRow(resData.info)
					setChild(resData.info.children)
					setPhotos(resData.images)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	const changeSelectedChild = (v: any) => {
		const changeChild: Array<any> = child.map((item: any) => {
			if (item.childId === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})

		setChild(changeChild)
	}

	const changeDelete = (v: any) => {
		setChild(child.filter(item => item.childId !== v))
	}

	console.log(alertRow)

	return (
		<>
			<Contents className='bg-white'>
				<div className='danger-detail-wrap'>
					<div className='bg-gray'>
						<div className='list-box'>
							<ul>
								<li>
									이벤트명
									<div className='right'>
										<b className='medium c-red'>{alertRow?.workoutGb}</b>
									</div>
								</li>
								<li>
									발생시각
									<div className='right'>{alertRow?.alertAt}</div>
								</li>
								<li>
									해결시각
									<div className='right c-primary'>{`${alertRow?.workoutDate} ${alertRow?.workoutTime}`}</div>
								</li>
								<li>
									해결자
									<div className='right'>
										<span className='teacher'>
											<b>{alertRow?.profileName}</b>
											{alertRow?.rightsCode === 'HEADT' ? '원장선생님' : '선생님'}
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									선택 아동: <em>{child.length}명</em>
								</span>
							</div>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child.map((item: any, idx: any) => {
										return (
											<SwiperSlide key={idx}>
												<Button
													className='btn-del'
													onClick={() => {
														changeDelete(item.childId)
													}}
												></Button>
												<Button
													className={`box ` + (item.selected ? 'on' : '')}
													onClick={() => {
														changeSelectedChild(item.childId)
													}}
												>
													<div className='thumb'>
														<Img src={item.profileImg ? proxySrcChild(item.profileImg) : '/images/temp/temp-album.jpg'} alt='' />
													</div>
													<div className='cls'>{item.className}</div>
													<div className='name'>
														<b>{item.childName}</b>
													</div>
												</Button>
											</SwiperSlide>
										)
									})}
								</Swiper>
							</div>
						</div>
					</div>

					<div className='view-detail'>
						<div className='content-tit'>{alertRow?.solveType}</div>
						<div className='content-view'>
							{alertRow?.workoutDesc}
							<br />
							{photos?.map((v: any) => <Img key={uuidv4()} src={proxySrcComm(v.fileDownloadId)} alt='' />)}
						</div>
					</div>
				</div>
			</Contents>

			<MenuBar />
		</>
	)
}

export default _
