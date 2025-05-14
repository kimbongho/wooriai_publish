import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../button'
import Img from '../img'
import { Photolist } from './photolist.style'

const _ = ({ photos, onDelete, onView}: any) => {
	const handleDeleteImage = (id: any) => {
		onDelete(Array.from(photos).filter((_: any, index: number) => index !== id))
	}
	const handlePhotoView = (src: any) => {
		onView(src)
	}
	
	return (
		<Photolist className='photo-list-wrap'>
			<div className='photo-list'>
				<Swiper spaceBetween={0} slidesPerView={'auto'}>
					{photos.map((image: any, id: any) => (
						<SwiperSlide key={id}>
							{onDelete ? <Button className='btn-del' onClick={() => handleDeleteImage(id)} /> : null}
							<button className='img' onClick={()=>handlePhotoView(image.src)}>
								<Img src={image.src} alt='' />
							</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Photolist>
	)
}

export default _
