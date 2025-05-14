import { MX, COLOR } from './constant'

export const scrollbar = `
		::-webkit-scrollbar{-webkit-appearance:none;}
		::-webkit-scrollbar:vertical{width:0.7rem;}
		::-webkit-scrollbar:horizontal{height:0.7rem;} 
		::-webkit-scrollbar-thumb{ background-color:rgba(0,0,0,.2); border-radius:1rem; }
		::-webkit-scrollbar-track{ background-color:rgba(0,0,0,.05); border-radius:1rem; }		
`

export const BtnWrap = `
	.btn-wrap{
		display:flex;align-items:center;justify-content:center;margin-top:3.2rem;flex-wrap: wrap;
		[class*=btn-type] ~ [class*=btn-type]{margin-left:0.8rem;}
		> [class*=btn-type]{flex:1;}
		> [class*=btn-type]:only-child{width:100%;}
		&.column{flex-direction: column;
			> [class*=btn-type]{width:100%;}
			> * ~ *{margin-top:1.6rem;margin-left:0 !important;}    
		}
		&.btn-step-wrap{margin-top:1.7rem !important;}
		
		.full{width:100%;}
		.right{margin-left:auto;display:flex;align-items:center;}
	}
`
export const TxtGuide = `
.txt-guide{ color:#111111;font-size:2rem;
	letter-spacing:-0.03em;
	+ *{margin-top:2.4rem;}
	~ .txt-guide{margin-top:4.8rem;}
	b{vertical-align:baseline;font-weight:600; }
}
`

export const FormWrap = `
.form-wrap{
  > * ~ *{margin-top:1.6rem;}
	> .inp-tit{display: block; width: 100%; font-size: 1.6rem; color: #111; font-weight: 500; margin-bottom: 0.8rem;margin-top:2.4rem;
		+ *{margin-top:0;}
	}
	> .inp-label + *{margin-top:0.8rem;}
  > .inp-label ~ .inp-label{margin-top:2.4rem;}
  .input-wrap{display:flex;align-items:center;flex-wrap:wrap;
    .input{flex:1;overflow:hidden;}
    .btn-certify{display:flex;justify-content:center;align-items:center; height:4.8rem; line-height:4.5rem; border-radius:1rem;border:1px solid ${COLOR.primary};width:8.4rem; color:${COLOR.primary};font-size:1.6rem;font-weight:500;margin-left:0.8rem;
      &:disabled{border-color: #D4D6E3; color:#D4D6E3;}
    }	
  }
  .txt-inp-error{width:100%; color:${COLOR.red};font-size:1.2rem;margin-top:0.8rem;}
}
`

export const DateText = `
	.date-text{
		display:flex;align-items:flex-end;
		+ *{margin-top:1.6rem;}
		.year {font-size:1.4rem;margin-right:0.3rem;}
		.date {font-weight:600;font-size:1.8rem;line-height:1.2; }
		.day {margin-left:0.8rem;font-size:1.6rem;}
	}
`

export const Thumb = `
	position:relative;overflow:hidden;background:#fff; border-radius:100%; display:flex;justify-content:center;align-items:center;
	img {object-fit: cover;max-width: 100%;max-height: 100%;width: 100%;height: 100%; }
	> .btn-del{position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;border-radius:100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 1;}
`

export const FileList = `
.file-list{
	ul {margin-top: 0.8rem;
		li { display: flex; align-items: center; min-height: 4rem; padding:0.5rem 0; border: 1px solid #D4D6E3; border-radius: 1rem; color: rgba(80, 80, 80, 1); font-size: 1.4rem;
			~ li { margin-top: 0.8rem; }
			.ico-clip{margin-left: 1.6rem; 
				+ .filename {margin-left:0.5rem}
			}
			.filename { display: flex; align-items: center; margin: 0 1.6rem; word-break:break-all;}
			.byte {white-space:nowrap;
				&:last-child{padding-right:2rem;}
			}
			.right { margin-left: auto; display: flex; align-items: center;
				.btn-del { width: 4rem; height: 3rem; background: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.06283 0.999512L1.06287 8.94419' stroke='%23878AA1'/%3E%3Cpath d='M9.06287 9.00049L1.06291 1.00049' stroke='%23878AA1'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 0.8rem; }
			}
		}
	}
	.total-byte { font-size: 1.4rem; margin-top: 0.7rem; text-align: right;  color:rgba(80, 80, 80, 1);}
	}
`

export const BtnTime = `
	button.btn-time	{margin-right:-0.5rem; padding-right:2.5rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem; }
	.btn-time{margin-left:auto;letter-spacing:-0.02em; font-size:1.4rem;color:${COLOR.primary};font-weight:500; white-space:nowrap;display:flex;align-items:center;
		> * ~ *{padding-left:0.5rem;}
		.ampm{font-size:1.2rem; line-height:1;
			+ .time{padding-left:0.2rem;transform: translateY(0);font-size:1.4rem; line-height:1;
				&:before{display:none;}
			}
		}
		
	}
`

export const SelectBox = `
	.select-box{
		background: #fff; border: 0.1rem solid #ECEEF5; padding: 2rem 1.6rem; border-radius: 1rem;
		.tit { display: block; font-size: 1.8rem; font-weight: 600; }
		> .tit {margin-bottom:2.8rem;}
		ul { margin-top: 2rem;
			&:first-of-type{margin-top:0;}
			li { 
				display:flex;align-items:center;
				~ li { margin-top: 2.5rem; }
				.inp-radio .t { font-size: 1.6rem; padding-left: 1.5rem; }
				${BtnTime}
			}
		}
	}
`

