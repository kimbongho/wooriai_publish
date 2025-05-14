import { Button, Textarea, UploadPhotos } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './meal.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '월간 식단',
			back: true,
			trash: true,
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

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000
	return (
		<>
			<Contents>
				<div className='meal-monthly-edit-wrap'>
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
					<div className='meal-edit-wrap'>
						<div className='form-wrap'>
							<UploadPhotos title='사진첨부' photos={photos} max={photoMax} total={10} onChange={setPhotos} />
							<div className='inp-tit'>식단 내용</div>
							<Textarea placeholder='내용' />
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>
								<span>식단표 등록</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />
		</>
	)
}

export default _
