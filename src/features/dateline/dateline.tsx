/** @jsxImportSource react */
import { WEEKDAYS_KR } from '@/shared'
import moment from 'moment'

const _ = ({ selectDay }: any) => {
	return (
		<>
			<div className='year'>{`${moment(selectDay).format('YYYY')} `}</div>
			<div className='date'>{moment(selectDay).format('MM.DD')}</div>
			<span className='day'>{`${WEEKDAYS_KR[moment(selectDay).day()]}`}</span>
		</>
	)
}

export default _
