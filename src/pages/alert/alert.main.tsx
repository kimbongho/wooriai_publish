import { Calendar, CalendarSection, Icon, useToast } from '@/entities'
import { DateLine } from '@/features'
import { alertStore, extractTimeFromDate, globalStore, isEmpty, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './alert.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setAlertStore } = alertStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI 위험 알림 목록',
			back: true,
			menu: true,
		})
	}, [])

	const [selectDay, setSelectDay] = useState<Date>(new Date())
	const [date, setDate] = useState<Date>(new Date())
	const [month, setMonth] = useState<Date>(new Date())
	const [activeStartDate, setActiveStartDate] = useState<string | undefined>(undefined)
	const [danger, setDanger] = useState<Array<string>>([])
	const [dashboard, setDashboard] = useState<any>()
	const [dangerList, setDangerList] = useState<any[]>()

	useNotRights()
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

		Server.get(`/api/alert/solve/info/daily?yyyymmdd=${moment(date).format('YYYY-MM-DD')}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setDashboard(resData.count)
					setDangerList(resData.list)
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/alert/solve/info/monthly?yyyymm=${moment(month).format('YYYY-MM')}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					resData.forEach((v: any) => {
						dateList.add(v.yyyymmdd)
					})
					setDanger(Array.from(dateList))
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<Contents>
			<div className='danger-list-wrap'>
				<div className='page-top-area'>
					<CalendarSection
						className='calendar-wrap'
						date={date}
						setActiveStartDate={setActiveStartDate}
						activeStartDateHandler={activeStartDateHandler}
						selectDayHandler={(d: any) => {
							setSelectDay(d)
						}}
						calendarChange={calendarChangeHandler}
					>
						<Calendar
							value={date}
							selected={selectDay}
							danger={danger}
							onChange={(v: any) => {
								activeStartDateHandler(v)
								setSelectDay(v)
							}}
							activeStartDate={activeStartDate}
							onActiveStartDateChange={setActiveStartDate}
						>
							<div className='mark'>
								<div className='caution'></div>
							</div>
						</Calendar>
					</CalendarSection>
				</div>
				<div className='dashboard-box st2'>
					<ul>
						{dashboard?.map((v: any) => (
							<li key={uuidv4()}>
								<em>
									<Icon type={`dashboard-${v.type === 'all' ? 'warning' : v.type}`} />
									<span>{v.typeName}</span>
								</em>
								<b>{v.dataCount}</b>
							</li>
						))}
					</ul>
				</div>

				<div className='date-danger-list'>
					<div className='date-text'>
						<DateLine selectDay={selectDay} />
					</div>
					<div className='data-table-list'>
						<div className='list-header'>
							<div className='row'>
								<div className='cell' style={{ width: '15%' }}>
									번호
								</div>
								<div className='cell' style={{ width: '25%' }}>
									발생시각
								</div>
								<div className='cell' style={{ width: '40%' }}>
									해결시각
								</div>
								<div className='cell auto'>리포트</div>
							</div>
						</div>
						<div className='list-body'>
							{dangerList?.map((v: any, idx: number) => (
								<div
									className='row'
									key={uuidv4()}
									onClick={() => {
										setAlertStore(v)
										router.push(v.solveYn === 'Y' ? ROUTE_PATH['18-03'] : ROUTE_PATH['18-02'])
									}}
								>
									<div className='cell' style={{ width: '15%' }}>
										{idx + 1}
									</div>
									<div className='cell' style={{ width: '25%' }}>
										{extractTimeFromDate(v.alertAt)}
									</div>
									<div className='cell' style={{ width: '40%' }}>
										{v.solveYn === 'N' ? `미결` : `${v?.workoutDate} ${v?.workoutTime}`}
									</div>
									<div className='cell auto'>{v.reportYn}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Contents>
	)
}

export default _