export const NoData = `
	.no-data-content{
		display:flex;flex:1;flex-direction:column; min-height:calc(100vh - 5.6rem)
	}
	.no-data{flex:1;display:flex;justify-content:center;align-items:center; flex-direction:column;
		&:before{content:'';display:inline-block;width:13.4rem; height:13.4rem;background: ${MX.src('/images/visual-nodata.svg')} no-repeat 0 0; background-size: auto 100%;}
		&.type2{
			margin:3rem 0;
			&:before{display:none;}
		}
		.txt{font-size:1.6rem; color:#878AA1;margin-top:1.6rem;}
	}
`

export const DashboardBox = `
	.dashboard-box{
		margin-top: 1rem;
		ul { display: flex; align-items: center; background: ${COLOR.primary}; border-radius: 1rem; box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2); color: #fff; padding: 1.3rem 0;
			li { flex: 1; position: relative; display: flex; justify-content: center; align-items: center; flex-direction: column; justify-content: space-between;
				~ li:before { content: ''; display: block; position: absolute; top: 50%; left: 0; height: 3rem; width: 0.1rem; background: rgba(255, 255, 255, 0.2); transform: translateY(-50%); }
				em { font-weight: 500; font-size: 1.2rem; 
					[class*=ico-dashboard]{ width: 1.6rem; height: 1.6rem; margin-right: 0.4rem;vertical-align: middle;}
				}
				b { font-weight: 700; font-size: 2rem; line-height:1;margin-top:0.8rem;display:block;}
				span {
					font-weight: 500;
					font-size: 1.4rem;
					color: rgba(255, 255, 255, 1);
					line-height:1;
					margin-top:0.8rem;
				}
			}
		}

		&.st2{
			ul{padding:1.5rem 0;
				li ~ li:before{top:initial;bottom:0.5rem;transform:translateY(0);height:2.8rem;}
				li b{margin-top:1rem;line-height:1;margin-bottom:1rem;}
			}
		}
	}
`

export const DataTable = `
	.data-type1 { border-radius: 1rem; border: 1px solid #ECEEF5; padding: 0 1.5rem; background: #fff;
		table {width: 100%;
			th, 
			td { height: 5.5rem; text-align: center; vertical-align: middle; }
			th { font-size: 1.6rem; color: #999999; }
			td { border-top: 1px solid #ECEEF5; font-size: 1.6rem; font-weight: 500; color: #383838;}
		}
	}
`

export const DataTable2 = `
  .echart + .data-table,
  .chart + .data-table{margin-top:3.2rem;}
	.data-table{${scrollbar}
		overflow-x:auto; 
		table {min-width: 100%; border-collapse: collapse;
			th{height:3.4rem;padding:0.5rem 1rem; border-top:1px solid #D4D6E3;border-bottom:1px solid #D4D6E3;background:#F5F6FA;font-size:1.2rem;font-weight:500;white-space:nowrap;vertical-align:middle; color:#878AA1;}
			td{height:4.2rem;padding:0.5rem 1rem; border-bottom:1px solid #ECEEF5; color:#60637B;font-size:1.4rem;font-weight:500; white-space:nowrap;text-align:center;vertical-align:middle;
				b{font-weight:500; color:#383838;line-height:1;}
				.light{font-weight:400; color:#878AA1;}
			}
		}
	}
`

export const DataTableList = `
	.data-table-list {
		.row { display: flex; align-items: center; border-radius: 1rem; overflow: hidden;
			.cell { height: 100%; display: flex; justify-content: center; align-items: center; }
			.auto { flex: 1; }
		}

		.list-header .row { height: 4.8rem; background: #ECEEF5;
			.cell { height: 100%; font-size: 1.4rem; font-weight: 500; }
		}

		.list-body { margin-top: 1.2rem;
			.row { height: 5.6rem; background: #fff; border: 0.1rem solid #ECEEF5;
				~ .row { margin-top: 0.8rem; }
				.cell { font-size: 1.4rem; }
			}
		}
	}

`

