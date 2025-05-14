/** @jsxImportSource react */
import { Button, Img, RepleInput, RepleList, useToast } from '@/entities'
import { PopBoard, PopMenu, PopPhotoView } from '@/features'
import { albumStore, globalStore, isEmpty, isEmptyObject, isRightsAdmin, proxySrcChild, proxySrcCloud, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './album.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { album } = albumStore()
	const { setHeader, header, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 보기',
			back: true,
			dotmenu: isRightsAdmin(user.rights),
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
		if (header.menupop) setPopMenu(true)
	}, [header.menupop])

	const [albumState, setAlbumState] = useState<any>()
	const [trigger, setTrigger] = useState(false)
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [repleList, setRepleList] = useState<Reply[]>([])
	const [taggedUser, setTaggedUser] = useState({
		tagId: '',
		tagName: '',
		tagUserId: '',
	})
	const [popDel, setPopDel] = useState(false)
	const [popMenu, setPopMenu] = useState(false)
	const [popRepleInput, setPopRepleInput] = useState(false)
	const [popRepleMenu, setPopRepleMenu] = useState(false)
	const [targetReply, setTargetReply] = useState<any>({
		commentId: '',
		createdName: '',
		commentText: '',
		taggedUserName: '',
		taggedUserId: '',
	})

	useEffect(() => {
		if (!!album && !isEmpty(album?.albumId)) {
			getAlbumState()
		}
	}, [])

	const changeSelectedChild = (v: any) => {
		const changeChild = albumState?.childList?.map(item => {
			if (item.childId === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})
		setAlbumState((prev: any) => ({ ...prev, childList: changeChild }))

		if (!!album && !isEmpty(album?.albumId)) {
			if (!!v && v) {
				Server.get(`/api/photos/album/sort/${album.albumId}/${v}`)
					.then((response: any) => {
						const { data, status } = response
						if (status === RESPONSE_OK) {
							const { state, code, data: resData, message } = data
							if (state === STATUS_OK) {
								setAlbumState((prev: any) => ({ ...prev, photos: resData }))
							} else {
								toast(message)
							}
						}
					})
					.catch()
			} else {
				getAlbumState()
			}
		}
	}

	const getAlbumState = () => {
		Server.get(`/api/photos/album/info/daily?albumId=${album.albumId}`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const resultChild = [{ childId: '', className: '', childName: '전체', downloadId: '', selected: true }]
						resData?.childList.map((c: any) => {
							resultChild.push({ ...c, selected: false })
						})
						setAlbumState({ ...resData, childList: resultChild })
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const handleDeleteBtn = () => {
		if (!!album && !isEmpty(album?.albumId)) {
			Server.post(`/api/photos/album/delete/${album?.albumId}`)
				.then((response: any) => {
					const state = response.data.state
					const message = response.data.message
					const data = response.data.data
					if (state === 'ok') {
						router.push(ROUTE_PATH['08-01'])
					} else {
						toast(message)
					}
				})
				.catch()
		}
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	// 댓글 클릭시 해당 댓글 작성자 태그
	const onClickReply = (tagUserId: string, tagName: string) => {
		setTaggedUser({ ...taggedUser, tagUserId, tagName })
	}

	return (
		<>
			<Contents>
				<div className='album-detail-wrap'>
					<div className='view-detail'>
						{isRightsAdmin(user.rights) &&
							<div className='select-item-list-wrap'>
								<div className='select-item-list'>
									<Swiper spaceBetween={0} slidesPerView={'auto'}>
										{albumState?.childList?.map((item: any, idx: any) => {
											return (
												<SwiperSlide key={idx}>
													<Button
														className={`box ` + (item.selected ? 'on' : '') + (item.childName === '전체' ? ' total' : '')}
														onClick={() => {
															changeSelectedChild(item.childId)
														}}
													>
														<div className={`thumb ` + (item.name === '전체' ? ' total' : '')}>{item.name === '전체' ? null : <Img src={proxySrcChild(item.profileImg)} alt='' />}</div>
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
						}
						<div className='view-desc'>
							<b className='tit'>{albumState?.info?.albumTitle}</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : {albumState?.info?.createdAt}</span>
									{albumState?.info?.createdAt !== albumState?.info?.updatedAt && <span className='date'>수정날짜 : {albumState?.info?.updatedAt}</span>}
								</div>
								<div className='right'>
									<span className='writer'>{albumState?.info?.createdName}</span>
								</div>
							</div>
						</div>
						<div className='album-view'>
							<ul className='album-list'>
								{albumState?.photos?.map((p: any, id: any) => (
									<li key={id}>
										<button
											className='img'
											onClick={() => {
												popOpenPhotoView(proxySrcCloud(p.downloadId))
											}}
										>
											<Img src={proxySrcCloud(p.downloadId)} alt='' key={id} />
										</button>
									</li>
								))}
							</ul>
							<div className='text'>{albumState?.info?.albumDesc}</div>
						</div>
					</div>
					<RepleList data={repleList} onPop={[() => setPopRepleMenu(true), setTargetReply]} onClickReply={onClickReply} />
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={() => setPopPhotoView(false)} />
			{isRightsAdmin(user.rights) && <PopMenu
				data={[
					{
						name: '수정',
						fnc: () => {
							router.push(ROUTE_PATH['08-02'])
						},
					},
					{
						name: '삭제',
						fnc: () => {
							setPopDel(true)
						},
					},
				]}
				open={popMenu}
				close={() => {
					setPopMenu(false)
					setHeader({ menupop: false })
				}}
			/>}

			<PopBoard type='delete' title='선택한 게시물이 삭제됩니다.' data={{ name: '앨범', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
			{!isEmptyObject(album) &&
				<RepleInput
					className='reple-input-wrap'
					type={'album'}
					id={album.albumId}
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
		</>
	)
}

export default _
