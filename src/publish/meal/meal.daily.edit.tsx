import { Button, Thumbnail } from '@/entities'
import { AutoInput, PopSelectClass, PopSelectList } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './meal.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '식단',
			back: true,
			trash: true,
		})
	}, [])

	//반선택 팝업
	const classList = [
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

	//식단 팝업
	const mealList = [{ name: '아침', disabled: true }, { name: '오전 간식' }, { name: '점심' }, { name: '오후 간식' }]
	const [selectedMeal, setSelectedMeal] = useState<any>([1])
	const [popMeal, setPopMeal] = useState(false)
	const popOpenMeal = () => {
		setPopMeal(true)
	}
	const popCloseMeal = () => {
		setPopMeal(false)
	}

	// 수정내용
	const [morning, setMorning] = useState('기장밥\n쇠고기\n미역국\n돼지갈비찜\n시금치나물\n배추김치')
	const [lunch, setLunch] = useState('')
	const [dinner, setDinner] = useState('')

	//사진
	const [thumb, setThumb] = useState('/images/temp/temp-meal.jpg')
	const [thumb2, setThumb2] = useState('')
	const thumbMax = 1000000

	return (
		<>
			<Contents>
				<div className='meal-daily-edit-wrap'>
					<div className='page-top-area'>
						<div className='date'>2024.02.28</div>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
					</div>
					<div className='meal-edit-wrap'>
						<div className='meal-register'>
							<div className={`meal-regist-box ` + (morning ? 'modify' : '')}>
								<div className='title'>
									<b>아침</b>
									<button className='btn-del'></button>
								</div>
								<div className='regist'>
									<Thumbnail thumb={thumb} max={thumbMax} onChange={setThumb} />
									<AutoInput placeholder='내용' value={morning} onChange={setMorning} />
								</div>
							</div>
							<div className={`meal-regist-box ` + (lunch ? 'modify' : '')}>
								<div className='title'>
									<b>점심</b>
									<button className='btn-del'></button>
								</div>
								<div className='regist'>
									<Thumbnail thumb={thumb2} max={thumbMax} onChange={setThumb2} />
									<AutoInput placeholder='식단정보를 입력해주세요.' value={lunch} onChange={setLunch} />
								</div>
							</div>
							<div className={`meal-regist-box ` + (dinner ? 'modify' : '')}>
								<div className='title'>
									<b>저녁</b>
									<button className='btn-del'></button>
								</div>
								<div className='regist'>
									<Thumbnail thumb={thumb2} max={thumbMax} onChange={setThumb2} />
									<AutoInput placeholder='식단정보를 입력해주세요.' value={dinner} onChange={setDinner} />
								</div>
							</div>
						</div>

						<Button className='btn-add' onClick={popOpenMeal}>
							<span>식단 추가</span>
						</Button>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>
								<span>식단 저장</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<PopSelectList title='추가할 식단을 선택해 주세요' value={selectedMeal} data={mealList} open={popMeal} close={popCloseMeal} btnType={'닫기'} type='multi' onChange={setSelectedMeal} />
		</>
	)
}

export default _
