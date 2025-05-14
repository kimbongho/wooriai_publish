import { Button, Img } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './meal.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '월간 식단',
			back: true,
		})
	}, [])

	//반선택 팝업
	const classList = [
		{ name: '전체', total: 20, taacher: '' },
		{ name: '아리스토텔레스반', total: 8, taacher: '김이순신' },
		{ name: '가가반', total: 12, taacher: '을지문덕' },
		{ name: '나나반', total: 5, taacher: '홍길동' },
		{ name: '노노반', total: 10, taacher: '강감찬' },
	]
	const [selectedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
	const popOpenClass = () => {
		setPopClass(true)
	}
	const popCloseClass = () => {
		setPopClass(false)
	}

	return (
		<>
			<Contents>
				<div className='meal-monthly-wrap'>
					<div className='page-top-area'>
						<div className='monthly-indicator'>
							<button className='btn-prev'></button>
							<b>2024.03</b>
							<button className='btn-next'></button>
						</div>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
					</div>
					<div className='class-meal-wrap'>
						<div className='class-meal-list'>
							<ul>
								<li>
									<Button className='link'>
										<div className='info'>
											<b className='tit'>풀잎반</b>
										</div>
										<div className='img'>
											<Img src={'/images/temp/temp-monthly-meal.jpg'} alt='' />
										</div>
										<div className='txt'>이노뎁 어린이집 친구들이 먹을 3월 식단표입니다. 이미지를 참고해 주세요.</div>
									</Button>
								</li>
								<li>
									<Button className='link'>
										<div className='info'>
											<b className='tit'>풀잎반</b>
										</div>
										<div className='img'>
											<Img src={'/images/temp/temp-monthly-meal.jpg'} alt='' />
										</div>
										<div className='txt'>이노뎁 어린이집 친구들이 먹을 3월 식단표입니다. 이미지를 참고해 주세요.</div>
									</Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>월간 식단 관리</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
