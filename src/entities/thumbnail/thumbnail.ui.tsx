import { formatBytes } from '@/shared/utils/ui'
import Img from '../img'
import { Thumbnail } from './thumbnail.style'
import Button from '../button'
import { isEmptyString, proxySrcComm } from '@/shared'
import { useState } from 'react'
import { PopPhotoView } from '@/features'

const _ = ({ thumb, max, setThumb, setFile, isDel }: any) => {
	const [popPhotoView, setPopPhotoView] = useState(false)
	const [photo, setPhoto] = useState('')

	const handleAddImages = (event: any) => {
		const img = event.target.files[0]
		if (setFile) setFile(img)

		if (img.size > max) {
			alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			event.target.value = ''
			return
		}

		const reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onload = () => {
			setThumb(reader.result)
			event.target.value = ''
		}
	}
	const handleDeleteImage = (id: any) => {
		setThumb('')
		if (setFile) setFile(null)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}

	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	return (
		<Thumbnail className='thumbnail'>
			<div className='img-wrap'>
				<label className='upload' htmlFor='photo'>
					<input type='file' id='photo' name='photo' accept='.png, .jpeg, .jpg' onChange={handleAddImages} />
				</label>
				<div className='img' onClick={() => {
					popOpenPhotoView(!isEmptyString(thumb) ? String(thumb).startsWith('data') ? thumb : proxySrcComm(thumb) : '')
				}}>{!isEmptyString(thumb) ? String(thumb).startsWith('data') ? <Img src={thumb} alt='이미지 업로드' /> : <Img src={proxySrcComm(thumb)} alt='이미지 업로드' /> : null}</div>
				{!isDel && <Button className='btn-del' onClick={handleDeleteImage} />}
			</div>

			<div style={{ marginLeft: '-3.3rem' }}>
				<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
			</div>
		</Thumbnail>
	)
}

export default _
