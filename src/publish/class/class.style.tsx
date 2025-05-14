import styled from '@emotion/styled'

export const Contents = styled.div`
	background:#F5F6FA;
	.class-list-wrap { padding-top: 2.4rem; }
	.class-info-list ul li {
		~ li { margin-top: 0.8rem; }
		.box {
			width: 100%; padding: 1.6rem; background: #fff; border-radius: 1rem; border: 0.1rem solid #ECEEF5; text-align: left;

			em { color: #4252E2; font-weight: 500; font-size: 1.4rem; }
			.info {
				margin-top: 0.4rem; font-size: 1.6rem;

				.teacher {
					margin-left: 1.4rem; padding-left: 1.4rem; position: relative;

					&:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 1.3rem; background: #D9D9D9; transform: translateY(-50%); }
					b { font-weight: 500; vertical-align: baseline; }
					.unit { font-size: 1.4rem; vertical-align: baseline; margin-left: 0.3rem; }
				}
			}
		}
	}

	.class-modify-wrap{
		padding-top: 2.4rem;
	}
`
export default Contents