export const ListBox = `
	.list-box-wrap {
		~ .list-box-wrap { margin-top: 2.4rem; }
		.box-tit {
			display: flex; align-items: center;
			~ .box-tit{margin-top: 2.4rem;}
			+ * { margin-top: 0.8rem; }
			.tit { font-size: 1.8rem; font-weight: 500; }
			.right { margin-left: auto; display:flex;align-items:center;}
			.btn-menu,
			.btn-modify{display:flex;justify-content:center;align-items:center;}
		}
	}
	.list-box {
		border: 0.1rem solid #ECEEF5; border-radius: 1rem; background: #fff;
		ul {
			font-size: 1.6rem;padding: 0 1.6rem;
			li {
				display: flex; align-items: center; min-height: 5.6rem; padding: 1.6rem 0; flex-wrap:wrap;
				~ li { border-top: 0.1rem solid #ECEEF5; }
				.right { margin-left: auto; font-weight: 500; }
				.teacher{font-weight:400; font-size:1.4rem;
					b{font-weight:500;vertical-align:baseline; font-size:1.6rem;}
				}
			}
		}
		.time {
			font-size: 1.2rem; font-weight: 500; display: flex; align-items: center;color: ${COLOR.primary};

			&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.5rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%234252E2'/%3E%3Cpath d='M11.6017 9.25789H8.26406C7.58436 9.25789 7.03654 8.71008 7.03654 8.03037V4.31738H8.55826V7.73618H11.6118V9.25789H11.6017Z' fill='%234252E2'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
		}
		.doc-time {
			height: 2.4rem; line-height: .4rem; padding: 0 0.8rem; background: #ECEEF5; border-radius: 2.4rem; display: flex; align-items: center; font-size: 1.2rem; font-weight: 500; color: #60637B;

			&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.4rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1630_46536)'%3E%3Cpath d='M12.9891 6.24632C12.9957 6.25367 12.9994 6.26322 12.9994 6.27312V12.1179C12.9994 12.8832 12.3615 13.5 11.5693 13.5H4.42943C3.63725 13.5 2.99939 12.8832 2.99939 12.1179V3.88183C2.99939 3.11652 3.63725 2.4997 4.42943 2.4997H8.95295C9.22455 2.4997 9.48447 2.61017 9.67296 2.80573L12.9891 6.24632V6.24632Z' stroke='%2360637B' stroke-miterlimit='10'/%3E%3Cpath d='M8.99939 3V6H12.9994' stroke='%2360637B' stroke-miterlimit='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1630_46536'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
		}

		&.st2{background:none;border:none;padding:0 0;
			ul{padding:0 0;
				> li{padding-left:0;padding-right:0;
					.right { color:#BDC0D2;font-weight:400;}
				}
			}
		}

		${BtnTime}
	}
`

export const BannerProfile = `
	.banner-profile-wrap .banner-profile ~ .banner-profile{margin-top:0.8rem;}
	.banner-profile{
		&.align-c > *{justify-content: center;}
	> *{background:#f5f6fa;border-radius:1rem;padding:0 2.7rem;min-height:5.6rem; font-size:1.6rem; display:flex;align-items:center;width:100%;border:1px solid transparent;
		&.on,
		&:focus{border-color: ${COLOR.primary};}
	}

		.cls-default {display:inline-block;width:2.4rem;height:2.4rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.23 22C5.71536 22 1.22998 17.5146 1.22998 12C1.22998 6.48538 5.71536 2 11.23 2C16.7446 2 21.23 6.48538 21.23 12C21.23 17.5146 16.7446 22 11.23 22ZM11.23 3.62514C6.6146 3.62514 2.85512 7.38462 2.85512 12C2.85512 16.6154 6.6146 20.3749 11.23 20.3749C15.8454 20.3749 19.6049 16.6154 19.6049 12C19.6049 7.38462 15.8454 3.62514 11.23 3.62514Z' fill='%23383838'/%3E%3Cpath d='M11.425 17.8071C9.99484 17.8071 8.7164 17.3088 7.9905 16.8537C7.6113 16.6154 7.49213 16.117 7.73048 15.7378C7.96884 15.3586 8.46721 15.2394 8.84641 15.4778C8.97642 15.5645 11.7067 17.1788 13.9927 15.2503C14.3394 14.9686 14.8486 15.0011 15.1411 15.3478C15.4336 15.6945 15.3903 16.2037 15.0436 16.4962C13.8843 17.4713 12.6059 17.8071 11.4358 17.8071H11.425Z' fill='%23383838'/%3E%3Cpath d='M13.6244 10.7541H8.359C7.06972 10.7541 6.0188 9.70318 6.0188 8.4139V3.62517L7.64394 3.33264V8.40307C7.64394 8.7931 7.95813 9.11813 8.359 9.11813H13.6244C14.0145 9.11813 14.3395 8.7931 14.3395 8.40307V3.33264H15.9646V8.40307C15.9646 9.69235 14.9137 10.7433 13.6244 10.7433V10.7541Z' fill='%23383838'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M8.57566 20.6673L2.57349 16.0411L2.69266 8.08878L8.57566 3.34338V20.6673Z' fill='%23383838'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
		.img {${Thumb};
			width:4rem;height:4rem;position:relative;margin-right:1rem;display:flex;justify-content:center;align-items:center;
		}
		.name {font-weight:500;padding-left:1.6rem;margin-left:1.6rem;position:relative;
			&:before{content:'';display:block;position:absolute;top:50%;left:0; width:0.1rem;height:1.3rem;background:#D9D9D9;transform:translateY(-50%);}
		}
		.parent{font-size:1.4rem; color:#878AA1;margin-top:0.4rem;}

		&.st2 > *{background:#fff;}	
	}
`

export const NoticeBox = `
.notice-box{
  background: #fff; border: 0.1rem solid #ECEEF5; padding: 2rem 1.6rem; border-radius: 1rem;

  .tit {position: relative; display: block; font-size: 1.8rem; font-weight: 600; display: flex; align-items: center; margin-bottom: 1rem;  color:#60637B;
    &:before { content: ''; display: inline-block; margin-right: 0.4rem; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 2C5.18478 2 2.5 4.68478 2.5 8C2.5 11.3152 5.18478 14 8.5 14C11.8152 14 14.5 11.3152 14.5 8C14.5 4.68478 11.8152 2 8.5 2ZM8.5 11.5217C8.05435 11.5217 7.68478 11.1522 7.68478 10.7065C7.68478 10.2609 8.05435 9.8913 8.5 9.8913C8.94565 9.8913 9.31522 10.2609 9.31522 10.7065C9.31522 11.1522 8.94565 11.5217 8.5 11.5217ZM9.31522 9.19565H7.68478V4.46739H9.31522V9.19565Z' fill='%23878AA1'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
  }

  .text p { color: #878AA1; font-size: 1.4rem;word-break:keep-all;
    ~ p { margin-top: 1rem; }
  }
}
`

