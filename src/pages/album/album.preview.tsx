/** @jsxImportSource react */
import { Button, Img, Radio, RadioGroup, useToast } from '@/entities'
import { PopBoard, PopPhotoView, PopTimePicker } from '@/features'
import { addTimeFormat, albumStore, customDateFormat, dateData, globalStore, isEmptyString, proxySrcChild, proxySrcCloud, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, zeroFill } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './album.style'

const yyyymmdd = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`

const _ = () => {
	const { toast } = useToast()
	const router = useRouter()

	const { user } = userStore()
	const { album, setAlbumStore, clearAlbumStore } = albumStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 미리보기',
			back: true,
			trash: !isEmptyString(album?.albumId),
		})
	}, [])

	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [notiTime, setNotiTime] = useState('1')
	const [popPicker, setPopPicker] = useState(false)
	const today = new Date()
	const [dateValue, setDateValue] = useState([customDateFormat(today), today.getHours(), today.getMinutes()])
	const [childList, setChildList] = useState<any>([])
	const [albumState, setAlbumState] = useState<any>([])
	const [photos, setPhotos] = useState<any>([])
	const [popDel, setPopDel] = useState(false)

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
		if (!!album && !isEmptyString(album?.albumId)) {
			Server.get(`/api/photos/album/info/daily?albumId=${album.albumId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setChildList(resData.childList)
							setAlbumState(resData.info)
							setPhotos(resData.photos)
						} else {
							toast(message)
						}
					}
				})
				.catch()
		}
	}, [])

	useEffect(() => {
		if (isEmptyString(album?.albumId)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const deleteAlbum = () => {
		Server.post(`/api/photos/album/delete/${album.albumId}`, {})
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						clearAlbumStore()
						toast('앨범이 삭제되었습니다.')
						router.replace(ROUTE_PATH['08-01'])
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const changeSelectedChild = (v: any) => {
		const changeChild = childList.map(item => {
			if (item.childId === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})

		setChildList(changeChild)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const albumSubmit = () => {
		toast(`${yyyymmdd} 앨범이 등록되었습니다.`)
		let tempAlbumForm = {
			...albumState,
			daycareId: user.daycareId,
			tempSaveYn: 'N',
		}

		switch (notiTime) {
			case '1':
				tempAlbumForm['addYn'] = 'Y'
				break
			case '2':
				tempAlbumForm['addTm'] = addTimeFormat(nextOneHour.current)
				break
			case '3':
				tempAlbumForm['addTm'] = addTimeFormat(nextTwoHours.current)
				break
			case '4':
				if (new Date().getHours() < 16) {
					let nowDate = addTimeFormat(new Date()).split(' ')[0]
					nowDate += ' 16:00'
					tempAlbumForm['addTm'] = addTimeFormat(nextTwoHours.current)
				} else {
					tempAlbumForm['addYn'] = 'Y'
				}
				break
			case 'custom':
				break
		}

		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post('/api/photos/album/upsert', tempAlbumForm).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						toast('앨범이 등록되었습니다.')
						router.replace(ROUTE_PATH['08-01'])
					} else {
						toast(message)
					}
				}
			})
		}
	}

	return (
		<>
			<Contents>
				<div className='album-detail-wrap'>
					<div className='view-detail'>
						<div className='select-item-list-wrap'>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{childList.map((item: any, idx: any) => {
										return (
											<SwiperSlide key={idx}>
												<Button
													className={`box ` + (item.selected ? 'on' : '') + (item.name === '전체' ? ' total' : '')}
													onClick={() => {
														changeSelectedChild(item.childId)
													}}
												>
													<div className={`thumb ` + (item.name === '전체' ? ' total' : '')}>{item.name === '전체' ? null : <Img src={proxySrcChild(item?.downloadId)} alt='' />}</div>
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
						<div className='view-desc'>
							<b className='tit'>{albumState?.albumTitle}</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : {albumState?.createAt ? albumState.createAt : moment().format('YYYY.MM.DD HH:mm:ss')}</span>
									<span className='date'>수정날짜 : {albumState?.createAt ? albumState?.updateAt : moment().format('YYYY.MM.DD HH:mm:ss')}</span>
								</div>
								<div className='right'>
									<span className='writer'>{albumState?.updatedName} 선생님</span>
								</div>
							</div>
						</div>
						<div className='album-view'>
							<ul className='album-list'>
								{photos?.map((src: any, id: any) => {
									return (
										<li key={id}>
											<Button
												className='img'
												onClick={() => {
													popOpenPhotoView(proxySrcCloud(src.downloadId))
												}}
											>
												<img src={proxySrcCloud(src.downloadId)} alt='' />
											</Button>
										</li>
									)
								})}
							</ul>
							<div className='text'>{albumState?.albumDesc}</div>
						</div>
					</div>
					<div className='album-regist-set'>
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
							<Button className='btn-type2 st1' onClick={albumSubmit}>
								등록
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={() => setPopPhotoView(false)} />
			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} data={dateData} value={dateValue} onChange={setDateValue} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '앨범', edit: () => deleteAlbum() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
