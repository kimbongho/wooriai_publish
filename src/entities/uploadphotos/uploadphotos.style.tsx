import styled from '@emotion/styled'
import { COLOR, Thumb } from '@/shared'

export const UploadPhotos = styled.div`
  display:flex;align-items:center;position:relative;flex-wrap:wrap;
  > .tit{display:block;width:100%;font-size: 1.6rem; color: #111; font-weight: 500; margin-bottom:0.8rem;}
  .img-wrap {position:relative; width:7.2rem;height:7.2rem;
    .upload{position: relative;display:block;overflow:hidden; width:100%;height:100%;position:relative;z-index:1;
      input{position:absolute;top:0;left:0;width:100%;height:100%;z-index: 1;opacity: 0;cursor:pointer;}
    }
    .img{display:flex;justify-content:center;align-items:center;flex-direction: column; position: absolute;top:0;left:0; overflow:hidden;width:100%;height:100%;border:0.1rem dashed #BDC0D2;background:#fff;border-radius:0.8rem;
      &:before{content:'';display:block;width:3.2rem;height:3.2rem;background:url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.6283 18.5353C19.4461 18.465 18.2751 18.8871 17.1822 19.7664C16.4572 18.805 15.5762 18.0781 14.539 17.6091C11.3383 16.167 7.90335 17.7263 7.75836 17.785L7 18.1367L7.66915 19.743L8.43866 19.3912C8.43866 19.3912 11.3717 18.0781 13.9033 19.2271C15.3309 19.8719 16.4015 21.1968 17.0929 23.1666L17.3829 23.999L18.9554 23.4011L18.6654 22.5803C18.4981 22.0996 18.3085 21.6658 18.1078 21.2555C18.8996 20.5871 19.7026 20.2471 20.5279 20.3058C22.0335 20.3996 23.1487 21.7127 23.1822 21.7479L23.7286 22.4162L25 21.2789L24.4535 20.6106C24.3866 20.5285 22.8922 18.7112 20.6506 18.5588L20.6283 18.5353Z' fill='%23A0A4BE'/%3E%3Cpath d='M20.4152 15.8295C22.2971 15.8295 23.8305 14.2961 23.8305 12.4143C23.8305 10.5324 22.2971 8.99902 20.4152 8.99902C18.5334 8.99902 17 10.5324 17 12.4143C17 14.2961 18.5334 15.8295 20.4152 15.8295ZM20.4152 10.7415C21.3329 10.7415 22.088 11.4966 22.088 12.4143C22.088 13.332 21.3329 14.087 20.4152 14.087C19.4975 14.087 18.7425 13.332 18.7425 12.4143C18.7425 11.4966 19.4975 10.7415 20.4152 10.7415Z' fill='%23A0A4BE'/%3E%3Cpath d='M26.7 24.999V10.2998H27.4992L27.5 24.999C27.5 26.3797 26.3807 27.499 25 27.499H7C5.61929 27.499 4.5 26.3797 4.5 24.999V6.99902C4.5 5.61831 5.61929 4.49902 7 4.49902H21.6992V5.29902L7 5.29902C6.06112 5.29902 5.3 6.06014 5.3 6.99902V24.999C5.3 25.9379 6.06112 26.699 7 26.699H25C25.9389 26.699 26.7 25.9379 26.7 24.999Z' stroke='%23A0A4BE'/%3E%3Cpath d='M27.0996 1.39941L27.0996 8.39941' stroke='%23A0A4BE' stroke-width='1.8' stroke-linejoin='round'/%3E%3Cpath d='M30.5996 4.89941L23.5996 4.89941' stroke='%23A0A4BE' stroke-width='1.8' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 100%;}
      span{ color:#666;font-size:1.2rem;display:block;text-align:center;margin-top:0.4rem;
        em{ color:${COLOR.primary};vertical-align:baseline;}
      }
    }
  }
  .photo-list {flex:1;overflow:hidden;padding:0 1.2rem;
    .swiper-wrapper { display: flex; align-items: center;
      &::-webkit-scrollbar { display: none; }
      .swiper-slide { position: relative; min-width: 7.2rem;width: 7.2rem;   height: 7.2rem; 
        ~ .swiper-slide { margin-left: 1.2rem; }
        .btn-del { position: absolute; top: 0.5rem; right: 0.5rem; width: 2rem; height: 2rem; border-radius: 100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; z-index: 1; }
        .img {
          ${Thumb}
          height: 100%; position: relative; overflow: hidden; border-radius: 0.6rem; border: 0.05rem solid rgba(189, 192, 210, 0.5); background:#fff;   
        }
      }
    }
  }

`
