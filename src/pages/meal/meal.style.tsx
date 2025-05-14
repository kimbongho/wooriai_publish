import { COLOR, DateIime, DateText, FileList, FormWrap, MonthIndicator, SelectItemList, ViewDetail, Thumb, ListBox  } from '@/shared'
import styled from '@emotion/styled'

export const Contents = styled.div`
	${DateText}
	${DateIime}
	${ViewDetail}
	${SelectItemList}
	${FileList}
	${FormWrap}
	${MonthIndicator}
	${ListBox}

	background:#F5F6FA;
	.calendar-wrap{padding:0 0;}
	.view-detail{padding-bottom:0;}
	.select-item-list-wrap{margin-top:2.4rem;}

	.page-top-area{
	.date{font-weight: 600;font-size: 1.8rem;text-align:center;margin-bottom:1.6rem;}
	}

	.meal-daily-wrap{
		.btn-select + .calendar-wrap{margin-top:2.4rem;}
		.days-meal-wrap{margin-top:3.2rem;
			.list-top{display:flex;align-items:center;margin-bottom:1.6rem;
				.right{margin-left:auto;margin-top:0;}
				.btn-view-monthly-meal{display:inline-flex;align-items:center; font-size:1.6rem;color:${COLOR.primary};font-weight:500;}
			}

			.meal-list{
				> ul > li{
					~ li{margin-top:1.6rem;}
					.box{border:0.1rem solid #ECEEF5;border-radius:1rem; padding:2.4rem 1.6rem; background:#fff; width:100%;  text-align:left;
						.class-name{ color:#111;font-size:1.6rem;font-weight:500;}
						> ul > li{
							padding:1.6rem 0;display:flex; align-items:flex-start;gap:1.6rem;
							~ li{border-top:0.1rem solid #ECEEF5;}
							.img{
								${Thumb}
								width:9.6rem;height:7.2rem;border-radius:1rem;
							}
							.tit{width:6rem;font-weight:600;}
							.list{flex:1;font-size:1.4rem; color:#60637B;font-weight:500;}
						}
					}
				}
			}
		}
	}

	.class-meal-wrap{padding-top:2.4rem;
		ul{
			li{
				~ li{margin-top:2.4rem;}
				.link{display:flex;flex-direction:column; width:100%;border:0.1rem solid #ECEEF5;border-radius:1rem;padding:2.4rem 1.6rem;
					background:#fff;align-items: flex-start;
					.info{
						.tit{font-size:1.6rem;font-weight:500; display:block;}
						+ *{margin-top:1.6rem;}
					}
					.img{width:100%; border-radius:1rem;overflow:hidden;position:relative;}
					.img img{width:100%;height:auto;}
					.txt{margin-top:1.6rem; color:#383838;font-size:1.6rem;white-space:normal;word-break:break-all;	text-align:left;}
				}
			}
		}
	}

	.meal-edit-wrap{
		padding-top:2.4rem;
		.meal-regist-box{
			position:relative;
			~ .meal-regist-box{margin-top:1.6rem;}
			border:0.1rem solid #ECEEF5;background:#fff;padding:2.4rem 1.6rem; border-radius:1rem;
			.title {
				b{font-weight:500;font-size:1.6rem; color:#111;}
				.btn-del{position:absolute;top:1.5rem;right:1rem;width:4rem;height:4rem;background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23878AA1'/%3E%3Cpath d='M14 10L6 10' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2rem;}
			}
			.regist{display:flex;align-items:flex-start;margin-top:1.6rem;
				.img-wrap{margin-right:0.8rem;}
				.textarea{width:100%; height:auto;
					textarea{width:100%; padding:1.2rem 1.4rem;font-size:1.6rem;line-height:1.3;min-height:7.2rem;height:7.2rem;border:0.1rem solid #D4D6E3;border-radius:1rem;
						&:focus{border-color:${COLOR.primary}}
					}
				}
			}

			&.modify .textarea{border-color:${COLOR.primary}}
		}
		.form-wrap{
			.textarea{border-color:#D4D6E3;}
		}
	}
	.btn-add{margin-top:1.6rem;}
`
export default Contents
