/** @jsxImportSource react */
import styled from '@emotion/styled'
import Link from 'next/link'
// import Styles from './publish.style'

// const Title = Styles.Title
// const Table = Styles.Table
// const TableHead = Styles.TableHead
// const TableDiv = Styles.TableDiv
// const Text = Styles.Text

const Title = styled.h1`
	color: #000;
	font-size: 22px;
	font-weight: bold;
`

const Table = styled.table`
	width: 100%;
	font-size: 12px;
	border-collapse: collapse;
	border: 0px solid #666;
	margin-top: 10px;
`

const TableHead = styled.th`
	padding: 6px;
	border: 1px solid #fff;
	color: #fff;
	font-size: 110%;
	background-color: #1f5dbe;
`

const TableDiv = styled.td`
	height: 24px;
	padding: 4px;
	border: 1px solid #666;
`

const Text = styled.span`
	text-decoration: underline;
	color: #009;
`

interface MenuProps {
	category: string
	title?: boolean
	depth1: string
	depth2: string
	depth3: string
	path: string
	realpath: string
	memo: string
}

const PublishingMenuList: Array<MenuProps> = [
	{ category: '00.공통', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: 'Toast', depth1: '', depth2: '', depth3: '', path: '/test/toast', realpath: '', memo: '' },
	{ category: 'Alert', depth1: '', depth2: '', depth3: '', path: '/test/dialog', realpath: '', memo: '' },
	{ category: 'Loading', depth1: '', depth2: '', depth3: '', path: '/test/loading', realpath: '', memo: '' },

	{ category: '01.메인', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '스플래시', depth1: '', depth2: '', depth3: '', path: '/publish/splash', realpath: '/splash', memo: '' },
	{ category: '메인', depth1: '', depth2: '', depth3: '', path: '/publish/home', realpath: '/home', memo: '' },

	{ category: '02.회원가입', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '약관동의', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/ruleAgree', realpath: '/agreement/ruleAgree', memo: '' },
	{ category: '이용약관', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule', realpath: '/agreement/rule', memo: '' },
	{ category: '개인정보처리방침', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule2', realpath: '', memo: '' },
	{ category: '마케팅정보 수신 동의', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/marketing', realpath: '', memo: '' },
	{ category: '휴대폰번호입력', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/phone', realpath: '/agreement/phone', memo: '' },
	{ category: '휴대폰번호검증 공통', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/certify', realpath: '/agreement/certify', memo: '' },
	{ category: '아이디등록', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/idRegister', realpath: '/agreement/idRegister', memo: '' },
	{ category: '비밀번호 설정', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/pwRegister', realpath: '/agreement/pwRegister', memo: '' },
	{ category: '회원가입완료', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/joinComplete', realpath: '/agreement/joinComplete', memo: '' },

	{ category: '03.로그인', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '로그인', depth1: '', depth2: '', depth3: '', path: '/publish/signin/login', realpath: '/signin/login', memo: '' },
	{ category: '접근권한요청', depth1: '', depth2: '', depth3: '', path: '/publish/signin/requestAccess', realpath: '/signin/requestAccess', memo: '' },
	{ category: '아이디/비밀번호찾기', depth1: '', depth2: '', depth3: '', path: '/publish/signin/userFind', realpath: '/signin/userFind', memo: '' },
	{ category: '아이디확인', depth1: '', depth2: '', depth3: '', path: '/publish/signin/idCheck', realpath: '/signin/idCheck', memo: '' },
	{ category: '비밀번호변경', depth1: '', depth2: '', depth3: '', path: '/publish/signin/pwChange', realpath: '/signin/pwChange', memo: '' },

	{ category: '04.속성 선택', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '서비스선택 ', depth1: '', depth2: '', depth3: '', path: '/publish/property/service/choice', realpath: '/property/service/choice', memo: '' },
	{ category: '어린이집 검색', depth1: '', depth2: '', depth3: '', path: '/publish/property/center/search', realpath: '/property/center/search', memo: '' },
	{ category: '등록하기', depth1: '', depth2: '', depth3: '', path: '/publish/property/regist', realpath: '/property/regist', memo: '' },
	{ category: '이름등록', depth1: '', depth2: '', depth3: '', path: '/publish/property/phone/check', realpath: '/property/phone/check', memo: '페이지 로직이 달라져서 url 이름 변경' },
	{ category: '프로필설정', depth1: '', depth2: '', depth3: '', path: '/publish/property/profile/regist', realpath: '/property/profile/regist', memo: '' },
	{ category: '등록완료', depth1: '', depth2: '', depth3: '', path: '/publish/property/complete', realpath: '/property/complete', memo: '' },

	{ category: '06. 공지사항', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/notice/list', realpath: '/notice/list', memo: '' },
	{ category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/notice/write', realpath: '/notice/write', memo: '' },
	{ category: '', depth1: '의무공지작성', depth2: '', depth3: '', path: '/publish/notice/write2', realpath: '/notice/write2', memo: '' },
	{ category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/notice/preview', realpath: '/notice/preview', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/notice/detail', realpath: '/notice/detail', memo: '/notice/detail/[id]' },

	{ category: '07. 알림장', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/report/list', realpath: '/dailynews/list', memo: '' },
	{ category: '사진선택 ', depth1: '', depth2: '', depth3: '', path: '/publish/report/select', realpath: '', memo: '' },
	{ category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/report/write', realpath: '/dailynews/write', memo: '' },
	{ category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/report/preview', realpath: '/dailynews/preview', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/report/detail', realpath: '/dailynews/detail', memo: '' },

	{ category: '08. 앨범', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/album/albumMain', realpath: '/album/albumMain', memo: '' },
	{ category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/album/write', realpath: '/album/write', memo: '' },
	{ category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/album/preview', realpath: '/album/preview', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/album/detail', realpath: '/album/detail', memo: '' },

	{ category: '09. 출결', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/presence/main', realpath: '/presence/main', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/presence/detail', realpath: '/presence/detail', memo: '' },

	{ category: '10. 투약의뢰서', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '등록', depth1: '', depth2: '', depth3: '', path: '/publish/dosage/detail', realpath: '/dosage/detail', memo: '' },
	{ category: '미등록', depth1: '', depth2: '', depth3: '', path: '/publish/dosage/noregist', realpath: '/dosage/detail', memo: '' },
	{ category: '작성하기', depth1: '', depth2: '', depth3: '', path: '/publish/dosage/edit', realpath: '/dosage/edit', memo: '' },

	{ category: '11. 귀가동의서', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '등록', depth1: '', depth2: '', depth3: '', path: '/publish/return/detail', realpath: '/return/detail', memo: '' },
	{ category: '미등록', depth1: '', depth2: '', depth3: '', path: '/publish/return/noregist', realpath: '/return/detail', memo: '' },
	{ category: '작성하기', depth1: '', depth2: '', depth3: '', path: '/publish/return/edit', realpath: '/return/edit', memo: '' },

	{ category: '13. 일정등록', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '홈', depth1: '', depth2: '', depth3: '', path: '/publish/schedule/list', realpath: '/schedule/list', memo: '' },
	{ category: '등록', depth1: '', depth2: '', depth3: '', path: '/publish/schedule/edit', realpath: '/schedule/edit', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/schedule/detail', realpath: '/schedule/detail', memo: '/schedule/detail/[id]' },

	{ category: '14. 식단', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '일간', depth1: '', depth2: '', depth3: '', path: '/publish/meal/daily/main', realpath: '/meal/daily/main', memo: '' },
	{ category: '일간 등록/수정', depth1: '', depth2: '', depth3: '', path: '/publish/meal/daily/edit', realpath: '/meal/daily/edit', memo: '' },
	{ category: '월간', depth1: '', depth2: '', depth3: '', path: '/publish/meal/monthly/main', realpath: '/meal/monthly/main', memo: '' },
	{ category: '월간 등록/수정', depth1: '', depth2: '', depth3: '', path: '/publish/meal/monthly/edit', realpath: '/meal/monthly/edit', memo: '' },

	{ category: '17. 클라우드 사진 업로드', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '클라우드기본 ', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/home', realpath: '/cloud/home', memo: '' },
	{ category: '클라우드폴더기본', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/folder', realpath: '/cloud/folder', memo: '' },
	{ category: 'hold', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/hold', realpath: '/cloud/hold', memo: '' },

	{ category: '18. AI 위험감지', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: 'AI 위험 알림 기본 ', depth1: '', depth2: '', depth3: '', path: '/publish/alert/main', realpath: '/alert/main', memo: '' },
	{ category: 'AI 위험 알림 미결', depth1: '', depth2: '', depth3: '', path: '/publish/alert/unsolve', realpath: '/alert/unsolve', memo: '' },
	{ category: 'AI 위험 알림 해결', depth1: '', depth2: '', depth3: '', path: '/publish/alert/solve', realpath: '/alert/solve', memo: '' },
	{ category: 'AI 위험감지 보고서 작성', depth1: '', depth2: '', depth3: '', path: '/publish/alert/report/edit', realpath: '/alert/report/edit', memo: '' },
	{ category: 'AI 위험감지 보고서 내용보기', depth1: '', depth2: '', depth3: '', path: '/publish/alert/report/detail', realpath: '/alert/report/detail', memo: '' },

	{ category: '19. 원정보', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '원정보 기본', depth1: '', depth2: '', depth3: '', path: '/publish/institute/home', realpath: '/institute/main', memo: '' },
	{ category: '원정보 관리', depth1: '', depth2: '', depth3: '', path: '/publish/institute/edit', realpath: '/institute/edit', memo: '' },

	{ category: '20. 선생님정보', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록', depth1: '', depth2: '', depth3: '', path: '/publish/teacher/list', realpath: '/teacher/list', memo: '' },
	{ category: '수정', depth1: '', depth2: '', depth3: '', path: '/publish/teacher/edit', realpath: '/teacher/edit', memo: '' },
	{ category: '수정확인', depth1: '', depth2: '', depth3: '', path: '/publish/teacher/list', realpath: '/teacher/edit/check', memo: '' },

	{ category: '21. 반 정보', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록', depth1: '', depth2: '', depth3: '', path: '/publish/class/home', realpath: '/class/list', memo: '' },
	{ category: '수정', depth1: '', depth2: '', depth3: '', path: '/publish/class/edit', realpath: '/class/edit', memo: '' },
	{ category: '수정확인', depth1: '', depth2: '', depth3: '', path: '/publish/class/home', realpath: '/class/edit/check', memo: '' },

	{ category: '22. 원아정보', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '목록/수정확인', depth1: '', depth2: '', depth3: '', path: '/publish/child/list', realpath: '/child/list', memo: '' },
	{ category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/child/detail', realpath: '/child/detail', memo: '/child/detail/[id]' },
	{ category: '수정', depth1: '', depth2: '', depth3: '', path: '/publish/child/edit', realpath: '/child/edit', memo: '' },
	{ category: 'BI리포트', depth1: '', depth2: '', depth3: '', path: '/publish/child/bireport', realpath: '/child/bireport', memo: '' },
	{ category: '수정확인', depth1: '', depth2: '', depth3: '', path: '/publish/child/list', realpath: '/child/edit/check', memo: '' },

	{ category: '23. 전자출결 정보', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '전자출결 기본 ', depth1: '', depth2: '', depth3: '', path: '/publish/tag/main', realpath: '/tag/main', memo: '' },
	{ category: '수정', depth1: '', depth2: '', depth3: '', path: '/publish/tag/edit', realpath: '/tag/edit', memo: '' },
	{ category: '수정확인 ', depth1: '', depth2: '', depth3: '', path: '', realpath: '/tag/edit/confirm', memo: '' },

	{ category: '24. 개인정보 설정', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '기본정보 ', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/settingMain', realpath: '/privacy/settingMain', memo: '' },
	{ category: '연락처관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/phoneChange', realpath: '/privacy/phoneChange', memo: '' },
	{ category: '비밀번호관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/pwChange', realpath: '/privacy/pwChange', memo: '' },
	{ category: '알림설정', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/pushSetting', realpath: '/privacy/pushSetting', memo: '' },
	{ category: '앱정보', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/appinfo', realpath: '/privacy/appInfo', memo: '' },
	{ category: '오픈라이센스', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/appinfo/license', realpath: '/privacy/appInfo/license', memo: '' },
	{ category: '회원탈퇴', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/memberWithdraw', realpath: '/privacy/memberWithdraw', memo: '' },
]

const _ = () => {
	return (
		<>
			<Title>Publishing Work Sheet &nbsp;&nbsp;</Title>
			<Table>
				<colgroup>
					<col style={{ width: '160px' }} />
					<col style={{ width: '160px' }} />
					<col style={{ width: '160px' }} />
					<col style={{ width: '140px' }} />
					<col style={{ width: '300px' }} />
					<col style={{ width: '300px' }} />
					<col style={{ width: 'auto' }} />
				</colgroup>
				<thead>
					<tr>
						<TableHead>Category</TableHead>
						<TableHead>1Depth</TableHead>
						<TableHead>2Depth</TableHead>
						<TableHead>3Depth</TableHead>
						<TableHead>FileName/Link</TableHead>
						<TableHead>RealLink</TableHead>
						<TableHead>Memo</TableHead>
					</tr>
				</thead>
				<tbody>
					{PublishingMenuList.map((item, index) => {
						return (
							<tr key={index} style={item.title ? { background: '#eee' } : {}}>
								<TableDiv>{item.category}</TableDiv>
								<TableDiv>{item.depth1}</TableDiv>
								<TableDiv>{item.depth2}</TableDiv>
								<TableDiv>{item.depth3}</TableDiv>
								<TableDiv>
									<Link href={item.path} target='_blank' title='새창열림'>
										<Text>{item.path}</Text>
									</Link>
								</TableDiv>
								<TableDiv>
									<Link href={item.realpath} target='_blank' title='새창열림'>
										<Text>{item.realpath}</Text>
									</Link>
								</TableDiv>
								<TableDiv>{item.memo}</TableDiv>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</>
	)
}

export default _
