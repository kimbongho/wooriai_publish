import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Checkbox = styled.label`
	&.inp-check{
		position: relative; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; vertical-align: middle;
		input { opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0;
			&:checked {
				~ { .ic { border-color: transparent; background: ${COLOR.primary}; position: relative; &:after { content: ''; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.29883L5.13086 9.49805L13 1.49805' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size:auto 1.1rem; } } }
			}
			&:disabled {
				~ {
					.ic {
						background: #f3f3f3;
						border: 0.1rem solid #ddd !important;
					}
				}
			}
		}
		.ic { position: relative; display: inline-block; overflow: hidden; width: 2.4rem; height: 2.4rem; border: 0.1rem solid #D4D6E3; background-color: #fff; transition: all 0.5s ease; background-position: 55% 50%; background-repeat: no-repeat; background-size: auto 0.6rem; border-radius: 100%; }
		.t { display: inline-block; padding-left: 0.8rem; vertical-align: middle; font-size: 1.4rem; color: #383838; letter-spacing: -0.03em; }
	}
	&.inp-range{
		position: relative; display: inline-block; position: relative; overflow: hidden; width: 4.4rem;
		input { position: absolute; top: 0; left: 0; opacity: 0; width: 100%; height: 100%; z-index: 10; cursor: pointer; }

		i { position: relative; display: block; -webkit-appearance: none; width: 100%; padding: 0.1rem; height: 2.2rem; outline: none; -webkit-transition: .2s; border-radius: 2rem; cursor: pointer; background: #D4D6E3;
			&:after { content: ''; position: absolute; top: 50%; left: 0.2rem; display: inline-block; width: 1.8rem; height: 1.8rem; border-radius: 100%; background: #fff; transition: all 0.5s ease; -webkit-transition: all 0.5s ease; transform: translateY(-50%); }
		}

		input:checked + i {
			background: ${COLOR.primary};

			&:after {
				left: 2.4rem;
			}
		}
	}
`
