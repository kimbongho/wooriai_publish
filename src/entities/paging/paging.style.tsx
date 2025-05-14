import { COLOR } from '@/shared'
import styled from '@emotion/styled'

const PasingStyle = `
	margin-top: 2rem;
	.paging {
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.4rem;
			font-weight: 500;
			color: #cccc;
			span {
				line-height: 1;
			}
		}
		button.on {
			color: $color_2;
			span {
				border-bottom: 1px solid ${COLOR.primary};
			}
		}
		>button {
			margin: 0 0.2rem;
			background-position: 50% 50%;
			background-size: auto 1.1rem;
			background-repeat: no-repeat;
			&:disabled {
				opacity: 0.3;
			}
		}
		.btn-first {
			background-image: url("data:image/svg+xml,%3Csvg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99987 1L4.63623 5.36364L8.99987 9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M1 1V9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
		}
		.btn-prev {
			background-image: url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.36364 1L2 5.36364L6.36364 9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
		}
		.page {
			display: flex;
			align-items: center;
			margin: 0 1.8rem;
		}
		.btn-next {
			background-image: url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.63636 1L6 5.36364L1.63636 9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
		}
		.btn-last {
			background-image: url("data:image/svg+xml,%3Csvg width='10' height='11' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.00013 1L5.36377 5.36364L1.00013 9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M9 1V9.72727' stroke='%23777777' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
		}
	}
`
export const Paging = styled.div`
	${PasingStyle};
`
