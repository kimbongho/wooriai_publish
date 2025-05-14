import styled from '@emotion/styled'
import { MX, COLOR, BannerProfile } from '@/shared'

export const Contents = styled.div`

	${BannerProfile}

	background:#F5F6FA;
	&.bg-white{background:#fff;}
	.page-top-area { margin-bottom: 2.4rem; padding: 1.6rem 1.6rem 2.4rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem;}

	.visual { text-align: center;
		.visual-service { display: inline-block; width: 13.4rem; height: 13.4rem;background: ${MX.src('/images/visual-property-service.svg')} no-repeat 0 0; background-size: auto 100%; }
		.visual-center { display: inline-block; width: 13.4rem; height: 13.4rem; background: ${MX.src('/images/visual-property-center.svg')} no-repeat 0 0; background-size: auto 100%; }
		.visual-regist { display: inline-block; width: 14.9rem; height: 10.5rem; background: ${MX.src('/images/visual-property-regist.svg')} no-repeat 0 0; background-size: auto 100%; 
			~ .txt{margin-top:2rem; }
		}
		.txt { font-size: 1.8rem; font-weight: 500; margin-top: 1rem; }
		.txt-sub { font-size: 1.4rem; color: #767676; margin-top: 0.4rem; }
		.txt-caution{margin-top:2rem; }
	}	
	
	.page-top-area .input.search {margin-top:2rem;}
	
	.property-service-wrap .service-list li {
		~ li { margin-top: 0.8rem; }
		button,
		a { width:100%; display: flex; border-radius: 1rem; background: #fff; border: 0.1rem solid #ECEEF5; padding: 1.6rem; justify-content: flex-start; align-items: flex-start; text-align: left;
	
			.icon { display: flex; justify-content: center; align-items: center; min-width: 4.8rem; width: 4.8rem; height: 4.8rem; background: #f5f6fa; border-radius: 1rem; margin-right: 1.6rem; }
	
			.desc {
				b { font-size: 1.6rem; font-weight: 500; display: block; }
				p { color: #878AA1; font-size: 1.4rem; margin-top: 0.4rem; white-space:normal;word-break: keep-all;}
			}
	
			.icon {
				.ico-service-ledger { width: 2.4rem; height: 2.4rem; background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.28 2.05006L2.40001 9.12006C1.85001 9.61006 1.54001 10.3101 1.54001 11.0401V20.0201C1.54001 21.4501 2.70001 22.6001 4.12001 22.6001H19.85C21.28 22.6001 22.43 21.4401 22.43 20.0201V10.9301C22.43 10.1901 22.11 9.49006 21.56 9.00006L13.71 2.05006C12.73 1.18006 11.25 1.18006 10.27 2.06006L10.28 2.05006Z' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M12.33 8.72999L13.38 11.95C13.43 12.09 13.56 12.19 13.71 12.19H17.1C17.43 12.19 17.57 12.61 17.3 12.81L14.56 14.8C14.44 14.89 14.39 15.04 14.44 15.18L15.49 18.4C15.59 18.72 15.23 18.98 14.96 18.78L12.22 16.79C12.1 16.7 11.94 16.7 11.82 16.79L9.07998 18.78C8.80998 18.97 8.44999 18.71 8.54999 18.4L9.59999 15.18C9.64999 15.04 9.59998 14.88 9.47998 14.8L6.73998 12.81C6.46998 12.62 6.60999 12.19 6.93999 12.19H10.33C10.48 12.19 10.61 12.09 10.66 11.95L11.71 8.72999C11.81 8.40999 12.26 8.40999 12.36 8.72999H12.33Z' fill='%234252E2'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M10.2701 22.34L2.06006 20.98L2.22006 8.92997L10.2701 2.71997V22.34Z' fill='%234252E2'/%3E%3C/g%3E%3C/svg%3E%0A"); }
				.ico-service-teacher { width: 3.2rem; height: 3.2rem; background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.35 27.1301C21.0661 27.1301 25.7 22.4962 25.7 16.7801C25.7 11.0639 21.0661 6.43005 15.35 6.43005C9.63385 6.43005 5 11.0639 5 16.7801C5 22.4962 9.63385 27.1301 15.35 27.1301Z' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M5.31 18.2701C5.31 18.2701 15.84 15.1801 20.52 7.94006' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M17.05 12.63C17.05 12.63 22.35 17.79 25.22 18.79' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M12.19 21.37C12.19 21.37 15.83 23.81 19.07 21.27' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='bevel'/%3E%3Cpath d='M26.63 15.4301C28.45 15.9601 29.49 17.8501 28.97 19.6701C28.45 21.4901 26.55 22.5301 24.73 22.0101' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath opacity='0.2' d='M5.31006 14.6999L6.22006 22.1399L11.7401 27.1199V6.56995C8.14006 7.63995 6.39006 12.4599 5.31006 14.7099V14.6999Z' fill='%234252E2'/%3E%3C/svg%3E%0A"); }
				.ico-service-parents { width: 3.2rem; height: 3.2rem; background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.39 28.9699C24.9629 28.9699 28.67 25.2628 28.67 20.6899C28.67 16.117 24.9629 12.4099 20.39 12.4099C15.8171 12.4099 12.11 16.117 12.11 20.6899C12.11 25.2628 15.8171 28.9699 20.39 28.9699Z' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M17.87 24.3699C17.87 24.3699 20.79 26.3199 23.38 24.2899' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M12.83 24.48C7.24 24.16 2.81 19.53 2.81 13.86C2.81 8.18997 7.58 3.21997 13.45 3.21997C19.32 3.21997 23.66 7.56997 24.06 13.08' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M17.01 28.3L11.42 23.99L11.53 16.58L17.01 12.16V28.3Z' fill='%234252E2'/%3E%3C/g%3E%3Cg opacity='0.2'%3E%3Cpath d='M11.42 25.1301L3.20999 19.0701L3.36999 8.64005L11.42 2.43005V25.1301Z' fill='%234252E2'/%3E%3C/g%3E%3Cpath d='M16.47 13.78V17.72C16.47 18.5 17.1 19.13 17.88 19.13H22.74C23.52 19.13 24.15 18.5 24.15 17.72V13.78' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M4.26001 16.19C4.26001 16.19 14.79 13.1 19.47 5.85999' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M16 10.5601C16 10.5601 17.94 11.8601 18.63 12.2801' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A"); }
			}
		}
	}
	
	.property-center-wrap {
		.center-list li {
			~ li { margin-top: 0.8rem; }
			button,
			a { width:100%;display: block; border-radius: 1rem; border: 1px solid #ECEEF5; padding: 1.6rem 4rem 1.6rem 1.6rem; background: #fff url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23A0A4BE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%; background-size: auto 2.4rem;text-align:left;
				b { display: block; font-size: 1.6rem; font-weight: 500; display: block; white-space:normal;}
				.txt { display: block; color: #878AA1; font-size: 1.4rem; margin-top: 0.4rem; white-space:normal;}
			}
		}
	
		.banner-customercenter { margin-top: 4rem; padding: 1.6rem; background: #fff; border-radius: 1rem; border: 1px solid #eee;
			b { font-size: 1.6rem; font-weight: 500; display: block; }
			.txt { color: #878AA1; font-size: 1.4rem; margin-top: 0.4rem; }
			.tel { margin-top: 0.4rem; 
				a {display:block;color:${ COLOR.primary };font-size:1.8rem;}
			}
		}
	}
	
	.name-regist-wrap {
		padding-top: 2.4rem;
		.btn-wrap{margin-top:3.2rem;}
	}
	
	.profile-regist-wrap {
		padding-top: 2.4rem;
		.btn-wrap { margin-top: 3.2rem; }
		.thumbnail { margin-top: 2.4rem; }
	}
	
	.property-regist-wrap {
		padding-top:7.2rem; 
		.btn-wrap { margin-top: 3.6rem; }
	}
	
	.property-box {
		&.name-regist {
			b {font-size:2rem;font-weight:500;}
			.txt {margin-top:2.4rem; color:#60637B;font-size:1.4rem;
				em { vertical-align:baseline;font-weight:500;}
			}
			.input {margin-top:2rem;background:#fff;border-radius:1rem;border:0.1rem solid #D4D6E3;}
			.iput-txt {font-size:1.2rem; color:${ COLOR.primary }; margin-top:1.2rem;
				em {vertical-align:baseline;font-weight:500;}
			}
			.btn-wrap{margin-top:3.2rem;}
		}
	}
	
	
	.property-box.profile-regist {
		>b { font-size:2rem; font-weight: 500; }
		.banner-profile{margin-top:2.4rem;
			> *{background:#fff;justify-content: center;}
		}
		.photo-regist-wrap {
			.txt-guide { font-size: 1.6rem; margin-top: 3.7rem;color:#60637B;}
			.photo-upload { margin-top: 2.4rem; }
		}
		.nickname-regist-wrap {
			.txt-guide { margin-top: 3.6rem; font-size: 1.6rem; color:#60637B;}
			.txt-ex { margin-top: 0.8rem; font-size: 1.4rem; color: ${ COLOR.primary }; }
			.input { margin-top: 2.2rem; }
			.iput-txt-error { margin-top: 0.8rem; }
		}
		.input {margin-top:2.2rem;background:#fff;border:0.1rem solid #D4D6E3;}
		.iput-txt-error {margin-top:0.8rem;}
	}
	
	.property-complete-wrap {
		padding: 3.3rem 1.6rem 2.4rem; background: #fff; height: 100%; width: calc(100% + 3.2rem); margin-left: -1.6rem;
		.visual {
			.txt { font-size: 2rem; text-align: center;margin-top:2.4rem;font-weight:600;}
			.visual-complete { width: 18.6rem; height: 11.7rem; margin-top: 2.6rem; display: block; margin: 0 auto; background: ${MX.src('/images/visual-property-complete.svg')} no-repeat 0 0; background-size: auto 100%; }
			.txt-sub { margin-top: 2rem; color: #878AA1; text-align: center;
				em { color: #60637B; font-weight:500;vertical-align:baseline;}
			}
		}
	
		.banner-profile { margin-top: 2.2rem; }
		.btn-wrap { margin-top: 3.9rem; }
	}
	
	`
	
export default Contents