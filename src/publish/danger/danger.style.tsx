import styled from '@emotion/styled'
import { MX, COLOR, DateText, DataTableList, DashboardBox, ListBox, SelectItemList, SelectBox, ViewDetail, DateIime } from '@/shared'

export const Contents = styled.div`
  ${DateText}
  ${DataTableList}
  ${DashboardBox}
  ${ListBox}
  ${SelectItemList}
  ${SelectBox}
  ${ViewDetail}
  ${DateIime}

  background:#F5F6FA;

  .danger-list-wrap{
    .date-danger-list{margin-top:2.4rem;
      .date-text{margin-bottom:1.6rem; }
    }
  }
  .teacher-list {margin-top:2.4rem;
    .tit{ color:#111;font-weight:500;font-size:1.6rem;display:block;margin-bottom:1.6rem; }
  }
  .banner-profile{margin-top:2.4rem;}
  .dashboard-box{margin-top:1.6rem;
    + .data-type1{margin-top:2.8rem;}
  }

  .danger-unsolve-wrap {
    .page-top-area { margin-bottom: 2.4rem; padding: 1.6rem 3.2rem 2.6rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem;
      .visual { width: 13.4rem; height: 13.4rem; margin: 0 auto; background: ${MX.src('/images/visual-danger.svg')} no-repeat 0 0; background-size: auto 100%; }
      .txt { margin-top: 1.2rem; font-size: 1.4rem; color: #666666; text-align: center; }
      .btn-wrap {
        margin-top: 2rem;
        .btn-img-view { height: 4rem; width: 22rem; border: 0.1rem solid ${ COLOR.primary }; border-radius: 1rem; font-weight: 500; font-size: 1.6rem; color: ${ COLOR.primary }; }
      }
    }
    .btn-wrap {
      margin-top: 3.2rem;
    }
  }

  .danger-solve-wrap {padding-top:2.4rem;}

  .danger-report-wrap{
    padding-top:1.6rem;
    .child-select-section{
      margin-top:2.4rem;
      > .tit{font-weight:500;font-size:1.6rem; color:#111;display:block;margin-bottom:0.8rem;}
      .select-item-list-wrap{
        margin-top:1.6rem;
      }
    }

    .solve-status-section{
      margin-top:3.2rem;
      .tit{font-weight:500;font-size:1.6rem; color:#111;display:block;margin-bottom:0.8rem;}
      .textarea{margin-top:2.4rem; border:0.1rem solid #D4D6E3; }
    }
    .photo-upload-list{margin-top:2.4rem;}
  }

  .danger-detail-wrap{
    .bg-gray{background:#F5F6FA;padding:2.4rem 1.6rem;width:calc(100% + 3.2rem);margin-left:-1.6rem;}
    .select-item-list-wrap{margin-top:2.4rem;}
    .view-detail{margin-bottom:-2.4rem; padding-bottom:3rem;}
  }
`
export default Contents