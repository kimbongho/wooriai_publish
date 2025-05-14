import { Button, Calendar, CalendarSection } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Contents from './schedule.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정',
			back: true,
			menu: true,
		})
	}, [])

	//반선택 팝업
	const classList = [
		{ name: '전체', total: 20, taacher: '' },
		{ name: '아리스토텔레스반', total: 8, taacher: '' },
		{ name: '가가반', total: 12, taacher: '' },
		{ name: '나나반', total: 5, taacher: '' },
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

	useEffect(() => {
		albumHandler(['2024-05-02', '2024-05-12', '2024-05-22', '2024-05-22'])
	}, [])

	return (
		<>
			<Contents>
				<div className='schedule-list-wrap'>
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
					<div className='days-schedule-wrap'>
						<div className='date-text'>
							<div className='year'>2024 </div>
							<div className='date'>02.28</div>
							<span className='day'>목요일</span>
						</div>
						<div className='schedule-list-box'>
							<ul>
								<li>
									<Button className='link'>
										<div className='info'>
											<span className='type'>보육통합</span>
											<span className='classname'>풀잎반</span>
											<div className='right'>
												<span className='date'>2024.02.23</span>
											</div>
										</div>
										<div className='tit'>누리등록 마감일</div>
										<div className='etc'>
											<span className='time'>종일</span>
										</div>
									</Button>
								</li>
								<li>
									<Button className='link'>
										<div className='info'>
											<span className='type'>보육통합</span>
											<span className='classname'>오솔길반, 꽃구름반</span>
											<div className='right'>
												<span className='date'>2024.02.23</span>
											</div>
										</div>
										<div className='tit'>어울놀이 현장학습</div>
										<div className='etc'>
											<span className='time'>10:00~14:00</span>
											<div className='right'>
												<span className='children'>+4</span>
											</div>
										</div>
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
					<span>일정 관리</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