export const ViewDetail = `
.view-detail { background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem; padding: 2.4rem 1.6rem;
	+ *{margin-top:2.4rem;}
	* ~ .banner-profile{margin-top:1.6rem;}
	* ~ .view-desc{margin-top:2.4rem;}
	.select-item-list-wrap ~ .view-desc{margin-top:3.2rem;}
	.view-desc { position: relative; border-bottom: 0.1rem solid #ECEEF5; padding-bottom: 1.6rem;
		.btn-dot-menu { position: absolute; top: -0.8rem; right: 0; }
		.tit { display: block; font-size: 1.8rem; font-weight: 500; margin-bottom:1.6rem;  color:#383838;}
		.info { display: flex; align-items: flex-start;
			.right { margin-left: auto; }

			.date { font-size: 1.2rem; color: #878AA1; display: block;
				~ .date { margin-top: 0.5rem; }
			}

			.writer { font-size: 1.4rem; color: #878AA1; }
		}

	}
	.time-box{border:1px solid #D4D6E3;border-radius:1rem; background:#F5F6FA;padding:1.4rem 1.6rem;font-size:1.4rem; color:#505050;margin-top:2.4rem;
		> *{
			line-height:1.2;
			~ *{margin-top:0.5rem;}
			> * ~ *{margin-left:0.8rem;}
		}
	}
	
	.file-list ul li{background:#F5F6FA;  color:#878AA1;border:none;}

	.content-tit {font-weight:700;font-size:1.8rem; color:#4252E2;}
	.content-view { padding-top: 2.4rem; color: #505050; font-size:1.6rem;
		ul:not(dash) li { padding-left: 2rem; position: relative;
			&:before { content: ''; display: block; width: 0.3rem; height: 0.3rem; background: #505050; border-radius: 100%; position: absolute; top: 0.8rem; left: 1rem; }
			~ li{margin-top:0.2rem;}
		}
		ul.dash li { padding-left: 2rem; position: relative;
			&:before { content: ''; display: block; width: 0.4rem; height: 0.1rem; background: #505050; border-radius: 100%; position: absolute; top: 0.9rem; left: 1rem; }
			~ li{margin-top:0.2rem;}
		}

		img { max-width: 100%; width:auto;height:auto;border-radius:1rem;}
	}
}
`

export const FormatViewDetail = `
	.format-view-detail {
		padding: 2.4rem 1.6rem; background: #fff; border-radius: 1rem; border:0.1rem solid #ECEEF5;
		.img-wrap {
			&:empty + .info-wrap{margin-top:0;}
			display: flex; flex-direction: column;
			> * ~ * { margin-top: 0.8rem; }
			img { width: auto !important; max-width: 100%; height: auto !important; border-radius: 1rem; }
		}
		.info-wrap {
			margin-top: 2.4rem;
			&:first-of-type{margin-top:0;}
			ul {
				font-weight: 500; font-size: 1.6rem;
				li {
					display: flex; align-items: center;

					~ li { margin-top: 0.8rem; }
					.label { color: #505050; display: inline-flex; align-items: center; }
					.right { margin-left: auto; color: #4252E2; }
					.label .ico { margin-right: 0.8rem; }
				}
			}
		}
		.text-view { border-top: 0.1rem solid #ECEEF5; padding-top: 2.4rem; margin-top: 2.4rem; font-size: 1.6rem; white-space: pre-line; }
	}
`

export const LinkMenuList = `
	.link-menu-list{
		li{
			~ li{margin-top:0.8rem;}
			button,
			a {width:100%; height:5.6rem;padding:0 1.6rem;font-weight:500; display:flex;align-items:center;justify-content: flex-start; border-radius:1rem;border:0.1rem solid #ECEEF5;font-size:1.6rem; background:#fff url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;}
		}
	}
`

