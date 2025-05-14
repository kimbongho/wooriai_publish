import styled from '@emotion/styled'
import { DateText, ChildInfoList, DashboardBox, ListBox, BannerProfile } from '@/shared'

export const Contents = styled.div`
	${DateText}
	${ChildInfoList}
	${DashboardBox}
	${ListBox}
	${BannerProfile}

	background:#F5F6FA;
	.attendance-wrap { background: #ECEEF5; }

	.attendance-list-wrap {
		.attendance-list-section{padding:2.4rem 0 0;
			.dashboard-wrap{
				margin-bottom:3.2rem;
				.recent-time { font-size: 1.2rem; color: #878AA1;
					.time { margin-left: 1rem; }
					+ .dashboard-box{margin-top:1.5rem;}
				}
			}

		}
		.tab-type1 .tab{margin-bottom:2.4rem; }
	}

	.attendance-detail-wrap{
		.attendance-detail-section{padding:3.2rem 0 2.4rem;
			.date-text + .list-box-wrap{margin-top:2.4rem;}
		}

		.list-box .time{
			font-size:1.4rem;
		}
	}
`
export default Contents