import styled from '@emotion/styled'
import { COLOR, Thumb, DateText } from '@/shared'

export const Contents = styled.div`
  ${DateText}

  background:#F5F6FA;
  .page-top-area { padding: 2.4rem 1.6rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem;

    .folder-title { background: #F5F6FA; border-radius: 1rem; display: flex; align-items: center; height: 4.8rem; padding: 0 1.6rem;
      &:before { content: ''; display: block; width: 2.4rem; height: 2.4rem; margin-right: 0.6rem; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.2601 5.2207C10.3801 5.2207 10.4901 5.2907 10.5501 5.4207L11.7001 7.5807L12.1201 8.3807H19.8301C20.0201 8.3807 20.1801 8.5707 20.1801 8.8007V18.3707C20.1801 18.6007 20.0201 18.7907 19.8301 18.7907H4.18008C3.99008 18.7907 3.83008 18.6007 3.83008 18.3707V5.6407C3.83008 5.4107 3.99008 5.2207 4.18008 5.2207H10.2601ZM10.2601 3.7207H4.18008C3.16008 3.7207 2.33008 4.5807 2.33008 5.6407V18.3607C2.33008 19.4207 3.16008 20.2807 4.18008 20.2807H19.8201C20.8401 20.2807 21.6701 19.4207 21.6701 18.3607V8.7907C21.6701 7.7307 20.8401 6.8707 19.8201 6.8707H13.0201L11.8701 4.7107C11.5501 4.1007 10.9301 3.7207 10.2501 3.7207H10.2601Z' fill='%23878AA1'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M9.44988 20.2815H5.06988C3.99988 20.2815 3.12988 19.4115 3.12988 18.3415V4.77148H9.43988V20.2815H9.44988Z' fill='%23878AA1'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
      b { font-size: 1.6rem; font-weight: 500; }
      .num { margin-left: auto; color: ${COLOR.primary}; font-size: 1.4rem; font-weight: 500; }
    }

    .btn-wrap { margin-top: 2.4rem; }
  }

  .cloud-view-wrap { padding: 2.4rem 0;
    .menus { display: flex; align-items: center; margin-bottom: 2.4rem;
      .right { margin-left: auto; }
    }

    .cloud-folder {
      ~ .cloud-folder { margin-top: 3rem; }

      > ul { padding: 0 1.6rem; border: 0.1rem solid #ECEEF5; border-radius: 1rem; background: #fff;

        > li {
          padding: 1.6rem 0;
          ~ li { border-top: 1px solid #ECEEF5; }
          .menu { display: flex; align-items: center;
            .right { margin-left: auto; display: flex; align-items: center; }
            .number { display: flex; align-items: center; font-size: 1.4rem; color: #878AA1;
              &:before { content: ''; display: inline-block; margin-right: 0.4rem; position: relative; top: -0.1rem; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.10789 5.09239L8.40036 3.65761C8.19555 3.24909 7.81386 3 7.39493 3H3.62457C2.99152 3 2.47949 3.56793 2.47949 4.27536V12.7246C2.47949 13.4321 2.99152 14 3.62457 14H13.3344C13.9675 14 14.4795 13.4321 14.4795 12.7246V6.36775C14.4795 5.66033 13.9675 5.09239 13.3344 5.09239H9.10789Z' stroke='%23878AA1' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
            }
            .btn-dot-menu { margin-left: 0.7rem; width: 2.4rem; height: 2.4rem; background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4795 20C13.0318 20 13.4795 19.5523 13.4795 19C13.4795 18.4477 13.0318 18 12.4795 18C11.9272 18 11.4795 18.4477 11.4795 19C11.4795 19.5523 11.9272 20 12.4795 20Z' stroke='%23505050' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.4795 13C13.0318 13 13.4795 12.5523 13.4795 12C13.4795 11.4477 13.0318 11 12.4795 11C11.9272 11 11.4795 11.4477 11.4795 12C11.4795 12.5523 11.9272 13 12.4795 13Z' stroke='%23505050' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.4795 6C13.0318 6 13.4795 5.55228 13.4795 5C13.4795 4.44772 13.0318 4 12.4795 4C11.9272 4 11.4795 4.44772 11.4795 5C11.4795 5.55228 11.9272 6 12.4795 6Z' stroke='%23505050' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"); }
          }

          .link { max-width: 100%;width: 100%; margin-top: 1.6rem; display: flex; text-align: left;
            .thumb { ${Thumb};width: 5.6rem; height: 5.6rem; margin-right: 1.6rem; border-radius: 0.8rem; }
            .desc { flex: 1; overflow: hidden;
              .txt { font-size: 1.6rem; font-weight: 500; }
              .input { max-width: 100%; height: 4rem; min-width: 0; }
              .info{
                display:flex;align-items:center;  margin-top:0.4rem;font-size:1.2rem;
                .date-time{color:rgba(135, 138, 161, 1);
                  > * ~ *{margin-left:0.3rem;}
                }
                .from{padding-left:0.8rem;margin-left:0.8rem;position:relative; color:rgba(135, 138, 161, 1);font-weight:500;
                  &:before{content:'';display:block;position:absolute;top:50%;left:0;width:1px;height:0.9rem;background:rgba(212, 214, 227, 1);transform:translateY(-50%);}
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Contents