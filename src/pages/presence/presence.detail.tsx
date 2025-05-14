/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img, useToast } from '@/entities'
import { DateLine, PopAttendanceConfirm, PopAttendanceStatus } from '@/features'
import { dosageStore, globalStore, isEmpty, isEmptyArray, isEmptyString, isRightsAdmin, PRESENCE_ABSENCE_REASON, PRESENCE_STATE_RADIO, presenceStore, proxySrcChild, RESPONSE_OK, returnStore, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './presence.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setDosageStore, clearDosageStore } = dosageStore()
	const { setReturnStore, clearReturnStore } = returnStore()
	const { presence } = presenceStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '출결',
			back: true,
			menu: true,
		})
	}, [])

	const [selectDay, setSelectDay] = useState<Date>(presence?.date ? new Date(presence?.date) : new Date())
	const [date, setDate] = useState<Date>(presence?.date ? new Date(presence?.date) : new Date())
	const [month, setMonth] = useState<Date>(presence?.date ? new Date(presence?.date) : new Date())
	const [activeStartDate, setActiveStartDate] = useState<Date | undefined>(undefined)
	const [attend, setAttend] = useState<Array<any>>([])
	const [attendStatus, setAttendStatus] = useState<any>()
	const [popAttendStatus, setPopAttendStatus] = useState<boolean>(false)
	const [popAttendConfirm, setPopAttendConfirm] = useState<boolean>(false)
	const [childInfo, setChildInfo] = useState<any>()

	useEffect(() => {
		// console.log(presence)
		if (isEmpty(presence?.childId)) router.back()
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
	}, [])

	const activeStartDateHandler = (date: any) => {
		const dateToSet: Date = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: Date = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/presence/attendance/list/daily/{daycareId}?daycareId=${user.daycareId}&yyyymmdd=${moment(date).format('YYYY-MM-DD')}&childId=${presence.childId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					if (resData.length > 0) {
						setChildInfo(resData[0])
					}
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/presence/attendance/info/monthly/{daycareId}?daycareId=${user.daycareId}&yyyymm=${moment(month).format('YYYY-MM')}&childId=${presence.childId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					resData.forEach((v: any) => {
						dateList.add(v.presenceDate)
					})
					setAttend(Array.from(dateList) as any)
				} else {
					toast(message)
				}
			}
		})
	}

	const changePresence = () => {
		if (isEmpty(attendStatus)) return

		let presenceObj: any = {
			childId: presence.childId,
			presenceDate: moment(date).format('YYYY-MM-DD'),
			presenceTm: presence.presenceTm,
			backhomeTm: presence.backhomeTm,
		}
		if (String(attendStatus).startsWith('2')) {
			presenceObj = {
				...presenceObj,
				gubun: '0',
				absentReason: PRESENCE_ABSENCE_REASON.filter(v => v.value === attendStatus)[0].label,
			}
		} else {
			presenceObj = {
				...presenceObj,
				gubun: PRESENCE_STATE_RADIO.filter(v => v.value === attendStatus)[0].state,
			}
		}

		Server.post(`/api/presence/attendance/change/{daycareId}?daycareId=${user.daycareId}`, presenceObj).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					// console.log(resData)
					toast('출결정보가 수정되었습니다.')
					activeStartDateHandler(selectDay)
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='attendance-detail-wrap'>
					<div className='page-top-area'>
						<div className='banner-profile'>
							<div>
								<div className='img'>
									<Img src={presence?.profileImg ? proxySrcChild(presence.profileImg) : '/images/temp/temp-profile.png'} alt='' />
								</div>
								<span className='cls-name'>{presence?.className}</span>
								<span className='name'>{presence?.childName}</span>
							</div>
						</div>
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={d => setSelectDay(d)} calendarChange={calendarChangeHandler}>
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
								<div className='right'>
									<span className='info'>
										<Icon type='attend' />
										<span className='txt'>출석 및 인정 결석 일</span>
										<b className='num'>{childInfo?.monthTotal}</b>
										<span className='unit'>일</span>
									</span>
								</div>
							</div>
						</CalendarSection>
					</div>
					<div className='attendance-detail-section'>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>
						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>등원정보</b>
								{isRightsAdmin(user.rights) && <div className='right'>
									<Button className='btn-modify' onClick={() => setPopAttendStatus(true)}>
										<Icon type='modify' />
									</Button>
								</div>}
							</div>
							<div className='list-box'>
								<ul>
									<li>
										등원상태
										{childInfo?.gubun === '0' ? <div className='right'>{isEmptyString(childInfo?.absentReason) ? <>{`결석`}</> : <>{`${childInfo?.gubunText} - ${childInfo.absentReason}`}</>}</div> : <div className='right'>{childInfo?.gubunText}</div>}
									</li>
									<li>
										등원시간
										<div className='right'>{childInfo?.presenceTm ? <span className='time'>{childInfo.presenceTm}</span> : <span>-</span>}</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>투약정보</b>
								<div className='right'>
									<Button
										className='btn-modify'
										onClick={() => {
											const remedyId = !isEmptyString(childInfo?.remedyIds) ? childInfo?.remedyResults[0]?.remedyId : null
											clearDosageStore()
											setDosageStore({ childId: presence?.childId, regiDate: moment(date).format('YYYY-MM-DD'), remedyId: remedyId })
											router.push(!isEmptyArray(childInfo?.remedyResults) ? ROUTE_PATH['10-01'] : ROUTE_PATH['10-02'])
										}}
									>
										<Icon type='modify' />
									</Button>
								</div>
							</div>
							<div className='list-box'>
								{!isEmptyString(childInfo?.remedyIds) ? (
									<>
										{childInfo?.remedyResults?.map((v: any) => {
											return (
												<ul key={v.remedyId}>
													<li>
														투약의뢰서
														<div className='right'>
															<span className='doc-time'>{moment(v.createdAt).format('YYYY-MM-DD HH:mm')}</span>
														</div>
													</li>
													<li>
														투약시간
														<div className='right'>{v.dosesTmFirst ? <span className='time'>{v.dosesTmFirst}</span> : <span>-</span>}</div>
													</li>
												</ul>
											)
										})}
									</>
								) : (
									<ul>
										<li>
											투약의뢰서
											<div className='right'>
												<span>-</span>
											</div>
										</li>
										<li>
											투약시간
											<div className='right'>
												<span>-</span>
											</div>
										</li>
									</ul>
								)}
							</div>
						</div>
						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>하원정보</b>
								<div className='right'>
									<Button
										className='btn-modify'
										onClick={() => {
											const docId = !isEmptyString(childInfo?.returnDocId) ? childInfo?.returnDocId : null
											clearReturnStore()
											setReturnStore({ childId: presence?.childId, regiDate: moment(date).format('YYYY-MM-DD'), docId: docId })
											router.push(!isEmptyString(docId) ? `${ROUTE_PATH['11-01']}/${docId}` : ROUTE_PATH['11-02'])
										}}
									>
										<Icon type='modify' />
									</Button>
								</div>
							</div>
							<div className='list-box'>
								{!isEmptyString(childInfo?.returnDocId) ? (
									<ul>
										<li>
											귀가동의서
											<div className='right'>
												<span className='doc-time'>{moment(childInfo.returnCreateAt).format('YYYY-MM-DD HH:mm')}</span>
											</div>
										</li>
										<li>
											하원시간
											<div className='right'>{childInfo?.returnTm ? <span className='time'>{childInfo.returnTm}</span> : <span>하원 전</span>}</div>
										</li>
									</ul>
								) : (
									<ul>
										<li>
											귀가동의서
											<div className='right'>
												<span>-</span>
											</div>
										</li>
										<li>
											하원시간
											<div className='right'>
												<span>-</span>
											</div>
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</Contents >

			<PopAttendanceStatus
				open={popAttendStatus}
				close={(isNext: boolean) => {
					setPopAttendStatus(false)
					if (isNext) setPopAttendConfirm(true)
				}}
				value={attendStatus}
				onChange={setAttendStatus}
			/>
			<PopAttendanceConfirm
				prev={childInfo?.gubunText}
				next={attendStatus}
				open={popAttendConfirm}
				close={isNext => {
					setPopAttendConfirm(false)
					if (isNext) changePresence()
				}}
			/>
		</>
	)
}

export default _
