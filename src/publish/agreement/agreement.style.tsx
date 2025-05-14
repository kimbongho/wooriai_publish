import styled from '@emotion/styled'
import { MX, COLOR, TxtGuide, FormWrap } from 'shared/index'

export const Contents = styled.div`
	${TxtGuide}
	${FormWrap}

	.certify-wrap{padding-top:2.4rem;}

	.agree-checks-wrap{padding-top:2.4rem;
		.visual{height:20rem;background: ${MX.src('/images/bg-agree-checks.svg')} no-repeat 50% 0;background-size:auto 100%;}
		.visual-text{ color:#383838;font-size:1.6rem;font-weight:500;line-height:1.4; text-align:center;
			em{ color:${COLOR.primary};vertical-align:baseline;}
		}
		.txt-welcome{font-size:2rem; color:#111;text-align:center;}
	}
	.agree-checks{margin-top:4rem;
		.visual{height:15.4rem;background:#FA00FF;}
		.check-all{ color:#111;
			.t{font-weight:500;font-size:1.6rem;}
		}
		.check-box{border-top:1px solid #F5F6FA;margin-top:1.6rem;padding:1.6rem 0;
			.check-tit{font-size:1.6rem; color:#111;display:block;margin-bottom:1rem;font-weight:500;}
			ul{
				li{position:relative;
					~ li{margin-top:1rem;}
					.btn-detail{position:absolute;top:50%;right:0;width:3rem;height:3rem;background:url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L1 11' stroke='%23AAAAAA' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;transform:translateY(-50%);}
					.inp-check .t{font-size:1.4rem; color:#505050;margin-left:0.8rem;position:relative;top:0.2rem}
				}
			}
		}
	}

	.rule-wrap{padding-top:2.4rem;font-size:1.4rem; color:#60637B;
		h2{margin-top:3.2rem;font-size:1.6rem; color:#111;font-weight:500;}
		.modify-history{
			b{color: #111111;font-weight: 500; font-size: 1.4rem;display:block;margin-bottom:0.8rem;}
			.rule-table{margin-top:0;
				th,
				td{text-align:center;}
			}
		}
		.text{margin-top:1.6rem;}
		.num-list{margin-top:1.6rem;width:100%;
			> li{display:flex;flex-wrap:wrap;
			 ~ li{margin-top:0.4rem;}
				.num{padding-right:0.5rem;font-weight:500;}
				.desc{flex:1;font-weight:400;} 
			}
			.num-list{margin-top:0.4rem;margin-bottom:1.6rem;}
		}
		.dot li{position:relative;
			padding-left:0.5rem;
			a{vertical-align:baseline;}
			&:before{content:'';display:block;position:absolute;top:0.8rem;left:0;width:0.2rem;height:0.2rem;background:#60637B;border-radius:100%;}
		}			

		.contact-list{
			dt{ color:#111;font-weight:500;margin-top:1rem;}
			dd{margin-top:0.5rem;}
		}
		
		.rule-table{
			margin-top:1.6rem;
			table{width:100%; border-spacing:0;border-collapse:collapse;}
			th,
			td{padding:0.8rem;heigt:3.4rem;font-weight:400;font-size:1.2rem;text-align:left;letter-spacing:-0.05em; color:#60637B;border: 1px solid #D4D6E3;border-spacing:0;border-collapse:collapse;}
			th{background: #ECEEF5;font-weight:500;}
			td{background: #fff;;
				.line{font-size:1.4rem;text-decoration:underline;padding-bottom:1.6rem;}
			}
		}
	}

	.join-complete-wrap{padding-top:4.8rem;text-align:center;
		.visual{height:15.4rem;background:${MX.src('/images/bg-visual-join-complete.jpg')} no-repeat 50% 0;background-size:auto 100%;}
		.tit{font-weight:500; color:#111;font-size:2rem;display:block;margin-top:2rem;text-align:center;}
		.text{margin-top:1.6rem;font-size:1.4rem; color:#60637B;text-align:center;}
		[class*=btn-type]{margin-top:3.2rem;width:100%;}
	}
`
export default Contents