import styled from '@emotion/styled' 
import { COLOR, MX } from '@/shared'

export const Aside = styled.aside`
	width: 400px;
	.logo{width:140px;height:57.6px;background:${MX.src('/images/logo-aside.svg')} no-repeat 0 50%;background-size:100% auto;margin-bottom:20px;align-self:flex-start;
		.t-hidden{border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important; height: 1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important;}
	}
	.aside-content { position: fixed; flex-direction:column; top: 0; width: 100%; height: 100%; max-width: 400px; display: flex; align-items: center; justify-content: center; }
	.aside-banner-list{width:100%;
		img{width:100%;height:auto}

		.swiper-pagination{
			margin-top:27px;text-align:center;
			display:flex;justify-content:center;align-items:center;
			.swiper-pagination-bullet{display:block; width:12px;height:12px;border-radius:12px;background:#EAEDFB;margin:0 4px;
				&.swiper-pagination-bullet-active{background:${COLOR.primary};}
			}
		}
	}
	.go-app{margin-top:27px; padding:25px 20px; 
		border: 1px solid #D4D6E3; border-radius: 10px;
		.text{
			font-weight:500;font-size:18px; color:#383838;text-align:center;
			span{display:block;}
			b{display:block;font-weight:700;font-size:20px;
				em{ color:${COLOR.primary};border-bottom:1px solid ${COLOR.primary};vertical-align:baseline;}
			}
		}
		.menu{
			margin-top:16px; display:flex;align-items:center;justify-content: space-between;
				[class*=btn-]{
					display:block;width:174px; height:52.6px; overflow:hidden;background-repeat:no-repeat;background-size:auto 115.2px;background-position:0 0;
					& ~ [class*=btn-]{margin-left:16px;}
					&:hover{background-position:0 100% !important;}
					&.btn-googleplay{background-image:${MX.src('/images/btn-googleplay.svg')} }
					&.btn-applestore{background-image:${MX.src('/images/btn-applestore.svg')} }
				}
		}
	
	}
	${MX.media(``, `display:none`)}
`
