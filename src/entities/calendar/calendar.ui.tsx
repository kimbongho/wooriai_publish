import moment from 'moment'
import { Calendar } from 'react-calendar'
import { CalendarWrap } from './calendar.style'

const _ = ({ children, className, value, selected, minDate, notification, schedule, homecoming, dosage, attend, amit, report, album, danger, activeStartDate, onChange, setActiveStartDate }: any) => {
	return (
		<CalendarWrap className={className}>
			<Calendar
				calendarType='gregory'
				onChange={v => {
					onChange(v)
				}}
				onClickDecade={(value, event) => console.log('Clicked decade: ', value)}
				formatDay={(locale, date) => moment(date).format('D')}
				value={value}
				showNavigation={false}
				tileContent={({ date, view }) => {
					return (
						<div className='mark'>
							{notification && notification.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot notification'></div> : ''}
							{schedule && schedule.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot schedule'></div> : ''}
							{homecoming && homecoming.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot homecoming'></div> : ''}
							{dosage && dosage.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot dosage'></div> : ''}
							{report && report.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot report'></div> : ''}
							{album && album.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot album'></div> : ''}
							{danger && danger.find((x: any) => x === moment(date).format('YYYY-MM-DD')) ? <div className='dot danger'></div> : ''}
						</div>
					)
				}}
				activeStartDate={activeStartDate}
				onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate && setActiveStartDate(activeStartDate)}
				tileClassName={({ activeStartDate, date, view }) => {
					let name = ''
					if (view === 'month' && moment(date).format('YYYY-MM-DD') === moment(selected).format('YYYY-MM-DD')) name += ' selected'
					if (amit && amit.find((x: any) => x === moment(date).format('YYYY-MM-DD'))) name += ' amit'
					if (attend && attend.find((x: any) => x === moment(date).format('YYYY-MM-DD'))) {
						name += ' attend'
					}
					if (moment(date).format('YYYY-MM-DD') === moment(new Date()).format('YYYY-MM-DD')) name += ' today'
					return name
				}}
				minDate={minDate}
			/>
		</CalendarWrap>
	)
}

export default _
