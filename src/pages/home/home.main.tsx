/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img, useToast } from '@/entities'
import { DateLine, PopSelectClass, PopSelectList } from '@/features'
import { alertStore, calculateExtraSign, dosageStore, getAccessToken, globalStore, HOME_CALENDER_OPTIONS, HOME_FILTER_LIST, isEmpty, isEmptyString, isRightsAdmin, proxySrcComm, RESPONSE_OK, ROUTE_PATH, scheduleStore, Server, STATUS_OK, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { Stomp } from '@stomp/stompjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SockJS from 'sockjs-client'
import { v4 as uuidv4 } from 'uuid'
import Contents from './home.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setAlertStore } = alertStore()
	const { setScheduleStore } = scheduleStore()
	const { setDosageStore, clearDosageStore } = dosageStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'main',
			title: '',
			menu: true,
			logo: true,
		})
	}, [])

	const [selectDay, setSelectDay] = useState<Date>(new Date())
	const [date, setDate] = useState<Date>(new Date())
	const [activeStartDate, setActiveStartDate] = useState<string | undefined>(undefined)
	const [notification, setNotification] = useState<Array<any>>([])
	const [schedule, setSchedule] = useState<Array<any>>([])
	const [homecoming, setHomecoming] = useState<Array<any>>([])
	const [dosage, setDosage] = useState<Array<any>>([])
	const [attend, setAttend] = useState<Array<any>>([])
	const [dayInfo, setDayInfo] = useState<any>({})
	const [selectedClass, setSelectedClass] = useState<any>([{ classId: undefined, name: undefined, total: 0 }])
	const [popClass, setPopClass] = useState<boolean>(false)
	const [selectedFilter, setSelectedFilter] = useState(HOME_FILTER_LIST[0])
	const [popFilter, setPopFilter] = useState(false)
	const [dashboardInfo, setDashboardInfo] = useState<any>()
	const [alertRow, setAlertRow] = useState<any>({ unsolvedCnt: 0 })
	const [init, setInit] = useState<boolean>(false)

	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			getDaycareInfo()
		}
	}, [user])

	useEffect(() => {
		if (!init) {
			setInit(true)
			const token = getAccessToken()
			const stompClient = Stomp.over(() => new SockJS('/uri/ws'))
			stompClient.reconnect_delay = 5000

			if (!!user && !isEmptyString(user?.daycareId)) {
				stompClient.connect(
					{
						Authorization: `Bearer ${token}`,
					},
					() => {
						stompClient.subscribe(
							`/topic/alert`,
							async (alarm: any) => {
								if (!isEmpty(alarm.body)) {
									const message = JSON.parse(alarm.body)
									setAlertRow(message)
								}
							},
							{
								Authorization: `Bearer ${token}`,
							}
						)
					}
				)
			}
			return () => {
				stompClient.disconnect()
			}
		}
	}, [user?.daycareId])

	useEffect(() => {
		if (selectedClass?.classId !== undefined) {
			if (!!user && !isEmptyString(user?.daycareId)) {
				calendarChangeHandler(moment(date).format('YYYY-MM'))
				activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
				getDashboardCount(moment(date).format('YYYY-MM-DD'))
			}
		}
	}, [selectedClass])

	const getDaycareInfo = () => {
		Server.get(`/api/comm/find/daycare/${user.daycareId}`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setHeader({
							type: 'main',
							title: resData.daycareName,
							menu: true,
							logo: false,
						})
					}
				}
			})
			.catch()
	}

	const activeStartDateHandler = async (date: string) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		const { data, status } = await Server.get(`/api/home/info/daily/{daycareId}?daycareId=${user.daycareId}&yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass?.classId ? `&classId=${selectedClass?.classId}` : ''}`)
		if (status === RESPONSE_OK) {
			const { state, data: resData, message } = data
			if (state === STATUS_OK) {
				setDayInfo(resData)
			} else {
				toast(message)
			}
		}
	}

	const calendarChangeHandler = async (month: string) => {
		const { data, status } = await Server.get(`/api/home/info/monthly/{daycareId}?daycareId=${user.daycareId}&yyyymm=${moment(month).format('YYYY-MM')}${selectedClass?.classId ? `&classId=${selectedClass?.classId}` : ''}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				const result = Object.keys(HOME_CALENDER_OPTIONS).map((key: string) => {
					return resData[key].reduce((prev, curr) => {
						prev.push(curr.yyyymmdd)
						return prev
					}, [])
				})
				setNotification(result[0])
				setSchedule(result[1])
				setHomecoming(result[2])
				setDosage(result[3])
				setAttend(result[4])
			} else {
				toast(message)
			}
		}
	}

	const getDashboardCount = (date: string) => {
		Server.get(`/api/home/count/today/{daycareId}?daycareId=${user.daycareId}&yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass?.classId ? `&classId=${selectedClass?.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setDashboardInfo(resData)
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='main-notice-area'>
					{alertRow?.unsolvedCnt && alertRow.unsolvedCnt > 0 ? (
						<div
							className='noti-alarm bad'
							onClick={() => {
								setAlertStore(alertRow?.alert)
								router.push(ROUTE_PATH['18-02'])
							}}
						>
							<i></i>
							{alertRow.unsolvedCnt > 1 ? <div className='txt'>해결되지 않은 위험 알림이 {alertRow.unsolvedCnt}개가 있어요!</div> : <div className='txt'>어린이집 이탈 인 아이가 있어요!</div>}
						</div>
					) : (
						<div className='noti-alarm good'>
							<i></i>
							<div className='txt'>안심하세요. 우리 AI가 함께하고 있어요</div>
						</div>
					)}

					<div className='user-desc'>
						<div className='img'>{user?.profileImg ? <Img src={proxySrcComm(user?.profileImg)} alt='' /> : <Img src={'/images/temp/temp-profile.png'} alt='' />}</div>
						<div className='desc'>
							{isEmptyString(user?.rights) ? (
								<>
									<span>어린이집을 선택해주세요. </span>
									<Button className='btn-setting' onClick={() => router.push(ROUTE_PATH['04-01'])}>
										속성 설정하기
									</Button>
								</>
							) : (
								<>
									{!!user && !isEmptyString(user.userName) && (
										<>
											<span>안녕하세요. </span>
											<b>
												<em>{user.userName}</em>
												<span>님</span>
											</b>
										</>
									)}
								</>
							)}
						</div>
					</div>
					<div className='belong'>
						<div className='select'>
							<Button className={selectedClass?.name === '전체' ? 'total' : 'class-name'} onClick={() => setPopClass(true)}>
								<span>
									{selectedClass?.name} {user.rights !== 'PRENT' && <>({selectedClass?.total})</>}
								</span>
								<span className='arr'></span>
							</Button>
						</div>
					</div>
					<div className='character'>
						<div className='body'></div>
						<div className='hand'></div>
					</div>
				</div>

				<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={(d: any) => setSelectDay(d)} calendarChange={calendarChangeHandler}>
					<Calendar
						value={date}
						selected={selectDay}
						notification={notification}
						schedule={schedule}
						homecoming={homecoming}
						dosage={dosage}
						attend={attend}
						onChange={(v: any) => {
							activeStartDateHandler(v)
							setSelectDay(v)
							getDashboardCount(moment(v).format('YYYY-MM-DD'))
						}}
						activeStartDate={activeStartDate}
						onActiveStartDateChange={setActiveStartDate}
					></Calendar>

					<div className='legend'>
						<span className='notification'>
							<i></i>
							<span className='txt'>공지</span>
						</span>
						<span className='schedule'>
							<i></i>
							<span className='txt'>일정</span>
						</span>
						<span className='homecoming'>
							<i></i>
							<span className='txt'>귀가</span>
						</span>
						<span className='dosage'>
							<i></i>
							<span className='txt'>투약</span>
						</span>
					</div>
					{isRightsAdmin(user?.rights) && (
						<div className='info-wrap'>
							<div className='left'>
								<span className='info'>
									<Icon type='attend' />
									<span className='txt'>출석</span>
									<b className='num'>{dayInfo?.presenceCount ?? 0}</b>
									<span className='unit'>명</span>
								</span>
							</div>
							<div className='right'>
								<span className='info'>
									<Icon type='caution' />
									<span className='txt'>행동 주의 아동</span>
									<b className='num'>{dayInfo?.alertChildCnt ?? 0}</b>
									<span className='unit'>명</span>
								</span>
							</div>
						</div>
					)}
				</CalendarSection>

				<div className='dashboard-wrap'>
					{isRightsAdmin(user?.rights) && (
						<>
							<div className='recent-time'>
								<span className='label'>최근 접속 시간</span>
								<span className='time'>{user?.beforeLoginAt}</span>
							</div>
							<div className='dashboard-box'>
								<ul>
									{dashboardInfo?.map((v: any, i: number) => {
										return (
											<li key={i}>
												<em>{v.categoryName}</em>
												<b>{v.todayCount}</b>
												<span>{calculateExtraSign(v.newCount)}</span>
											</li>
										)
									})}
								</ul>
							</div>
						</>
					)}
					<div className='schedule-wrap'>
						<div className='header-area'>
							<ul className='menu'>
								<li>
									<Button to='/' onClick={() => router.push(ROUTE_PATH['13-01'])}>
										<Icon type='calendar' />
										<span>일정</span>
									</Button>
								</li>
								<li>
									<Button to='/' onClick={() => router.push(ROUTE_PATH['14-01'])}>
										<Icon type='bob' />
										<span>식단</span>
									</Button>
								</li>
							</ul>
							<div className='selected-date'>
								<DateLine selectDay={selectDay} />
							</div>
							{isRightsAdmin(user?.rights) && (
								<div className='right'>
									<Button className='btn-filter' onClick={() => setPopFilter(true)}>
										{selectedFilter?.name ? selectedFilter?.name : '필터'}
									</Button>
								</div>
							)}
						</div>
						<div className='schedule-list'>
							<div className='box-set'>
								{dayInfo?.notice &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'notice') &&
									dayInfo.notice
										.filter(v => v.noticeGb !== 'NOTICE_CMM')
										.map(v => {
											return (
												<div
													key={uuidv4()}
													className='box'
													onClick={() => {
														router.push(`${ROUTE_PATH['06-05']}/${v.noticeId}`)
													}}
												>
													<span className='icon required'>
														<i></i>
													</span>
													<div className='desc'>
														<em>필수공지</em>
														<span>{v.noticeTitle}</span>
													</div>
												</div>
											)
										})}
								{dayInfo?.notice &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'notice') &&
									dayInfo.notice
										.filter(v => v.noticeGb === 'NOTICE_CMM')
										.map(v => {
											return (
												<div
													key={uuidv4()}
													className='box'
													onClick={() => {
														router.push(`${ROUTE_PATH['06-05']}/${v.noticeId}`)
													}}
												>
													<span className='icon required'>
														<i></i>
													</span>
													<div className='desc'>
														<em>일반공지</em>
														<span>{!isEmptyString(v.noticeTitle) ? v.noticeTitle : '제목없음'}</span>
													</div>
												</div>
											)
										})}
								{dayInfo?.boyook &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'schedule') &&
									dayInfo.boyook.map(v => {
										return (
											<div
												key={uuidv4()}
												className='box'
												onClick={() => {
													setScheduleStore(v.scheduleId)
													router.push(`${ROUTE_PATH['13-03']}`)
												}}
											>
												<span className='icon noti'>
													<i></i>
												</span>
												<div className='desc'>
													<em>보육통합</em>
													<span>{v.eventTitle}</span>
												</div>
											</div>
										)
									})}
								{dayInfo?.schedule &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'schedule') &&
									dayInfo.schedule.map(v => {
										return (
											<div
												key={uuidv4()}
												className='box'
												onClick={() => {
													setScheduleStore(v.scheduleId)
													router.push(`${ROUTE_PATH['13-03']}`)
												}}
											>
												<span className='icon noti'>
													<i></i>
												</span>
												<div className='desc'>
													<em>어린이집</em>
													<span>{v.eventTitle}</span>
												</div>
											</div>
										)
									})}
							</div>
							<div className='box-set'>
								{dayInfo?.remedy &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'remedy') &&
									dayInfo.remedy.map(v => {
										return (
											<div
												key={uuidv4()}
												className='box'
												onClick={() => {
													clearDosageStore()
													setDosageStore({
														childId: v.childId,
														remedyId: v.remedyId,
														regiDate: moment(date).format('YYYY-MM-DD'),
													})
													router.push(ROUTE_PATH['10-01'])
												}}
											>
												<span className='icon dosage'>
													<i></i>
												</span>
												<div className='desc'>
													<em>투약의뢰서</em>
													<span>
														<span className='cls'>{v.className}</span>
														<span className='name'>{v.childName}</span>
													</span>
												</div>
												<span className='time'>
													<span>{!isEmptyString(v.dosesCreatedAt) ? moment(v.dosesCreatedAt).format('HH:mm') : '00:00'}</span>
												</span>
											</div>
										)
									})}
								{dayInfo?.return &&
									(selectedFilter.value === 'all' || selectedFilter.value === 'return') &&
									dayInfo.return.map(v => {
										return (
											<div key={uuidv4()} className='box' onClick={() => router.push(`${ROUTE_PATH['11-01']}/${v.docId}`)}>
												<span className='icon homecoming'>
													<i></i>
												</span>
												<div className='desc'>
													<em>귀가동의서</em>
													<span>
														<span className='cls'>{v.className}</span>
														<span className='name'>{v.childName}</span>
													</span>
												</div>
												<span className='time'>
													<span>{v.returnTm}</span>
												</span>
											</div>
										)
									})}
							</div>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<PopSelectList title='목록 필터' value={selectedFilter} data={HOME_FILTER_LIST} open={popFilter} close={() => setPopFilter(false)} onChange={setSelectedFilter} />
			<MenuBar menu='home' />
		</>
	)
}

export default _
