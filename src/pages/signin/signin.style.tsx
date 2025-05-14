import styled from '@emotion/styled'
import { MX, COLOR, TxtGuide, FormWrap } from 'shared/index'

export const Contents = styled.div`
	${TxtGuide}
	${FormWrap}

	.login-wrap{padding-top:2.4rem;
		.visual{height:26rem;background:${MX.src('/images/bg-visual-login.jpg')} no-repeat 50% 0;background-size:auto 100%;}
		.btn-wrap{margin-top:1.6rem;}
		.idpw-find{margin-top:2.4rem;text-align:center; color:#666;
			button,
			a{border-bottom:1px solid #666;margin-left:0.5rem;line-height:1.2;}
		}
		.text-join{padding-top:2.4rem;margin-top:2.4rem;border-top:0.1rem solid #ECEEF5;
			.txt{font-weight:500; color:#666;text-align:center; color:#383838;}
			.link{margin-top:1.6rem;text-align:center;
				button,
				a{border-bottom:1px solid ${ COLOR.primary }; color:${ COLOR.primary };line-height:1.2;}
			}
		}
		.input{
			padding-left:4.3rem;background-repeat:no-repeat;background-position:1.4rem 50%;background-size:auto 1.6rem;
			&.id{background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='4.5' r='2.75' stroke='%23A0A4BE' stroke-width='1.5'/%3E%3Cpath d='M1 14.6667C2.24309 11.9076 4.91027 10 8 10C11.0897 10 13.7569 11.9076 15 14.6667' stroke='%23A0A4BE' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
				&.has-value{background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='4.5' r='2.75' stroke='%23111111' stroke-width='1.5'/%3E%3Cpath d='M1 14.6667C2.24309 11.9076 4.91027 10 8 10C11.0897 10 13.7569 11.9076 15 14.6667' stroke='%23111111' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");}
			}
			&.pw{background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9V11' stroke='%23A0A4BE' stroke-width='1.5'/%3E%3Cmask id='path-2-inside-1_725_17143' fill='white'%3E%3Crect x='1' y='5' width='14' height='10' rx='1'/%3E%3C/mask%3E%3Crect x='1' y='5' width='14' height='10' rx='1' stroke='%23A0A4BE' stroke-width='3' mask='url(%23path-2-inside-1_725_17143)'/%3E%3Cpath d='M11 6V4C11 2.34315 9.65685 1 8 1V1C6.34315 1 5 2.34315 5 4V6' stroke='%23A0A4BE' stroke-width='1.5'/%3E%3C/svg%3E%0A");
			&.has-value{background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9V11' stroke='%23111111' stroke-width='1.5'/%3E%3Cmask id='path-2-inside-1_734_28258' fill='white'%3E%3Crect x='1' y='5' width='14' height='10' rx='1'/%3E%3C/mask%3E%3Crect x='1' y='5' width='14' height='10' rx='1' stroke='%23111111' stroke-width='3' mask='url(%23path-2-inside-1_734_28258)'/%3E%3Cpath d='M11 6V4C11 2.34315 9.65685 1 8 1V1C6.34315 1 5 2.34315 5 4V6' stroke='%23111111' stroke-width='1.5'/%3E%3C/svg%3E%0A");}
			}
			input{padding-left:0;}
		}

	}

	.idpw-find-wrap{padding-top:2.4rem;}

	.request-access-wrap{padding-top:2.4rem;
		.text {font-size:1.8rem;font-weight:700;margin-bottom:4rem; color:#111;}
		.access-box{
			~ .access-box {margin-top:2.4rem;padding-top:2.4rem;border-top:1px solid #ECEEF5;}

			.tit {font-weight:500;font-size:1.8rem; color:#111;display:block;}
			.txt {margin-top:0.8rem; color:#505050;letter-spacing: -0.03em; color:#60637B;}
			.list {margin-top:2.4rem;
				li{display:flex;flex-direction:row;align-items:center;
					~ li{margin-top:1.6rem;}
					.icon {display:flex;justify-content:center;align-items:center;width:4.3rem;height:4.3rem;background:#F5F6FA;border-radius:1rem;margin-right:1.2rem;}
					.desc {flex:1;overflow:hidden;
						b {font-weight:500; color:#111;font-size:1.6rem;}
						p { color:#878AA1;}
					}
					.icon [class*=ico-access]{width:3.2rem;height:3.2rem;background-size:auto 100%;background-repeat:no-repeat;background-position:0 0;}
				}
			}
		}
	}

	.id-check-wrap{padding-top:2.4rem;
		.id-check{
			.member-id{display:flex;justify-content:center;align-items:center;height:7rem;background:#F5F6FA; color:#111;font-weight:600;font-size:2rem;}
			.txt{text-align:center; color:#505050;font-size:1.4rem;margin-top:1.8rem;}
		}
	}

	.certify-wrap{
		padding-top:2.4rem;
	}
`
export default Contents