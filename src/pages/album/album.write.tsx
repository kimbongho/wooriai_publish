/** @jsxImportSource react */
import { Button, Input, Textarea, UploadPhotoAnalyze, useToast } from '@/entities'
import { PopBoard, PopSelectChild, PopSelectClass, SelectBoxClass } from '@/features'
import { albumStore, cloudStore, FILE_MAX_SIZE, globalStore, isEmptyArray, isEmptyObject, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Contents from './album.style'

const initialAlbum = {
	albumId: '',
	albumTitle: '',
	albumDesc: '',
	classId: '',
	addTm: '',
	addYn: '',
	tempSaveYn: 'Y',
}

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { album, setAlbumStore } = albumStore()
	const { cloud, setCloudStore } = cloudStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 작성',
			back: true,
			trash: !isEmptyString(album?.albumId),
		})
	}, [])

	const [selectedClass, setSelectedClass] = useState<any>({})
	const [popClass, setPopClass] = useState(false)
	const [childList, setChildList] = useState<any>([])
	const [popChild, setPopChild] = useState(false)
	const [photos, setPhotos] = useState([])
	const [popDel, setPopDel] = useState(false)
	const [albumState, setAlbumState] = useState<any>(initialAlbum)
	const [checkItems, setCheckItems] = useState<number[]>([])
	const [selectedChild, setSelectedChild] = useState<any>([])
	const [popImport, setPopImport] = useState(false)
	const tempAlbumState = useRef<any>({
		...initialAlbum,
		photoIds: [],
	})

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
							if (!isEmptyArray(resData.photos)) {
								setPhotos(resData.photos)
							}
						} else {
							toast(message)
						}
					}
				})
				.catch()
		}
		if (!isEmptyArray(album?.checkItems)) {
			setPhotos(album?.checkItems)
		}
		if (cloud.flag === 'ALBUM-END') {
			setCloudStore({ flag: '' })
			setAlbumState({
				albumTitle: album?.albumTitle,
				albumDesc: album?.albumDesc,
			})

			Server.get(`/api/daycare/class/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const list = resData.list
						const v = list.find((v: any) => v.classId === album?.classId)
						if (isEmptyObject(v)) {
							setSelectedClass({ classId: null, name: '전체', total: resData.childTotCnt, teacher: '' })
						} else {
							setSelectedClass({
								classId: v?.classId,
								name: v?.className,
								total: v?.classNowPax,
								teacher: v?.teacherId,
							})
						}
					}
				}
			})
		}
	}, [])

	useEffect(() => {
		tempAlbumState.current = albumState
	}, [albumState])

	useEffect(() => {
		if (isEmptyString(album?.albumId)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	const popOpenChild = (item: any) => {
		setSelectedChild(item.tagList)
		setPopChild(true)
	}

	const handleClassSelect = (param: any) => {
		albumStateChange({ classId: param.classId })
		setSelectedClass(param)
	}

	const albumStateChange = (args: any) => {
		setAlbumState((prev: any) => ({ ...prev, ...args }))
	}

	const albumPreview = () => {
		const tempAlbumForm = {
			...tempAlbumState.current,
			albumId: album.albumId,
			daycareId: user.daycareId,
			albumDate: isEmptyString(album?.date) ? moment().format('YYYY-MM-DD') : moment(album.date).format('YYYY-MM-DD'),
			addYn: 'N',
			tempSaveYn: 'Y',
			classId: isEmptyString(selectedClass.classId) ? 0 : selectedClass.classId,
			photoIds: photos.map((photo: any) => photo.photoId),
		}

		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post('/api/photos/album/upsert', tempAlbumForm).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setAlbumStore({ albumId: resData.albumId })
						router.push(ROUTE_PATH['08-03'])
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
				<div className='album-write-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
					</div>
					<div className='album-write'>
						<div className='form-wrap'>
							<Input
								type='text'
								value={albumState?.albumTitle}
								maxLength={160}
								placeholder='제목 (필수)'
								del={true}
								onChange={(e: any) => {
									albumStateChange({ albumTitle: e.target.value })
								}}
							/>
							<Textarea
								placeholder='내용'
								value={albumState?.albumDesc}
								onChange={(e: any) => {
									albumStateChange({ albumDesc: e.target.value })
								}}
							/>
						</div>

						<UploadPhotoAnalyze
							photos={photos}
							max={FILE_MAX_SIZE}
							total={50}
							onChange={setPhotos}
							openPop={[
								popOpenChild,
								() => {
									setAlbumStore({ ...albumState, classId: selectedClass.classId })
									setCloudStore({ flag: 'ALBUM' })
									router.replace(ROUTE_PATH['15-01'])
								},
							]}
							childList={childList}
							checkItems={checkItems}
							setCheckItems={setCheckItems}
						/>

						<div className='btn-wrap'>
							<Button className='btn-type2 st1' onClick={albumPreview}>
								미리보기
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => handleClassSelect(param)} />
			<PopSelectChild title='태그된 아동 목록' data={selectedChild} open={popChild} close={() => setPopChild(false)} />
			<PopBoard
				type='delete'
				title='작성중인/선택한 게시물이 삭제됩니다.'
				data={{ name: '앨범' }}
				open={popDel}
				close={() => {
					Server.post(`/api/photos/album/delete/${album.albumId}`).then(response => {
						const { data, status } = response
						if (status === RESPONSE_OK) {
							const { state, code, data: resData, message } = data
							if (state === STATUS_OK) {
								router.replace(ROUTE_PATH['08-01'])
							} else {
								toast(message)
							}
						}
					})
					setPopDel(false)
				}}
			/>
			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={() => setPopImport(false)} />
		</>
	)
}

export default _
