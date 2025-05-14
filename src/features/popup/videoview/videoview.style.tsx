import styled from '@emotion/styled'

export const VideoView = styled.div`
display:none;
&.on{display:flex !important;}
	position:fixed;top:0;width:100%;height:100%;min-width:280px;z-index:80;z-index:105;max-width: 475px;z-index: 20;background:rgba(0, 0, 0, 0.7);
	.close{position:absolute;top:5.5rem;right:1rem;width:4rem;height:4rem;z-index:15; background:rgba(0,0,0,0.22) url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6L19 19' stroke='white' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M19 6L6 19' stroke='white' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}
	.video{display:flex;justify-content:center;align-items:center;width:100%;}
`
export default VideoView