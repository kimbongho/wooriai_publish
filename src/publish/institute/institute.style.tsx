import styled from '@emotion/styled'
import { Thumb, InfoDescBox, FormWrap } from '@/shared'

export const Contents = styled.div`
	
	${InfoDescBox}
	${FormWrap}

	background: #F5F6FA;
	
	.institute-home-wrap {
		padding: 2.4rem 0;

		.info-desc-box { margin-top: 2.4rem; }
	}
	.institute-profile {
		display: flex; justify-content: center; align-items: center; flex-direction: column;

		.thumb {${Thumb};width: 7.2rem; height: 7.2rem; }
		.name { color: #383838; font-size: 2rem; font-weight: 500; margin-top: 1.6rem; }
		.addr { color: rgba(96, 99, 123, 1); font-size: 1.4rem; margin-top: 0.2rem; text-align:center;}
	}
	.institute-detail-wrap {
		padding: 2.4rem 0;

		.main-noti { padding: 1.3rem 1.6rem; background: #fff; border-radius: 1rem; font-size: 1.4rem; color: #878AA1; }
		.institute-profile { margin-top: 2.4rem; }
		.form-wrap {
			margin-top: 3.5rem;

			.inp-label { font-weight: 500; }
			.input {
				background-color: #fff; border: 0.1rem solid #D4D6E3;

				+ .inp-text,
				+ .btn-addr-search,
				+ .input { margin-top: 0.8rem; }
			}
			.btn-addr-search + .input { margin-top: 0.8rem; }
		}
	}

	.inp-text{ min-height: 4.8rem;    border: 0.1rem solid #D4D6E3;border-radius: 1rem;padding:1.35rem 1.4rem 1.2rem; padding-right:1.6rem; width: 100%; text-align: left; justify-content:flex-start; color:#383838; font-size: 1.6rem;background:#fff;
		+ .input,
		+ .btn-addr-search,
		+ .inp-text{margin-top:0.8rem;}
		&.disable{color: #A0A4BE;}
		&.disabled{color: #A0A4BE; background-color:#ECEEF5;}
	}
	div.btn-addr-search{ min-height: 4.8rem; padding-top:1.35rem;padding-bottom:1rem;padding-right:1.6rem; width: 100%; text-align: left; justify-content:flex-start; color:#383838; font-size: 1.6rem; background: #fff; border: 0.1rem solid #D4D6E3; border-radius: 1rem; padding-left: 4rem; background: #fff url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 14L17 17' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M9.5 15C12.5376 15 15 12.5376 15 9.5C15 6.46243 12.5376 4 9.5 4C6.46243 4 4 6.46243 4 9.5C4 12.5376 6.46243 15 9.5 15Z' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%; background-size: auto 2rem; }

	.btn-addr-search{
		cursor:pointer;
		+ .input,
		+ .btn-addr-search,
		+ .inp-text{margin-top:0.8rem;}	
	}
	
`
export default Contents