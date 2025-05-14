import { Button, Img } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './institute.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원 정보',
			back: true,
			menu: true,
		})
	}, [])

	return (
		<>
			<Contents className='bg-white'>
				<div className='institute-home-wrap'>
					<div className='institute-profile'>
						<div className='thumb'>
							<Img src={'/images/temp/temp-profile.png'} alt='' />
						</div>
						<b className='name'>을지로푸르니하나금융어린이집</b>
						<div className='addr'>서울특별시 구로구 구로중앙로32가길 18</div>
					</div>
					<ul className='info-desc-box'>
						<li>
							<em>원장님</em>
							<span>임혜선</span>
						</li>
						<li>
							<em>연락처</em>
							<span>031-457-8456</span>
						</li>
					</ul>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>원 정보 관리</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
