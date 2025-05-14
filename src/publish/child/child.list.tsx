import { Button, Img } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
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
				<div className='child-home-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
					</div>

					<div className='child-info-list'>
						<ul>
							<li>
								<div className='box'>
									<div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div>
									<div className='desc'>
										<div className='info'>
											<span>풀입반</span>
											<b>홍길동</b>
										</div>
										<div className='parents'>학부모 : 소이현</div>
									</div>
								</div>
							</li>
							<li>
								<button className='box'>
									<div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div>
									<div className='desc'>
										<div className='info'>
											<span>풀입반</span>
											<b>홍길동</b>
										</div>
										<div className='parents'>학부모 : Nguyễn Xuân Phúc</div>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>확인</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
