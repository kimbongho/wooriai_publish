import styled from '@emotion/styled'
import { MX, COLOR } from '@/shared'

export const Menubar = styled.div`
	
height: 6.4rem; position: fixed; bottom: 0; width: 100%; background: #fff; z-index: 10; max-width: 475px; background: #fff; transition: bottom 0.5s ease;

ul {
	display: flex; align-items: center; padding: 0 1.6rem; height: 100%; border-top: 0.1rem solid #ECEEF5;
	li {
		flex: 1; padding: 0 0.8rem; display: flex; justify-content: center; align-items: center; height: 100%;
		button {
			display: flex; justify-content: center; align-items: center; width: 5.2rem; height: 5.2rem; flex-direction: column;
			.icon {
				position: relative;
				&.new:after { content: ''; display: block; position: absolute; top: -0.1rem; right: -0.1rem; width: 0.6rem; height: 0.6rem; background: #DC0000; border-radius: 100%; }
			}
			.txt { white-space: nowrap; font-size: 1.2rem;  color:#A0A4BE; line-height:1;}
		}

		[class*=ico-] { width: 2.4rem; height: 2.4rem; }

		[class*=ico-gnb] {
			background: ${MX.src('/images/ico-gnb.svg')} no-repeat 0 0 !important;
			background-size: auto 12rem !important;
		}

		.ico-gnb-home{background-position-y:0!important;}
		.ico-gnb-noti{background-position-y:-2.4rem !important;}
		.ico-gnb-alarm{background-position-y:-4.8rem !important;}
		.ico-gnb-album{background-position-y:-7.2rem !important;}
		.ico-gnb-attend{background-position-y:-9.6rem !important;}

		&.on {
			[class*=ico-] {
				background-position-x: 100% !important;
			}
			span {
				color: ${ COLOR.primary };
			}
		}
	}
}
`
