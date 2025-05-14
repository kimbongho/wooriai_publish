import styled from '@emotion/styled'
import {FormatViewDetail, ListBox, SelectBox, NoData } from '@/shared'

export const Contents = styled.div`
  ${FormatViewDetail}
  ${ListBox}
  ${SelectBox}
  ${NoData}

  background:#F5F6FA;
  .return-detail-wrap{
    padding-top:2.4rem;
    .list-box-wrap{
      margin-top:2.4rem;
    }
  }

  .format-view-detail{border:0.1rem solid #ECEEF5;}

  .return-edit-wrap{
    padding-top:2.4rem;
    .menu{display:flex;align-items:center;
      .right{margin-left:auto;}
      + .section{margin-top:0;}
    }
    .section{
      margin-top:2.4rem;
      .textarea{margin-top:0;border-color:#D4D6E3}
      .tit{display: block; width: 100%; font-size: 1.6rem; color: #111; font-weight: 500; margin-bottom: 0.8rem; }}
      .dosage-time ~ .dosage-time{margin-top:2.4rem;}
      .input{background:#fff;border-color:#D4D6E3}
    }
  }

  .check-wrap{margin-top:2.6rem;
    .inp-check{align-items:flex-start !important;}
  }
`
export default Contents