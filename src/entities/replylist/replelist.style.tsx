import { COLOR, Thumb } from '@/shared'
import styled from '@emotion/styled'

export const RepleList = styled.div`
.tit {
	font-size: 1.6rem;
	display: block;

	b { font-weight: 500; }
	em { color: ${COLOR.primary}; margin-left:0.5rem;font-weight: 500;}
}

.reple-list li { margin-top: 1.2rem;
	.reple { position: relative; padding: 1.5rem 1.6rem; background: #fff; border-radius: 1rem;
		.btn-dot-menu2 { position: absolute; top: 0.5rem; right: 1rem; }

		.thumb { 
			${Thumb};
			position: relative; width: 3.2rem; height: 3.2rem; border-radius: 100%; overflow: hidden; margin-right: 1rem;
		}

		.desc { display: flex; align-items: center;
			b { font-weight: 500; color: #383838; font-size: 1.6rem; display: block; line-height: 1; }

			.date { font-size: 1.2rem; color: #878AA1;
				span ~ span { margin-left: 0.5rem; }
			}
		}

		.text { margin-top: 1.3rem;
			em { color: ${COLOR.primary}; vertical-align:baseline; margin-right:0.6rem;}

			&.text-delete { color: #999999; }
		}
		.input-reple { margin-top: 1.3rem; border: 1px solid #eee; padding: 1rem; font-size: 1.4rem; }
	}
}
`
