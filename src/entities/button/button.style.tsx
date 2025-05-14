import { COLOR } from '@/shared'
import styled from '@emotion/styled'
import Link from 'next/link'

const ButtonStyle = `
  display:inline-flex;text-align:center;align-items:center;justify-content:center;white-space:nowrap;
  &:disabled,
  &.disabled {
    background-color:#ECEEF5 !important;border-color: #ECEEF5 !important;color: #A0A4BE !important;
  }
  &.st1{border:0.1rem solid ${COLOR.primary};color:#fff;background:${COLOR.primary};}
  &.st2{border:0.1rem solid ${COLOR.primary};;color:${COLOR.primary};;background:#fff;}
  &.st3{border:0.1rem solid #C64040;color:#fff;background:#C64040;}
  &.st4{border:0.1rem solid #ECEEF5;color:#383838;background:#ECEEF5;}

  .ico-plus {margin-right:0.4rem; width:2.4rem;height:2.4rem;}
  &.st1{ .ico-plus {background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V18' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 12L6 12' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}}
  &:disabled .ico-plus{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V18' stroke='%23A0A4BE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 12L6 12' stroke='%23A0A4BE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
  &.st2 .ico-plus {background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 5V19' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M5 12H19' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}

  &.btn-type1{height:5.6rem;line-height:4.8rem;padding:0 1rem;text-align:center;font-size:1.6rem;border-radius:0.8rem;font-weight:500 ;
    span{display:block;line-height:2.5rem;height:2.4rem;}
  }
  &.btn-type2{height:4.8rem;line-height:4.6rem;padding:0 1rem;text-align:center;font-size:1.6rem;border-radius:0.8rem;font-weight:500 ;
    span{display:block;line-height:2.5rem;height:2.4rem;}
  }

  &.btn-next{color:${COLOR.primary};height:4rem; font-size:1.6rem;font-weight:700;padding-right:2.8rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem;}

  &[class*=btn-type] i:first-of-type{margin-right:0.6rem;}
  &[class*=btn-type] i:last-child{margin-left:0.6rem;}

  &.btn-more {margin-top:1.5rem;height:4rem;width:100%; line-height:3.8rem;padding:0 1rem;text-align:center;font-size:1.4rem;border-radius:0.5rem;font-weight:500 ;background:#EBEDF3; color:#999;}

  &.btn-select {display:flex;justify-content: flex-start; align-items:center;height:4.8rem;border-radius:1rem;font-size:1.6rem;padding:0 1.4rem;width:100%;background:#F5F6FA url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.00098 6L10.001 13L17.001 6' stroke='%23878AA1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.4rem top 50%;background-size:auto 2rem;
  .placeholder{ color:#A0A4BE;}
  span + em{margin-left:0.4rem;}
    &.st2{border:0.1rem solid #D4D6E3;background-color:#fff; color:#111;
      em{font-weight:500;}
    }
  }

  & + .calendar-wrap{margin-top:2.4rem;}

  &.btn-selc { color:${COLOR.primary};display:inline-flex;align-items:center;height:2.7rem;background:transparent !important;
    &:disabled{color:rgba(66, 82, 226, 0.6) !important;}
    &.on {  color:${COLOR.primary};
      &:before{content:'';display:block;width:1.6rem;height:1.6rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99961 14.8996C4.19961 14.8996 1.09961 11.7996 1.09961 7.99961C1.09961 4.19961 4.19961 1.09961 7.99961 1.09961C11.7996 1.09961 14.8996 4.18961 14.8996 7.99961C14.8996 11.8096 11.8096 14.8996 7.99961 14.8996ZM7.99961 2.59961C5.01961 2.59961 2.59961 5.01961 2.59961 7.99961C2.59961 10.9796 5.01961 13.3996 7.99961 13.3996C10.9796 13.3996 13.3996 10.9796 13.3996 7.99961C13.3996 5.01961 10.9796 2.59961 7.99961 2.59961Z' fill='%234252E2'/%3E%3Cpath d='M5.2793 6.92992L7.6193 9.87992L10.8393 5.66992' stroke='%234252E2' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
      &.total:before{display:none;}
    }
  }

  &.btn-import {padding:0 1rem;height:3.2rem;line-height:3.2rem;display:inline-flex;align-items:center; font-size:1.6rem;font-weight:500; color:${COLOR.primary};
    &:before{content:'';display:block;margin-right:0.8rem; width:1.6rem;height:1.6rem;background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.86407 2.6103C6.99127 2.70116 7.14368 2.75 7.3 2.75H13.6C13.7839 2.75 13.9533 2.81991 14.0727 2.93363C14.1909 3.04616 14.25 3.19076 14.25 3.33333V13.6667C14.25 13.8092 14.1909 13.9538 14.0727 14.0664C13.9533 14.1801 13.7839 14.25 13.6 14.25H2.4C2.21612 14.25 2.0467 14.1801 1.92729 14.0664C1.80913 13.9538 1.75 13.8092 1.75 13.6667V2.33333C1.75 2.19076 1.80913 2.04616 1.92729 1.93363C2.0467 1.81991 2.21612 1.75 2.4 1.75H5.65965L6.86407 2.6103Z' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.5 8.5L8 11L10.5 8.5' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M8 9.75L8 6' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
  }

  &.btn-dot-menu {width:4rem;height:4rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z' stroke='%23111111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z' stroke='%23111111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z' stroke='%23111111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}
  &.btn-dot-menu2 {width:4rem;height:4rem;background:url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='6.93927' cy='12' rx='2' ry='2.00678' transform='rotate(-90 6.93927 12)' fill='%23878AA1'/%3E%3Cellipse cx='12.9594' cy='12' rx='2' ry='2.00678' transform='rotate(-90 12.9594 12)' fill='%23878AA1'/%3E%3Cellipse cx='18.9802' cy='12' rx='2' ry='2.00678' transform='rotate(-90 18.9802 12)' fill='%23878AA1'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}

  &.btn-addr-search { height: 4.8rem; width: 100%; text-align: left; justify-content:flex-start; color:#383838; font-size: 1.6rem; background: #fff; border: 0.1rem solid #D4D6E3; border-radius: 1rem; padding-left: 4rem; background: #fff url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 14L17 17' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M9.5 15C12.5376 15 15 12.5376 15 9.5C15 6.46243 12.5376 4 9.5 4C6.46243 4 4 6.46243 4 9.5C4 12.5376 6.46243 15 9.5 15Z' stroke='%23505050' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%; background-size: auto 2rem; }

  &.btn-date-range {
    display:flex;align-items:center;width:100%;
    .date{flex:1;border-radius:1rem;height:4.8rem;border:0.1rem solid #D4D6E3;font-size:1.6rem;padding-left:4rem;display:flex;align-items:center; background:#fff url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_609_10402)'%3E%3Cpath d='M5.5 1V5' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M10.5 1V5' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M12.8146 3H3.18544C2.53074 3 2 3.53074 2 4.18544V13.3146C2 13.9693 2.53074 14.5 3.18544 14.5H12.8146C13.4693 14.5 14 13.9693 14 13.3146V4.18544C14 3.53074 13.4693 3 12.8146 3Z' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M5.25 9.61035H10.89' stroke='%23A0A4BE' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_609_10402'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%;background-size:auto 1.6rem;}
    .placeholder{ color:#A0A4BE;}
    .dash{ color:#A0A4BE;font-size:1.6rem; color:#111111;display:flex;justify-content:center;align-items:center;padding:0 1rem;}
  }

  &.btn-time{
    display:flex;align-items:center;width:100%;
    border-radius:1rem;height:4.8rem;border:0.1rem solid #D4D6E3;font-size:1.6rem;padding-left:4rem;display:flex;align-items:center;justify-content:flex-start;
    background:#fff url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%23383838'/%3E%3Cpath d='M11.6018 9.25789H8.26414C7.58444 9.25789 7.03662 8.71008 7.03662 8.03037V4.31738H8.55834V7.73618H11.6119V9.25789H11.6018Z' fill='%23383838'/%3E%3C/svg%3E%0A") no-repeat 1.4rem 50%;background-size:auto 1.6rem;
    .ampm{ font-size:1.2rem;margin-right:0.5rem; }
    .placeholder{ color:#A0A4BE;}
  }

  &.btn-add{height:4.8rem;border-radius:1rem;font-weight:500;font-size:1.6rem; color:#4252E2;background:#fff;border:1px solid #4252E2;width:100%;display:flex;justify-content:center;align-items:center;
    &:before{content:'';display:inline-block;margin-right:0.8rem;width:2.4rem;height:2.4rem;background:url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 6V18' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18.5 12L6.5 12' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
    span{line-height:1;}
  }

  @supports (-webkit-touch-callout: none) {}
`

export const ButtonDefault = styled.button`
	${ButtonStyle};
`

export const ButtonLink = styled(Link)`
	${ButtonStyle}
`
