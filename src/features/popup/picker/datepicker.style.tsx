import styled from '@emotion/styled'

export const DatePicker = styled.div`
	padding-top:1rem;
	.rdrMonthName,
	.rdrDefinedRangesWrapper{display:none;}
	.rdrMonth,
	.rdrCalendarWrapper,
	.rdrDateRangePickerWrapper{width:100%;display:block; }
	.rdrDateRangePickerWrapper{padding-top:3rem; }
	.rdrWeekDay,
	.rdrDayNumber{font-size:1.4rem; color:#383838;}
	.rdrDay{height:4rem; }
	.rdrStartEdge,
	.rdrEndEdge,
	.rdrInRange{color:#4252E2 !important;}
	.rdrDateDisplayWrapper{padding:0.3rem; border-radius:0.4rem; }
	.rdrDateDisplayWrapper:empty{display:none;}
	.rdrDateDisplayItem input{height:3.5rem;font-size:1.4rem; }
	.rdrDayToday .rdrDayNumber span:after{background:#4252E2;}
	.rdrDayHovered{border-color:#4252E2;border:none !important;}
	.rdrDayHovered > span,
	.rdrDayHovered > span.rdrStartEdge,
	.rdrDayHovered > span.rdrEndEdge,
	.rdrDayHovered > span.rdrDayNumber,
	.rdrDayHovered > span.rdrInRange{color:#4252E2 !important;}
	.rdrDay > span{border:none !important;}
	.rdrDayHovered > span{border:none !important;color: transparent !important;}
	.rdrSelected{background:#4252E2;}
	.rdrDayHovered .rdrSelected ~ .rdrDayNumber:after{display:none !important;}

	.rdrMonthAndYearPickers select{font-size:1.6rem;}
	.rdrDateDisplayItem{border-color:#4252E2}

	.rdrNextPrevButton,
	.rdrNextPrevButton{width:3rem;height:3rem; display:flex;justify-content:center;align-items:center; }
	.rdrNextPrevButton i{margin:0 ;}
`
export default DatePicker