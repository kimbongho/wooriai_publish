import { Button, Calendar, CalendarSection, Img } from '@/entities'
import { PopPhotoView, PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Contents from './meal.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '식단',
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

	//달력
	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [album, setAlbum] = useState([])

	const selectDayHandler = (d: any) => {
		setSelectDay(d)
	}
	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)
	}
	const calendarChangeHandler = (month: any) => {
		if (moment(month).format('YYYY-MM') === '2024-03') {
			albumHandler(['2024-03-02', '2024-03-12', '2024-03-22', '2024-03-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-04') {
			albumHandler(['2024-04-02', '2024-04-12', '2024-04-22', '2024-04-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-05') {
			albumHandler(['2024-05-02', '2024-05-12', '2024-05-22', '2024-05-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-06') {
			albumHandler(['2024-06-02', '2024-06-12', '2024-06-22', '2024-06-22'])
		}
	}
	const albumHandler = (data: any) => {
		setAlbum(data)
	}

	//게시물 img 팝업
	const [popIng, setPopIng] = useState(false)
	const popOpenIng = () => {
		setPopIng(true)
	}
	const popCloseIng = () => {
		setPopIng(false)
	}

	// 사진보기
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}
	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}
	const viewPhoto = (e: any) => {
		e.stopPropagation()
		popOpenPhotoView('/images/temp/temp-meal.jpg')
	}

	useEffect(() => {
		albumHandler(['2024-05-02', '2024-05-12', '2024-05-22', '2024-05-22'])
	}, [])

	return (
		<>
			<Contents>
				<div className='meal-daily-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								album={album}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							></Calendar>
						</CalendarSection>
					</div>
					<div className='days-meal-wrap'>
						<div className='list-top'>
							<div className='date-text'>
								<div className='year'>2024 </div>
								<div className='date'>02.28</div>
								<span className='day'>목요일</span>
							</div>
							<div className='right'>
								<button className='btn-view-monthly-meal'>월간 식단보기</button>
							</div>
						</div>
						<div className='meal-list'>
							<ul>
								<li>
									<div className='box'>
										<div className='info'>
											<div className='class-name'>풀잎반</div>
										</div>
										<ul>
											<li>
												<button className='img' onClick={viewPhoto}>
													<Img src={'/images/temp/temp-meal.jpg'} alt='' />
												</button>
												<div className='tit'>오전간식</div>
												<ul className='list'>
													<li>바나나</li>
												</ul>
											</li>
											<li>
												<button className='img' onClick={viewPhoto}>
													<Img src={'/images/temp/temp-meal.jpg'} alt='' />
												</button>
												<div className='tit'>점심</div>
												<ul className='list'>
													<li>기장밥</li>
													<li>쇠고기 미역국</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<button className='box'>
										<div className='info'>
											<div className='class-name'>풀잎반</div>
										</div>
										<ul>
											<li>
												<button className='img' onClick={viewPhoto}>
													<Img src={'/images/temp/temp-meal.jpg'} alt='' />
												</button>
												<div className='tit'>오전간식</div>
												<ul className='list'>
													<li>바나나</li>
												</ul>
											</li>
											<li>
												<button className='img' onClick={viewPhoto}>
													<Img src={'/images/temp/temp-meal.jpg'} alt='' />
												</button>
												<div className='tit'>점심</div>
												<ul className='list'>
													<li>기장밥</li>
													<li>쇠고기 미역국</li>
													<li>돼지갈비찜</li>
													<li>시금치나물</li>
													<li>배추김치</li>
												</ul>
											</li>
											<li>
												<button className='img' onClick={viewPhoto}>
													<Img src={'/images/temp/temp-meal.jpg'} alt='' />
												</button>
												<div className='tit'>오후 간식</div>
												<ul className='list'>
													<li>호박스프</li>
													<li>우유</li>
												</ul>
											</li>
										</ul>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />

			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>월간 식단 관리</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
