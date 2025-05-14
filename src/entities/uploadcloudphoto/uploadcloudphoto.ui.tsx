/** @jsxImportSource react */
import { proxySrcComm } from '@/shared'
import { formatBytes } from '@/shared/utils/ui'
import { useEffect, useRef, useState } from 'react'
import Button from '../button'
import Checkbox from '../checkbox'
import Img from '../img'
import { UploadCloudPhoto } from './uploadcloudphoto.style'

const _ = ({ type, photos, photosOrg, max, total, onChange, openPop, trigger, init, onChangeCheck }: any) => {
	const [checkItems, setCheckItems] = useState<number[]>([])

	const fileInput = useRef<HTMLInputElement>(null)
	let imageUrlLists = [...photosOrg]

	useEffect(() => {
		if (trigger && fileInput.current) fileInput.current.click()
	}, [trigger])

	useEffect(() => {
		onChangeCheck(checkItems)
	}, [checkItems])

	// 사진 추가 EVENT
	const handleAddImages = (event: any) => {
		let imageLists = event.target.files
		let formFiles: any = []
		let selectedPhotoNum = imageLists.length + imageUrlLists.length

		if (selectedPhotoNum > total) {
			alert(`최대 ${total}개까지 업로드 가능합니다.`)
			return
		}
		for (let i = 0; i < imageLists.length; i++) {
			if (imageLists[i].size <= max) {
				formFiles.push(imageLists[i])
				const reader = new FileReader()
				reader.readAsDataURL(imageLists[i])
				reader.onload = () => {
					imageUrlLists.push(reader.result)
					onChange(imageUrlLists)
				}
			} else {
				alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			}
		}

		const formData = new FormData()
		formFiles?.map((ft: any) => {
			formData.append('files', ft)
		})

		console.log('handleAddImages', formData)
		// if (!!cloud && !isEmpty(cloud?.dirId)) {
		// 	Server.post(`/api/photos/cloud/dir/upload/${cloud.dirId}`, formData)
		// 		.then((response: any) => {
		// 			const { data, status } = response
		// 			if (status === RESPONSE_OK) {
		// 				const { state, code, data: resData, message } = data
		// 				if (state === STATUS_OK) {
		// 					console.log('file upload')
		// 					// 사진 내 원아 얼굴 인식 안내 모달창 3초간 노출(임시)
		// 					openPop[1]()
		// 					setTimeout(() => openPop[2](), 3000)
		// 					// 사진 리스트 재조회
		// 					init()
		// 				} else {
		// 					toast(message)
		// 				}
		// 			}
		// 		})
		// 		.catch()
		// }
	}

	const handleDeleteImage = (id: any) => {
		onChange(photosOrg.filter((_: any, index: any) => index !== id))
	}

	const handleSingleCheck = (checked: boolean, id: number): void => {
		if (checked) {
			setCheckItems(prev => [...prev, id])
		} else {
			setCheckItems(prev => prev.filter(el => el !== id))
		}
	}

	const handleAllCheck = (checked: boolean): void => {
		if (checked) {
			const idArray: any[] = []
			photosOrg.forEach((image: any) => idArray.push(image))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<UploadCloudPhoto className='analyze-upload-list'>
			{type === 'st2' ? (
				<div className='menus'>
					<div className='left'>
						{/* <Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === imageUrlLists.length ? true : false}>전체선택</Checkbox> */}
						{checkItems.length !== imageUrlLists.length ? (
							<Button
								className='btn-selc'
								onClick={() => {
									handleAllCheck(true)
								}}
							>
								전체선택
							</Button>
						) : (
							<Button
								className='btn-selc on'
								onClick={() => {
									handleAllCheck(false)
								}}
							>
								전체삭제
							</Button>
						)}
					</div>
					<div className='right'>
						<Button className={`btn-selc ` + (checkItems.length > 0 ? 'on' : '')} disabled={checkItems.length <= 0}>
							선택사진 삭제
						</Button>
					</div>
				</div>
			) : null}
			{type !== 'st2' ? <b className='tit'>사진첨부</b> : null}
			<div className={`img-wrap ` + (type === 'st2' ? 'hidden' : '')}>
				<label className='upload' htmlFor='photos'>
					<input type='file' multiple ref={fileInput} onChange={handleAddImages} />
				</label>
				<div className='img'>
					<span>
						<em>{imageUrlLists.length}</em>/{total}
					</span>
				</div>
			</div>
			<div className='analyze-photo'>
				<ul>
					{photosOrg.map((image: any, id: any) => (
						<li key={id}>
							{type === 'st2' ? <Checkbox name={`check-img`} onChange={(e: any) => handleSingleCheck(e, image.photoId)} checked={checkItems.includes(image.photoId) ? true : false}></Checkbox> : null}
							<div className='photos'>
								<div className='thumb'>
									<button type='button' className='btn-del' onClick={() => handleDeleteImage(id)}></button>
									<Img src={proxySrcComm(image.downloadId)} alt={`${image}-${id}`} />
								</div>
								<div className='child'>
									<div className='photo'>{image.tagList.map((tag: any, tagId: any) => (tagId < 5 ? <Img src={proxySrcComm(tag.downloadId)} alt={`${tagId}`} /> : <></>))}</div>
									<span className='num'>
										{image.tagList.length > 5 ? (
											<>
												<i className='ico-plus'></i>
												<span>{image.tagList.length - 5}명</span>
											</>
										) : (
											<></>
										)}
									</span>
									<button
										className='btn-child-view'
										onClick={() => {
											openPop(image.photoId)
										}}
									></button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</UploadCloudPhoto>
	)
}

export default _
