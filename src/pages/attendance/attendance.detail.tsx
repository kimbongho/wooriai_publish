/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img } from '@/entities'
import { DateLine, PopAttendanceConfirm, PopAttendanceStatus } from '@/features'
import { globalStore } from '@/shared'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './attendance.style'

const _ = () => {
	const router = useRouter()
	const searchParams: any = useSearchParams()
	const childNm = !searchParams.get('name') ? 'null' : searchParams.get('name').toString()
	const classNm = !searchParams.get('clsName') ? 'null' : searchParams.get('clsName').toString()

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
	const attendHandler = (data: any) => {
		setAttend(data)
	}

	//출결 팝업
	const [attendStatus, setAttendStatus] = useState()
	const [popAttendStatus, setPopAttendStatus] = useState(false)
	const popOpenAttendStatus = () => {
		setPopAttendStatus(true)
	}
	const popCloseAttendStatus = () => {
		setPopAttendStatus(false)
		popOpenAttendConfirm()
	}

	//출결변경확인 팝업
	const [popAttendConfirm, setPopAttendConfirm] = useState(false)
	const popOpenAttendConfirm = () => {
		setPopAttendConfirm(true)
	}
	const popCloseAttendConfirm = () => {
		setPopAttendConfirm(false)
	}

	// 출결 상태 수정 팝업
	const filterList = [{ name: '질병부상' }, { name: '부모의 출산' }, { name: '미세먼지' }, { name: '자연재해 재난' }, { name: '경조사' }]
	const [selectedFilter, setSelectedFilter] = useState(filterList[0])
	const [popModify, setPopModify] = useState(false)
	const popOpenModify = () => {
		setPopModify(true)
	}
	const popCloseModify = () => {
		setPopModify(false)
	}

	useEffect(() => {
		attendHandler(['2024-03-31', '2024-05-17', '2024-05-20', '2024-05-25', '2024-04-02', '2024-04-03', '2024-04-15', '2024-04-17', '2024-04-20', '2024-05-02', '2024-06-02', '2024-07-02', '2024-08-02'])
	}, [])

	// 편집 버튼 클릭
	const btnEditClick = () => {
		console.log('sss')
		// popOpenModify()
	}

	return (
		<>
			<Contents>
				<div className='attendance-detail-wrap'>
					<div className='page-top-area'>
						<div className='banner-profile'>
							<div>
								<div className='img'>
									<Img src={'/images/temp/temp-profile.png'} alt='' />
								</div>
								<span className='cls-name'>아리스토텔레스반</span>
								<span className='name'>홍길동</span>
							</div>
						</div>
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								attend={attend}
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
						</CalendarSection>
					</div>
					<div className='attendance-detail-section'>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>
						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>등원정보</b>
								<div className='right'>
									<Button className='btn-modify' onClick={popOpenAttendStatus}>
										<Icon type='modify' />
									</Button>
								</div>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										등원상태
										<div className='right'>출석</div>
									</li>
									<li>
										등원시간
										<div className='right'>
											<span className='time'>03:00</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										등원상태
										<div className='right'>등원 전</div>
									</li>
									<li>
										등원시간
										<div className='right'>-</div>
									</li>
								</ul>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										등원상태
										<div className='right'>인정결석</div>
									</li>
									<li>
										등원시간
										<div className='right'>자연재해 재난</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>투약정보</b>
								<div className='right'>
									<Button className='btn-modify' onClick={popOpenAttendStatus}>
										<Icon type='modify' />
									</Button>
								</div>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										투약의뢰서
										<div className='right'>-</div>
									</li>
									<li>
										투약시간
										<div className='right'>-</div>
									</li>
								</ul>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										투약의뢰서
										<div className='right'>
											<span className='doc-time'>2024.02.15 14:10</span>
										</div>
									</li>
									<li>
										투약시간
										<div className='right'>
											<span className='time'>14:00</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className='list-box-wrap'>
							<div className='box-tit'>
								<b className='tit'>하원정보</b>
								<div className='right'>
									<Button className='btn-modify' onClick={popOpenAttendStatus}>
										<Icon type='modify' />
									</Button>
								</div>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										귀가동의서
										<div className='right'>-</div>
									</li>
									<li>
										하원시간
										<div className='right'>
											<span className='time'>14:00</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='list-box'>
								<ul>
									<li>
										귀가동의서
										<div className='right'>
											<span className='doc-time'>14:10</span>
										</div>
									</li>
									<li>
										하원시간
										<div className='right'>하원 전</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Contents>

			<PopAttendanceStatus open={popAttendStatus} close={popCloseAttendStatus} value={attendStatus} onChange={setAttendStatus} />

			<PopAttendanceConfirm open={popAttendConfirm} close={popCloseAttendConfirm} />
		</>
	)
}

export default _
