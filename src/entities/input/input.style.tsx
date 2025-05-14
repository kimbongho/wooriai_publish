import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Input = styled.span`
	color:#111;height: 4.8rem; border: 0.1rem solid transparent; border-radius: 1rem;font-size:1.6rem;display:flex;align-items:center;background:#F5F6FA;
	&.error{border-color: ${COLOR.red};}
	&.error.focus{border-color: ${COLOR.red};}
	&.search {padding-left:4rem;background:#F5F6FA url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 14L17 17' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M9.5 15C12.5376 15 15 12.5376 15 9.5C15 6.46243 12.5376 4 9.5 4C6.46243 4 4 6.46243 4 9.5C4 12.5376 6.46243 15 9.5 15Z' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%;background-size:auto 2rem;
		input {padding-left:0;}
	}
	&.folder {padding-left:4rem;background:#F5F6FA url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.2601 5.2207C10.3801 5.2207 10.4901 5.2907 10.5501 5.4207L11.7001 7.5807L12.1201 8.3807H19.8301C20.0201 8.3807 20.1801 8.5707 20.1801 8.8007V18.3707C20.1801 18.6007 20.0201 18.7907 19.8301 18.7907H4.18008C3.99008 18.7907 3.83008 18.6007 3.83008 18.3707V5.6407C3.83008 5.4107 3.99008 5.2207 4.18008 5.2207H10.2601ZM10.2601 3.7207H4.18008C3.16008 3.7207 2.33008 4.5807 2.33008 5.6407V18.3607C2.33008 19.4207 3.16008 20.2807 4.18008 20.2807H19.8201C20.8401 20.2807 21.6701 19.4207 21.6701 18.3607V8.7907C21.6701 7.7307 20.8401 6.8707 19.8201 6.8707H13.0201L11.8701 4.7107C11.5501 4.1007 10.9301 3.7207 10.2501 3.7207H10.2601Z' fill='%23878AA1'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M9.44988 20.2815H5.06988C3.99988 20.2815 3.12988 19.4115 3.12988 18.3415V4.77148H9.43988V20.2815H9.44988Z' fill='%23878AA1'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 1.2rem 50%;background-size:auto 2.4rem;
		input {padding-left:0;}
	}
	&.focus{border-color:${COLOR.primary};}
	&.disabled{background:#ECEEF5 !important; color:#A0A4BE !important;
		input{color:#A0A4BE !important;}
	}
	input{ flex:1;color:#383838;padding: 0 1.4rem; line-height: 4rem; height:100%;border-radius:1rem;min-width: 0;background:transparent;
		&[type=number]::-webkit-inner-spin-button,
		&[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;}
		&[type=number]::-webkit-outer-spin-button,
		&[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
	}
	.btn-del{width:3rem;display:flex;justify-content:center;align-items:center;height:100%;
		&:last-child{width:4rem;}
		&:before{content:'';display:block;width:2rem;height:2rem;background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z' fill='%23BDC0D2'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
	}
	.time{font-size: 1.4rem;padding:0 1.4rem;color: ${COLOR.primary};font-weight:500;}
`
