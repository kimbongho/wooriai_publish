import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Dialog = styled.div`
  position: fixed; top: 0; width: 100%; height: 100%; z-index: 110; max-width: 475px;
  .dim{position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #2a2a2a; opacity: 0.7;}
  .popup{
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 32.5rem; max-width: 90vw;border-radius: 0.8rem;border-radius:0.8rem;overflow:hidden;
    .pop-body{padding:4.8rem 0; background: #fff;
      .dialog-tit{font-weight:500;font-size:2.2rem;display:flex;justify-content:center;align-items:center;margin-bottom:1.6rem;}
      .dialog-txt{text-align:center;font-size:1.6rem;
        b{font-weight:500; vertical-align:baseline;}
      }
    }
    .pop-footer{margin-top:-0.1rem;}
    .btn-wrap{margin-top:0;}
    .btn-wrap > button{height:4.8rem;display:flex;justify-content:center;align-items:center;font-weight:500;font-size:1.6rem;border:none;flex:1;
      &.st1{background:${COLOR.primary}; color:#fff;border:none;}
      &.st2{background:#ECEEF5; color:#383838;}
    }
  }
`
