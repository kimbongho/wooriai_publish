import styled from '@emotion/styled'

export const Videolist = styled.div`
  display:flex;align-items:center;position:relative;flex-wrap:wrap;
  &:not(:first-child){padding-top:24px;margin-top:24px;}
  &:not(:first-child):after{content:'';display:block;width:calc(100% - 3.2rem);height:1px;background:#ECEEF5;position:absolute;top:0;left:1.6rem;}
  .video-list {flex:1;overflow:hidden;padding:0 1.2rem;padding:0 ;
    .swiper{padding-right:3.2rem;}
    .swiper-wrapper { display: flex; align-items: center;padding:0 1.6rem;
      &::-webkit-scrollbar { display: none; }
      .swiper-slide { position: relative; width:auto; height: 13.5rem; min-width:initial;border-radius:1rem;overflow:hidden;
        ~ .swiper-slide { margin-left: 0.7rem; }
        .btn-del { position: absolute; top: 0.5rem; right: 0.5rem; width: 2rem; height: 2rem; border-radius: 100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; z-index: 1; }
        .btn-play{z-index:1;
          position:absolute;top:0;left:0;width:100%;height:100%;
          background: rgba(0, 0, 0, 0.4) url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM17 28.6603L29 21.7321C30.3333 20.9623 30.3333 19.0378 29 18.268L17 11.3397C15.6667 10.5699 14 11.5322 14 13.0718L14 26.9282C14 28.4678 15.6667 29.4301 17 28.6603Z' fill='white' fill-opacity='0.5'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 4rem;


        }
        .video {
          width:24.5rem;height: 100%; position: relative; overflow: hidden; border-radius: 0.6rem; border: 0.05rem solid rgba(189, 192, 210, 0.5); background:#fff;   
          video{height:100%;width:100%;object-fit:cover;}
        }
      }
    }
  }

`
