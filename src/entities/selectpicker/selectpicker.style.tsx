import styled from '@emotion/styled'

export const SelectPicker = styled.div`
		display:flex;background:#f6f6f6;
		padding: 1rem 0;
		&.no-days{
			.picker0{display:none;}
		}
		.swiper{height:15rem;overflow:hidden;
			.swiper-wrapper{width:100%;}
			.swiper-slide{display:flex;align-items: center; justify-content: center;padding: 0 1rem;white-space:nowrap;color:#aaa;
				&.swiper-slide-active{ color:#111;}
			}
			&.days{flex:1;}
			&.ampm{width:20%;}
			&.hours{width:20%;}
			&.times{width:20%;}
		}
`;
