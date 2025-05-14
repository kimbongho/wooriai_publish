import styled from '@emotion/styled'

export const PhotoView = styled.div`
display:none;
&.on{display:flex !important;}
	position:fixed;top:0;width:100%;height:100%;min-width:280px;z-index:80;z-index:105;max-width: 475px;z-index: 20;background:rgba(0, 0, 0, 0.7);
	.close{position:absolute;top:5.5rem;right:1rem;width:4rem;height:4rem;z-index:15; background:rgba(0,0,0,0.22) url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6L19 19' stroke='white' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M19 6L6 19' stroke='white' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}
	.img{position:absolute;top:50%;left:0;width:100%;display:flex;justify-content:center;align-items:center;transform:translateY(-50%);
	img{max-width:100%;width:auto;height:auto;}
	}
	.swiper-slide .img{position:relative;}
	.swiper-button-prev,
	.swiper-button-next{display:none;}
	.swiper-initialized .swiper-button-prev,
	.swiper-initialized .swiper-button-next{display:block;}
	.swiper-initialized .swiper-button-prev,
	.swiper-initialized .swiper-button-next{background-color: rgba(0, 0, 0, 0.3); margin-left: 10px; padding: 2.2rem 2.2rem; transition: 0.5s;position: absolute; top: 50%; width: 27px; height: 44px; margin-top: -22px; z-index: 10; cursor: pointer; background-size: 18px 22px; background-position: center; background-repeat: no-repeat;}
	.swiper-initialized .swiper-button-prev:after,
	.swiper-initialized .swiper-button-next:after{display:none;}
	.swiper-initialized .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");}
	.swiper-initialized .swiper-button-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");}

`
export default PhotoView