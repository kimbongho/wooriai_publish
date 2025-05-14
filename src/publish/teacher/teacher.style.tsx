import styled from '@emotion/styled'
import { Thumb } from '@/shared'

export const Contents = styled.div`
	background:#F5F6FA;
	.teacher-home-wrap { padding-top: 2.4rem; }
	.teacher-info-list ul li {
		~ li { margin-top: 0.8rem; }
		.box {
			width: 100%; display: flex; align-items: flex-start; padding: 1.6rem; background: #fff; border-radius: 1rem; border: 0.1rem solid #ECEEF5;

			.thumb {${Thumb}; width: 4rem; min-width: 4rem; height: 4rem; border-radius: 100%; overflow: hidden; margin-right: 1.6rem;}
			.desc {
				.name {
					text-align: left;

					b { font-weight: 500; font-size: 1.6rem; color: #383838; vertical-align: baseline; }
					span { font-size: 1.4rem; vertical-align: baseline; margin-left: 0.3rem; }
				}
				.info {
					margin-top: 0.8rem; font-size: 1.4rem;

					.position { color: #4252E2; font-weight: 500; 
						&:after { content: ''; display: inline-block; margin:0 0.8rem; width: 0.1rem; height: 1.3rem; position:relative; top:0.13rem; background: #D4D6E3;vertical-align:baseline; }
					}
					.tel {
						color: #878AA1; white-space:nowrap;
					}
				}
				.cls-info { margin-top: 0.4rem; font-size: 1.4rem; }
			}
		}
	}
	.teacher-modify-wrap { padding: 2.4rem 0; }
	
`
export default Contents