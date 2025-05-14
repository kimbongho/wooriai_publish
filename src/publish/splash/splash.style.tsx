import styled from '@emotion/styled' 
import { MX } from 'shared/index'

const Splash = styled.div`
.visual{position:absolute;top:50%;left:0; height:38.7rem;width:100%; background:${MX.src('/images/splash.svg')} no-repeat 50% 50%;background-size:auto 100%;transform:translateY(-50%);}
.copyright{ color:#878AA1;font-size:1rem;position:absolute;bottom:1.5rem;width:100%;text-align:center;}
`

export default Splash