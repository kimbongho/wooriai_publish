import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Tab = styled.div`
.tab{
	display: flex;
	align-items: center;
	margin-bottom: 4rem;
	&:only-child{margin-bottom:0; }

	li { flex: 1; border: 0.1rem solid #ECEEF5; overflow:hidden;background:#fff;
		&:not(.on):not(:last-of-type){border-right:none;}
		&:first-of-type { border-radius: 1rem 0 0 1rem; }
		&:last-child { border-radius: 0 1rem 1rem 0; }

		button,
		a { display: flex; flex-direction: row; align-items: center; height: 4.8rem; width: 100%; justify-content: center; font-size: 1.6rem; color: #A0A4BE; margin: 0; }
		&.on {
			border-color: ${COLOR.primary};background: rgba(66, 82, 226, 0.05);

			button,
			a { color: ${COLOR.primary}; font-weight: 500; }
		}
	}
}
`
