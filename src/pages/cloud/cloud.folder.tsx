/** @jsxImportSource react */
import { Button, Icon, Loading, UploadPhotoAnalyze, useToast } from '@/entities'
import { PopHold, PopMultiSelectChild, PopSelectChild } from '@/features'
import { downloadFile, downloadFileList, FILE_MAX_SIZE, globalStore, isEmpty, isEmptyArray, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { albumStore } from '@/shared/zustand/album'
import { cloudStore } from '@/shared/zustand/cloud'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './cloud.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { cloud, setCloudStore } = cloudStore()
	const { album, setAlbumStore } = albumStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '클라우드',
			back: true,
		})
	}, [])

	const [childList, setChildList] = useState<any>([])
	const [popChild, setPopChild] = useState(false)
	const [popMultiChild, setPopMultiChild] = useState(false)
	const [popHold, setPopHold] = useState(false)
	const [photos, setPhotos] = useState<Array<File>>([])
	const [photoOrg, setPhotoOrg] = useState<Array<File>>([])
	const [trigger, setTrigger] = useState(false)
	const [checkItems, setCheckItems] = useState<number[]>([])
	const [selectedChild, setSelectedChild] = useState<any>([])
	const [child, setChild] = useState<any>([])
	const [selectedPhoto, setSelectedPhoto] = useState<any>({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getPhotoList()

		Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setChildList(resData)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	const getPhotoList = () => {
		if (!!user && !isEmptyString(user?.daycareId) && !!cloud) {
			Server.get(`/api/photos/cloud/dir/list/${cloud.dirId}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setPhotos(resData)
						setPopHold(false)
						setLoading(false)
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const albumAdd = (event: any) => {
		if (isEmpty(cloud.dirId)) return

		const imageLists = event.target.files
		const imageArr = Array.from(imageLists)
		const formData = new FormData()

		if (imageArr.length > 0) {
			imageArr.map((photo: any) => {
				formData.append('files', photo)
			})

			Server.post(`/api/photos/cloud/dir/upload/${cloud.dirId}`, formData)
				.then(response => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setPhotos(resData)
						}
					}
					setPopHold(false)
				})
				.catch(e => {
					setTimeout(() => {
						getPhotoList()
					}, 6000);
				})
		}

	}

	const deletePicture = async (items: Array<any>) => {
		setLoading(true)
		Promise.all(items?.map(async (item: any) => {
			await Server.post(`/api/photos/cloud/dir/photo/delete/${cloud.dirId}/${item.photoId}`, {})
		})).then(() => {
			getPhotoList()
			setCheckItems([])
		})
	}

	const updateTagList = (newList) => {
		Server.post(`/api/photos/cloud/dir/tag/update/${cloud.dirId}/${selectedPhoto.photoId}`, { childIds: newList })
			.then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						getPhotoList()
					}
				}
			})
			.catch()
	}

	const addChild = () => {
		setChild(childList.filter((item: any) => selectedChild.find((v: any) => v.childId === item.childId)))
		setPopMultiChild(true)
		setPopChild(false)
	}

	const delChild = (item: any) => {
		const filterChild = selectedChild.filter((v: any) => v.childId !== item.childId)
		updateTagList(filterChild.map(v => v.childId).join(','))
		setSelectedChild(filterChild)
	}

	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}

	if (loading) return <Loading open />
	return (
		<>
			<Contents>
				<div className='cloud-folder-wrap'>
					<div className='page-top-area'>
						<div className='folder-title'>
							<b>{cloud.dirName}</b>
							<span className='num'>{photos?.length}장</span>
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st2' onClick={triggerHandeler}>
								<Icon type='plus'></Icon>
								<span>사진 추가</span>
							</Button>
						</div>
					</div>
					<div className='cloud-view-wrap'>
						<UploadPhotoAnalyze
							type='st2'
							photos={photos}
							photoOrg={photoOrg}
							max={FILE_MAX_SIZE}
							total={5}
							onChange={setPhotos}
							openPop={[
								(photo, item) => {
									setSelectedPhoto(photo)
									setSelectedChild(item.tagList)
									setPopChild(true)
								},
							]}
							trigger={trigger}
							checkItems={checkItems}
							setCheckItems={setCheckItems}
							setSelectedChild={setSelectedChild}
							addPicture={albumAdd}
							deletePicture={deletePicture}
							setPopHold={setPopHold}
						/>
					</div>
				</div>
			</Contents>

			<PopSelectChild type='del' title='태그된 아동 목록' data={selectedChild} open={popChild} close={() => setPopChild(false)} addChild={addChild} delChild={delChild} />
			<PopMultiSelectChild title='아동을 선택해 주세요' value={child} data={childList} open={popMultiChild} close={() => {
				setPopMultiChild(false)
			}} onChange={(selected) => {
				const orgList = selectedChild.sort((a, b) => a.childId - b.childId).map(v => v.childId).join(',')
				const newList = selected.sort((a, b) => a.childId - b.childId).map(v => v.childId).join(',')
				if (orgList !== newList) {
					updateTagList(newList)
				}
				setChild(selected)
			}} />
			<PopHold open={popHold} close={() => setPopHold(false)} />

			<Footer className='full-btn'>
				{cloud.flag === 'ALBUM' ? (
					<Button
						className='btn-type1 st1'
						disabled={isEmptyArray(checkItems)}
						onClick={() => {
							setCloudStore({ flag: 'ALBUM-END' })
							setAlbumStore({ checkItems })
							router.replace(ROUTE_PATH['08-02'])
						}}
					>
						<span>선택한 사진 첨부</span>
					</Button>
				) : (
					<Button className='btn-type1 st1' disabled={isEmptyArray(checkItems)} onClick={() => {
						if (checkItems.length === 1) {
							checkItems.map(async (item: any) => {
								setTimeout(async () => {
									await downloadFile(item.downloadId, 'cloud')
								}, 100);
							})
						} else if (checkItems.length > 1) {
							const downloadIds = checkItems.map((item: any) => item.downloadId).join(',');
							downloadFileList(downloadIds);
						}
					}}>
						<span>다운로드</span>
					</Button>
				)}
			</Footer>
		</>
	)
}

export default _
