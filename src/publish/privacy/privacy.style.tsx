import styled from '@emotion/styled'
import { MX, COLOR, Thumb, TxtGuide, LinkMenuList, FormWrap } from '@/shared'

export const Contents = styled.div`
	${TxtGuide}
  ${LinkMenuList}
  ${FormWrap}

  background:#F5F6FA;
  .basic-info-wrap { height: 100%; background: #F5F6FA;

    .page-top-area { padding: 2.4rem 1.6rem; display: flex; justify-content: center; align-items: center; flex-direction: column; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem; margin-bottom: 2.4rem;
      .thumb {
        ${Thumb}; width: 6.4rem; height: 6.4rem; border-radius: 100%; overflow: hidden;
      }

      .user-id { font-size: 2.2rem; color: #111; margin-top: 0.8rem; }

      .logout { margin-top: 1.6rem;
        .btn { display: inline-flex; justify-content: center; align-items: center; height: 4rem; border: 1px solid ${COLOR.primary}; color: ${COLOR.primary}; border-radius: 1rem; padding: 0 1.4rem; font-size: 1.4rem; }
      }
    }

    .withdrawal { margin-top: 3rem; text-align: center;
      button { height: 4rem; display: inline-flex; align-items: center;
        span { color: #878AA1; border-bottom: 1px solid #878AA1; font-size: 1.4rem; line-height: 1; }
      }
    }
  }

  .alarm-manage-wrap { height: 100%; padding: 2.4rem 0;
    .toggle-box { display: flex; align-items: center; height: 7.2rem; padding: 0 1.6rem; border-radius: 1rem; border: 0.1rem solid #ECEEF5; background: #fff;
      .left {
        b { display: block; font-weight: 500; font-size: 1.6rem; }
        span { display: block; font-weight: 500; font-size: 1.4rem; color: #878AA1; }
      }
      .right { margin-left: auto; }
    }

    .alarm-list { padding-top: 1.6rem; border-top: 1px solid #ECEEF5; margin-top: 1.6rem;
      .toggle-box ~ .toggle-box { margin-top: 0.8rem; }
    }
  }

  .phone-manage-wrap,
  .pw-manage-wrap { padding: 2.4rem 0; background:#fff; }

  .app-info-wrap { height: 100%; background: #F5F6FA; padding: 2.4rem 0;
    .app-update { margin-top: 4rem; display: flex; justify-content: center; align-items: center; flex-direction: column;
      .app-ver { color: #878AA1; font-size: 1.6rem; }
      [class*=btn-type] { width: 16rem; margin-top: 0.8rem; }
    }
  }

  .open-license-wrap { height: 100%; background: #F5F6FA; padding: 2.4rem 0;

    .license-list li {
      ~ li { margin-top: 0.8rem; }

      .license-info{width:100%; display: flex; justify-content: center; align-items:flex-start; flex-direction: column; padding: 1.2rem 1.6rem; border-radius: 1rem; border: 0.1rem solid #ECEEF5; background: #fff;
        .tit{ display:flex; align-items:center;
          b { display: block; font-weight: 500; font-size: 1.6rem;  color:#383838;}
          .version{font-size:1.2rem;margin-left:0.8rem;}
        }
        *{word-break:break-all;white-space:normal;text-align:left;letter-spacing:-0.05em;}
        font-weight: 500; font-size: 1.4rem; color: #878AA1;
        .link{text-decoration:underline; color:#4252E2;}
      }

    }
  }

  .withdrawal-wrap { padding: 3.2rem 0;
    .visual { margin: 0 auto; width: 13.4rem; height: 13.4rem; background: ${MX.src('/images/visual-withdrawal.svg')} no-repeat 0 0; }
    .txt { margin-top: 1.6rem; text-align: center; color: #505050;font-size:1.6rem;
      b { color: #383838; display: block; margin-top: 2.5rem; font-size:1.8rem;font-weight:500;}
    }

    .btn-wrap { margin-top: 3.2rem; }
  }
`

export default Contents