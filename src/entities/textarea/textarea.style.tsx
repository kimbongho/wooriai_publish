import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const Textarea = styled.div`
  width:100%;	color:#383838;height: 20rem; border: 0.1rem solid transparent; border-radius: 1rem;font-size:1.4rem;display:flex;align-items:center;background:#F5F6FA;overflow:hidden;
  textarea{height:100%;width:100%; padding:1.6rem 1.4rem;font-size:1.6rem;}
  &.focus{border-color:${COLOR.primary};}
`
