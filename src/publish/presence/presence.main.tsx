import { Button, Calendar, CalendarSection, Icon, Img, TabList, TabPanel, Tabs } from '@/entities'
import { PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { MenuBar } from '@/widgets'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Contents from './presence.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '출결',
			back: true,
			menu: true,
		})
	}, [])

	//달력
	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [attend, setAttend] = useState([])
	const [amit, setAmit] = useState([])

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
			attendHandler(['2024-03-01', '2024-03-03', '2024-03-03', '2024-03-07', '2024-03-08', '2024-03-11', '2024-03-12', '2024-03-17', '2024-03-18', '2024-03-21', '2024-03-22', '2024-03-23', '2024-03-24', '2024-03-25', '2024-03-29', '2024-03-30'])
		}
		if (moment(month).format('YYYY-MM') === '2024-04') {
			attendHandler(['2024-04-01', '2024-04-03', '2024-04-04', '2024-04-07', '2024-04-08', '2024-04-11', '2024-04-12', '2024-04-17', '2024-04-18', '2024-04-21', '2024-04-22', '2024-04-23', '2024-04-24', '2024-04-25', '2024-04-29', '2024-04-30'])
		}
		if (moment(month).format('YYYY-MM') === '2024-05') {
			attendHandler(['2024-05-01', '2024-05-03', '2024-05-05', '2024-05-07', '2024-05-08', '2024-05-11', '2024-05-12', '2024-05-17', '2024-05-18', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-29', '2024-05-30'])
		}
		if (moment(month).format('YYYY-MM') === '2024-06') {
			attendHandler(['2024-06-01', '2024-06-03', '2024-06-06', '2024-06-07', '2024-06-08', '2024-06-11', '2024-06-12', '2024-06-17', '2024-06-18', '2024-06-21', '2024-06-22', '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-29', '2024-06-30'])
		}
		if (moment(month).format('YYYY-MM') === '2024-11') {
			attendHandler(['2024-11-01', '2024-11-03', '2024-11-06', '2024-11-07', '2024-11-08', '2024-11-11', '2024-11-12', '2024-11-17', '2024-11-18', '2024-11-21', '2024-11-22', '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-29', '2024-11-30'])
			amitHandler(['2024-11-02', '2024-11-04', '2024-11-05', '2024-11-13', '2024-11-15'])
		}
	}
	const attendHandler = (data: any) => {
		setAttend(data)
	}
	const amitHandler = (data: any) => {
		setAmit(data)
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

	useEffect(() => {
		attendHandler(['2024-11-01', '2024-11-03', '2024-11-06', '2024-11-07', '2024-11-08', '2024-11-11', '2024-11-12', '2024-11-17', '2024-11-18', '2024-11-21', '2024-11-22', '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-29', '2024-11-30'])
		amitHandler(['2024-11-02', '2024-11-04', '2024-11-05', '2024-11-13', '2024-11-15'])
	}, [])

	return (
		<>
			<Contents>
				<div className='attendance-list-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								attend={attend}
								amit={amit}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							>
								<div className='mark'>
									<div className='dot report'></div>
								</div>
							</Calendar>
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
										<Icon type='attendance-in' />
										<span className='txt'>등원 전</span>
										<b className='num'>11</b>
										<span className='unit'>명</span>
									</span>
								</div>
							</div>
						</CalendarSection>
					</div>
					<div className='attendance-list-section'>
						<div className='dashboard-wrap'>
							<div className='recent-time'>
								<span className='label'>최근 접속 시간</span>
								<span className='time'>2024.02.28 17:00</span>
							</div>
							<div className='dashboard-box'>
								<ul>
									<li>
										<em>출석 주의</em>
										<b>2</b>
										<span>-1</span>
									</li>
									<li>
										<em>결석</em>
										<b>2</b>
										<span>+1</span>
									</li>
									<li>
										<em>하원</em>
										<b>6</b>
										<span>+4</span>
									</li>
								</ul>
							</div>
						</div>
						<div className='date-text'>
							<div className='year'>2024 </div>
							<div className='date'>02.28</div>
							<span className='day'>목요일</span>
						</div>
						<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
							<TabList>
								<Button>전체</Button>
								<Button>등원</Button>
								<Button>등원전</Button>
								<Button>결석</Button>
							</TabList>
							<TabPanel>
								<div className='tab-content'>
									<div className='child-info-list'>
										<ul>
											<li>
												<div className='box'>
													<button className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<b>홍길동</b>
															</div>
															<div className='attendance-info'>
																<div className='in on'>
																	<Icon type='attendance-in on' />
																	<span className='num'>09:22</span>
																</div>
																<div className='out on'>
																	<Icon type='attendance-out on' />
																	<span className='num'>09:22</span>
																</div>
																<div className='days'>
																	<Icon type='attendance-cal' />
																	<span>
																		<span className='num'>10</span>일째
																	</span>
																</div>
															</div>
														</div>
													</button>
													<div className='box-menu'>
														<button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>투약요청서3333</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>투약요청서3333</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>귀가동의서</span>
															<Icon type='doc' />
														</button>
													</div>
												</div>
											</li>
											<li>
												<div className='box'>
													<button className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<span>홍길동</span>
															</div>
															<div className='attendance-info'>
																<div className='in'>
																	<Icon type='attendance-in' />
																	<span>등원전</span>
																</div>
																<div className='out'>
																	<Icon type='attendance-out' />
																	<span>귀가전</span>
																</div>
																<div className='caution'>
																	<Icon type='attendance-caution' />
																	<span>출석일수 주의</span>
																</div>
															</div>
														</div>
													</button>
													<div className='box-menu'>
														<button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</button>
														<button>
															<span>귀가동의서</span>
															<Icon type='doc' />
														</button>
													</div>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<button disabled className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<span>홍길동</span>
															</div>
															<div className='attendance-info'>
																<div className='in'>
																	<Icon type='attendance-absent' />
																	<span>인정결석</span>
																</div>
																<div className='caution'>
																	<Icon type='attendance-caution' />
																	<span>출석일수 주의</span>
																</div>
															</div>
														</div>
													</button>
													<div className='box-menu'>
														<button>
															<span>결석사유 - 병원입원</span>
														</button>
													</div>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<button disabled className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<span>박수호</span>
															</div>
															<div className='attendance-info'>
																<div className='in'>
																	<Icon type='attendance-in' />
																	<span>등원전</span>
																</div>
																<div className='days'>
																	<Icon type='attendance-cal' />
																	<span>
																		<span className='num'>10</span>일째
																	</span>
																</div>
															</div>
														</div>
													</button>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<button disabled className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<span>박수호</span>
															</div>
															<div className='attendance-info'>
																<div className='in'>
																	<Icon type='attendance-absent' />
																	<span>결석</span>
																</div>
																<div className='days'>
																	<Icon type='attendance-cal' />
																	<span>
																		<span className='num'>10</span>일째
																	</span>
																</div>
															</div>
														</div>
													</button>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className='tab-content'>등원</div>
								<div className='tab-content'>등원전</div>
								<div className='tab-content'>결석</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />
			<MenuBar menu='attend' />
		</>
	)
}

export default _
