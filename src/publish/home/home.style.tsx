import styled from '@emotion/styled'
import { COLOR, MX, DashboardBox } from '@/shared'

const Contents = styled.div`

	${DashboardBox}

	padding-left:0 !important;
	padding-right:0 !important;padding-top:5.3rem !important;background:#F5F6FA;

	.main-notice-area {
		position: relative; background: #4252E2; padding: 2.4rem 1.6rem 3.5rem;
		.noti-alarm {
			height: 4rem; border-radius: 1rem; background: #fff; display: flex; justify-content: center; align-items: center;
			i { width: 1.8rem; height: 1.8rem; margin-right: 0.8rem; background-repeat: no-repeat; background-position: 0 0; }
			.txt { font-weight: 600; font-size: 1.6rem; letter-spacing: -0.05em;}
			&.good {
				i { background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99995 17.0247C13.4318 17.0247 17.0245 13.432 17.0245 9.00015C17.0245 4.56831 13.4318 0.975586 8.99995 0.975586C4.56811 0.975586 0.975388 4.56831 0.975388 9.00015C0.975388 13.432 4.56811 17.0247 8.99995 17.0247Z' stroke='%234252E2' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M12.3554 9.39014C12.0823 9.39014 11.8482 9.61124 11.8482 9.89736C11.8482 10.8598 10.5346 11.6792 8.98693 11.6792C7.43924 11.6792 6.12566 10.8598 6.12566 9.89736C6.12566 9.62424 5.90456 9.39014 5.61843 9.39014C5.3323 9.39014 5.11121 9.61124 5.11121 9.89736C5.11121 11.432 6.84097 12.6806 8.97392 12.6806C11.1069 12.6806 12.8366 11.432 12.8366 9.89736C12.8366 9.62424 12.6155 9.39014 12.3294 9.39014H12.3554Z' fill='%234252E2'/%3E%3Cpath d='M6.64557 8.4929C7.07458 8.4929 7.3996 8.0377 7.3996 7.46544C7.3996 6.89319 7.06158 6.43799 6.64557 6.43799C6.22955 6.43799 5.89154 6.89319 5.89154 7.46544C5.89154 8.0377 6.22955 8.4929 6.64557 8.4929Z' fill='%234252E2'/%3E%3Cpath d='M11.0545 8.4929C11.4836 8.4929 11.8086 8.0377 11.8086 7.46544C11.8086 6.89319 11.4705 6.43799 11.0545 6.43799C10.6385 6.43799 10.3005 6.89319 10.3005 7.46544C10.3005 8.0377 10.6385 8.4929 11.0545 8.4929Z' fill='%234252E2'/%3E%3C/svg%3E%0A"); }
				.txt { color: ${ COLOR.primary }; line-height: 1; }
			}
			&.bad {
				i { background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_57_10792)'%3E%3Cpath d='M9.02506 17.05C13.4571 17.05 17.0501 13.4571 17.0501 9.025C17.0501 4.59291 13.4571 1 9.02506 1C4.59298 1 1.00006 4.59291 1.00006 9.025C1.00006 13.4571 4.59298 17.05 9.02506 17.05Z' stroke='%23DC0000' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M5.66904 12.1466C5.94218 12.1466 6.1763 11.9255 6.1763 11.6393C6.1763 10.6769 7.48995 9.85746 9.03772 9.85746C10.5855 9.85746 11.8991 10.6769 11.8991 11.6393C11.8991 11.9125 12.1203 12.1466 12.4064 12.1466C12.6925 12.1466 12.9137 11.9255 12.9137 11.6393C12.9137 10.1046 11.1838 8.85596 9.05073 8.85596C6.91767 8.85596 5.18781 10.1046 5.18781 11.6393C5.18781 11.9125 5.40892 12.1466 5.69506 12.1466H5.66904Z' fill='%23DC0000'/%3E%3Cpath d='M6.67039 7.97153C7.09961 7.97153 7.42477 7.5163 7.42477 6.94402C7.42477 6.37173 7.0866 5.9165 6.67039 5.9165C6.25418 5.9165 5.91602 6.37173 5.91602 6.94402C5.91602 7.5163 6.25418 7.97153 6.67039 7.97153Z' fill='%23DC0000'/%3E%3Cpath d='M11.0799 7.97153C11.5091 7.97153 11.8343 7.5163 11.8343 6.94402C11.8343 6.37173 11.4961 5.9165 11.0799 5.9165C10.6637 5.9165 10.3255 6.37173 10.3255 6.94402C10.3255 7.5163 10.6637 7.97153 11.0799 7.97153Z' fill='%23DC0000'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_57_10792'%3E%3Crect width='18' height='18' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"); }
				.txt { color: #DC0000; }
			}
		}
		.user-desc {
			display: flex; flex-direction: row; align-items: center; margin-top: 2rem;
			.img {position:relative;overflow:hidden;background:#fff; border-radius:100%; display:flex;justify-content:center;align-items:center;
				width: 4.8rem; height: 4.8rem; border-radius: 100%; overflow: hidden; margin-right: 1.1rem;
				img { object-fit: cover; max-width: 100%; max-height: 100%;width: 100%;height: 100%; }
			}
			.desc { color: #fff;
				span { font-size: 1.6rem; display: block; line-height:1.3;}
				b {font-size: 1.8rem; display: block; display: flex; align-items: center;font-weight:500;
					em{border-bottom:0.2rem solid #fff;line-height:1;}
					span { margin-left: 0.5rem; font-size: 1.8rem; }
				}
			}
			.reset { margin-left: auto;
				button { border-radius: 0.5rem; width: 3.2rem; height: 3.2rem; background: url("data:image/svg+xml,%3Csvg width='21' height='16' viewBox='0 0 21 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.14045 16H12.9389C14.2452 16 15.472 15.4865 16.3932 14.5541C17.3145 13.6216 17.8218 12.3798 17.8218 11.0576V7.59589L17.9912 7.76739L19.3691 9.16204C19.5554 9.35064 19.7939 9.45425 20.0409 9.45425C20.2878 9.45425 20.5263 9.35064 20.7127 9.16204C21.0958 8.77427 21.0958 8.18986 20.7127 7.80209L17.5326 4.58328C17.3428 4.39116 17.0511 4.29108 16.8608 4.29108C16.5855 4.29108 16.3967 4.37306 16.189 4.58328L13.0089 7.80209C12.6258 8.18986 12.6258 8.77427 13.0089 9.16204C13.1952 9.35064 13.4338 9.45425 13.6807 9.45425C13.9277 9.45425 14.1662 9.35064 14.3525 9.16204L15.7304 7.76739L15.8998 7.59589V11.0576C15.8998 12.7103 14.5711 14.0551 12.9384 14.0551H4.13995C3.5566 14.0551 3.17946 14.4369 3.17946 15.0273C3.17946 15.6178 3.5566 15.9995 4.13995 15.9995L4.14045 16Z' fill='white'/%3E%3Cpath d='M0.288578 8.19699L3.46866 11.4158C3.655 11.6044 3.89351 11.708 4.14046 11.708C4.38741 11.708 4.62592 11.6044 4.81225 11.4158L7.99234 8.19699C8.37544 7.80922 8.37544 7.22481 7.99234 6.83704C7.80253 6.64492 7.51085 6.54484 7.32055 6.54484C7.13024 6.54484 6.83856 6.64542 6.64875 6.83704L5.27088 8.23169L5.10144 8.4032V4.94147C5.10144 3.28881 6.43012 1.94395 8.0629 1.94395H16.8608C17.4442 1.94395 17.8213 1.56222 17.8213 0.971768C17.8213 0.381318 17.4442 -0.000413895 16.8608 -0.000413895H8.0624C6.75608 -0.000413895 5.52926 0.513087 4.60803 1.44554C3.6868 2.37799 3.17947 3.61974 3.17947 4.94197V8.4037L3.01004 8.2322L1.63217 6.83755C1.44583 6.64894 1.20733 6.54534 0.960373 6.54534C0.713419 6.54534 0.474911 6.64894 0.288578 6.83755C0.102245 7.02615 -0.000114441 7.26756 -0.000114441 7.51752C-0.000114441 7.76748 0.102245 8.00889 0.288578 8.19749V8.19699Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 1.6rem; }
			}
			.btn-setting{
				display:inline-flex;border-bottom:0.1rem solid #fff;align-items:center;margin-top:0.2rem;
				&:before{content:'';display:inline-block;width:1.6rem;height:1.6rem;margin-right:0.4rem; background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.4507 9.77555L13.4272 8.90055C13.4757 8.60367 13.5007 8.30055 13.5007 7.99742C13.5007 7.6943 13.4757 7.39117 13.4272 7.0943L14.4507 6.2193C14.5279 6.15321 14.5831 6.0652 14.6091 5.96695C14.635 5.8687 14.6305 5.76488 14.596 5.6693L14.5819 5.62867C14.3002 4.84121 13.8783 4.11123 13.3366 3.47398L13.3085 3.44117C13.2428 3.36391 13.1552 3.30837 13.0573 3.28187C12.9594 3.25537 12.8558 3.25916 12.7601 3.29273L11.4897 3.7443C11.021 3.35992 10.4976 3.0568 9.93194 2.8443L9.68662 1.51617C9.66812 1.41624 9.61964 1.3243 9.54763 1.25257C9.47563 1.18085 9.3835 1.13273 9.2835 1.11461L9.24131 1.1068C8.42725 0.95992 7.571 0.95992 6.75694 1.1068L6.71475 1.11461C6.61474 1.13273 6.52262 1.18085 6.45061 1.25257C6.37861 1.3243 6.33013 1.41624 6.31162 1.51617L6.06475 2.85055C5.50364 3.06309 4.9811 3.36605 4.51787 3.74742L3.23819 3.29273C3.14251 3.25889 3.0388 3.25497 2.94084 3.28148C2.84287 3.308 2.7553 3.36369 2.68975 3.44117L2.66162 3.47398C2.1206 4.11168 1.69877 4.84154 1.41631 5.62867L1.40225 5.6693C1.33194 5.86461 1.38975 6.08336 1.54756 6.2193L2.5835 7.10367C2.53506 7.39742 2.51162 7.69742 2.51162 7.99586C2.51162 8.29586 2.53506 8.59586 2.5835 8.88805L1.54756 9.77242C1.47037 9.83851 1.41512 9.92652 1.38916 10.0248C1.3632 10.123 1.36777 10.2268 1.40225 10.3224L1.41631 10.363C1.69912 11.1505 2.11787 11.8771 2.66162 12.5177L2.68975 12.5505C2.75546 12.6278 2.84304 12.6833 2.94094 12.7098C3.03884 12.7363 3.14248 12.7326 3.23819 12.699L4.51787 12.2443C4.9835 12.6271 5.50381 12.9302 6.06475 13.1412L6.31162 14.4755C6.33013 14.5755 6.37861 14.6674 6.45061 14.7391C6.52262 14.8109 6.61474 14.859 6.71475 14.8771L6.75694 14.8849C7.57848 15.0326 8.41977 15.0326 9.24131 14.8849L9.2835 14.8771C9.3835 14.859 9.47563 14.8109 9.54763 14.7391C9.61964 14.6674 9.66812 14.5755 9.68662 14.4755L9.93194 13.1474C10.4973 12.9355 11.0237 12.6314 11.4897 12.2474L12.7601 12.699C12.8557 12.7328 12.9595 12.7367 13.0574 12.7102C13.1554 12.6837 13.2429 12.628 13.3085 12.5505L13.3366 12.5177C13.8804 11.8755 14.2991 11.1505 14.5819 10.363L14.596 10.3224C14.6663 10.1302 14.6085 9.91148 14.4507 9.77555ZM12.3179 7.27867C12.3569 7.51461 12.3772 7.7568 12.3772 7.99898C12.3772 8.24117 12.3569 8.48336 12.3179 8.7193L12.2147 9.34586L13.3819 10.3443C13.205 10.7519 12.9816 11.1378 12.7163 11.4943L11.2663 10.9802L10.7757 11.3834C10.4022 11.6896 9.98662 11.9302 9.53662 12.099L8.94131 12.3224L8.66162 13.838C8.22033 13.888 7.7748 13.888 7.3335 13.838L7.05381 12.3193L6.46319 12.0927C6.01787 11.924 5.60381 11.6834 5.2335 11.3787L4.74287 10.974L3.2835 11.4927C3.01787 11.1349 2.796 10.749 2.61787 10.3427L3.79756 9.33492L3.696 8.70992C3.6585 8.47711 3.63819 8.23648 3.63819 7.99898C3.63819 7.75992 3.65694 7.52086 3.696 7.28805L3.79756 6.66305L2.61787 5.65523C2.79444 5.24742 3.01787 4.86305 3.2835 4.50523L4.74287 5.02398L5.2335 4.6193C5.60381 4.31461 6.01787 4.07398 6.46319 3.90523L7.05537 3.6818L7.33506 2.16305C7.77412 2.11305 8.22256 2.11305 8.66319 2.16305L8.94287 3.67867L9.53819 3.90211C9.98662 4.07086 10.4038 4.31148 10.7772 4.61773L11.2679 5.02086L12.7179 4.5068C12.9835 4.86461 13.2054 5.25055 13.3835 5.6568L12.2163 6.65523L12.3179 7.27867ZM8.00069 5.09273C6.48194 5.09273 5.25069 6.32398 5.25069 7.84273C5.25069 9.36148 6.48194 10.5927 8.00069 10.5927C9.51944 10.5927 10.7507 9.36148 10.7507 7.84273C10.7507 6.32398 9.51944 5.09273 8.00069 5.09273ZM9.23819 9.08023C9.07588 9.24301 8.88299 9.37209 8.67061 9.46004C8.45823 9.548 8.23056 9.59309 8.00069 9.59273C7.5335 9.59273 7.09444 9.40992 6.76319 9.08023C6.60041 8.91792 6.47133 8.72503 6.38338 8.51265C6.29542 8.30028 6.25033 8.0726 6.25069 7.84273C6.25069 7.37555 6.4335 6.93648 6.76319 6.60523C7.09444 6.27398 7.5335 6.09273 8.00069 6.09273C8.46787 6.09273 8.90694 6.27398 9.23819 6.60523C9.40096 6.76754 9.53004 6.96044 9.618 7.17281C9.70595 7.38519 9.75104 7.61286 9.75069 7.84273C9.75069 8.30992 9.56787 8.74898 9.23819 9.08023Z' fill='%23ECEEF5'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
			}
		}
		.belong {margin-top: 2.5rem;
			.select {color: #fff; font-size: 1.6rem; font-weight: 500;
					button { display: flex; flex-direction: row; align-items: center; height: 4rem;
					&:after { content: ''; display: inline-block; width: 1.6rem; height: 1.6rem; margin-left: 0.4rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.81088 10.8764C8.41175 11.4295 7.58825 11.4295 7.18912 10.8764L4.8139 7.58521C4.3366 6.92384 4.80917 6 5.62478 6H10.3752C11.1908 6 11.6634 6.92384 11.1861 7.58521L8.81088 10.8764Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				}
			}
			.class-name { display: flex; flex-direction: row; align-items: center;
				.name { color: #fff; font-size: 1.6rem; font-weight: 500; }
			}
		}
		.character { position: absolute; bottom: 2rem; right: 2rem;
			.body { position:relative; bottom:-0.15rem; width: 11.35rem; height: 7.1rem; background: ${MX.src('/images/character-body.svg')} no-repeat 0 0; background-size: auto 100%; }
			.hand { position: absolute; top: 5.3rem; right: -0.5rem; width: 2.5rem; height: 1.1rem; background: ${MX.src('/images/character-hand.svg')} no-repeat 0 0; background-size: auto 100%; z-index: 5; }
		}
	}


	& .calendar-wrap{background: #fff; border-radius: 2rem 2rem 0 0; margin-top: -3rem; position: relative;padding-left:2.9rem;padding-right:2.9rem; padding-bottom:2.5rem; 
		.info-wrap{padding:0 1rem;}
	}
			
		.dashboard-wrap{
			padding:2.7rem 1.6rem 0;
			.recent-time { font-size: 1.2rem; color: #878AA1;
				.time { margin-left: 1rem; }
				+ .dashboard-box{margin-top:1.5rem;}
			}		

			.schedule-wrap { margin-top: 2rem;
				.header-area { display: flex; align-items: center;flex-wrap: wrap;
					.selected-date { display: flex; align-items: flex-end;
						.year { font-size: 1.4rem; margin-right: 0.3rem; font-weight:400;line-height:1;}
						.date { font-weight: 600; font-size: 1.8rem; line-height:1;}
						.day { margin-left: 0.8rem; font-size: 1.6rem; line-height:1;} 
					}
					.right{margin-left:auto;}
					.btn-filter{height:3rem;display:flex;align-items:center;line-height:1;
						&:before{content:'';display:block;margin-right:0.2rem; width:2.4rem;height:2.4rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.91992 13.311H11.4171' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.583 9.81396H16.0802' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.66895 17.3911V6.89111' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.3311 17.3911V6.89111' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.8976 4.28564H6.0947C5.09586 4.28564 4.28613 5.09537 4.28613 6.09422V17.8971C4.28613 18.8959 5.09586 19.7056 6.0947 19.7056H17.8976C18.8964 19.7056 19.7061 18.8959 19.7061 17.8971V6.09422C19.7061 5.09537 18.8964 4.28564 17.8976 4.28564Z' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
						&:after{content:'';display:block;width:1.6rem;height:1.6rem;background:url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.06406 10.8764C8.66492 11.4295 7.84142 11.4295 7.44229 10.8764L5.06707 7.58521C4.58977 6.92384 5.06235 6 5.87795 6H10.6284C11.444 6 11.9166 6.92384 11.4393 7.58521L9.06406 10.8764Z' fill='%23383838'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}        
					}
					.menu {width:100%; margin-left:auto;display:flex;align-items:center;gap:1.6rem;margin-bottom:3.2rem;
						li {position:relative;flex:1;
							button,
							a {height:4.8rem;width:100%; display:flex;align-items:center;font-weight:500;font-size:1.4rem;background:#ECEEF5;border-radius:1rem;display:flex;justify-content:center;align-items:center;
								[class*=ico-]{margin-right:1rem;}
							} 
						}
					}
				}
		
			.schedule-list { margin-top: 1.6rem;
				.box { position: relative; display: flex; align-items: flex-start; min-height: 8rem; padding: 1.6rem; background: #fff; border-radius: 1rem; border: 1px solid #ECEEF5;
					~ .box { margin-top: 0.8rem; }
					.desc { display: flex; flex-direction: column;flex:1;overflow:hidden; align-item:center;
						em { font-weight: 500; color: #878AA1; font-size: 1.4rem; }
						> span { margin-top: 0.4rem; font-size: 1.6rem; font-weight: 500; line-height:1;
							.cls{position:relative;margin-right:8px;padding-right:8px; color:#4252E2;font-weight:500;font-size:1.4rem;
								line-height:1.2;
								&:after{content:'';display:inline-block;position:absolute;bottom:0.15rem;right:0;width:0.1rem;height:1.3rem;background:#D4D6E3;}
							}
							.name{font-size:1.6rem; color:#383838;line-height:1.2;position:relative;top:0.1rem;}
						}
					}
		
					.icon { margin-right: 2rem; width: 4.8rem; height: 4.8rem; border-radius: 1rem; display: flex; justify-content: center; align-items: center;
						i { width: 3.2rem; height: 3.2rem; background-repeat: no-repeat; background-position: 0 0; background-size: auto 100%; }
						&.required {background: #F74D5A;
							i { background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.29 17.9702V12.6702C24.29 8.25016 20.7 4.66016 16.28 4.66016H15.72C11.3 4.66016 7.71001 8.25016 7.71001 12.6702V17.9702C7.71001 18.5502 7.49001 19.1102 7.09001 19.5402C6.45001 20.2302 5.98001 21.0602 5.73001 21.9902C5.52001 22.7502 6.11001 23.5002 6.90001 23.5002H25.1C25.89 23.5002 26.47 22.7502 26.27 21.9902C26.02 21.0602 25.54 20.2302 24.91 19.5402C24.51 19.1102 24.29 18.5602 24.29 17.9702Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M19.94 23.71C19.94 25.72 18.18 27.35 16 27.35C13.82 27.35 12.06 25.72 12.06 23.71' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M8.35999 10.8701H23.46' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath opacity='0.2' d='M7.92999 12.3101L6.16998 23.4301H13.83V5.37012C10.84 6.37012 8.82999 10.2101 7.92999 12.3201V12.3101Z' fill='white'/%3E%3C/svg%3E%0A"); }
						}
						&.integrated { background: #2F5ED7;
							i { background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.2' d='M4.66999 15.6201L26.02 27.7201C26.02 27.7201 20.42 30.9901 13.94 27.9501C11.42 26.7601 10.08 24.0601 8.56999 22.4401C6.19999 19.9001 4.39999 18.2501 4.67999 15.6301L4.66999 15.6201Z' fill='white'/%3E%3Cpath d='M14.97 20.2197H21.62' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M18.04 14.3599C21.0499 14.3599 23.49 11.9019 23.49 8.86988C23.49 5.83784 21.0499 3.37988 18.04 3.37988C15.03 3.37988 12.59 5.83784 12.59 8.86988C12.59 11.9019 15.03 14.3599 18.04 14.3599Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M8.81997 21.8201C10.9463 21.8201 12.67 20.0829 12.67 17.9401C12.67 15.7972 10.9463 14.0601 8.81997 14.0601C6.69367 14.0601 4.96997 15.7972 4.96997 17.9401C4.96997 20.0829 6.69367 21.8201 8.81997 21.8201Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M12.1499 14.5601C13.8099 14.1601 15.0899 14.4801 17.1999 14.4801C26.7599 14.4801 26.2099 19.0401 26.2099 23.9401C26.2099 28.8401 25.8399 28.2601 20.9799 28.2601C12.5899 28.2601 9.45995 26.1101 8.81995 21.8201' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A"); }
						}
						&.noti { background: #2F5ED7;
							i { background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.83 26.4381H6.97C5.88 26.4381 5 25.5581 5 24.4681V6.75809C5 5.66809 5.88 4.78809 6.97 4.78809H22.57C23.78 4.78809 24.77 5.76809 24.77 6.98809V19.4781' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M9.87 10.7979H17.26' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M9.87 15.6079H13.1' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M16.57 17.5679L17.24 21.1379C17.25 21.2079 17.29 21.2679 17.33 21.3179L24.17 28.0379C25.3 29.1479 27.1 29.1379 28.22 28.0179C29.31 26.9279 29.35 25.1879 28.31 24.0479L22.28 17.4279C22.28 17.4279 22.18 17.3479 22.12 17.3279L18.05 16.2079C17.2 15.9779 16.4 16.7079 16.56 17.5779L16.57 17.5679Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M23.38 27.2483L27.13 23.5083' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M9.87 20.3481H16.45' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath opacity='0.2' d='M4.47998 5.25823V26.0782C4.47998 26.2182 4.59998 26.3382 4.73998 26.3382H10.12C10.26 26.3382 10.38 26.2182 10.38 26.0782V4.24823C10.38 4.07823 10.21 3.96823 10.05 4.00823C7.23998 4.77823 5.34998 3.22823 4.47998 5.24823V5.25823Z' fill='white'/%3E%3C/svg%3E%0A"); }
						}
						&.dosage {
							background: #3FAEEC;
							i { background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.2' d='M10.11 4.33008V25.7701C10.11 25.7701 4.50003 23.0101 3.96003 16.9701C3.41003 10.9301 6.16003 5.79008 10.11 4.33008Z' fill='white'/%3E%3Cpath d='M13.62 25.7402C7.88001 25.4302 3.32001 20.6702 3.32001 14.8502C3.32001 9.0302 8.20001 3.9502 14.22 3.9502C20.24 3.9502 25.12 8.8302 25.12 14.8502C25.12 17.0002 24.5 19.0002 23.43 20.6902' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M28.68 25.4301V23.6801C28.68 22.2331 27.507 21.0601 26.06 21.0601H16.24C14.793 21.0601 13.62 22.2331 13.62 23.6801V25.4301C13.62 26.877 14.793 28.0501 16.24 28.0501H26.06C27.507 28.0501 28.68 26.877 28.68 25.4301Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M21.15 21.1401V27.9801' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M14.22 8.88037V14.0404C14.22 14.4904 14.59 14.8604 15.04 14.8604H19.55' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A"); }
						}
						&.homecoming { background: #ECAB2C;
							i { background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.2' d='M12.63 26.8801H7.74L7.47 16.2501L2.69 13.7801L7.19 5.99012L12.63 5.12012V26.8801Z' fill='white'/%3E%3Cpath d='M3.67001 14.6701C2.92001 14.6701 2.45001 13.8701 2.81001 13.2201L6.59001 6.43012C6.82001 5.65012 7.46001 5.21012 8.22001 5.21012L23.71 5.12012C24.41 5.12012 25.02 5.48012 25.22 6.02012L29.48 13.4701C29.72 13.8801 29.42 14.4001 28.94 14.4001H26.91C26.39 14.4001 25.96 14.8301 25.96 15.3501V24.6801C25.96 25.9001 25.2 26.8901 24.25 26.8901H8.46001C7.52001 26.8901 6.75001 25.9001 6.75001 24.6801V15.6201C6.75001 15.0901 6.32001 14.6601 5.79001 14.6601H3.68001L3.67001 14.6701Z' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3Cpath d='M16.58 20.27V26.24' stroke='white' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel'/%3E%3C/svg%3E%0A"); }
						}
					}
		
					.time { font-size: 1.2rem; font-weight: 500;display: flex; align-items: center; padding-left:1rem; align-self:flex-start;
						&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.5rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%23666666'/%3E%3Cpath d='M11.6017 9.25789H8.26405C7.58435 9.25789 7.03653 8.71008 7.03653 8.03037V4.31738H8.55825V7.73618H11.6118V9.25789H11.6017Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
					}
				}

				.box-set ~ .box-set{margin-top:1.6rem;padding-top:1.6rem;border-top:1px solid #ECEEF5; }
			}
		}
	}
}
`
export default Contents