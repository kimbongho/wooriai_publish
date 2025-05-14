import styled from '@emotion/styled'
import {FormatViewDetail, ListBox, SelectBox, NoData } from '@/shared'

export const Contents = styled.div`
  ${FormatViewDetail}
  ${ListBox}
  ${SelectBox}
  ${NoData}

  background:#F5F6FA;
  .dosage-detail-wrap{
    padding-top:2.4rem;
    .list-box-wrap{
      margin-top:2.4rem;
    }

    .list-box{
      .time{font-size:1.4rem;
        &:before{display:none;}
      }
    }
  }

  .dosage-edit-wrap{
    padding-top:2.4rem;
    .menu{display:flex;align-items:center;
      .right{margin-left:auto;}
    }
    .section{
      margin-top:2.4rem;
      .textarea{margin-top:0;border-color:#D4D6E3}
      .tit{display: block; width: 100%; font-size: 1.6rem; color: #111; font-weight: 500; margin-bottom: 0.8rem; }}
      .dosage-time ~ .dosage-time{margin-top:2.4rem;
    }
  }

  .btn-add{margin-top:2.4rem;}

  .check-wrap{margin-top:2.6rem;
    .inp-check{align-items:flex-start !important;}
  }
`
export default Contents