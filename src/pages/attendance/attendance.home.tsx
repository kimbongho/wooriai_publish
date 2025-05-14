/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img, TabList, TabPanel, Tabs, useToast } from '@/entities'
import { DateLine, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, RESPONSE_OK, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './attendance.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '출결',
			back: true,
			menu: true,
		})
	}, [])

	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [month, setMonth] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [attend, setAttend] = useState([])
	const [selectedClass, setSelectedClass] = useState<any>([])
	const [popClass, setPopClass] = useState(false)
	const [tabIndex, setTabIndex] = useState(0)

	useNotRights()
	useEffect(() => {
		attendHandler(['2024-03-31', '2024-05-17', '2024-05-20', '2024-05-25', '2024-04-02', '2024-04-03', '2024-04-15', '2024-04-17', '2024-04-20', '2024-05-02', '2024-06-02', '2024-07-02', '2024-08-02'])
	}, [])

	useEffect(() => {
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
	}, [])

	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/presence/attendance/list/daily/${user.daycareId}?yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					console.log(resData)
					// const list = resData.list

					// const groupedByClass = list.reduce((acc, meal) => {
					// 	const { classId, className } = meal
					// 	const key = `${classId}-${className}`
					// 	if (!acc[key]) {
					// 		acc[key] = {
					// 			classId,
					// 			className,
					// 			meals: [],
					// 		}
					// 	}
					// 	acc[key].meals.push(meal)
					// 	return acc
					// }, {})

					// const resultList = Object.values(groupedByClass)
					// setSelectMealList(resultList)
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/presence/attendance/list/daily/${user.daycareId}?yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					console.log(resData)
					// let dateList: Set<string> = new Set()
					// const list = resData.list
					// list.forEach((v: any) => {
					// 	dateList.add(v.mealDate)
					// })
					// setAlbum(Array.from(dateList))
				} else {
					toast(message)
				}
			}
		})
	}

	const popCloseClass = () => {
		calendarChangeHandler(moment(month).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		setPopClass(false)
	}

	const attendHandler = (data: any) => {
		setAttend(data)
	}

	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
	}

	return (
		<>
			<Contents>
				<div className='attendance-list-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={d => setSelectDay(d)}>
							<Calendar
								value={date}
								selected={selectDay}
								attend={attend}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									setSelectDay(v)
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
										<Icon type='attendance-in2' />
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
							<DateLine selectDay={selectDay} />
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
													<Button className='box-link'>
														<div className='thumb'>
															<Img src='/images/temp/temp-album.jpg' alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>풀입반</span>
																<span>홍길동</span>
															</div>
															<div className='attendance-info'>
																<div className='in on'>
																	<Icon type='attendance-in on' />
																	<span className='num'>09:22</span>
																</div>
																<div className='out on'>
																	<Icon type='attendance-in on' />
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
													</Button>
													<div className='box-menu'>
														<Button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</Button>
														<Button>
															<span>귀가동의서</span>
															<Icon type='doc' />
														</Button>
													</div>
												</div>
											</li>
											<li>
												<div className='box'>
													<Button className='box-link'>
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
																	<Icon type='attendance-in' />
																	<span>귀가전</span>
																</div>
																<div className='caution'>
																	<Icon type='attendance-caution' />
																	<span>출석일수 주의</span>
																</div>
															</div>
														</div>
													</Button>
													<div className='box-menu'>
														<Button>
															<span>투약요청서</span>
															<Icon type='doc' />
														</Button>
														<Button>
															<span>귀가동의서</span>
															<Icon type='doc' />
														</Button>
													</div>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<Button disabled className='box-link'>
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
													</Button>
													<div className='box-menu'>
														<Button>
															<span>결석사유 - 병원입원</span>
														</Button>
													</div>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<Button disabled className='box-link'>
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
													</Button>
												</div>
											</li>
											<li>
												<div className='box disabled'>
													<Button disabled className='box-link'>
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
													</Button>
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

			<PopSelectClass open={popClass} close={popCloseClass} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<MenuBar menu='attend' />
		</>
	)
}

export default _
