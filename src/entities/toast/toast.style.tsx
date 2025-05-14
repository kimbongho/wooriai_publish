import styled from '@emotion/styled'

export const Toast = styled.div`
  display:block;position:fixed;bottom:-8rem;z-index:120;width:100%;max-width: 475px;
  .toast-text{display:flex;align-items:center;flex-wrap:wrap; opacity:0;min-height:7rem;width:32.5rem;margin:0 auto;position:relative;bottom:0;background:rgba(80, 80, 80, 0.9);white-space:nowrap;font-size:1.4rem;font-weight:500;padding:1.5rem 2rem;border-radius:0.8rem;color:#fff;transition: all 0.5s ease;-webkit-transition: all 0.5s ease;text-wrap:wrap;}
  &.on .toast-text{animation: toast 2s ease-out forwards;}
  @keyframes toast {
    0% { opacity: 0; bottom: -8rem; }
    20% { opacity: 1; bottom: 18rem; }
    80% { opacity: 1; bottom: 18rem; }
    100% { opacity: 0; bottom: -8rem; }
  }
`
