import styled from '@emotion/styled'
import { MX, COLOR, ChildInfoList } from '@/shared'

export const Contents = styled.div`
  ${ChildInfoList}

  background:#F5F6FA;

  .attendance-info {
    .tit { display: block; color: #111; font-weight: 500; font-size: 1.8rem; }
    .code { height: 4.8rem; margin-top: 0.8rem; background: #F5F6FA; border-radius: 1rem; font-size: 1.6rem; display: flex; align-items: center; padding: 0 1.4rem; color: #111; }
  }

  .electronic-attendance-wrap {
    background: #F5F6FA;
    .electronic-attendance-list-section {
      padding: 2.4rem 0;

      > .info {
        font-weight: 500; font-size: 1.6rem; margin-bottom: 1.6rem;

        li {
          ~ li { margin-top: 0.8rem; }
          .label { color: #111; margin-right: 1.6rem; }
          em { color: ${COLOR.primary} }
        }
      }
    }
  }

  .electronic-attendance-modify-wrap{
    .visual {
      .visual-electronic-attendance{width:13.4rem;height:13.4rem;margin:0 auto; background:${MX.src('/images/visual-electronic-attendance.svg')} no-repeat 0 0;background-size:auto 100%;}
      .txt-sub {font-size:1.6rem; color:#666;margin-top:2.4rem;text-align:center;
          em { color:#383838;vertical-align:baseline;font-weight:500;}
      }
    }

    .page-top-area{padding-top:1.6rem;}
    .electronic-attendance-modify-section {
      padding: 2.4rem 0;

      .attendance-info { padding: 3.2rem 1.6rem; background: #fff; border-radius: 1rem; border:0.1rem solid #ECEEF5;}
      .tag-info-regist { padding: 3.2rem 1.6rem; background: #fff; border-radius: 1rem; margin-top: 1.6rem; border:0.1rem solid #ECEEF5;
        .btn-select + *{margin-top:1.6rem;}
      }
    }
  }
`
export default Contents