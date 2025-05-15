import styled from '@emotion/styled'
import {MX, COLOR, Thumb, ChildInfoList, InfoDescBox, BannerProfile, MonthIndicator, AlbumList, DataTable2, ListDot } from '@/shared'

export const Contents = styled.div`
	${ChildInfoList}
	${InfoDescBox}
	${MonthIndicator}
	${BannerProfile}
	${AlbumList}
	${DataTable2}
	${ListDot}

	background:#F5F6FA;
	.child-info-list { padding-top: 2.4rem; }

	.child-detail-wrap {
		.profile {
			display: flex; justify-content: center; align-items: center; flex-direction: column;

			.thumb {${Thumb}; width: 7.2rem; height: 7.2rem; }
			.name { color: #111; font-size: 2rem; font-weight: 500; margin-top: 1.6rem; }
			.sub { font-weight: 500; margin-top: 0.3rem; color: #878AA1; font-size: 1.4rem; }
			.tel { margin-top: 0.3rem; font-weight: 500; font-size: 1.6rem; color: #60637B; }
		}
		.info-desc-box { margin-top: 2.4rem; }
	}
	.child-detail-section {
		padding: 2.4rem 0;

		.album-list{
			grid-template-columns: repeat(4, 1fr);
		}
		.photo-guide {
			background: #fff; color: #111; border-radius: 1rem; font-size: 1.4rem; padding: 1.8rem 1.7rem 1.8rem 8.7rem; background: #fff url("data:image/svg+xml,%3Csvg width='57' height='65' viewBox='0 0 57 65' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 64.3099C44.9117 64.3099 57 62.2258 57 59.655C57 57.0841 44.9117 55 30 55C15.0883 55 3 57.0841 3 59.655C3 62.2258 15.0883 64.3099 30 64.3099Z' fill='%23EAEDF3'/%3E%3Cg clip-path='url(%23clip0_500_25126)'%3E%3Cpath d='M29.2778 46.0908C39.3723 46.0908 47.5556 44.9018 47.5556 43.4351C47.5556 41.9683 39.3723 40.7793 29.2778 40.7793C19.1832 40.7793 11 41.9683 11 43.4351C11 44.9018 19.1832 46.0908 29.2778 46.0908Z' fill='%23D4D6E3'/%3E%3C/g%3E%3Cg clip-path='url(%23clip1_500_25126)'%3E%3Cpath d='M53.1801 31.9896C52.5101 5.2596 30.7101 5.5296 27.2801 5.7396C27.0301 5.7596 26.7801 5.7596 26.5301 5.7596C23.0901 5.7196 1.30008 6.5396 1.97008 33.2696C1.97008 33.2696 1.19008 53.7696 28.0201 53.1796C28.0201 53.1796 28.0701 53.1796 28.1001 53.1796C28.1301 53.1796 28.1501 53.1796 28.1801 53.1796C55.0001 52.4296 53.2001 31.9896 53.2001 31.9896H53.1801Z' fill='%234252E2' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M24.4547 40.0083C9.90138 39.568 9.79012 31.0107 9.79284 30.9208C9.47977 27.0495 10.4471 23.8473 12.6738 21.3435C17.4895 15.9367 26.4975 15.4789 27.5091 15.4395C27.8505 15.3998 29.447 15.208 31.626 15.2739C37.2035 15.4427 46.6819 17.2902 47.5345 27.8007C47.5423 27.871 47.9686 30.6452 45.7513 33.4994C43.0242 36.9986 37.4354 39.1905 29.5721 39.843L29.4621 39.8397C27.6866 39.9961 26.0046 40.0352 24.4553 39.9884L24.4547 40.0083Z' fill='white'/%3E%3Cpath d='M31.6106 15.7828C38.2176 15.9827 46.2531 18.2367 47.0326 27.8547L47.0314 27.8947L47.0402 27.935C47.0569 28.0455 47.421 30.5577 45.3294 33.2257C42.6971 36.5676 37.2906 38.685 29.6772 39.3451L29.4164 39.3672C27.6714 39.5045 25.9992 39.554 24.4699 39.5077C10.5063 39.0852 10.293 31.2552 10.2929 30.925L10.2942 30.885L10.2954 30.845C9.99685 27.1543 10.9202 24.0809 13.0537 21.6843C17.8073 16.3456 27.143 15.9678 27.5337 15.9496L27.5837 15.9511L27.634 15.9426C27.9254 15.9014 29.4916 15.7187 31.6206 15.7831M31.6409 14.7832C29.4319 14.7164 27.8154 14.9076 27.494 14.9479C26.3321 14.9928 8.06751 15.8608 9.2928 30.9148C9.2928 30.9148 9.22689 40.0369 24.4399 40.4972C25.9692 40.5435 27.6512 40.5044 29.4964 40.3601C29.4964 40.3601 29.5364 40.3613 29.5564 40.3619C29.5764 40.3625 29.5963 40.3631 29.6163 40.3637C49.8966 38.6763 48.0352 27.785 48.0352 27.785C47.1542 16.8934 37.4079 14.9677 31.6406 14.7932L31.6409 14.7832Z' fill='%232942AA'/%3E%3Cpath d='M32.1862 31.4783C32.259 32.7111 30.8355 33.7985 29.0214 33.9037C27.2074 34.0089 25.6645 33.0918 25.5917 31.859' fill='white'/%3E%3Cpath d='M32.1862 31.4783C32.259 32.7111 30.8355 33.7985 29.0214 33.9037C27.2074 34.0089 25.6645 33.0918 25.5917 31.859' stroke='black' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M15.4728 33.3211L14.4933 34.9422' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M17.3773 33.1997L16.4082 34.8111' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M19.5749 32.9849L18.6054 34.6063' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M38.5037 31.9888L37.5345 33.6002' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M40.4086 31.8579L39.4391 33.4793' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M42.6057 31.6528L41.6366 33.2642' stroke='%23EFA0B5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M20.0985 32.1806C21.1902 32.1173 21.9879 30.5597 21.8802 28.7016C21.7725 26.8436 20.8002 25.3886 19.7085 25.4518C18.6168 25.5151 17.8191 27.0727 17.9268 28.9308C18.0345 30.7888 19.0068 32.2438 20.0985 32.1806Z' fill='black'/%3E%3Cpath d='M37.1971 31.1903C38.2888 31.127 39.0865 29.5695 38.9788 27.7114C38.8711 25.8533 37.8988 24.3983 36.8071 24.4616C35.7154 24.5249 34.9177 26.0824 35.0254 27.9405C35.1331 29.7986 36.1054 31.2536 37.1971 31.1903Z' fill='black'/%3E%3Cpath d='M47.9301 11.8883C47.9301 11.8883 47.8296 11.8884 47.7788 11.8934C42.8849 4.28406 33.5382 -0.16871 23.645 1.3035C13.1807 2.85985 5.23174 10.5741 3.25469 19.985C2.87269 20.0879 2.65583 20.1468 2.63494 20.1548C2.1087 20.2936 1.80375 20.8362 1.95251 21.3634C2.08532 21.8489 2.55825 22.1469 3.03779 22.0738C3.07759 22.0778 3.11838 22.0718 3.15119 22.0449C9.60889 18.8356 30.9811 12.4608 47.9777 13.8425C48.5151 13.8957 48.9484 13.3759 48.932 12.8316C48.9155 12.2873 48.4654 11.8609 47.9211 11.8773L47.9301 11.8883Z' fill='%23F2C873' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M44.5669 8.81223C25.0536 9.20113 10.7029 14.0807 4.96771 16.3867C4.70768 17.0845 4.47751 17.7852 4.27521 18.5088C8.757 16.5811 24.3207 10.7163 46.0661 10.5183C45.6207 9.94158 45.057 9.34311 44.5669 8.81223Z' fill='white'/%3E%3Cpath d='M39.5801 36.5586H21.4001C19.9752 36.5586 18.8201 37.7137 18.8201 39.1386V51.7986C18.8201 53.2235 19.9752 54.3786 21.4001 54.3786H39.5801C41.005 54.3786 42.1601 53.2235 42.1601 51.7986V39.1386C42.1601 37.7137 41.005 36.5586 39.5801 36.5586Z' fill='white' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M19.16 52.7187L27.27 44.1387L35.27 52.2887' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M32.3401 49.299L36.6701 45.709L42.1501 50.259' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M34.54 43.7986C35.4347 43.7986 36.16 43.0733 36.16 42.1786C36.16 41.2839 35.4347 40.5586 34.54 40.5586C33.6453 40.5586 32.92 41.2839 32.92 42.1786C32.92 43.0733 33.6453 43.7986 34.54 43.7986Z' fill='%23F2C873' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M8.51001 44.6888C8.75001 44.7788 14.04 46.3788 17.91 47.5488C20.1 48.2088 22.4 46.8888 22.94 44.6688C23.5 42.3588 21.93 40.0788 19.57 39.7688L10.19 38.5488' fill='%234252E2'/%3E%3Cpath d='M8.51001 44.6888C8.75001 44.7788 14.04 46.3788 17.91 47.5488C20.1 48.2088 22.4 46.8888 22.94 44.6688C23.5 42.3588 21.93 40.0788 19.57 39.7688L10.19 38.5488' stroke='black' stroke-miterlimit='10'/%3E%3Cpath d='M47.01 33.7207C46.79 33.8507 42.31 37.0807 39.03 39.4507C37.17 40.7907 36.82 43.4207 38.26 45.2007C39.76 47.0507 42.52 47.1907 44.2 45.5007L50.87 38.7907' fill='%234252E2'/%3E%3Cpath d='M47.01 33.7207C46.79 33.8507 42.31 37.0807 39.03 39.4507C37.17 40.7907 36.82 43.4207 38.26 45.2007C39.76 47.0507 42.52 47.1907 44.2 45.5007L50.87 38.7907' stroke='black' stroke-miterlimit='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_500_25126'%3E%3Crect width='36.5556' height='5.31514' fill='white' transform='translate(11 40.7793)'/%3E%3C/clipPath%3E%3CclipPath id='clip1_500_25126'%3E%3Crect width='53.71' height='54.88' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 1.7rem 50%; background-size: auto 6.4rem;

			.sub { color: #505050; margin-left:0.3rem;}
			+ .thumbnail{margin-top: 2.5rem;}
		}

		.txt-noti{font-size:1.4rem; color:#878AA1;margin-top:1.6rem;}
	}
	.child-modify-wrap { padding-top: 2.4rem; }
	.photo-upload-list{margin-top:2.5rem;}


	.bireport-section{padding-top:2rem;
			.banner-profile{
				> div{padding:1.6rem;background:#fff;}
			}

		.legend {margin:0 1.7rem; margin-top:2rem; height: 4rem; background: #fff; border-radius: 1rem; padding: 0 3.5rem; display: flex; align-items: center; justify-content: space-between;
			border:0.1rem solid #ECEEF5;
			i { display: inline-block; margin-right: 0.5rem; width: 0.9rem; height: 0.9rem; border-radius: 0.2rem; }

			.txt { font-size: 1.2rem; color: #999; }
			.warning i { background: #DC0000; }
			.caution i { background: #ECAB2C; }
			.normal i { background: #2F5ED7; }
		}

		.no-data{padding: 6rem 0;}
	}

	.bi-chart-wrap{
		margin-top:2rem;
		.chart-box{
			background:#fff; border-radius:1rem; padding:2.4rem 1.6rem;		border:0.1rem solid #ECEEF5;
			~ .chart-box{margin-top:1.2rem;}
			.chart-tit{
				+ *{margin-top:1.6rem;}
				b{font-size:1.6rem;font-weight:500; color:#111;
					em{ color:${COLOR.primary};vertical-align:middle;
						strong{font-weight:700;vertical-align:middle;font-family:'Pretendard';}
					}
				}
			}
			> .chart-area .tit:before{content:'';display:inline-block;width:2.4rem;height:2.4rem;background-repeat:no-repeat;background-position:0 0;background-size:auto 100%;}

				.tit-wrap{margin-bottom:3rem; display:flex;align-items:center;
					&.st2{flex-direction:column;justify-content:flex-start;margin-bottom:0;}
					.tit{font-size:2rem; color:#111;font-weight:500;display:flex;align-items:center;
						&.activity:before{background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.3018 7.8602C16.5253 7.8602 16.7065 7.679 16.7065 7.45549C16.7065 7.23198 16.5253 7.05078 16.3018 7.05078C16.0783 7.05078 15.8971 7.23198 15.8971 7.45549C15.8971 7.679 16.0783 7.8602 16.3018 7.8602Z' fill='%23505050'/%3E%3Cpath d='M14.8003 5.84887C13.7312 6.55442 12.6503 7.76106 12.4654 9.72095H10.4551C8.3678 9.72095 6.69028 11.4346 6.69028 13.5308V17.9106C6.69028 18.1635 6.84877 18.3892 7.08658 18.475C7.08649 18.475 7.08827 18.4756 7.0923 18.4772L7.1082 18.4837C7.12176 18.4893 7.13913 18.4968 7.16051 18.5062C7.20335 18.5252 7.25737 18.5501 7.32109 18.5801C7.44834 18.64 7.60698 18.7171 7.7788 18.8022C8.12252 18.9724 8.51044 19.1704 8.79034 19.3182C8.97632 19.4164 9.20015 19.4101 9.38029 19.3015C9.56042 19.193 9.67055 18.998 9.67055 18.7877V16.9821C9.67055 15.6378 10.6736 14.6931 11.919 14.6931C13.1644 14.6931 14.1674 15.6378 14.1674 16.9821V18.7877C14.1674 18.9738 14.2538 19.1493 14.4012 19.2629C14.5486 19.3765 14.7403 19.4153 14.9203 19.3679C15.1539 19.3063 15.6967 19.0697 16.4836 18.5728C16.6577 18.4628 16.7633 18.2713 16.7633 18.0654V9.63529C16.7643 9.63598 16.7656 9.63684 16.767 9.63789C16.7757 9.64445 16.7847 9.65077 16.7938 9.65685L17.5048 10.3022C17.7388 10.5146 18.0975 10.509 18.3249 10.2894L19.4436 9.20888C19.68 8.98052 19.6887 8.60444 19.4631 8.36543L17.8239 6.62917V5.48633C17.8239 5.31013 17.7465 5.14283 17.6121 5.02883C17.4778 4.91483 17.3001 4.86565 17.1263 4.89433L17.2239 5.48633C17.1263 4.89433 17.126 4.89438 17.1257 4.89443L17.125 4.89455L17.1233 4.89483L17.1187 4.89561L17.1051 4.89802C17.094 4.90003 17.079 4.90283 17.0604 4.90652C17.0231 4.9139 16.9711 4.92486 16.9064 4.9401C16.7772 4.97055 16.5967 5.01831 16.3818 5.08921C15.954 5.23038 15.3793 5.46679 14.8003 5.84887Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath opacity='0.2' fill-rule='evenodd' clip-rule='evenodd' d='M11.2024 14.1813V10.3223H10.4551C8.70713 10.3223 7.29028 11.7593 7.29028 13.5321V18.0667C7.64634 18.3075 8.50087 18.789 9.07055 18.789V16.9834C9.07055 15.5685 9.97602 14.4867 11.2024 14.1813Z' fill='%23505050'/%3E%3Cpath d='M4.16058 15.6582C5.81562 18.1942 8.67746 19.8717 11.9306 19.8717C15.1838 19.8717 18.0457 18.1942 19.7007 15.6582' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
						&.sociability:before{background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.48123 12.5301C10.0908 12.5301 11.3957 11.2252 11.3957 9.61563C11.3957 8.00602 10.0908 6.70117 8.48123 6.70117C6.87162 6.70117 5.56677 8.00602 5.56677 9.61563C5.56677 11.2252 6.87162 12.5301 8.48123 12.5301Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.99988 18.3377V17.0656C3.99988 14.5901 6.00576 12.582 8.48349 12.582C10.9612 12.582 12.9671 14.5879 12.9671 17.0656V18.3377' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cmask id='path-3-inside-1_2666_22203' fill='white'%3E%3Cpath d='M9.82647 9.61523C9.82647 10.357 9.22514 10.9605 8.48117 10.9605C7.73719 10.9605 7.13586 10.3592 7.13586 9.61523'/%3E%3C/mask%3E%3Cpath d='M11.0265 9.61523C11.0265 8.95249 10.4892 8.41523 9.82647 8.41523C9.16373 8.41523 8.62647 8.95249 8.62647 9.61523H11.0265ZM8.33586 9.61523C8.33586 8.95249 7.79861 8.41523 7.13586 8.41523C6.47312 8.41523 5.93586 8.95249 5.93586 9.61523H8.33586ZM8.62647 9.61523C8.62647 9.69555 8.56113 9.76054 8.48117 9.76054V12.1605C9.88916 12.1605 11.0265 11.0185 11.0265 9.61523H8.62647ZM8.48117 9.76054C8.39993 9.76054 8.33586 9.69647 8.33586 9.61523H5.93586C5.93586 11.022 7.07445 12.1605 8.48117 12.1605V9.76054Z' fill='%23505050' mask='url(%23path-3-inside-1_2666_22203)'/%3E%3Cpath d='M15.5165 12.5301C17.1261 12.5301 18.431 11.2252 18.431 9.61563C18.431 8.00602 17.1261 6.70117 15.5165 6.70117C13.9069 6.70117 12.6021 8.00602 12.6021 9.61563C12.6021 11.2252 13.9069 12.5301 15.5165 12.5301Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.444 13.8C13.2472 13.0451 14.327 12.582 15.5164 12.582C17.992 12.582 20 14.5879 20 17.0656V18.3377' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cmask id='path-7-inside-2_2666_22203' fill='white'%3E%3Cpath d='M16.8619 9.61523C16.8619 10.357 16.2605 10.9605 15.5166 10.9605C14.7748 10.9605 14.1713 10.3592 14.1713 9.61523'/%3E%3C/mask%3E%3Cpath d='M18.0619 9.61523C18.0619 8.95249 17.5246 8.41523 16.8619 8.41523C16.1991 8.41523 15.6619 8.95249 15.6619 9.61523H18.0619ZM15.3713 9.61523C15.3713 8.95249 14.834 8.41523 14.1713 8.41523C13.5085 8.41523 12.9713 8.95249 12.9713 9.61523H15.3713ZM15.6619 9.61523C15.6619 9.69555 15.5965 9.76054 15.5166 9.76054V12.1605C16.9246 12.1605 18.0619 11.0185 18.0619 9.61523H15.6619ZM15.5166 9.76054C15.4363 9.76054 15.3713 9.6952 15.3713 9.61523H12.9713C12.9713 11.0232 14.1133 12.1605 15.5166 12.1605V9.76054Z' fill='%23505050' mask='url(%23path-7-inside-2_2666_22203)'/%3E%3Cpath opacity='0.2' d='M4.18176 18.8814H9.0909V6.33789C7.23447 6.39987 5.74854 7.92433 5.74854 9.79585C5.74854 10.9659 6.32936 12.0004 7.21842 12.6265C5.4314 13.3982 4.18176 15.1764 4.18176 17.2457V18.8814Z' fill='%23505050'/%3E%3C/svg%3E%0A");}
						&.risky:before{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.2' d='M4.26137 9.89951L3.34082 10.3281L7.02301 17.1852C7.02301 17.1852 8.3664 19.6468 10.0265 19.3529V5.18556L9.78466 4.32812V4.75669L9.32438 5.18532L8.40383 5.18526L7.48329 6.0424V11.6138V12.0424L5.18192 9.89951H4.26137Z' fill='%23505050'/%3E%3Cpath d='M10.9871 19.9132C10.9871 19.9132 8.38077 19.8959 6.97406 17.2724C5.88666 15.227 4.4368 12.405 3.84132 11.2485C3.68598 10.9465 3.78954 10.584 4.07434 10.4114L4.20379 10.3337C4.67845 10.0403 5.29119 10.1353 5.66228 10.5581L7.62132 12.802C7.62132 12.802 9.61488 12.5172 11.1252 14.597' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M7.52637 12.7337V6.61492C7.52637 5.99355 8.00102 5.48438 8.58787 5.48438H8.63102C9.21787 5.48438 9.69253 5.98492 9.69253 6.61492V10.5762' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M15.259 13.002L12.0227 18.8877C11.7466 19.3883 12.109 20.001 12.6872 20.001H19.4792C20.066 20.001 20.4285 19.3624 20.1264 18.8532L16.5622 12.9674C16.2601 12.4669 15.5352 12.4841 15.259 12.9933V13.002Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M9.69263 11.0592V5.31151C9.69263 4.72466 10.1673 4.25 10.7541 4.25C11.341 4.25 11.8156 4.72466 11.8156 5.31151V11.0592' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M11.8242 10.9572V6.4782C11.8242 5.85683 12.2989 5.34766 12.8857 5.34766C13.4726 5.34766 13.9472 5.8482 13.9472 6.4782V11.3025' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M13.9558 11.3867V7.78789C13.9558 7.22693 14.4046 6.76953 14.9569 6.76953C15.5092 6.76953 15.958 7.22693 15.958 7.78789V11.5765' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M15.5092 18.2557C15.6042 18.1521 15.7336 18.1003 15.889 18.1003C16.0443 18.1003 16.1738 18.1521 16.2601 18.2557C16.3464 18.3506 16.3809 18.4714 16.3809 18.6095C16.3809 18.7476 16.3377 18.8598 16.2601 18.9547C16.1738 19.0583 16.0443 19.11 15.889 19.11C15.7336 19.11 15.6042 19.0583 15.5092 18.9547C15.4316 18.8598 15.3884 18.7476 15.3884 18.6095C15.3884 18.4628 15.4316 18.3506 15.5092 18.2557ZM15.5438 16.357C15.4747 15.891 15.4229 15.5285 15.3971 15.2869C15.3798 15.097 15.4229 14.9417 15.5179 14.8381C15.6128 14.7432 15.7336 14.6914 15.889 14.6914C16.0443 14.6914 16.1565 14.7432 16.2514 14.8381C16.3636 14.9503 16.4068 15.1057 16.3809 15.2869C16.3464 15.5372 16.3032 15.8996 16.2256 16.357C16.1651 16.7281 16.0875 17.1855 16.0012 17.712H15.7595C15.656 17.1078 15.5869 16.6504 15.5351 16.357H15.5438Z' fill='%23505050'/%3E%3C/svg%3E%0A");}
						&.leaving:before{background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.5035 10.3262C15.8751 9.72553 16.0903 9.03243 16.0903 8.28388C16.0903 6.029 14.1538 4.19922 11.7674 4.19922C9.38106 4.19922 7.44458 6.029 7.44458 8.28388C7.44458 9.03243 7.65974 9.73477 8.04117 10.3447C8.04117 10.3447 8.24656 10.6497 8.34436 10.779L11.9043 15.7324L15.3568 10.5573C15.3568 10.5573 15.4057 10.4833 15.435 10.4371L15.5035 10.3262Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10' stroke-linejoin='round'/%3E%3Cpath opacity='0.2' d='M11.0244 4.19922V14.4684L7.60132 10.5563V7.13327L11.0244 4.19922Z' fill='%23505050'/%3E%3Cpath d='M11.7678 10.2285C12.8318 10.2285 13.6945 9.35273 13.6945 8.27244C13.6945 7.19215 12.8318 6.31641 11.7678 6.31641C10.7037 6.31641 9.84106 7.19215 9.84106 8.27244C9.84106 9.35273 10.7037 10.2285 11.7678 10.2285Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M13.9583 19.8477H5.15613' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M11.0612 14.957H6.36481C5.69127 14.957 5.15613 15.5076 5.15613 16.1796C5.15613 16.8608 5.7005 17.4021 6.36481 17.4021H12.9803' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M5.54732 18.3338C5.54732 18.1616 5.34413 18.0699 5.21499 18.1839L3.38029 19.8027C3.28655 19.8854 3.29082 20.0329 3.38919 20.11L5.22389 21.549C5.35514 21.652 5.54732 21.5585 5.54732 21.3917V18.3338Z' fill='%23505050'/%3E%3Cpath d='M17.1273 21.8904C19.2663 21.8904 21.0003 20.1565 21.0003 18.0175C21.0003 15.8785 19.2663 14.1445 17.1273 14.1445C14.9884 14.1445 13.2544 15.8785 13.2544 18.0175C13.2544 20.1565 14.9884 21.8904 17.1273 21.8904Z' stroke='%23505050' stroke-width='1.2' stroke-miterlimit='10'/%3E%3Cpath d='M16.6969 19.5646C16.8044 19.4473 16.9511 19.3886 17.1272 19.3886C17.3032 19.3886 17.4499 19.4473 17.5477 19.5646C17.6455 19.6722 17.6847 19.8091 17.6847 19.9656C17.6847 20.1221 17.6358 20.2492 17.5477 20.3568C17.4499 20.4742 17.3032 20.5329 17.1272 20.5329C16.9511 20.5329 16.8044 20.4742 16.6969 20.3568C16.6088 20.2492 16.5599 20.1221 16.5599 19.9656C16.5599 19.7993 16.6088 19.6722 16.6969 19.5646ZM16.736 17.4032C16.6577 16.8751 16.5991 16.4643 16.5697 16.1905C16.5502 15.9753 16.5991 15.7993 16.7066 15.6819C16.8142 15.5743 16.9511 15.5156 17.1272 15.5156C17.3032 15.5156 17.4304 15.5743 17.538 15.6819C17.6651 15.809 17.714 15.9851 17.6847 16.1905C17.6455 16.4741 17.5966 16.8849 17.5086 17.4032C17.4402 17.8237 17.3521 18.3421 17.2543 18.9387H16.9805C16.8631 18.2541 16.7849 17.7357 16.7262 17.4032H16.736Z' fill='%23505050'/%3E%3C/svg%3E%0A");}
					}
					.check-box{width:100%;
						.t{font-size:1.6rem;}
					}
					.per{margin-left:auto;font-size:1.6rem; color:${COLOR.primary};font-weight:500;}
					.txt{font-size:1.4rem; color:#60637B;margin-top:1.6rem;}
				}
				.graph{position:relative;}
				.no-data-chart-text{ position:absolute;top:0;left:0; font-size:1.4rem;font-weight:500; color:#60637B;width:100%;height:calc(100% - 3rem);display:flex;justify-content:center;align-items:center;     flex-direction: column;
					background:rgba(255,255,255, 0.75);
					> span{display:block;text-align:center; }
					em{ color:${COLOR.primary};}
				}

		}

		.chart-more{
			width:100%;position:absolute;top:0;left:-999999%; padding-top:3.2rem;margin-top:1.6rem;border-top:0.1rem solid #ECEEF5;
			.tit-wrap{margin-top:0 !important;}
			.chart-area{
				~ .chart-area{margin-top:3.2rem;}
			}
			&.on{
				position:relative;top:0;left:0;
				~ .btn-more .off{display:inline-flex;}
				~ .btn-more .on{display:none;}
			}
		}

		.btn-more {	display: flex; justify-content: center; align-items: center; width: 100%; height: 4rem; margin-bottom: -1rem; margin-top: 3.2rem;
			span { display: flex; align-items: center; font-size: 1.4rem; font-weight: 500; color: #A0A4BE; }
			.on {
				&:after { content: ''; display: block; margin-left: 0.4rem; width: 2rem; height: 2rem; background: url("data:image/svg+xml,%3Csvg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03223 6L10.0322 13L17.0322 6' stroke='%23BDC0D2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; }
			}
			.off {
				display: none;

				&:after { content: ''; display: block; margin-left: 0.4rem; width: 2rem; height: 2rem; background: url("data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.0615 14.4531L10.0615 7.45312L3.06152 14.4531' stroke='%23BDC0D2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; }
			}
		}

	}


	.report-main-text{text-align:center;border-bottom:1px solid #ECEEF5;padding-bottom:1.6rem;
		b{display:block;font-size:1.6rem;font-weight:400;
			strong{font-size: 1.8rem;color: #111111;font-weight: 600;vertical-align:baseline;}
		}
		p{font-size:1.4rem; color:#878AA1;margin-top:0.2rem;}
	}

	.character-summary + *{margin-top:3.2rem;}
	.character-wrap { margin-top: 3.2rem; display: flex; justify-content: center; align-items: center; flex-direction: column;
		.text { font-size: 2.6rem; line-height: 1.4; text-align: center;margin-bottom:2.4rem;
			br { line-height: 1; }
			b { font-weight: 700; vertical-align: baseline; }
		}
		+ .relation-chart{margin-top:7rem;}
		.ico-character{
			&-rabbit { width: 12.5rem; height: 14.9rem; background-image: ${MX.src('/images/ico-character-rabbit.svg')}; }
			&-koala { width: 11.1rem; height: 12.3rem; background-image: ${MX.src('/images/ico-character-koala.svg')}; }
			&-sloth { width: 12.6rem; height: 8.8rem; background-image: ${MX.src('/images/ico-character-sloth.svg')}; }
			&-beaver { width: 9rem; height: 12.7rem; background-image: ${MX.src('/images/ico-character-beaver.svg')}; }
			&-alpaca { width: 9.8rem; height: 15.7rem; background-image: ${MX.src('/images/ico-character-alpaca.svg')}; }
			&-dolphin { width: 13.6rem; height: 12.5rem; background-image: ${MX.src('/images/ico-character-dolphin.svg')}; }}
		}
	}

	.report-notice { margin-top: 2.5rem; background: #F5F6FA; border-radius: 1rem; padding: 1.6rem;font-size: 1.6rem; color: #383838;text-align:center;
		em { color: ${COLOR.primary}; font-weight: 500; vertical-align:middle;}
	}

	.summary-list{margin-top:1.6rem; color:#383838;padding:0 1.4rem;font-size:1.6rem;
		li{padding:1.6rem 0;display:flex;gap:0.5rem;
			~ li{border-top:1px solid #ECEEF5;}
			[class*=ico]{position:relative;top:-0.1rem;}
			span{flex:1;}
		}
	}

	.echart{
		overflow:hidden;
		margin:0 -10%;
		> *{height:calc(100% + 1rem);margin:-4rem 0 -3rem;}
		svg{cursor: default;}
		&.line-chart{}
	}

	.chart-legend {
		display: flex; justify-content: center; align-items: center; gap: 1.6rem;margin-top:2rem;

		+ *{margin-top:3.2rem;}

		.item {
			font-size: 1.2rem; color: #A0A4BE; display: flex; align-items: center; gap: 0.7rem;

			i {
				display: inline-block;

				&.bar { width: 1.6rem; height: 0.2rem; }
				&.rect { width: 1.2rem; height: 1.2rem; border-radius: 0.2rem; }
				&.child-avg { width: 2.4rem; height: 2.4rem; background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.44727 12.0977L21.4473 12.0977' stroke='url(%23paint0_linear_1_3913)' stroke-width='2' stroke-dasharray='3 1'/%3E%3Cg filter='url(%23filter0_i_1_3913)'%3E%3Ccircle cx='12.5776' cy='12.0977' r='4' fill='white'/%3E%3C/g%3E%3Ccircle cx='12.5776' cy='12.0977' r='4' stroke='url(%23paint1_linear_1_3913)' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_1_3913' x='7.57764' y='8.09766' width='9' height='9' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-1' dy='1'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.298516 0 0 0 0 0.369767 0 0 0 0 0.985577 0 0 0 0.4 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_1_3913'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_1_3913' x1='3.44727' y1='11.5977' x2='21.4473' y2='11.5977' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_3913' x1='14.2443' y1='16.2643' x2='15.911' y2='7.09766' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				&.class-avg { width: 2.4rem; height: 2.4rem; background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.7749 12.0977L3.7749 12.0977' stroke='url(%23paint0_linear_1_3922)' stroke-width='2' stroke-dasharray='3 1'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_3922' x1='3.7749' y1='11.5977' x2='19.7749' y2='11.5977' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2360637B'/%3E%3Cstop offset='1' stop-color='%23979AB5'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				&.danger { width: 2.4rem; height: 2.4rem; background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='6.05273' y='6.09766' width='12' height='12' rx='2' fill='url(%23paint0_linear_1_3927)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_3927' x1='12.2842' y1='16.0977' x2='12.2842' y2='6.09766' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DC0000' stop-opacity='0.2'/%3E%3Cstop offset='1' stop-color='%23FF6163' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
			}
		}
	}

	.photo-desc-list{
		ul{ display:grid;grid-template-columns: repeat(2, 1fr);grid-gap: 2.4rem 0.8rem;
			li{
				.img{${Thumb}height:10.8rem;border-radius:1rem;}
				.txt{margin-top:0.8rem;font-weight:500;font-size:1.2rem; color:#60637B;}
				.date{font-size:1.2rem; color:#878AA1;font-weight:400;margin-top:0.4rem;}
				
			}
		}
	}
`
export default Contents