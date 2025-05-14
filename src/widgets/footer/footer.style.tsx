import styled from '@emotion/styled' 

export const Footer = styled.footer`
	overflow: hidden; min-height: 7.6rem; position: fixed; bottom: 0; width: 100%; background: #fff; z-index: 10; max-width: 475px; background: linear-gradient(180deg, rgba(254,255,254,0) 0%, rgba(255,255,255,1) 18%, rgba(254,255,254,1) 100%);

	&.full-btn {
		min-height: 5.6rem;

		[class*=btn-type] { border-radius: 0; width: 100%; height: 5.6rem; }
	}
	.btn-wrap {
		padding: 1rem 1.6rem; margin-top: 0; display: flex;

		&.col { flex-direction: column; }
		[class*=btn-type] { flex: 1; }
	}
`
