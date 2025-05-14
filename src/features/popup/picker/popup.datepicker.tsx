import { Button, Popup } from '@/entities'
import { ko } from 'date-fns/locale'
import { useState } from 'react'
import { Calendar, DateRangePicker } from 'react-date-range'
// import { addDays } from "date-fns";
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import DateRangePickerWrap from './datepicker.style'

const _ = ({ type, value, start, end, min, open, close, onChange }: any) => {
	const [state, setState] = useState([
		{
			startDate: start,
			endDate: end,
			key: 'selection',
		},
	])

	const [date, setDate] = useState(value)

	const onClose = () => {
		close()
		type === 'range' ? onChange(state) : onChange(date)
	}

	return (
		<Popup open={open} close={close}>
			<div className='pop-body'>
				<DateRangePickerWrap>
					{type === 'range' ? (
						<DateRangePicker
							locale={ko}
							onChange={(item: any) => setState([item.selection])}
							// showSelectionPreview={true}
							moveRangeOnFirstSelection={false}
							months={1}
							ranges={state}
							direction='horizontal'
							minDate={min}
							dateDisplayFormat='yyyy-MM-dd' // 날짜 포맷값
						/>
					) : (
						<Calendar locale={ko} date={date} minDate={min} onChange={(item: any) => setDate(item)} />
					)}
				</DateRangePickerWrap>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={onClose}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
