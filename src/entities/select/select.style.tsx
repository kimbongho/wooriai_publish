import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Select = styled.select`
	width: auto;
	padding-right: 5rem;
	color: #383838;
	height: 4.4rem;
	border: 0.1rem solid #ddd;
	padding-left: 1.4rem;
	border-radius: 0.6rem;
	font-size: 1.5rem;
	padding-right: 3.5rem;
	background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L5 5L1 1' stroke='%23383838' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat right 1.8rem top 50%;
	background-size: 1rem;
	&:disabled {
		color: #ccc;
	}
	&:focus {
		border: 1px solid ${COLOR.primary};
	}
	&:invalid {
		color: #ccc;
	}

	option {
		color: #383838;
	}
	option[value='placeholder'][disabled] {
		display: none;
	}
	option[value=''] {
		display: none;
	}
`
