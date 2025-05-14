/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Checkbox, Icon, Img, TabList, TabPanel, Tabs, useToast } from '@/entities'
import { DateLine, PopBoard, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmptyArray, isEmptyObject, isEmptyString, isRightsAdmin, isRightsParents, proxySrcComm, reportStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { report: store, setReportInfo, clearReportStore } = reportStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장',
			back: true,
			menu: true,
		})
	}, [])

	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [month, setMonth] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [report, setReport] = useState<any[]>([])
	const [selectedReport, setSelectedReport] = useState<any[]>([])
	const [countGroup, setCountGroup] = useState({ attend: 0, complete: 0 })
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [popClass, setPopClass] = useState(false)
	const [filteredChildList, setFilteredChildList] = useState<any>([])
	const [childList, setChildList] = useState<any>([])
	const [tabIndex, setTabIndex] = useState(store?.isWrite ? 1 : 0)
	const [checkItems, setCheckItems] = useState<any>([])
	const [tempReport, setTempReport] = useState<any>(null)
	const [popIng, setPopIng] = useState<boolean>(false)

	useNotRights()
	useEffect(() => {
		if (store?.isWrite) {
			setReportInfo({ isWrite: false })
		}

		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, data: resData, message } = data
					if (state === STATUS_OK) {
						if (resData.length > 0) {
							setChildList(resData)
							setFilteredChildList(resData)
						}
					} else {
						toast(message)
					}
				}
			})
		}
	}, [])

	useEffect(() => {
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		// scrollCheck()
	}, [childList])

	useEffect(() => {
		if (tempReport !== null) {
			setPopIng(true)
		}
	}, [tempReport])

	const selectDayHandler = (d: any) => {
		setSelectDay(d)
	}
	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		if (filteredChildList.length > 0) {
			Server.post(`/api/dailynews/daily/list?yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, data: resData, message } = data
					if (state === STATUS_OK) {
						const reportData = resData.dailyNewsList
						setSelectedReport(reportData)

						if (reportData.length < 1) setFilteredChildList((prev: any) => prev.map((data: any) => ({ ...data, report: {} })))
						if (isEmptyArray(filteredChildList)) setFilteredChildList(childList)

						const reduced = filteredChildList.reduce((acc: any, cur: any) => {
							let report = {}
							for (const element of reportData) {
								if (element.childId === cur.childId) {
									report = element
									break
								}
							}

							return acc.concat({ ...cur, report })
						}, [])

						setFilteredChildList(reduced)
						setCountGroup(prev => ({ ...prev, attend: resData.presenceTodayCnt, complete: reportData.length }))
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.post(`/api/dailynews/monthly/list?yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					resData.forEach((v: any) => {
						dateList.add(v.newsDate)
					})
					setReport(Array.from(dateList))
				} else {
					toast(message)
				}
			}
		})
	}

	const handleSingleCheck = (checked: any, id: any) => {
		if (checked) {
			setCheckItems((prev: any) => [...prev, id])
		} else {
			setCheckItems(checkItems.filter((el: any) => el !== id))
		}
	}

	const handleAllCheck = (checked: any) => {
		if (checked) {
			let idArray: any = []
			filteredChildList.forEach(d => idArray.push(d.childId))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	const handleClassSelect = (param: any) => {
		setFilteredChildList(param.classId ? childList.filter((v: any) => v.classId === param.classId) : childList)
		setSelectedClass(param)
	}

	const popCloseClass = () => {
		calendarChangeHandler(moment(month).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		setPopClass(false)
	}

	const handleWriteBtn = async () => {
		clearReportStore()
		const { data, status } = await Server.post('/api/dailynews/info/temp', {})
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				console.log(resData)
				const tempNewsId: number = resData.dailyNews?.newsId
				const tempChildId: string = resData.dailyNews?.childId
				if (isEmptyString(tempNewsId)) {
					setReportInfo({ childIds: childList.filter(v => checkItems.includes(v.childId)), newsDate: moment(date).format('YYYY-MM-DD'), newsId: null })
					router.push(ROUTE_PATH['07-02'])
				} else {
					setTempReport({
						...resData.dailyNews,
						name: '알림장',
						title: resData.dailyNews?.newsDesc,
						newWrite: () => handleNewWrite(tempChildId, tempNewsId),
						continueWrite: () => handleContinueWrite(resData),
					})
				}
			} else {
				toast(message)
			}
		}
	}

	const handleNewWrite = async (childId: string, newsId: number) => {
		const { data, status } = await Server.post(`/api/dailynews/delete/${childId}/${newsId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
			} else {
				toast(message)
			}
		}

		setReportInfo({ childIds: childList.filter(v => checkItems.includes(v.childId)), newsDate: moment(date).format('YYYY-MM-DD'), newsId: null })
		router.push(ROUTE_PATH['07-02'])
	}

	const handleContinueWrite = (info: any) => {
		setReportInfo({ ...info, childIds: childList.filter(v => checkItems.includes(v.childId)), newsDate: moment(date).format('YYYY-MM-DD'), newsId: info.dailyNews.newsId, status: 'TEMP' })
		router.push(ROUTE_PATH['07-02'])
	}

	return (
		<>
			<Contents>
				<div className='report-list-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
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
							{isRightsAdmin(user?.rights) &&
								<div className='info-wrap'>
									<div className='left'>
										<span className='info'>
											<Icon type='attend' />
											<span className='txt'>출석</span>
											<b className='num'>{countGroup.attend}</b>
											<span className='unit'>명</span>
										</span>
									</div>
									<div className='right'>
										<span className='info'>
											<Icon type='write-complete' />
											<span className='txt'>작성완료</span>
											<b className='num'>{countGroup.complete}</b>
											<span className='unit'>명</span>
										</span>
									</div>
								</div>
							}
						</CalendarSection>
					</div>
					<div className='report-list-section'>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>

						{isRightsAdmin(user?.rights) &&
							<Tabs index={tabIndex} className='tab-type1' tabChange={idx => setTabIndex(idx)}>
								<TabList>
									<Button>전체</Button>
									<Button>작성완료</Button>
									<Button>미작성</Button>
								</TabList>
								<TabPanel>
									{/* 전체 */}
									<div className='tab-content'>
										<div className='child-info-list'>
											<div className='menu'>
												<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === filteredChildList.length}>
													전체
												</Checkbox>
											</div>
											<ul>
												{filteredChildList?.map((data, key) => {
													// console.log(data)
													return (
														<li key={key}>
															<div
																className='box'
																onClick={
																	!isEmptyObject(data.report)
																		? () => {
																			setReportInfo({
																				newsId: data.report.newsId,
																				newsDate: data.report.newsDate,
																				childId: data.childId,
																			})
																			router.push(`${ROUTE_PATH['07-04']}`)
																		}
																		: undefined
																}
															>
																{isEmptyObject(data.report) && <Checkbox key={key} name={`check-${data.childId}`} onChange={(e: any) => handleSingleCheck(e, data.childId)} checked={checkItems.includes(data.childId)} />}
																<div className='thumb'>
																	<Img src={proxySrcComm(data.profileImg)} alt='' />
																</div>
																<div className='desc'>
																	<div className='info'>
																		<span>{data.className}</span>
																		<b>{data.childName}</b>
																	</div>
																	<div className='teacher'>{`${data.teacherName} 선생님`}</div>
																</div>

																{!isEmptyObject(data.report) && <div className='time'>{moment(data.report.createdAt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}</div>}
															</div>
														</li>
													)
												})}
											</ul>
										</div>
									</div>
									{/* 작성완료 */}
									<div className='tab-content'>
										<div className='child-info-list'>
											<ul>
												{filteredChildList
													?.filter((f: any) => !isEmptyObject(f.report))
													.map((data, key) => {
														return (
															<li key={key}>
																<div
																	className='box'
																	onClick={() => {
																		setReportInfo({
																			newsId: data.report.newsId,
																			newsDate: data.report.newsDate,
																			childId: data.childId,
																		})
																		router.push(`${ROUTE_PATH['07-04']}`)
																	}}
																>
																	<div className='thumb'>
																		<Img src={proxySrcComm(data.profileImg)} alt='' />
																	</div>
																	<div className='desc'>
																		<div className='info'>
																			<span>{data.className}</span>
																			<b>{data.childName}</b>
																		</div>
																		<div className='teacher'>
																			<div className='teacher'>{`${data.teacherName} 선생님`}</div>
																		</div>
																	</div>
																	<div className='time'>{moment(selectedReport.find(report => report.childId === data.childId)?.createdAt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}</div>
																</div>
															</li>
														)
													})}
											</ul>
										</div>
									</div>
									{/* 미작성 */}
									<div className='tab-content'>
										<div className='child-info-list'>
											<div className='menu'>
												<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === filteredChildList.length}>
													전체
												</Checkbox>
											</div>
											<ul>
												{filteredChildList
													?.filter((f: any) => isEmptyObject(f.report))
													.map((data, key) => (
														<li key={key}>
															<div className='box'>
																<Checkbox key={key} name={`check-${data.childId}`} onChange={(e: any) => handleSingleCheck(e, data.childId)} checked={checkItems.includes(data.childId)} />
																<div className='thumb'>
																	<Img src={proxySrcComm(data.profileImg)} alt='' />
																</div>
																<div className='desc'>
																	<div className='info'>
																		<span>{data.className}</span>
																		<b>{data.childName}</b>
																	</div>
																	<div className='teacher'>{`${data.teacherName} 선생님`}</div>
																</div>
															</div>
														</li>
													))}
											</ul>
										</div>
									</div>
								</TabPanel>
							</Tabs>
						}

						{isRightsParents(user?.rights) &&
							<div className='tab-content'>
								<div className='child-info-list'>
									<ul>
										{filteredChildList?.map((data, key) => {
											// console.log(data)
											return (
												<li key={key}>
													<div
														className='box'
														onClick={
															!isEmptyObject(data.report)
																? () => {
																	setReportInfo({
																		newsId: data.report.newsId,
																		newsDate: data.report.newsDate,
																		childId: data.childId,
																	})
																	router.push(`${ROUTE_PATH['07-04']}`)
																}
																: undefined
														}
													>
														{isEmptyObject(data.report) && isRightsAdmin(user.rights) && <Checkbox key={key} name={`check-${data.childId}`} onChange={(e: any) => handleSingleCheck(e, data.childId)} checked={checkItems.includes(data.childId)} />}
														<div className='thumb'>
															<Img src={proxySrcComm(data.profileImg)} alt='' />
														</div>
														<div className='desc'>
															<div className='info'>
																<span>{data.className}</span>
																<b>{data.childName}</b>
															</div>
															<div className='teacher'>{`${data.teacherName} 선생님`}</div>
														</div>

														{!isEmptyObject(data.report) && <div className='time'>{moment(data.report.createdAt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}</div>}
													</div>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						}
					</div>
				</div>
			</Contents>

			{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
				<div className='floating-menu'>
					<button className='btn-write' disabled={checkItems.length === 0 || moment(date).format('YYYY-MM-DD') !== moment().format('YYYY-MM-DD')} onClick={handleWriteBtn}>
						<span>작성</span>
					</button>
				</div>
			)}

			<PopSelectClass open={popClass} close={popCloseClass} onChange={(param: PopClassRow) => handleClassSelect(param)} />
			<PopBoard
				type='ing'
				title='작성 중인 게시물이 있어요.'
				data={tempReport}
				open={popIng}
				close={() => {
					setPopIng(false)
					router.push(ROUTE_PATH['07-02'])
				}}
			/>
			<MenuBar menu='alarm' />
		</>
	)
}

export default _
