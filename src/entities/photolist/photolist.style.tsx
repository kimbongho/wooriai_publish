import styled from '@emotion/styled'

export const Photolist = styled.div`
  display:flex;align-items:center;position:relative;flex-wrap:wrap;
  .photo-list {flex:1;overflow:hidden;padding:0 1.2rem;padding:0 ;
    .swiper{padding-right:3.2rem;}
    .swiper-wrapper { display: flex; align-items: center;padding:0 1.6rem;
      &::-webkit-scrollbar { display: none; }
      .swiper-slide { position: relative; width:auto; height: 7.2rem; min-width:initial;
        ~ .swiper-slide { margin-left: 0.7rem; }
        .btn-del { position: absolute; top: 0.5rem; right: 0.5rem; width: 2rem; height: 2rem; border-radius: 100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; z-index: 1; }
        .img {
          height: 100%;width:auto; position: relative; overflow: hidden; border-radius: 0.6rem; border: 0.05rem solid rgba(189, 192, 210, 0.5); background:#fff;   
          img{height:100%;width:auto;}
        }
      }
    }
  }

`
