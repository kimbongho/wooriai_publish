import styled from '@emotion/styled'
import { COLOR, DateText, DateIime, ViewDetail, SelectItemList, FileList } from '@/shared'

export const Contents = styled.div`
	${DateText}
	${DateIime}
	${ViewDetail}
	${SelectItemList}
	${FileList}

	background:#F5F6FA;
	.calendar-wrap{padding:0 0;}
	.view-detail{padding-bottom:0;}
	.select-item-list-wrap{margin-top:2.4rem;}

	.schedule-list-wrap{
		padding-bottom:1.6rem;
		.btn-select + *{margin-top:2.4rem;}
	}

	.days-schedule-wrap {
		padding-top: 3.2rem;

		.schedule-list-box {
			margin-top: 1.6rem;

			ul li {
				~ li { margin-top: 1.6rem; }
				.link {
					padding: 1.2rem 1.8rem 1.2rem 2.4rem; position: relative; border-radius: 1rem; overflow: hidden; height: 11.1rem; border: 0.1rem solid #ECEEF5; display: flex; flex-direction: column; justify-contents: center; align-items: flex-start; width: 100%; background: #fff;

					&:before { content: ''; display: block; position: absolute; top: 0; left: 0; width: 0.8rem; background: #2F5ED7; height: 100%; }
					.info {
						display: flex; align-items: center; width: 100%;

						.type { font-size: 1.4rem; font-weight: 500; color: #878AA1; margin-right: 2rem; }
						.classname { font-size: 1.4rem; color:${COLOR.primary};}
						.right {
							margin-left: auto;

							.date { font-size: 1.2rem; color: #878AA1; }
						}
					}
					.tit { display: block; width: 100%; text-align: left; margin-top: 0.8rem; font-size:1.6rem;  overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 1; -webkit-box-orient: vertical; word-wrap: break-word; line-height: 1.2; }
					.etc {
						width: 100%; border-top: 0.1rem solid #ECEEF5; padding-top: 0.8rem; margin-top: 0.8rem; display: flex; align-items: center;

						.time {
							font-size: 1.2rem; color: #60637B; font-weight: 500; display: inline-flex; align-items: center;

							&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.4rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%23383838'/%3E%3Cpath d='M11.6017 9.25887H8.26408C7.58438 9.25887 7.03656 8.71105 7.03656 8.03135V4.31836H8.55828V7.73715H11.6119V9.25887H11.6017Z' fill='%23383838'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 100%; }
						}
						.right {
							margin-left: auto;

							.children {
								font-weight: 600; font-size: 1.2rem; color: #60637B; display: inline-flex; align-items: center;

								&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.4rem; background: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99645 14.6673C4.13548 14.6673 0.995117 11.6771 0.995117 8.00066C0.995117 4.32424 4.13548 1.33398 7.99645 1.33398C11.8574 1.33398 14.9978 4.32424 14.9978 8.00066C14.9978 11.6771 11.8574 14.6673 7.99645 14.6673ZM7.99645 2.41741C4.76507 2.41741 2.13293 4.92373 2.13293 8.00066C2.13293 11.0776 4.76507 13.5839 7.99645 13.5839C11.2278 13.5839 13.86 11.0776 13.86 8.00066C13.86 4.92373 11.2278 2.41741 7.99645 2.41741Z' fill='%23878AA1'/%3E%3Cpath d='M8.13372 11.8719C7.13245 11.8719 6.23737 11.5396 5.72914 11.2363C5.46365 11.0774 5.38022 10.7451 5.5471 10.4923C5.71398 10.2395 6.0629 10.1601 6.32839 10.319C6.41942 10.3768 8.33094 11.453 9.93146 10.1673C10.1742 9.9795 10.5307 10.0012 10.7355 10.2323C10.9403 10.4634 10.91 10.8029 10.6673 10.9979C9.85561 11.648 8.96053 11.8719 8.14131 11.8719H8.13372Z' fill='%23878AA1'/%3E%3Cpath d='M9.67262 7.1703H5.98611C5.08344 7.1703 4.34766 6.46968 4.34766 5.61016V2.41767L5.48547 2.22266V5.60294C5.48547 5.86296 5.70545 6.07965 5.98611 6.07965H9.67262C9.94569 6.07965 10.1733 5.86296 10.1733 5.60294V2.22266H11.3111V5.60294C11.3111 6.46246 10.5753 7.16307 9.67262 7.16307V7.1703Z' fill='%23878AA1'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M6.13884 13.7788L1.93652 10.6947L2.01996 5.39309L6.13884 2.22949V13.7788Z' fill='%23878AA1'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 100%; }
							}
						}
					}
				}
			}
		}
	}

	.schedule-edit-wrap{
		.page-top-area{
			.inp-check{margin-bottom:1.9rem;
				.t{ color:#000;font-size:1.6rem;padding-left:0.8rem;}
			}
		}

		.schedule-edit-section{
			padding-top:2.4rem;
			.form-wrap{
				.input{border-color:#D4D6E3;background:#fff}
				.period-setting{margin-top:2.4rem;
					.tit{font-weight:500;font-size:1.6re,; color:#111111;display:block;margin-bottom:0.8rem;
						~ .tit{margin-top:2.4rem;}
					}
					.time-check{margin-bottom:1.6rem;}
					.txt-error{font-size:1.2rem;color:${COLOR.red};margin-top:0.8rem;}
				}
				.textarea{border-color:#D4D6E3;margin-top:2.4rem;}
				.photo-upload-list{margin-top:2.4rem;}
				.upload-files{margin-top:3rem;}
			}
			.child-select-section{
				margin-top:3.2rem;
			}
		}
	}
`
export default Contents