import { FileList } from '@/shared'
import styled from '@emotion/styled'

export const UploadFiles = styled.div`
  width:100%;
  .upload {display:block; position:relative;width:100%; height:4.8rem;border:1px solid #D4D6E3;border-radius:1rem;padding:0 1.6rem;background:#fff url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674' stroke='%2360637B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;
    .placeholder{ color:#A0A4BE;font-size: 1.6rem; display:flex;align-items:center;height:100%;}
    input {position: absolute;width:100%;height:100%;opacity: 0;top:0;left:0;}
  }
  ${FileList}
`
