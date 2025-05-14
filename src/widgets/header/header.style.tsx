import styled from '@emotion/styled'
import { MX } from '@/shared'

export const Header = styled.header`
	display:flex;align-items:center;position:fixed;width:100%;max-width:475px;top:0;height:5.6rem;background:#fff;display:flex;justify-content:center;align-items:center;z-index: 9;transition: top 0.5s ease;
	.left{position:absolute;top:0;left:0;height:100%;}
	.right{position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;}
	.logo{width:11.8rem;height:2.66rem;background:${MX.src('/images/logo.svg')} no-repeat 0 0;margin-left :2rem;;background-size:auto 100%;}

	.name{padding-left:1.6rem;font-size:1.6rem;font-weight:600;display:flex;align-items:center;
		.ico-home{width:1.6rem;height:1.6rem;margin-right:0.6rem; background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.51979 6.40126C2.20979 6.68126 2.02979 7.08126 2.02979 7.50126V12.6313C2.02979 13.4513 2.68978 14.1113 3.50978 14.1113H12.4898C13.3098 14.1113 13.9698 13.4513 13.9698 12.6313V7.44126C13.9698 7.02126 13.7898 6.62126 13.4698 6.34126L8.98978 2.37126C8.42978 1.87126 7.57979 1.88126 7.02979 2.37126L2.51979 6.40126Z' stroke='%23383838' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M4.65979 11.1113H11.3398' stroke='%23383838' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A");}
		span{line-height:1;}
	}

	.title{font-weight:500;font-size:1.6rem; color:#fff;max-width: calc(100% - 12rem);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;
		> *{vertical-align: baseline;}
	}
	[class*=btn-]{width:3.5rem;display:flex;justify-content:center;align-items:center;height:100%;
		&:last-child{margin-right:1.5rem;}
		&:only-child{width:5rem;margin-right:0;}
	}

	.menu{margin-left:auto;}

	.ico-back{width:1rem;height:1.6rem;background-image: url("data:image/svg+xml,%3Csvg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 2L1 10L9 18' stroke='%23111111' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
	.ico-menu{width:2.4rem;height:2.4rem;background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_57_10753)'%3E%3Cpath d='M1 3.64355H20.7491' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3Cpath d='M1 11.6484H15.4918' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3Cpath d='M1 20.3564H21' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_57_10753'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");}

	&.header-main{justify-content: flex-start;height:5.3rem;}

	&.header-sub{
		background:#fff;border-bottom:1px solid #F5F6FA;
		&.no-title{border-bottom:none;}
		.title{ color:#2A2A2A;}
		.ico-back{width:2.4rem;height:2.4rem;background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 4L8 12L16 20' stroke='%23111111' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
	}

	+ div{padding:5.6rem 1.6rem 2.4rem;flex:1;overflow:hidden;}  
`
