import { Button, Calendar, CalendarSection, Checkbox, Icon, Img, TabList, TabPanel, Tabs } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore, scrollCheck } from '@/shared'
import { MenuBar } from '@/widgets'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장',
			back: true,
			menu: true,
		})
		// scrollCheck()
	}, [])

	//달력
	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [report, setReport] = useState([])

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
			reportHandler(['2024-03-02', '2024-03-12', '2024-03-22', '2024-03-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-04') {
			reportHandler(['2024-04-02', '2024-04-12', '2024-04-22', '2024-04-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-05') {
			reportHandler(['2024-05-02', '2024-05-12', '2024-05-22', '2024-05-22'])
		}
		if (moment(month).format('YYYY-MM') === '2024-06') {
			reportHandler(['2024-06-02', '2024-06-12', '2024-06-22', '2024-06-22'])
		}
	}
	const reportHandler = (data: any) => {
		setReport(data)
	}

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

	const [tabIndex, setTabIndex] = useState(0)
	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
	}

	// 필수 동의 항목
	const allCheckdata = [
		{ value: 1, name: '홍길동', reserve: true },
		{ value: 2, name: '을지문덕', reserve: false },
		{ value: 3, name: '이황', reserve: false },
	]

	// 단일선택
	const [checkItems, setCheckItems] = useState<any>([])
	const handleSingleCheck = (checked: any, id: any) => {
		if (checked) {
			setCheckItems((prev: any) => [...prev, id])
		} else {
			setCheckItems(checkItems.filter((el: any) => el !== id))
		}
	}
	// 전체 선택
	const handleAllCheck = (checked: any) => {
		if (checked) {
			let idArray: any = []
			allCheckdata.forEach(d => idArray.push(d.value))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	useEffect(() => {
		reportHandler(['2024-04-02', '2024-04-12', '2024-04-22', '2024-04-22'])
	}, [])

	return (
		<>
			<Contents>
				<div className='report-list-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								report={report}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							></Calendar>
							<div className='info-wrap'>
								<div className='left'>
									<span className='info'>
										<Icon type='attend' />
										<span className='txt'>출석</span>
										<b className='num'>49</b>
										<span className='unit'>명</span>
									</span>
								</div>
								<div className='right'>
									<span className='info'>
										<Icon type='write-complete' />
										<span className='txt'>작성완료</span>
										<b className='num'>11</b>
										<span className='unit'>명</span>
									</span>
								</div>
							</div>
						</CalendarSection>
					</div>
					<div className='report-list-section'>
						<div className='date-text'>
							<div className='year'>2024 </div>
							<div className='date'>02.28</div>
							<span className='day'>목요일</span>
						</div>
						<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
							<TabList>
								<Button>전체</Button>
								<Button>작성완료</Button>
								<Button>미작성</Button>
							</TabList>
							<TabPanel>
								<div className='tab-content'>
									<div className='child-info-list'>
										{/* <div className='menu'>
											<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === allCheckdata.length}>
												전체
											</Checkbox>
										</div> */}
										<ul>
											{allCheckdata?.map((data, key) => (
												<li key={key}>
													<button className='box'>
														{/* <Checkbox key={key} name={`check-${data.value}`} onChange={(e: any) => handleSingleCheck(e, data.value)} checked={checkItems.includes(data.value)} /> */}
														<div className='thumb'>
															<Img src={'/images/temp/temp-album.jpg'} alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<b>{data.name}</b>
															</div>
															<div className='teacher'>이순신 선생님</div>
														</div>
														{data.reserve ? <span className='reserve'>예약</span> : null}
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className='tab-content'>
									<div className='child-info-list'>
										<ul>
											{allCheckdata?.map((data, key) => (
												<li key={key}>
													<button className='box'>
														<div className='thumb'>
															<Img src={'/images/temp/temp-album.jpg'} alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<b>{data.name}</b>
															</div>
															<div className='teacher'>이순신 선생님</div>
														</div>
														<div className='time'>10:00</div>
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</Contents>
			{/* <div className='floating-menu hide'>
				<button className='btn-write' disabled={true}>
					<span>작성</span>
				</button>
			</div> */}

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />
			<MenuBar menu='alarm' />
		</>
	)
}

export default _