export const FloatingMenu = `
	.has-quick-menu .floating-menu,
	.floating-menu{position:fixed;bottom:2rem;display:flex;flex-direction: column;width:100%;max-width: 475px;height:0;z-index: 6;transition: all 0.5s ease;
		&.hide{opacity:0;}
		&.on{opacity:1 !important;}
		[class*=btn-]{position:absolute;bottom:0;right:2rem;width:5.6rem;height:5.6rem;border-radius:100%;
			~ [class*=btn-]{margin-top:0.8rem;}
		}
		.btn-plus{box-shadow: 0px 0.6rem 1rem rgba(0, 0, 0, 0.2); background:${COLOR.primary} url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 6.6665V25.3332' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25.334 15.9998L6.66732 15.9998' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 3.2rem;}
		.btn-write{display:inline-flex;align-items:center; height:5.6rem;white-space:nowrap;width:auto; padding:0 1.6rem;box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);background: #4252E2;font-size:1.6rem; color:#fff; font-weight:500;border-radius: 5.6rem;
			&:before{content:'';display:inline-block;width:2rem;height:2rem;margin-right:1rem;background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.75 3.5C2.05964 3.5 1.5 4.05964 1.5 4.75V17.25C1.5 17.9404 2.05964 18.5 2.75 18.5H15.25C15.9404 18.5 16.5 17.9404 16.5 17.25V10.9996C16.5 10.5854 16.8358 10.2496 17.25 10.2496C17.6642 10.2496 18 10.5854 18 10.9996V17.25C18 18.7688 16.7688 20 15.25 20H2.75C1.23122 20 0 18.7688 0 17.25V4.75C0 3.23122 1.23122 2 2.75 2H8.74927C9.16348 2 9.49927 2.33579 9.49927 2.75C9.49927 3.16421 9.16348 3.5 8.74927 3.5H2.75Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.5657 2.12132L9.30836 8.3787L9.30836 10.5L11.4297 10.5L17.6871 4.24264L15.5657 2.12132ZM10.5514 11.9997C10.5514 11.6707 10.6574 11.3664 10.8371 11.1191C10.6533 11.3726 10.5514 11.6801 10.5514 11.9997ZM9.15543 8.41793C9.09298 8.54506 9.01308 8.66205 8.91884 8.76577C9.09294 8.57405 9.21349 8.34157 9.27062 8.09177C9.24518 8.20364 9.20679 8.31316 9.15543 8.41793ZM8.86887 6.6976C9.08296 6.9117 9.21878 7.17442 9.27633 7.45022C9.21692 7.16736 9.07651 6.90524 8.86887 6.6976ZM7.82438 9.25727C8.19251 9.25335 8.54546 9.11422 8.81677 8.86783C8.55412 9.10648 8.20641 9.2532 7.82438 9.25727ZM11.4307 10.634C11.3415 10.6745 11.2571 10.7236 11.1783 10.78C11.3424 10.6626 11.5285 10.5797 11.7249 10.5359C11.6244 10.5581 11.5258 10.5908 11.4307 10.634ZM12.3671 10.5339C12.2641 10.5116 12.1575 10.5001 12.0504 10.5L12.3671 10.5339ZM13.1108 10.9395C12.9054 10.7341 12.6466 10.5944 12.3671 10.5339C12.6396 10.5925 12.899 10.7277 13.1108 10.9395ZM19.1013 3.53554C19.4918 3.92606 19.4918 4.55923 19.1013 4.94975L12.0515 11.9995L12.0501 12.0002L8.80836 12C8.25607 12 7.80836 11.5523 7.80836 11L7.80836 7.75863L7.80821 7.75753L14.8586 0.707107C15.2492 0.316583 15.8823 0.316583 16.2728 0.707107L19.1013 3.53554Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
			&:disabled{background:rgba(236, 238, 245, 1); color:rgba(160, 164, 190, 1);
				&:before{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H18.25C18.9404 19.5 19.5 18.9404 19.5 18.25V11.9996C19.5 11.5854 19.8358 11.2496 20.25 11.2496C20.6642 11.2496 21 11.5854 21 11.9996V18.25C21 19.7688 19.7688 21 18.25 21H5.75C4.23122 21 3 19.7688 3 18.25V5.75C3 4.23122 4.23122 3 5.75 3H11.7493C12.1635 3 12.4993 3.33579 12.4993 3.75C12.4993 4.16421 12.1635 4.5 11.7493 4.5H5.75Z' fill='%23A0A4BE'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.5657 3.12132L12.3084 9.3787L12.3084 11.5L14.4297 11.5L20.6871 5.24264L18.5657 3.12132ZM13.5514 12.9997C13.5514 12.6707 13.6574 12.3664 13.8371 12.1191C13.6533 12.3726 13.5514 12.6801 13.5514 12.9997ZM12.1554 9.41793C12.093 9.54506 12.0131 9.66205 11.9188 9.76577C12.0929 9.57405 12.2135 9.34157 12.2706 9.09177C12.2452 9.20364 12.2068 9.31316 12.1554 9.41793ZM11.8689 7.6976C12.083 7.9117 12.2188 8.17442 12.2763 8.45022C12.2169 8.16736 12.0765 7.90524 11.8689 7.6976ZM10.8244 10.2573C11.1925 10.2533 11.5455 10.1142 11.8168 9.86783C11.5541 10.1065 11.2064 10.2532 10.8244 10.2573ZM14.4307 11.634C14.3415 11.6745 14.2571 11.7236 14.1783 11.78C14.3424 11.6626 14.5285 11.5797 14.7249 11.5359C14.6244 11.5581 14.5258 11.5908 14.4307 11.634ZM15.3671 11.5339C15.2641 11.5116 15.1575 11.5001 15.0504 11.5L15.3671 11.5339ZM16.1108 11.9395C15.9054 11.7341 15.6466 11.5944 15.3671 11.5339C15.6396 11.5925 15.899 11.7277 16.1108 11.9395ZM22.1013 4.53554C22.4918 4.92606 22.4918 5.55923 22.1013 5.94975L15.0515 12.9995L15.0501 13.0002L11.8084 13C11.2561 13 10.8084 12.5523 10.8084 12L10.8084 8.75863L10.8082 8.75753L17.8586 1.70711C18.2492 1.31658 18.8823 1.31658 19.2728 1.70711L22.1013 4.53554Z' fill='%23A0A4BE'/%3E%3C/svg%3E%0A");}
			}
		}
	}
`

