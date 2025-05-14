import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Radio = styled.label`
	position: relative; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; vertical-align: middle;
	input { opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0;
		&:checked {
			~ {
				.ic {border: 1px solid ${COLOR.primary};
					&:after { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 1.2rem; height: 1.2rem; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); background: ${COLOR.primary}; border-radius: 100%; }
				}
			}
		}
		&:disabled {
			~ {
				.ic { background: #f3f3f3; border: 1px solid #ddd !important;
					&:after { background: #ddd; }
				}
			}
		}
	}
	.ic { position: relative; display: inline-block; overflow: hidden; width: 2rem; height: 2rem; border: 0.1rem solid #D4D6E3; border-radius: 100%; background-color: #fff; transition: all 0.5s ease; -webkit-transition: all 0.5s ease; background-position: 55% 50%; background-repeat: no-repeat; background-size: auto 9px; }
	.t { display: inline-block; padding-left: 0.4rem; vertical-align: middle; font-size: 1.4rem; color: #383838; letter-spacing: -0.03em; }
`
