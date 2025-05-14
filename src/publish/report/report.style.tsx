import styled from '@emotion/styled'
import { MX, COLOR, Thumb, ViewDetail, DateText, ChildInfoList, SelectItemList, ToggleViewBox, gageBar, CheckStatusList, FormWrap, DashboardBox, SelectBox, AlbumList } from '@/shared'

export const Contents = styled.div`
	${ViewDetail}
	${DateText}
	${ChildInfoList}
	${SelectItemList}
	${ToggleViewBox}
	${gageBar}
	${CheckStatusList}
	${FormWrap}
	${DashboardBox}
	${SelectBox}
	${AlbumList}

	background:#F5F6FA;
	.report-wrap { background: #ECEEF5; }

	.check-today{
		display:flex;align-items:center;
		.right{margin-left:auto;display:flex;align-items:center;}
		.t{font-size:1.6rem;
			em{color:${COLOR.primary};vertical-align:baseline;}
		}

		+ *{margin-top:1.6rem;}
	}

	.today-item-list{overflow: hidden; width: calc(100% + 3.2rem); margin-left: -1.6rem;	}

	.report-list-wrap {
		padding-bottom:2rem;
		.report-list-section{padding:2.4rem 0 0;}
		.tab-type1 .tab{margin-bottom:2.4rem; }
	}

	.report-content-wrap .report-box {
		padding: 2.4rem 0;
		&.total{padding: 1.6rem 0;
			+ .report-box{padding-top:1.6rem;}
		}
		&:last-of-type{padding-bottom:0;}
		.box-tit{display:flex;align-items:center;font-size:1.6rem;}
		.box-tit i{margin-right:0.4rem;}
		.box-tit span{line-height:1;}
		~ .report-box { border-top: 0.1rem solid #ECEEF5; border-top: 0.1rem solid #ECEEF5; }
		.check-box .inp-check .t{font-size:1.6rem;}

		.relation-chart {
			position: relative;margin:0 auto; margin-top:1.6rem;width:29.7rem;
			.tooltip { display: none; position: absolute; top: 0; left: 0; background: #fff; border: 0.1rem solid #D4D6E3; border-radius: 1rem; padding: 0.8rem 2rem 1rem; z-index: 10; transform: translateX(-50%);
				box-shadow:0 0.6rem 1rem rgba(0, 0, 0, 0.05);
				&.on { display: block; }
				.cls { font-size: 1.2rem; color: #878AA1; text-align: center; display: block; white-space:nowrap;}
				.name { font-size: 1.6rem; font-weight: 500; text-align: center; display: block; line-height: 1;white-space:nowrap; margin-top:0.4rem;}
				&:before { content: ''; display: block; position: absolute; bottom: -0.8rem; left: 50%; width: 0; height: 0; border-left: 0.8rem solid transparent; border-right: 0.8rem solid transparent; border-top: 0.8rem solid #D4D6E3; transform: translateX(-50%); }
				&:after { content: ''; display: block; position: absolute; bottom: -0.7rem; left: 50%; width: 0; height: 0; border-left: 0.8rem solid transparent; border-right: 0.8rem solid transparent; border-top: 0.8rem solid #fff; transform: translateX(-50%); }
				&.tooltip1 { top: -6.6rem; left: 50%; }
				&.tooltip2 { top: 0.4rem; left: 25rem; }
				&.tooltip3 { top: 11.9rem; left: 21rem; }
				&.tooltip4 { top: 11.9rem; left: 9rem; }
				&.tooltip5 { top: 0.4rem; left: 5.3rem; }
			}

			.chart { position: relative; height: 26rem;
				.center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
					.thumb {${Thumb}; width: 8rem; height: 8rem; }
				}

				.around { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
					.thumb { width: 5.6rem; height: 5.6rem; position: absolute; top: -13rem; left: -2.8rem; }
					&:before { content: ''; display: block; position: absolute; bottom: 0; left: 50%; width: 0.1rem; height: 13rem; background: #D4D6E3; transform: translateX(-50%); }
					&.around2 { transform: rotate(72deg); }
					&.around3 { transform: rotate(144deg); }
					&.around4 { transform: rotate(216deg); }
					&.around5 { transform: rotate(288deg); }
				}
				.thumb {${Thumb}; width: 100%; height: 100%; border-radius: 100%; overflow: hidden; border: 0.1rem solid #D4D6E3; }
			}
			+ .report-notice{margin-top:5rem;}
		}

		.character-wrap { margin-top: 3.2rem; display: flex; justify-content: center; align-items: center; flex-direction: column;
			.text { font-size: 2.6rem; line-height: 1.4; text-align: center;margin-bottom:2.4rem;
				br { line-height: 1; }
				b { font-weight: 700; vertical-align: baseline; }
			}
			+ .relation-chart{margin-top:7rem;}

			.ico-character-rabbit { width: 12.5rem; height: 14.9rem; background-image: ${MX.src('/images/ico-character-rabbit.svg')}; }
			.ico-character-koala { width: 11.1rem; height: 12.3rem; background-image: ${MX.src('/images/ico-character-koala.svg')}; }
			.ico-character-sloth { width: 12.6rem; height: 8.8rem; background-image: ${MX.src('/images/ico-character-sloth.svg')}; }
			.ico-character-beaver { width: 9rem; height: 12.7rem; background-image: ${MX.src('/images/ico-character-beaver.svg')}; }
			.ico-character-alpaca { width: 9.8rem; height: 15.7rem; background-image: ${MX.src('/images/ico-character-alpaca.svg')}; }
			.ico-character-dolphin { width: 13.6rem; height: 12.5rem; background-image: ${MX.src('/images/ico-character-dolphin.svg')}; }}
		}

		.gage-wrap { margin-top: 2.4rem; }
		.report-notice { margin-top: 1.6rem; background: #F5F6FA; border-radius: 1rem; padding: 1.6rem;
			p { font-size: 1.6rem; color: #383838;
				~ p { margin-top: 1.6rem; }
				em { color: ${COLOR.primary}; font-weight: 500; }
			}
		}
	}


	.report-write-section {
		padding: 2.4rem 0 0;
		.photo-upload-list{margin-top: 3.2rem;}

		.photo-upload-list,
		.check-status-list { margin-top: 3.2rem; }
		.form-menu { display: flex; align-items: center; margin-bottom: 0.5rem; margin-top: 2.4rem;
			.right { margin-left: auto; }
		}
		.textarea { background: #fff;border:0.1rem solid #D4D6E3;}

		.toggle-view-box{
			.box-body{
				.total-text{border-bottom:none;padding-bottom:0;margin-bottom:0.8rem;}
			}
		}

		.txt-noti{font-size:1.4rem; color:#878AA1;margin-top:3.2rem;}
	}

	.report-detail-section {
		padding: 2.4rem 0;

		.dashboard-box { margin-bottom: 2.4rem;
			ul { margin-top: 1.6rem; height: 8.4rem; }
		}

		.beta-banner { background: #FFFFFF; border: 0.1rem solid #ECEEF5; border-radius: 1rem; height: 4rem; padding: 0 1.6rem; display: flex; align-items: center;justify-content: center;
			.tit { display: flex; align-items: center;
				b { font-weight: 500; color: #505050; }
				.ico-beta { margin-left: 0.4rem; width: 2.4rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='25' height='16' viewBox='0 0 25 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_328_25831)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.5 14.4576L2.73945 3H4.29827L4.24859 3.25419H5.10388C6.66435 3.25419 7.73467 3.80436 7.73467 5.03473C7.73467 5.935 7.05447 6.68523 6.03416 6.98532L6.01415 7.03533C6.88442 7.2454 7.36456 7.73555 7.36456 8.50578C7.36456 10.3463 5.81409 11.0766 3.98354 11.0766H2.71967L2.05882 14.4576H0.5ZM5.79409 8.5758C5.79409 9.37604 5.1839 9.81617 4.07357 9.81617H3.05326L3.50339 7.5755H4.53371C5.37396 7.5755 5.79409 7.93561 5.79409 8.5758ZM6.06417 5.31481C6.06417 5.99502 5.60403 6.44516 4.5137 6.44516H3.73346L4.12358 4.51457H4.82379C5.67405 4.51457 6.06417 4.80466 6.06417 5.31481ZM13.6665 7.20468C13.6665 5.97431 13.1463 4.97401 11.7259 4.97401V4.954C10.1354 4.954 8.41487 6.44445 8.41487 8.64511C8.41487 10.2456 9.41517 11.1959 10.8556 11.1959C11.7759 11.1959 12.5061 10.9158 12.9863 10.5757L12.4061 9.54539C12.116 9.76545 11.6859 9.96551 11.3157 9.96551C10.5355 9.96551 9.93533 9.54539 9.97534 8.55509H13.3664C13.4564 8.37503 13.6665 7.76485 13.6665 7.20468ZM12.3261 7.12465C12.3261 7.2847 12.306 7.44475 12.276 7.56479H10.1054C10.3755 6.69453 10.9556 6.24439 11.5258 6.24439C12.126 6.24439 12.3261 6.64451 12.3261 7.12465ZM14.5459 9.64145C14.5464 9.3833 14.5862 9.1447 14.6359 8.89623L15.1561 6.40548H14.3658L14.6159 5.19511L15.4962 5.12509L15.9963 3.56462H17.3767L17.0767 5.12509H18.4271L18.177 6.40548H16.7866L16.2664 8.95625C16.2464 9.09629 16.2364 9.22633 16.2364 9.35637C16.2364 9.74648 16.4265 9.93654 16.8566 9.93654C17.0266 9.93654 17.1867 9.87652 17.3367 9.7965L17.6368 10.9468C17.3267 11.0669 16.8566 11.2069 16.2364 11.2069C15.0382 11.2069 14.5477 10.5491 14.5459 9.64145ZM14.5459 9.64145L14.5459 9.64645V9.63645L14.5459 9.64145ZM21.5989 4.9751C19.9584 4.9751 18.4179 6.76564 18.4179 9.03632L18.4279 9.02632C18.4279 10.4267 19.0581 11.207 20.1085 11.207C20.7286 11.207 21.4289 10.8469 21.969 10.2867H21.999L21.969 11.0669H23.3094L24.4998 5.11514H23.1794L22.9193 5.75533H22.8893C22.6592 5.27519 22.1391 4.9751 21.5989 4.9751ZM22.5192 6.88567L22.0891 8.99631H22.0991C21.7189 9.67652 21.2288 9.87658 20.8287 9.87658C20.3985 9.87658 20.1285 9.55648 20.1285 8.82626C20.1285 7.40583 20.8887 6.3155 21.7189 6.3155C21.999 6.3155 22.3191 6.48555 22.5192 6.88567Z' fill='%234252E2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_328_25831'%3E%3Crect width='24' height='16' fill='white' transform='translate(0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
			}

			.txt { position: relative; padding-left: 0.8rem; margin-left: 0.8rem; color:#878AA1;
				&:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 1rem; background: #D4D6E3; transform: translateY(-50%); }
			}
		}

		.report-title { margin-top: 3rem; display: flex; justify-content: center; align-items: center; flex-direction: column;margin-bottom:2.4rem;
			b { font-weight: 500; font-size: 2.2rem; color: #111111; }
			.txt { font-size: 1.4rem; color: #383838;
				span ~ span{margin-left:0.4rem; }
			}
		}

		.report-detail-view { padding: 2.4rem 1.6rem; border: 0.1rem solid #ECEEF5; background: #fff; border-radius: 1rem; margin-top: 2.4rem;
			.album-list:not(:first-child){margin-top:3.2rem;}
			.text { font-size: 1.6rem; margin-top: 3.2rem; line-height: 1.5; }
		}


		.report-list { border-radius: 1rem; border: 0.1rem solid #ECEEF5; margin-top: 3.2rem;
			&:first-child{margin-top:0;}
			ul li { display: flex; align-items: center; height: 4.8rem; padding: 0 1.6rem;font-size: 1.6rem; font-weight: 500;
				~ li { border-top: 0.1rem solid #ECEEF5; }
				b { font-weight: 500; color: #505050; }
				.right { margin-left: auto; }
				.status { color: ${COLOR.primary}; }
				small { font-size: 1.4rem; color: #A0A4BE; margin-left:0.5rem;}
			}
		}

		.report-content-wrap .report-box{
			padding:3.2rem 0;padding-top:3.2rem !important;
			&:last-of-type{padding-bottom:0.8rem;}
		}

		.dashboard-box{
			ul li b{margin-top:1.2rem;}
		}

		.toggle-view-box{
			.total-text{margin-bottom:0;}
		}
	}

	.report-select-wrap{
		padding-top:2.4rem;
		.text-guide{font-size:2rem;font-weight:500;line-height:1.5;
			em{color:${COLOR.primary};vertical-align:baseline;}
		}
		.child-photo-select-list{margin-top:2.4rem;
			li{display:flex;gap:1.6rem;padding:1.6rem 0;
			~ li{border-top:1px solid #ECEEF5;}
				.photos{flex:1;overflow:hidden;min-width:calc(100% + 1.6rem);
					.photo-list .swiper{padding-right:0;}
					.photo-list .swiper-wrapper{padding:0 0;}
				}
			}
		}
	}
`
export default Contents