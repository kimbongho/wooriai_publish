import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './dosage.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '투약의뢰서',
			back: true,
		})
	}, [])

	return (
		<Contents className='no-data-content'>
			<div className='no-data'>
				<p className='txt'>투약의뢰서가 없습니다.</p>
			</div>
			<div className='btn-wrap'>
				<Button className='btn-type1 st1'>
					<span>등록하기</span>
				</Button>
			</div>
		</Contents>
	)
}

export default _
