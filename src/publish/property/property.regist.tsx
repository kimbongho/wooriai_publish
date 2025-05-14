import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './property.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '속성 등록',
			back: true,
			close: true,
		})
	}, [])

	return (
		<Contents className='bg-white'>
			<div className='property-regist-wrap'>
				<div className='visual'>
					<div className='visual-regist'></div>
					<div className='txt'>을지로푸르니하나금융어린이집</div>
					<div className='txt-sub'>서울특별시 구로구 구로중앙로32가길 18</div>
					<div className='txt-caution'>
						<span>원장님이 등록되어 있지 않습니다.</span>
					</div>
				</div>

				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>등록하기</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