export const ChildInfoList = `
	.child-info-list {
		.menu { margin-bottom: 1.6rem; }
		ul li {
			~ li { margin-top: 0.8rem; }
			.box {
				text-align:left; justify-content:flex-start;
				width: 100%; display: flex; align-items: center; flex-wrap: wrap; border-radius: 1rem; background: #fff; border: 0.1rem solid #ECEEF5; min-height: 8rem; padding: 1.6rem;

				.inp-check { margin-right: 1.6rem; }
				.thumb {${Thumb}; margin-right: 1.6rem; width: 4rem; min-width: 4rem; height: 4rem; border-radius: 100%; overflow: hidden; }
				.desc {
					flex:1;
					.info {
						span{position: relative; font-size: 1.6rem; display: inline-block; position: relative;
							~ b {
								padding-left: 1.5rem; margin-left: 1.5rem;
	
								&:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 1.3rem; background: #D4D6E3; transform: translateY(-50%); }
							}
						}
						b{position: relative;padding-left:1.5rem;margin-left:1.5rem;font-weight:500;font-size:1.6rem;}
					}
					.teacher,
					.parents { margin-top: 0.4rem; color: #878AA1; font-size: 1.4rem; text-align: left; }
				}
				.time {
					margin-left: auto; font-size: 1.2rem; font-weight: 500; display: flex; align-items: center;

					&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.5rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%23666666'/%3E%3Cpath d='M11.6017 9.25789H8.26405C7.58435 9.25789 7.03653 8.71008 7.03653 8.03037V4.31738H8.55825V7.73618H11.6118V9.25789H11.6017Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				}
				.reserve { color: #DC0000; display: inline-flex; align-items: center; margin-left:auto;font-size: 1.2rem; font-weight: 500; 
						&:before { content: ''; display: block; width: 1.85rem; height: 1.85rem; margin-right: 0.5rem;  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.77983 14.28C5.63983 14.28 3.07983 11.72 3.07983 8.58C3.07983 5.44 5.63983 2.88 8.77983 2.88C11.9198 2.88 14.4798 5.44 14.4798 8.58C14.4798 11.72 11.9198 14.28 8.77983 14.28ZM8.77983 4.12C6.31983 4.12 4.31983 6.12 4.31983 8.58C4.31983 11.04 6.31983 13.04 8.77983 13.04C11.2398 13.04 13.2398 11.04 13.2398 8.58C13.2398 6.12 11.2398 4.12 8.77983 4.12Z' fill='%23DC0000'/%3E%3Cpath d='M11.7198 9.59996H8.99976C8.44976 9.59996 7.99976 9.14996 7.99976 8.59996V5.57996H9.23976V8.36996H11.7198V9.60996V9.59996Z' fill='%23DC0000'/%3E%3Cpath d='M4.42872 1.72042L2.01367 4.11365L2.8865 4.99443L5.30154 2.6012L4.42872 1.72042Z' fill='%23DC0000'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; margin-right: 0.4rem; }
				}
				.box-link { display: flex; align-items: center; justify-content: flex-start; width: 100%; text-align: left; }
				.attendance-info {
					display: flex; align-items: center; margin-top: 0.5rem; flex-wrap:wrap;

					> * { margin-right: 1.1rem;
						color: #878AA1; font-weight: 500; display: flex; align-items: center; letter-spacein:-0.03em; min-width:6rem;
						i { margin-right: 0.4rem; }
						span {
							line-height: 1; white-space:nowrap;font-size:1.2rem;

							&.num { letter-spacing: -0.04em; font-size:1.2rem; line-height:1;vertical-align:baseline; }
						}
						&.on{ color: ${COLOR.primary};}
					}
					.caution { color: ${COLOR.red}; }
				}
				.box-menu {${scrollbar}
					&:empty{display:none;}
					padding-bottom:0.5rem;margin-bottom:-0.5rem;
					width: 100%; display: flex; align-items: center; border-top: 0.1rem solid #ECEEF5; padding-top: 1rem; margin-top: 1rem; overflow-x:auto;
					> *, button { height: 2.4rem; padding: 0 0.8rem; background: #ECEEF5; border-radius: 2.4rem; display: inline-flex; align-items: center; margin-right: 0.8rem;}
					> * {
						i { margin-left: 0.4rem; }
						span { line-height: 1; color: #505050; font-size:1.2rem;white-space:nowrap;}
					}
				}
				.code { color: #878AA1; font-size: 1.4rem; margin-top: 0.4rem; }
				&.disabled .thumb img { opacity: 0.4; }
			}
		}
	}


`

