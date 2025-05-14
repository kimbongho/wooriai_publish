import { useEffect, useState } from 'react'
import { CalendarSection } from './calendar.style'

const _ = ({ children, className, date, setActiveStartDate, activeStartDateHandler, selectDayHandler, calendarChange }: any) => {
	const [year, setYear] = useState(date.getFullYear())
	const [month, setMonth] = useState(date.getMonth() + 1)

	const zeroPad = (d: number) => {
		return d < 10 ? '0' + d.toString() : d.toString()
	}
	const setYearMonth = (d: Date) => {
		setYear(d.getFullYear())
		setMonth(zeroPad(d.getMonth() + 1))
	}
	const prevMonthChange = () => {
		const prevDate = new Date(date.setMonth(date.getMonth() - 1))
		const month = new Date(prevDate.getFullYear(), prevDate.getMonth(), 1)
		setActiveStartDate(month)
		setYearMonth(prevDate)
		calendarChange(month)
	}
	const nextMonthChange = () => {
		const nextDate = new Date(date.setMonth(date.getMonth() + 1))
		const month = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1)
		setActiveStartDate(month)
		setYearMonth(nextDate)
		calendarChange(month)
	}

	useEffect(() => {
		setYearMonth(date)
	})

	return (
		<CalendarSection className={className}>
			<div className='calendar-top'>
				<div className='year-month'>
					<button className='prev' onClick={prevMonthChange}></button>
					<span className='year'>{year}</span>
					<span className='month'>
						<b>{month}</b>
						<span className='unit'>월</span>
					</span>
					<button className='next' onClick={nextMonthChange}></button>
				</div>
				<div className='right'>
					<button
						className='today'
						onClick={() => {
							activeStartDateHandler(new Date())
							selectDayHandler(new Date())
							calendarChange(new Date())
						}}
					>
						오늘
					</button>
				</div>
			</div>
			{children}
		</CalendarSection>
	)
}

export default _
