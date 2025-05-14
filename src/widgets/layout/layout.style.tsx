import styled from '@emotion/styled' 
import { MX, FloatingMenu } from '@/shared'

export const Outerwrap = styled.div`
width: 915px;display:flex;justify-content: space-between;margin:0 auto;
  .has-footer{padding-bottom:7.6rem;
    &.full-btn{padding-bottom:5.6rem;}
    .floating-menu{bottom:9rem;}
  }
  .has-menubar{padding-bottom:6.4rem;
    &.has-reple{padding-bottom:12rem;
      .reple-input-wrap{bottom:6.4rem}
    }
    .floating-menu{bottom:8rem;}
  }
  .has-reple{padding-bottom:5.6rem;}

  .wrap{display: flex;flex-direction: column;}

  ${MX.media(
    ``,
    `
      width:100%;justify-content:center;
      .aside-area{display:none;}
    `,
  )}  

  ${MX.media2(
    `
      &.open-gnb .wrap{overflow:hidden;}
      .wrap{min-height:100vh;box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);flex-direction: column;}    
    `,
    `
    min-height:100%;flex-direction: column;flex:1;
    .wrap{width:100vw;flex:1;}
    `,
  )}  
`

export const Wrap = styled.div`
  ${FloatingMenu}
	position:relative;max-width: 475px;width:475px;min-height: 100vh;
  ${MX.media(
    ``,
    `
			min-height:100%;box-shadow: 0 0 0 1px #ddd;
    `,
  )}  
`