export const SelectItemList = `
	.select-item-list-wrap .tit {
		font-size: 1.6rem; margin-bottom: 1.6rem;
		.label em { color: ${COLOR.primary}; vertical-align: baseline; font-weight:500;}
	}
	.select-item-list {
		overflow: hidden; width: calc(100% + 3.2rem); margin-left: -1.6rem;
		.swiper{padding-right:3.2rem;}
		.swiper-wrapper {
			padding: 0 1.6rem; 
			.swiper-slide { position: relative; min-width: 9rem; width: 9rem;
				~ .swiper-slide { margin-left: 0.8rem; }
				.btn-del { position: absolute; top: 0; right: 0; width: 2.4rem; height: 2.4rem; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0009 9L9.00098 15' stroke='%23878AA1' stroke-linecap='round'/%3E%3Cpath d='M15 15.0009L9.00003 9.00098' stroke='%23878AA1' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 2.4rem; }
				.box { display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; height: 10.4rem; border-radius: 1rem; border: 0.1rem solid #D4D6E3; background: #fff;
					&.total{background:#F5F6FA;}
					.thumb { ${Thumb}; width: 4rem; height: 4rem; border-radius: 100%; overflow: hidden; overflow: hidden; 
						&.total{background:#fff url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.89 4.29953L21.31 3.73953C21.09 3.69953 15.97 2.67953 13.17 5.57953C12.66 6.09953 12.28 6.72953 12 7.42953C11.72 6.72953 11.34 6.10953 10.83 5.57953C8.03001 2.67953 2.91001 3.68953 2.69001 3.73953L2.11001 4.29953C2.06001 4.50953 0.910009 9.46953 3.27001 12.4595C4.40001 13.8895 6.10001 14.6095 8.33001 14.6095H10.79L10.87 14.6895L10.95 14.6095H11.04V21.4795H12.54V14.5095L12.67 14.6095H13.05L13.13 14.6895L13.21 14.6095H15.67C17.9 14.6095 19.6 13.8895 20.73 12.4595C23.09 9.46953 21.94 4.50953 21.89 4.29953ZM8.34001 13.0995C6.59001 13.0995 5.29001 12.5695 4.46001 11.5195C2.93001 9.57953 3.28001 6.33953 3.49001 5.11953C4.72001 4.95953 7.98001 4.74953 9.77001 6.60953C10.96 7.84953 11.32 9.83953 10.85 12.5095L5.88001 7.53952L4.82001 8.59953L9.31001 13.0895H8.35001L8.34001 13.0995ZM19.55 11.5295C18.72 12.5695 17.42 13.1095 15.67 13.1095H14.71L19.2 8.61953L18.14 7.55953L13.17 12.5295C12.71 9.84953 13.06 7.86952 14.25 6.62952C16.04 4.76952 19.3 4.97953 20.53 5.13953C20.73 6.35953 21.09 9.59952 19.56 11.5395L19.55 11.5295Z' fill='%234252E2'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M7.94001 13.89L3.84001 12.4L2.51001 4.64996L7.94001 4.45996V13.89Z' fill='%234252E2'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}
					}
					.cls { font-size: 1.2rem; color: #878AA1; margin-top: 0.7rem; }
					.name { font-size: 1.6rem; font-weight: 500; line-height: 1; margin-top:0.2rem;
						b { font-weight: 500; line-height: 1; }
					}
					&.on { border-color: #4252E2; background: rgba(66, 82, 226, 0.1); }
				}
			}
			
		}
	}

`

export const ToggleViewBox = `
	.toggle-view-box { padding:2.4rem 1.6rem; background: #fff; border: 0.1rem solid #ECEEF5; border-radius: 1rem;
		.box-header { position: relative; width: 100%; text-align: left;
			b { font-weight: 500; font-size: 2rem; }
			&:after { content: ''; display: block; position: absolute; top: -0.8rem; right: -1rem; width: 4.4rem; height: 4.4rem; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 9L12 16L19 9' stroke='%23505050' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 2.4rem; }
		}
		&.on .box-header:after { transform: rotate(-180deg); }
		&.on .box-body{display:block;}

		.box-body {
			display:none;
			padding-top: 1.6rem;
			.total-text { font-size: 1.4rem; color: #878AA1;padding-bottom:1.6rem;border-bottom:0.1rem solid #EEEEEE;}
		}
	}
`

export const gageBar = `
	.gage-wrap .gage-bar {
		display: flex;  align-items: center;
		&.today {
			.label { color: ${COLOR.primary}; }
			.gage .bar { background: ${COLOR.primary}; }
		}
		~ .gage-bar { margin-top: 0.8rem; }
		.label { display: inline-block; font-size: 1.4rem; font-weight: 500; color: #60637B; width: 6rem; }
		.gage { display: flex; align-items: center; border: 0.1rem dashed #D4D6E3; background: #F4F6FA; height: 1rem; border-radius: 1rem; width: 17.6rem;
			.bar { display: block; height: calc(100% + 0.2rem);margin-top:-0.05rem; border-radius: 1rem; background: #BDC0D2; }
		}
	}
`

export const CheckStatusList = `
	.check-status-list {
		padding: 2.4rem 1.6rem; background: #fff; border: 0.1rem solid #ECEEF5; border-radius: 1rem;
		.row {
			~ .row { border-top: 0.1rem solid #ECEEF5; margin-top: 1.6rem; padding-top: 1.6rem; }
			.title { display: block; margin-bottom: 1.6rem;
				.tit { font-size: 1.8rem; font-weight:600;}
				.txt { font-size: 1.4rem; color: #A0A4BE; margin-left: 1.6rem; }
			}

			.check-item { display: grid; grid-gap: 1.6rem 0; grid-template-columns: repeat(3, 1fr);
				&.item2 li:nth-child(even) { grid-column: 2 / span 2; }
			}
		}
	}

`

