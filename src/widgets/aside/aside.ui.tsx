import { Button, Img } from '@/entities'
import { isEmpty, userStore } from '@/shared'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Aside } from './aside.style'

const _ = () => {
	const { user } = userStore()

	const login = !!user && !isEmpty(user?.userId)
	const banner = ['/images/aside-banner-1.jpg', '/images/aside-banner-2.jpg', '/images/aside-banner-3.jpg', '/images/aside-banner-4.jpg']

	return (
		<Aside>
			<div className='aside-content'>
				<h1 className='logo'>
					<span className='t-hidden'>우리아이AI</span>
				</h1>
				<div className='aside-banner-list'>
					{login ? (
						<Swiper
							spaceBetween={0}
							loop={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Autoplay, Pagination]}
						>
							{banner.map((image: any, id: any) => (
								<SwiperSlide key={id}>
									<Img src={image} alt='' />
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<Img src={'/images/aside-banner.svg'} alt='' />
					)}
				</div>
				<div className='go-app'>
					<div className='text'>
						<span>우리 아이의 인공지능 안전 지키미</span>
						<b>
							<em>우리아이AI를 앱</em>으로 사용해보세요!
						</b>
					</div>
					<div className='menu'>
						<Button className='btn-applestore'></Button>
						<Button className='btn-googleplay'></Button>
					</div>
				</div>
			</div>
		</Aside>
	)
}

export default _
