import { PopPhotoView } from '@/features'
import { cloudStore, isEmptyArray, proxySrcChild, proxySrcCloud } from '@/shared'
import { formatBytes } from '@/shared/utils/ui'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../button'
import Checkbox from '../checkbox'
import Img from '../img'
import { UploadPhotoAnalyze } from './uploadphotoanalyze.style'
import { useToast } from '../toast'

const _ = ({ type, photos, photoOrg, max, total, onChange, openPop, trigger, childList, checkItems, setCheckItems, setSelectedChild, addPicture, deletePicture, setPopHold }: any) => {
	const { toast } = useToast()
	const [thumb, setThumb] = useState<any>([])
	const [popPhotoView, setPopPhotoView] = useState(false)

	const fileInput = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (trigger && fileInput.current) fileInput.current.click()
	}, [trigger])

	let imageUrlLists = [...photos]

	const handleAddImages = (event: any) => {
		let imageLists = event.target.files
		let selectedPhotoNum = imageLists.length + imageUrlLists.length

		if (selectedPhotoNum > total) {
			alert(`최대 ${total}개까지 업로드 가능합니다.`)
			return
		}
		for (let i = 0; i < imageLists.length; i++) {
			if (imageLists[i].size <= max) {
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
			photos.forEach((image: any) => idArray.push(image))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setThumb(src)
	}

	return (
		<UploadPhotoAnalyze className='analyze-upload-list'>
			{type === 'st2' ? (
				<div className='menus'>
					<div className='left'>
						{checkItems.length !== imageUrlLists.length ? (
							<Button
								className='btn-selc total'
								onClick={() => {
									handleAllCheck(true)
								}}
							>
								전체선택
							</Button>
						) : (
							<Button
								onClick={() => {
									handleAllCheck(false)
								}}
								className='btn-selc total on'
							>
								전체선택
							</Button>
						)}
					</div>
					<div className='right'>
						<Button className={`btn-selc ` + (checkItems.length > 0 ? 'on' : '')} disabled={checkItems.length <= 0} onClick={() => deletePicture(checkItems)}>
							선택사진 삭제 {!isEmptyArray(checkItems) ? `(${checkItems.length})` : ''}
						</Button>
					</div>
				</div>
			) : null}
			{type !== 'st2' ? <b className='tit'>사진첨부</b> : null}
			<div className={`img-wrap ` + (type === 'st2' ? 'hidden' : '')}>
				{type !== 'st2' ? (
					<label className='upload' htmlFor='photos' onClick={openPop[1]}></label>
				) : (
					<label className='upload' htmlFor='photos'>
						<input type='file' multiple ref={fileInput} onChange={(e) => {
							setPopHold(true)
							if (addPicture !== undefined) {
								if ((e.target.files as any).length <= 5) {
									addPicture(e)
								} else {
									toast('한번에 최대 5개까지만 업로드 가능합니다.')
									setPopHold(false)
								}
							} else {
								handleAddImages(e)
							}

						}} />
					</label>
				)}
				<div className='img'>
					<span>
						<em>{imageUrlLists.length}</em>/{total}
					</span>
				</div>
			</div>
			<div className='analyze-photo'>
				<ul>
					{imageUrlLists.map((image: any, id: any) => {
						return (
							<li key={id}>
								{type === 'st2' ? <Checkbox name={`check-img`} onChange={(e: any) => handleSingleCheck(e, image)} checked={checkItems.includes(image)}></Checkbox> : null}
								<div className='photos'>
									<div className='thumb' onClick={() => popOpenPhotoView(proxySrcCloud(image.downloadId))}>
										<Img src={proxySrcCloud(image.downloadId)} alt={`${image}-${id}`} />
									</div>
									<div className='child'>
										<div className='photo'>
											{image.tagList?.map(v => {
												return (
													<div key={uuidv4()} onClick={() => popOpenPhotoView(proxySrcChild(v.profileImg))}>
														<Img src={proxySrcChild(v.profileImg)} alt='' />
													</div>
												)
											})}
										</div>
										<span className='num'>
											<i className='ico-plus'></i>
											<span>{image.tagList?.length ? image.tagList.length : 0}명</span>
										</span>
										<button className='btn-child-view' onClick={() => openPop[0](photos[id], image)}></button>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>

			<div style={{ marginLeft: '-1.6rem' }}>
				<PopPhotoView src={thumb} open={popPhotoView} close={() => setPopPhotoView(false)} />
			</div>
		</UploadPhotoAnalyze>
	)
}

export default _
