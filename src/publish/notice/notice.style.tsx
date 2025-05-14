import styled from '@emotion/styled'
import { COLOR, NoticeBox, SelectBox, FileList, ViewDetail, DataTable2 } from '@/shared'

export const Contents = styled.div`
	${NoticeBox}
	${SelectBox}
	${ViewDetail}
	${FileList}
	${DataTable2}

	background:#F5F6FA;
	.notice-list-wrap{
		.page-top-area { padding: 2.4rem 1.6rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem; margin-bottom: 2.4rem;
			.input { margin-bottom: 2.4rem; }

			.notice-list li > {
				a, button {background: #F5F6FA;border: 0.1rem solid #D4D6E3;}
			}
		}

		.btn-more{margin-top:3.2rem}
	}

	.notice-list li {
		~ li { margin-top: 1.6rem; }
		> a,
		> button { display: block; width: 100%; padding: 1.5rem 1.6rem; background: #fff; overflow: hidden; border-radius: 1rem; text-align: left; border:0.1rem solid #ECEEF5;}

		.cate { display: flex; align-items: center; font-size: 1.2rem; margin-bottom: 0.8rem;

			> * ~ * { margin-left: 0.4rem; }
			em { display: block; color: ${COLOR.primary}; }
			.reserve { color: #DC0000; display: inline-flex; align-items: center; margin-left:auto;
				&:before { content: ''; display: inline-block; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.77983 14.28C5.63983 14.28 3.07983 11.72 3.07983 8.58C3.07983 5.44 5.63983 2.88 8.77983 2.88C11.9198 2.88 14.4798 5.44 14.4798 8.58C14.4798 11.72 11.9198 14.28 8.77983 14.28ZM8.77983 4.12C6.31983 4.12 4.31983 6.12 4.31983 8.58C4.31983 11.04 6.31983 13.04 8.77983 13.04C11.2398 13.04 13.2398 11.04 13.2398 8.58C13.2398 6.12 11.2398 4.12 8.77983 4.12Z' fill='%23DC0000'/%3E%3Cpath d='M11.7198 9.59996H8.99976C8.44976 9.59996 7.99976 9.14996 7.99976 8.59996V5.57996H9.23976V8.36996H11.7198V9.60996V9.59996Z' fill='%23DC0000'/%3E%3Cpath d='M4.42872 1.72042L2.01367 4.11365L2.8865 4.99443L5.30154 2.6012L4.42872 1.72042Z' fill='%23DC0000'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; margin-right: 0.4rem; }
			}
		}

		.txt { display: inline-flex; align-items: center;max-width:100%;
			b {display:block;  font-weight: 500; font-size: 1.6rem; flex: 1; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 1; -webkit-box-orient: vertical; word-wrap: break-word; line-height: 1.2em; height: 1.3em; }
		}

		.info { margin-top: 0.6rem; font-size: 1.2rem; color: #878AA1;
			.from { display: inline-block; position: relative; padding-left: 0.8rem; margin-left: 0.6rem;font-weight:500;
				&:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 0.7rem; background: #999; transform: translateY(-50%); }
			}
		}

		.txt .ico-new { margin-left: 0.4rem; }
	}


	.notice-write-wrap{
		.page-top-area { margin-bottom: 2.4rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem; padding: 2.4rem 1.6rem; }
		> *:first-of-type:not(.page-top-area){margin-top:2.4rem !important;}

		.tab-type1 .tab { margin-bottom: 2.4rem; }
		.menu { margin-top: 1.4rem; display: flex; margin-top: -1.2rem;
			.right {margin-left: auto; }
			.btn { padding: 0 1rem; height: 3.2rem; display: inline-flex; align-items: center; font-size: 1.4rem; font-weight: 500; color: ${COLOR.primary}; }
		}

		.select-box .tit{margin-bottom:2.8rem;}

		.menu {margin-top:2.4rem;display:flex;margin-bottom:1.5rem;
			.inp-check .t{paddig-left:0.8rem;font-size:1.6rem;}
			.right{margin-left:auto;}
		}

		.form-wrap {margin-top: 0.5rem;
			.input,
			.textarea {background: #fff; border:0.1rem solid #D4D6E3;}
			> * ~ *{margin-top:1.6rem;}
		}

		.notice-box{margin-top:1.6rem; }
		.btn-wrap:not { margin-top: 3.2rem; }
	}
	.notice-regist-set {
		.select-box .tit{margin-bottom:2.8rem;}
		.fix-notice {
			margin-top: 1.2rem;
			.inp-check .t {
				padding-left: 1rem;
			}
		}
	}
`
export default Contents