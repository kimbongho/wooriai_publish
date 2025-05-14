import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../button'
import { Videolist } from './videolist.style'

const _ = ({ videos, onDelete, onView}: any) => {
	const handleDeleteVideo = (id: any) => {
		onDelete(Array.from(videos).filter((_: any, index: number) => index !== id))
	}
	const handleVideoView = (src: any) => {
		onView(src)
	}
	
	return (
		<Videolist className='video-list-wrap'>
			<div className='video-list'>
				<Swiper spaceBetween={0} slidesPerView={'auto'}>
					{videos.map((video: any, id: any) => (
						<SwiperSlide key={video.id}>
							<Button className='btn-play' onClick={() => handleVideoView(video.src)} />
							{onDelete ? <Button className='btn-del' onClick={() => handleDeleteVideo(id)} /> : null}
							<button className='video'>
								<video width='100%' height='auto'>
									<source src={video.src} type='video/mp4' />
								</video>
							</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Videolist>
	)
}

export default _
