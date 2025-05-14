import styled from '@emotion/styled'
import { DateText, SelectBox, ViewDetail, FormWrap, BannerProfile, Thumb, AlbumList, SelectItemList } from '@/shared'

export const Contents = styled.div`
  ${DateText}
  ${SelectBox}
  ${ViewDetail}
  ${FormWrap}
  ${BannerProfile}
  ${AlbumList}
  ${SelectItemList}


  background:#F5F6FA;
  .days-album-wrap {
    padding: 2.4rem 0;
    .date-text { margin-bottom: 1.6rem; }

    .photo-list-box {
      background: #fff; border-radius: 1rem; border:0.1rem solid #ECEEF5;
      ~ .photo-list-box { margin-top: 1.6rem; }
      .info {
        display: flex; align-items: center; height: 5.7rem; font-size: 1.6rem; padding: 0 1.6rem;

        .teacher-name {
          margin-left: auto;
          b{font-weight:500;}
          span { font-size: 1.4rem; margin-left:0.4rem;}
        }
      }

      ul {
        padding-bottom:0.2rem;
        li {
          padding: 0 1.6rem; display: flex; align-items: center;
          .link {width:100%;
            padding:1.2rem 0; display: flex;justify-content: flex-start; align-items: center;border-top: 0.1rem solid #ECEEF5;flex-wrap:wrap;
            .thumb { width: 5.6rem;min-width:5.6rem; height: 5.6rem; margin-right: 1.6rem; ${Thumb}; border-radius:1rem;}
            .text { font-size: 1.6rem; font-weight: 500;white-space: normal; text-align: left;flex:1;}
            .btm-etc{width:100%;text-align:right;margin-top:0.8rem;}
            .reserve { color: #DC0000; display: inline-flex; align-items: center; margin-left:auto;
              &:before { content: ''; display: inline-block; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.77983 14.28C5.63983 14.28 3.07983 11.72 3.07983 8.58C3.07983 5.44 5.63983 2.88 8.77983 2.88C11.9198 2.88 14.4798 5.44 14.4798 8.58C14.4798 11.72 11.9198 14.28 8.77983 14.28ZM8.77983 4.12C6.31983 4.12 4.31983 6.12 4.31983 8.58C4.31983 11.04 6.31983 13.04 8.77983 13.04C11.2398 13.04 13.2398 11.04 13.2398 8.58C13.2398 6.12 11.2398 4.12 8.77983 4.12Z' fill='%23DC0000'/%3E%3Cpath d='M11.7198 9.59996H8.99976C8.44976 9.59996 7.99976 9.14996 7.99976 8.59996V5.57996H9.23976V8.36996H11.7198V9.60996V9.59996Z' fill='%23DC0000'/%3E%3Cpath d='M4.42872 1.72042L2.01367 4.11365L2.8865 4.99443L5.30154 2.6012L4.42872 1.72042Z' fill='%23DC0000'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; margin-right: 0.4rem; }
            }
          }
        }
      }
    }
  }

  .album-write {
    padding: 2.4rem 0;
    .form-wrap {
      .input,
      .textarea { background: #fff; border: 1px solid #D4D6E3; }
    }
    .analyze-upload-list { margin-top: 2.4rem; }
    .btn-wrap { margin-top: 3.2rem; }
  }

  .album-view {
    padding: 2.4rem 0;
    .text { margin-top: 2.4rem; color: #505050; font-size: 1.6rem; }
  }
`
export default Contents