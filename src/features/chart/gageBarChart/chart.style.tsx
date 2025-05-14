import styled from '@emotion/styled'
import { Thumb } from '@/shared'

export const Chart = styled.div`
	& ~ .gage-bar-unit { margin-top: 0.8rem;}

	.x-axis{width:100%;text-align:center;font-size:1.2rem;font-weight:500; color:#383838;padding-top:0.8rem;
		&:before{content:'';display:block;position:absolute;top:0;left:50%;width:0.4rem;height:0.4rem;background:#383838;border-radius:100%;transform:translateX(-50%);}
	}
	&.st-both{position:relative;
		.x-axis{position:absolute;top:8.7rem;left:0;}
	 }

	.info {
		align-items: center; margin-bottom: 0.8rem;

		&:after { content: ''; display: block; clear: both; }
		.name {float: left; line-height: 1;
			b { font-size: 1.4rem; color: #60637B; font-weight: 500; vertical-align: top; }
		}
		.unit { float: right; font-size: 1.4rem; display: flex; align-items: center; color: #383838; font-weight: 500; line-height: 1; }
	}


.gage-bar-wrap {
	position: relative; padding-bottom: 4rem;

	.gage-bar {position: relative; height: 1.2rem; border-radius: 1.2rem; border: 1px dashed #D4D6E3; background: #F5F6FA;
		.gage {position: relative; height: calc(100% + 0.2rem); margin-top: -1px; display: inline-block; vertical-align: top;
			.bar { display: block; position: absolute; top: 0; left: 0; width: calc(100% + 2px); height: 100%; border-radius: 1.2rem 0 0 1.2rem; margin-left: -1px; }
			.tag {position: absolute; top: 1.6rem; right: 0; padding-top: 0.8rem; transform: translateX(50%);
				&:before { content: ''; display: block; position: absolute; top: 0; left: 50%; width: 0.8rem; height: 0.8rem; background: url("data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 0.247559L7.4641 6.24756H0.535898L4 0.247559Z' fill='%23383838'/%3E%3C/svg%3E%0A") no-repeat 0 0; transform: translateX(-50%); }
				& > span {
					display: inline-block; line-height: 2.4rem; padding: 0px 0.4rem; font-weight: 600; color: #fff; height: 2.5rem; background: #4252E2; border-radius: 0.5rem; min-width: 4.3rem; text-align: center;
					b { font-size: 1.2rem; vertical-align: baseline; }
					.unit { font-size: 1rem; vertical-align: baseline; }
				}
			}
		}
		.gage[style*='100%'] {
			.bar { border-radius: 1.2rem; }
		}
	}
}

&.st-both {
	padding-bottom: 0; padding-top: 7rem;

	.gage-bar {
		.gage-wrap {
			float: left; width: 50%; height: 100%; position: relative;

			.tag {
				top: initial; bottom: -0.8rem; padding-top: 6.8rem;

				&:after { content: ''; display: block; margin: 0 auto; width: 2.8rem; height: 6.8rem; background-size: 100% auto; background-repeat: no-repeat; background-position: 0 100%; }
				span { margin-bottom: -0.8rem; }
				&:before { display: none; }
			}
			.gage {
				.bar { border-radius: 0; }
			}
			&:first-child {
				text-align: right;

				.tag {
					top: initial; bottom: -0.8rem; transform: translateX(-50%); left: 0; right: initial; padding-top: 6.8rem;

					&:after { background-image: url("data:image/svg+xml,%3Csvg width='28' height='69' viewBox='0 0 28 69' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 57.0977L14 0.0976562' stroke='url(%23paint0_linear_0_1)' stroke-width='2' stroke-dasharray='4 4'/%3E%3Cpath d='M28 55C28 62.732 21.732 69 14 69C6.26801 69 0 62.732 0 55C0 47.268 6.26801 41 14 41C21.732 41 28 47.268 28 55Z' fill='%2300DDDD' fill-opacity='0.2'/%3E%3Cg filter='url(%23filter0_i_0_1)'%3E%3Ccircle cx='13.9999' cy='54.9999' r='5.6' fill='white'/%3E%3C/g%3E%3Ccircle cx='14' cy='55' r='6' stroke='url(%23paint1_linear_0_1)' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_0_1' x='7.3999' y='49.3999' width='12.2002' height='12.2002' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-1' dy='1'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.866667 0 0 0 0 0.866667 0 0 0 0.4 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_0_1'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_0_1' x1='14.5' y1='0.0976562' x2='14.5' y2='57.0977' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300AAAA'/%3E%3Cstop offset='1' stop-color='%2300AAAA' stop-opacity='0.2'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_0_1' x1='16.3333' y1='60.8333' x2='18.6667' y2='48' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23008E8E'/%3E%3Cstop offset='1' stop-color='%2300DDDD'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"); }
				}
			}
			&:last-child {
				.tag {
					&:after { background-image: url("data:image/svg+xml,%3Csvg width='28' height='76' viewBox='0 0 28 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0.0976562L14 59.0977' stroke='url(%23paint0_linear_0_1)' stroke-width='2' stroke-dasharray='4 4'/%3E%3Cpath d='M28 61.0977C28 68.8296 21.732 75.0977 14 75.0977C6.26801 75.0977 0 68.8296 0 61.0977C0 53.3657 6.26801 47.0977 14 47.0977C21.732 47.0977 28 53.3657 28 61.0977Z' fill='%235888FF' fill-opacity='0.2'/%3E%3Cg filter='url(%23filter0_i_0_1)'%3E%3Ccircle cx='13.9999' cy='61.0976' r='5.6' fill='white'/%3E%3C/g%3E%3Ccircle cx='14' cy='61.0977' r='6' stroke='url(%23paint1_linear_0_1)' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_0_1' x='7.3999' y='55.4976' width='12.2002' height='12.2002' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-1' dy='1'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.298516 0 0 0 0 0.369767 0 0 0 0 0.985577 0 0 0 0.4 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_0_1'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_0_1' x1='14.5' y1='0.0976562' x2='14.5' y2='59.0977' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_0_1' x1='16.3333' y1='66.931' x2='18.6667' y2='54.0977' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"); }
				}
			}
		}
	}
}

&.st-thumb{overflow:hidden;display:flex;align-items:center;width:100%;
 	~ .st-thumb{margin-top:3.6rem;}
	.gage-bar-wrap{padding-bottom:0;}
	.thumb.thumb {${Thumb}; width: 4rem; height: 4rem; }
	.gage-bar-unit{flex:1; overflow:hidden;padding-left:1.2rem;
		.info{margin-bottom:0.6rem;
			.medal{float:left;margin-right:0.4rem;
				[class*=ico-]{float:left;}
				~ .name,
				~ .unit{padding-top:0.5rem;}
			}
		}
		.gage .bar{border-radius:1.2rem;}		
	}
}


`
export default Chart