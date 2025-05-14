import { Img, Button } from '@/entities'
import { proxySrcComm } from '@/shared'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PhotoView from './photoview.style'

const _ = ({ open, close, src }: any) => {
	if (!src) return

	return (
    <PhotoView className={'photo-view ' + (open ? 'on' : '')}>
      <Button className='close' onClick={close}></Button>
			{Array.isArray(src) ? (
				<Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation>
					{src.map((image: any, index: any) => (
						<SwiperSlide key={index}>
							<div className='img'>
								<Img src={image.fileDownloadId ? proxySrcComm(image.fileDownloadId) : image} alt={`${image}-${index}`} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className='img'>
					<Img src={src} alt='' />
				</div>
			)}
		</PhotoView>
	)
}

export default _
