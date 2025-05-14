import { BannerProfile, CheckSelectList, COLOR, Thumb } from '@/shared'
import styled from '@emotion/styled'

export const Popup = styled.div`
	${BannerProfile}
	${CheckSelectList}

	position:fixed;top:0;width:100%;height:100%;min-width:280px;z-index:80;z-index:105;max-width: 475px;
	.dim{position:absolute;top:0;left:0;width:100%;height:100%;background:#2a2a2a;opacity: 0.7;}

	&.open .dim {
		animation: fadeIn 0.3s ease-out forwards;
	}
	&.close .dim {
		animation: fadeOut 0.3s ease-out forwards;
	}
	&.open .popup {
		animation-name: slideDown;
	}
	&.close .popup {
		animation-name: slideUp;
	}

	&.type-reple{
		.popup{border-radius:0;}
		.pop-body{padding-bottom:0;}
	}

	.popup {
			position: fixed; bottom:0; width: 100%; max-width: 475px; margin: 0 auto; border-radius: 0.3rem; background-color: #fff; border-radius:2rem 2em 0 0; overflow: hidden; transform: translateY(100%); animation: slideDown 0.25s ease-out forwards;
			.pop-header {position: relative;padding:1.6rem;padding-top:4rem; display:flex;align-items:center;
				position: relative;padding:1.6rem;padding-top:4rem;
				.title{width:100%; font-size:2.2rem;font-weight:600;text-align:center;display:block;
					&.align-l{text-align:left;}
				}
				.btn-add{ color:${COLOR.primary};font-weight:1.6rem;font-weight:500;display:flex;align-items:center;margin-left:auto;white-space:nowrap;
					&:before{content:'';display:block;width:1.6rem;height:1.6rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 2V14' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 8L2 8' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
				}
			}
			.pop-body{padding:0 1.6rem 1.6rem;
				max-height:60vh;overflow-y:auto;
				.text{text-align:center; color:#767676;font-size:1.4rem;
					~ .text{margin-top:2.5rem;}
					~ .banner-profile-wrap,
					~ .banner-profile{margin-top:1.6rem;}
				}
				.select-list{padding:0 1rem;}
				.menu-list{padding-top:1.6rem;
					li button{height:4.8rem;font-size:1.6rem;width:100%;}
				}

				.banner-profile-wrap {
					.banner-profile ~ .banner-profile{margin-top:0.8rem;}
				}

				.pop-notice {
					.icon { text-align: center; display: block; }
					.tit { font-size: 1.6rem; margin-top: 1.6rem; text-align:center;
						&:first-of-type{margin-top:0;}
					}
					.txt-box {
						padding: 1.6rem; border-radius: 0.8rem; background: #F5F6FA; margin-top: 1.6rem;
						.txt {
						 > strong{font-weight:500; font-size:1.8rem;}
							font-size: 1.4rem; color: ${COLOR.primary};

							.label { color: #505050; }
							.time{font-size:1.6rem;margin-top:1rem; color:rgba(56, 56, 56, 1);}
							b{font-weight:500;margin-left:0.4rem;}
						}
						&.align-c { text-align: center; }
					}
					.txt-caution { margin-top: 2.4rem; }
				}

				.input-reple{
					.user{
						display:flex;align-items:center;border-bottom:0.1rem solid #ECEEF5;height:4.6rem;
						.thumb {
							${Thumb}; position:relative;width:2.4rem;height:2.4rem;border-radius:100%;margin-right:0.8rem;}
						.name {font-size:1.4rem;font-weight:500;}
					}
					.input-area{
						.to {display:block;color:${COLOR.primary};margin-right:0.8rem;width:100%;font-size:1.4rem;padding-top:1.5rem;}
						.reple-input{position: relative;display:flex;align-items:center;width:100%;padding-right:5rem;}
						.textarea {flex:1;width:100%;padding:0.8rem 0;
							textarea {width:100%; height:2rem; padding:0;font-size:1.4rem;scrollbar-width: none;
								&:-webkit-scrollbar { display: none; }
							}
						}
						.btn-complete {position:absolute;top:0;right:0; font-size:1.6rem;font-weight:600; color:${COLOR.primary};width:4rem;height:3.4rem;}
						.btn-cancel {position:absolute;top:0;right:4rem; font-size:1.6rem;font-weight:400; color:${COLOR.black};width:4rem;height:3.4rem;}
					}
				}

				.check-select-list {
					margin-top:-0.8rem;
				}
			}
	}

	@media (orientation: landscape) {
		.pop-body{max-height:45vh !important;}
	}
	.pop-footer {
		overflow:hidden;min-height:7.6rem;width:100%;background:#fff;z-index: 10;max-width: 475px;background:linear-gradient(180deg, rgba(254,255,254,0) 0%, rgba(255,255,255,1) 18%, rgba(254,255,254,1) 100%);
		.btn-wrap{padding:1rem 2rem;margin-top:0;display:flex;
			&.col{flex-direction:column;}
			[class*=btn-type]{flex:1;}
		}
	}


	.select-list {
		ul li {
			height: 5rem; display: flex; align-items: center;
			&.total{font-size:1.6rem;font-weight:500;}
			~ li { margin-top: 0.8rem; }
			> .link { width: 100%; height: 100%; display: flex; align-items: center; background-size: 2.4rem 2.4rem; background-position: 100% 50%; background-repeat: no-repeat; background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z' fill='white' stroke='%23D4D6E3'/%3E%3C/svg%3E%0A");
			 &:disabled{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z' fill='%23ECEEF5' stroke='%23D4D6E3'/%3E%3C/svg%3E%0A");}
			}
			.class {
				b { color: #111; font-weight: 500; font-size: 1.6rem; }
				.person { color: #878AA1; margin-left: 0.4rem; }
			}
			.on, > link:focus { background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z' fill='white' stroke='%234252E2' stroke-width='2'/%3E%3Cpath d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z' fill='%234252E2'/%3E%3C/svg%3E%0A"); }
			.thumb {${Thumb}; display: inline-block; position: relative; min-width: 4rem; width: 4rem; height: 4rem; margin-right: 1.6rem; border-radius: 100%; overflow: hidden; margin-right: 0.8rem; }
			.child {
				display: flex; align-items: center; font-size: 1.6rem; width: 100%;

				.thumb + .name{padding-left:0;
					&:before{display:none;}
				}
				.name {
					font-weight: 500; padding-left: 1.5rem; position: relative; margin-left: 1.5rem;

					&:before { content: ''; display: block; position: absolute; top: 0.5rem; left: 0; width: 0.1rem; height: 1.3rem; background: #D9D9D9; }
				}
				.btn-del {
					margin-left: auto; width: 4rem; height: 4rem; margin-right: -1rem; display: flex; justify-content: center; align-items: center;

					&:before { content: ''; display: block; width: 2rem; height: 2rem; background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.0003 18.3327C14.6027 18.3327 18.3337 14.6017 18.3337 9.99935C18.3337 5.39698 14.6027 1.66602 10.0003 1.66602C5.39795 1.66602 1.66699 5.39698 1.66699 9.99935C1.66699 14.6017 5.39795 18.3327 10.0003 18.3327Z' fill='%23878AA1'/%3E%3Cpath d='M6.66699 10H13.3337' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				}
			}
		}
		&.multi-select{
			ul li{
				.link.on{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z' fill='%234252E2'/%3E%3Cpath d='M6 12.2988L10.1309 16.498L18 8.49805' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");}
			}
		}
	}

	@keyframes fadeIn {
		from {
			opacity:0;
		}
		to {
			opacity:0.7;
		}
	}
	@keyframes fadeOut {
		from {
			opacity:0.7;
		}
		to {
			opacity:0;
		}
	}
	@keyframes slideUp {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100%);
		}
	}
	@keyframes slideDown {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
`
