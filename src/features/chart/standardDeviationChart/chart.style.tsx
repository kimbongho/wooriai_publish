import styled from '@emotion/styled'
import { MX } from '@/shared'

export const Chart = styled.div`
	.chart-draw{
		overflow:hidden;position:relative;
		background: url("data:image/svg+xml,%3Csvg width='285' height='137' viewBox='0 0 285 137' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1L284.702 1.00002' stroke='%23ECEEF5' stroke-dasharray='2 2'/%3E%3Cpath d='M0 35L284.702 35' stroke='%23ECEEF5' stroke-dasharray='2 2'/%3E%3Cpath d='M1.12354 69H283.577' stroke='%23ECEEF5' stroke-dasharray='2 2'/%3E%3Cpath d='M0.87207 103H283.829' stroke='%23ECEEF5' stroke-dasharray='2 2'/%3E%3C/svg%3E%0A") no-repeat 50% 100% !important;
		background-size:auto 100% !important;
		padding:0 1rem;
		border-bottom:1px solid #D4D6E3;

		.base{position:absolute;top:2%;left:50%;height:100%; transform:translateX(-50%);border-left:0.2rem dashed #979AB5;}

		.bg{
			img{width:100%;height:auto;}
		}
		.index{position:absolute;height:100%;
			&:before{content:'';display:block; height:100%;position:absolute;top:10%;left:50%;transform:translateX(-50%);
			border-left:0.2rem dashed #4252E2;
			}
			
			&.lv0{top:78%;left:3%;
				.label{margin-left:0.5rem;}
			}
			&.lv5{top:78%;left:5%;
				.label{margin-left:0.5rem;}
			}
			&.lv10{top:78%;left:10%;}
			&.lv15{top:75%;left:15%;}
			&.lv20{top:68%;left:20%;}
			&.lv25{top:54%;left:25%;}
			&.lv30{top:34%;left:30%;}
			&.lv35{top:15%;left:35%;}
			&.lv40{top:2.5%;left:40%;}
			&.lv45{top:-4%;left:45%;}
			&.lv50{top:-6%;left:50%;
				~ .base{display:none;}
			}
			&.lv55{top:-4%;right:45%;}
			&.lv60{top:2.5%;right:40%;}
			&.lv65{top:15%;right:35%;}
			&.lv70{top:34%;right:30%;}
			&.lv75{top:54%;right:25%;}
			&.lv80{top:68%;right:20%;}
			&.lv85{top:75%;right:15%;}
			&.lv90{top:78%;right:10%;}
			&.lv95{top:78%;left:95%;
			.label{margin-left:-1.2rem;}
			}
			&.lv100{top:78%;right:3%;
				.label{margin-left:-1.2rem;}
			}


			.label{position:absolute;top:-2.5rem;white-space:nowrap;left:50%;transform:translateX(-50%);font-size:1.2rem; color:#fff;font-weight:600;padding:0.3rem 0.8rem;border-radius:0.5rem;background:#4252E2;}
			i{
				position:absolute;top:0;left:50%;transform:translateX(-50%);
				width:2rem;height:2rem;background:url("data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10.948C20 16.4708 15.5228 20.948 10 20.948C4.47715 20.948 0 16.4708 0 10.948C0 5.42515 4.47715 0.947998 10 0.947998C15.5228 0.947998 20 5.42515 20 10.948Z' fill='%235888FF' fill-opacity='0.2'/%3E%3Cg filter='url(%23filter0_i_1_3770)'%3E%3Ccircle cx='9.99998' cy='11.4922' r='4.1074' fill='white'/%3E%3C/g%3E%3Ccircle cx='10' cy='10.948' r='4' stroke='url(%23paint0_linear_1_3770)' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_1_3770' x='4.89258' y='7.38477' width='9.21484' height='9.21484' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-1' dy='1'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.298516 0 0 0 0 0.369767 0 0 0 0 0.985577 0 0 0 0.4 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_1_3770'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_1_3770' x1='11.6667' y1='15.1147' x2='13.3333' y2='5.948' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;
			}
		}
	}
	.x-axis{position:relative; width:100%;text-align:center;font-size:1.2rem;font-weight:500; color:#383838;padding-top:0.8rem;margin-top:0.4rem;
		&:before{content:'';display:block;position:absolute;top:0;left:50%;width:0.4rem;height:0.4rem;background:#383838;border-radius:100%;transform:translateX(-50%);}
	}

`
export default Chart