export const AlbumList = `
	.album-list {
		display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.4rem;

		li {position:relative;
			.btn-del { position: absolute; top: 0.5rem; right: 0.5rem; width: 2rem; height: 2rem; border-radius: 100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; z-index: 1; }
			.img { vertical-align:top;
				width: 100%; position: relative;
				&:after { display: block; content: ""; padding-bottom: 100%; }
				img { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; border-radius: 0.8rem; transform:translate(-50%, -50%);}
			}		
		}
	}
`

export const CheckSelectList = `
.check-select-list {
	li {
		padding: 1.2rem 0;
		.tit { font-size: 1.6rem; color: #111; display: block; padding-bottom: 1.6rem; font-weight: 500; }
		.inp-radio .t { font-size: 1.6rem; padding-left: 0.8rem; color: #111; }
	}
	> fieldset > ul,
	> ul {
		> li {
			padding: 2.4rem 0;
			~ li { border-top: 0.1rem solid #ECEEF5; }
			ul{
				label{margin-left:1.6rem;}
			}	
		}
		ul li:last-child { padding-bottom: 0; }
	}
}
`

export const InfoDescBox = `
	.info-desc-box {
		display: flex; align-items: center; height: 8rem; background: #F5F6FA; border-radius: 1rem;

		li {
			position: relative; height: 100%; flex: 1; display: flex; justify-content: center; align-items: center; flex-direction: column;

			~ li:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 4rem; background: #D4D6E3; transform: translateY(-50%); }
			em { color: #878AA1; font-size: 1.4rem; }
			span { display: block; margin-top: 0.5rem; color: #60637B; font-size: 1.6rem; font-weight: 500; }
		}
	}
`
export const DateIime = `
	.date-time{width:100%;margin-top:0.8rem;display:flex;align-items:center;gap:0.8rem;
		.bt-date,
		.bt-time{flex:1; height:4.8rem;line-height:4.8rem; border:0.1rem solid #D4D6E3;border-radius:1rem;background:#fff;padding-left:4rem;font-size:1.6rem; transform: translateY(0);display:flex;align-items:center;justify-content;flex-start;font-weight:400;  color:#383838;}
		.bt-date{background:#fff url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_500_24180)'%3E%3Cpath d='M5.5 1.98242V5.98242' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M10.5 1.98242V5.98242' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M12.8146 3.98242H3.18544C2.53074 3.98242 2 4.51316 2 5.16786V14.297C2 14.9517 2.53074 15.4824 3.18544 15.4824H12.8146C13.4693 15.4824 14 14.9517 14 14.297V5.16786C14 4.51316 13.4693 3.98242 12.8146 3.98242Z' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M5.25 10.5928H10.89' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_500_24180'%3E%3Crect width='16' height='16' fill='white' transform='translate(0 0.982422)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%;background-size:auto 1.6rem;}
		.bt-time{background:#fff url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_500_24184)'%3E%3Cpath d='M8.0001 15.882C4.2001 15.882 1.1001 12.782 1.1001 8.98203C1.1001 5.18203 4.2001 2.08203 8.0001 2.08203C11.8001 2.08203 14.9001 5.17203 14.9001 8.98203C14.9001 12.792 11.8101 15.882 8.0001 15.882ZM8.0001 3.58203C5.0201 3.58203 2.6001 6.00203 2.6001 8.98203C2.6001 11.962 5.0201 14.382 8.0001 14.382C10.9801 14.382 13.4001 11.962 13.4001 8.98203C13.4001 6.00203 10.9801 3.58203 8.0001 3.58203Z' fill='%23A0A4BE'/%3E%3Cpath d='M11.55 10.2216H8.26005C7.59005 10.2216 7.05005 9.68156 7.05005 9.01156V5.35156H8.55005V8.72156H11.56V10.2216H11.55Z' fill='%23A0A4BE'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_500_24184'%3E%3Crect width='16' height='16' fill='white' transform='translate(0 0.982422)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%;background-size:auto 1.6rem;
			&:before{display:none;}
			.ampm{margin-right:0.5rem;font-size:1.4rem;}
			.time{ color:#383838;font-size:1.6rem;transform:translateY(0);font-weight:400;
				&:before{display:none;}
			}
		}
		.placeholder{ color:#A0A4BE;}
	}
`
export const MonthIndicator = `
	.monthly-indicator{
		display:flex;justify-content:center;align-items:center;
		+ *{margin-top:1.6rem;}
		b{font-weight:600;font-size:1.8rem;}
		.sub{font-size:1.4rem; color:#383838;margin-left:0.8rem;}
		> button{width:4rem;height:4rem; background-size:auto 100%;background-position:50% 50%;background-size:auto 2.4rem;background-repeat:no-repeat;
			&.btn-prev{margin-right:1rem;background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 20L8 12L16 4' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			&.btn-next{margin-left:1rem;background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			&.disabled{opacity:0.3}
		}
	}
`
export const ListDot = `
	.echart + .list-dot,
	.chart + .list-dot,
	.data-table + .list-dot{margin-top:3.2rem;}
	.list-dot{font-size:1.4rem; color:#60637B;
		li{padding-left:1.8rem;position:relative;list-style-type:none;
			&:before{content:'';display:block;width:0.3rem;height:0.3rem;background:#60637B;border-radius:100%;position:absolute;top:0.8rem;left:0.7rem;}
		}
	}
`
