import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const CalendarSection: any = styled.div`
	padding: 2.4rem 0.8rem 0; background: #fff;
	.calendar-top { display: flex; align-items: center;
		.year-month { display: flex; align-items: center; height: 4rem;margin-left:-0.5rem;
			button{height:3rem;width:3rem;background-repeat:no-repeat;background-position:50% 50%;background-size:auto 1.6rem;}
			.prev{background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2393 2.40088L5.6393 8.00088L11.2393 13.6009' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			.next{background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.05317 13.5991L10.6532 7.99912L5.05317 2.39912' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			.year { font-size: 1.4rem; font-weight: 500; margin-right: 0.5rem; }
			.month { display: flex; align-items: center; }
			b { font-weight: 700; font-size: 2.6rem; line-height: 1; }
			.unit { font-weight: 600; font-size: 1.8rem; line-height: 1; }
		}
		.right { margin-left: auto;
			.today { display: flex; justify-content: center; align-items: center; height: 4rem; color: #4252E2; font-weight: 700; padding:0 0.8rem;}
		}
	}

	.legend {margin-top:1rem; height: 4rem; background: #F5F6FA; border-radius: 1rem; padding: 0 3.5rem; display: flex; align-items: center; justify-content: space-between;
		i { display: inline-block; margin-right: 0.5rem; width: 0.9rem; height: 0.9rem; border-radius: 0.2rem; }

		.txt { font-size: 1.2rem; color: #999; }
		.notification i { background: #F74D5A; }
		.schedule i { background: #2F5ED7; }
		.meal i { background: #2F5ED7; }
		.homecoming i { background: #ECAB2C; }
		.dosage i { background: #3FAEEC; }
	}
	.info-wrap { margin-top: 1.2rem; display: flex; align-items: center; padding:0 0.4rem;
		.right { margin-left: auto; }
		.info { color:#878AA1;font-size: 1.4rem; display: flex; align-items: center;
			[class*=ico-] { margin-right: 0.6rem; }
			.txt{line-height:1;}
			.num { font-weight: 700; color: #111; margin-left: 0.8rem; line-height:1;letter-spacing: -0.05rem;}
			.unit{color: #111;margin-left:0.3rem;font-weight:500;line-height:1;}
		}
	}

`

export const CalendarWrap: any = styled.div`
	font-size:1.6rem;font-weight:500;width: calc(100% + 2rem); margin: 0 -1rem;margin-top:1.8rem;

	.react-calendar__navigation{
		> button:first-of-type,
		> button:last-child{display:none;}
		> button:nth-of-type(2),
		> button:nth-of-type(4){width:3rem;height:3rem;}
	}

	.react-calendar__month-view__weekdays{
		abbr{text-decoration: none;display:flex;align-items:flex-start;justify-content:center;height:3.4rem; }
		& > div:first-of-type,
		& > div:last-child{color:#DC0000}
	}
	.react-calendar__month-view__days{
		.react-calendar__tile{min-height:6rem;display:flex;align-items:center;justify-content:flex-start;;}
		> button{padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;}
		> button abbr{border-radius:100%;width:3.2rem;height:3.2rem;display:flex;align-items:center;justify-content:center;letter-spacing:-0.03em;line-height: 3.2;}
		> button:not([class*=--neighboringMonth]).attend abbr{border:0.1rem solid #D4D6E3;}
		> button:not([class*=--neighboringMonth]).amit abbr{background:#ECEEF5;}
		> button:not([class*=--neighboringMonth]).today abbr{background:${COLOR.primary};color:#fff;border-color:${COLOR.primary} !important;}
		> button:not([class*=--neighboringMonth]).selected abbr{background:#00DDDD;color:#fff;border-color:#00DDDD !important;}
		> button:nth-of-type(7n),
		> button:nth-of-type(7n+1){color:#DC0000}

		[class*=--neighboringMonth]{color:#D4D6E3 !important;
			pointer-events: none;font-size:0; text-indent:-9999%; overflow:hidden;
			.mark{display:none;}
		}

		.mark{display:flex;align-items:center;gap:0.25rem;padding:0.1rem 0;margin-bottom:0.7rem;margin-top:0.6rem;
			.caution{border-radius:1.5px;width:4px;height:4px;background: #DC0000;}

			.dot{border-radius:1.5px;width:4px;height:4px;
				&.album { background: ${COLOR.primary}; }
				&.report { background: ${COLOR.primary}; }
				&.absent { background: #F74D5A; }
				&.notification { background: #F74D5A; }
				&.schedule { background: #2F5ED7; }
				&.danger { background: #DC0000; }
				&.homecoming { background: #ECAB2C; }
				&.dosage { background: #3FAEEC; }
			}
		}
	}
`
