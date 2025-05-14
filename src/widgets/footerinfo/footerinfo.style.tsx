import styled from '@emotion/styled'

export const FooterInfo = styled.footer`
	padding:2.4rem;border-top:1px solid #ECEEF5;
	.footer-menu{display:flex;align-items:center;
		li{ color:#60637B;font-weight:700;font-size:1.2rem;position:relative;
			&:not(:last-child){padding-right:1rem;margin-right:0.8rem;
				&:after{content:'';display:block;position:absolute;top:50%;right:0;transform:translateY(-50%);width:2px;height:0.8rem;background:#60637B;}
			}
		}
	}	

	.copyright{margin-top:0.5rem; color:#878AA1;font-size:1.2rem;}	
	address{margin-top:2.4rem;font-style:normal;
		.row{
			.unit{display:inline;color:#878AA1;font-size:1.2rem;position:relative;letter-spacing:-0.05em;
				b{font-weight:600;vertical-align:baseline;}
				.tel{vertical-align:baseline;}
			}
			.bar{margin:0 0.8rem;display:inline-block;width:1px;height:0.8rem;background:#878AA1;}
		}
	}
		.ps{color:#878AA1;font-size:1.2rem;margin-top:0.2rem;}
}
`
