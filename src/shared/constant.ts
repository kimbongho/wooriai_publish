import moment from 'moment'
import { zeroFill } from './utils'
moment.locale('ko')

export const VALUE = {
	sPc: '915px',
	sMo: '914px',
	sPc2: '476px',
	sMo2: '475px',
	bFont: 'Montserrat, Pretendard, Sans-serif',
	bColor: '#383838',
}

export const COLOR = {
	primary: '#4252E2',
	secondary: '#4e47d6',
	black: '#000',
	red: '#DC0000',
	white: '#fff',
}

export const MX = {
	font: (f: any) => {
		return f.map((ft: any) => `@font-face { font-family: '${ft.font.split('-')[0]}';font-weight: ${ft.weight}; src: url(/fonts/${ft.font}.${ft.format}) format(${ft.format}); ${ft.unicode ? 'unicode-range:' + ft.unicode : ''}}`)
	},
	src: (src: any) => {
		return `url(${src})`
	},
	mq: (s?: any) => {
		for (let i = 160; i < 321; i++) {
			let num = String(16 - 0.02499999 * i)
			let dott = num.indexOf('.')
			s += `
			@media screen and (max-width: ${600 - i}px) {
				html {
					font-size: ${num.substring(0, dott + 6)}px;
				}
			}`
		}
		return s
	},
	media: (pc?: any, mo?: any) => {
		return `
		@media all and (min-width: ${VALUE.sPc}){
			${pc}
		}
		@media all and (max-width: ${VALUE.sMo}){
			${mo}
		}`
	},
	media2: (pc2?: any, mo2?: any) => {
		return `
		@media all and (min-width: ${VALUE.sPc2}){
			${pc2 || ''}
		}
		@media all and (max-width: ${VALUE.sMo2}){
			${mo2 || ''}
		}`
	},
	prefix: (s: any) => {
		return `&:-webkit-${s};${s};`
	},
	bg: (name: any, positon = '0 0', size = 'auto 100%') => {
		return `background: url('/images/" + ${name}) ${positon} no-repeat;background-size: ${size};`
	},
	ell: (num = 1) => {
		if (num > 1) {
			return `overflow: hidden; white-space: normal; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: ${num}; -webkit-box-orient: vertical; word-wrap: break-word; word-break: break-all;`
		} else {
			return `overflow: hidden; white-space: nowrap; text-overflow: ellipsis; word-break: break-all;`
		}
	},
	hide: () => {
		return `border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important; height: 1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important;`
	},
	placeholder: (c = '#A0A4BE') => {
		if (c) {
			return `&::placeholder { color: ${c}; }`
		} else {
			return `::-webkit-input-placeholder{color:${c};vertical-align:middle;font-size:1.4rem;}
        :-webkit-input-placeholder{color:${c};vertical-align:middle;font-size:1.4rem;}`
		}
	},
}

export const ROUTE_PATH = {
	// 01 메인
	'01-01': '/splash',
	// 02 회원가입
	'02-01': '/agreement/ruleAgree',
	'02-02': '/agreement/rule',
	'02-03': '/agreement/phone',
	'02-04': '/agreement/certify',
	'02-05': '/agreement/idRegister',
	'02-06': '/agreement/pwRegister',
	'02-07': '/agreement/joinComplete',
	// 03 로그인
	'03-01': '/signin/login',
	'03-02': '/signin/requestAccess',
	'03-03': '/signin/userFind',
	'03-04': '/signin/idCheck',
	'03-05': '/signin/pwChange',
	// 04 속성선택
	'04-01': '/property/service/choice',
	'04-02': '/property/center/search',
	'04-03': '/property/regist',
	'04-04': '/property/phone/check',
	'04-05': '/property/profile/regist',
	'04-06': '/property/complete',
	// 05 홈
	'05-01': '/home',
	// 06 공지사항
	'06-01': '/notice/list',
	'06-02': '/notice/write',
	'06-03': '/notice/write2',
	'06-04': '/notice/preview',
	'06-05': '/notice/detail',
	// 07 알림장
	'07-01': '/report/list',
	'07-02': '/report/write',
	'07-03': '/report/preview',
	'07-04': '/report/detail',
	// 08 앨범
	'08-01': '/album/albumMain',
	'08-02': '/album/write',
	'08-03': '/album/preview',
	'08-04': '/album/detail',
	// 09 출결
	'09-01': '/presence/main',
	'09-02': '/presence/detail',
	// 10 투약의뢰서
	'10-01': '/dosage/detail',
	'10-02': '/dosage/edit',
	// 11 귀가동의서
	'11-01': '/return/detail',
	'11-02': '/return/edit',
	// 13 일정등록
	'13-01': '/schedule/list',
	'13-02': '/schedule/edit',
	'13-03': '/schedule/detail',
	// 14 식단
	'14-01': '/meal/daily/main',
	'14-02': '/meal/daily/edit',
	'14-03': '/meal/monthly/main',
	'14-04': '/meal/monthly/edit',
	// 15 클라우드
	'15-01': '/cloud/home',
	'15-02': '/cloud/folder',
	'15-03': '/cloud/hold',
	// 18 AI위험감지
	'18-01': '/alert/main',
	'18-02': '/alert/unsolve',
	'18-03': '/alert/solve',
	'18-04': '/alert/report/edit',
	'18-05': '/alert/report/detail',
	// 19 원정보
	'19-01': '/institute/main',
	'19-02': '/institute/edit',
	// 20 선생님정보
	'20-01': '/teacher/list',
	'20-02': '/teacher/edit',
	'20-03': '/teacher/edit/check',
	// 21 반정보
	'21-01': '/class/list',
	'21-02': '/class/edit',
	'21-03': '/class/edit/check',
	// 22 원아정보
	'22-01': '/child/list',
	'22-02': '/child/detail',
	'22-03': '/child/edit',
	'22-04': '/child/bireport',
	'22-05': '/child/edit/check',
	// 23 전자출결정보
	'23-01': '/tag/main',
	'23-02': '/tag/edit',
	'23-03': '/tag/edit/confirm',
	// 24 개인정보설정
	'24-01': '/privacy/settingMain',
	'24-02': '/privacy/phoneChange',
	'24-03': '/privacy/pwChange',
	'24-04': '/privacy/pushSetting',
	'24-05': '/privacy/appInfo',
	'24-06': '/privacy/appInfo/license',
	'24-07': '/privacy/memberWithdraw',
}

export const SRC_COMM = `/api/comm/file/download?id=`
export const SRC_CHILD = `/api/daycare/child/ai/download?id=`
export const SRC_CLOUD = `/api/photos/cloud/download?id=`
export const SRC_CLOUD_LIST = `/api/photos/cloud/downloadList?ids=`
export const SRC_CLOUD_DIR = `/api/photos/cloud/downloadDir?ids=`

export const WEEKDAYS_KR: Array<string> = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
export const RESPONSE_OK: number = 200
export const STATUS_OK: string = 'ok'
export const STATUS_FAIL: string = 'fail'
export const COPYRIGHT: string = `ⓒ2024.INNODEP All. rights reserved.`
export const REGEXP_PHONE = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
export const REGEXP_TEL = /^(01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}|0(?:2-\d{3}|\d{2}-\d{3}|\d{2}-\d{4})-\d{4})$/
export const REGEXP_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?_]).{8,16}$/
export const REGEXP_NUMBER = /[^0-9.]/g
export const REGEXP_ID = /^[a-z\d]{6,20}$/
export const REGEXP_NAME = /^[ㄱ-힣a-zA-Z]{2,10}$/

export const CHARACTER_ICON = {
	토끼: 'character-rabbit',
	코알라: 'character-koala',
	나무늘보: 'character-sloth',
	비버: 'character-beaver',
	알파카: 'character-alpaca',
	돌고래: 'character-dolphin',
}

export const AGREE_DATA: Array<AgreeData> = [
	{ value: 1, essential: true, detail: true, label: '이용약관에 동의합니다.' },
	{ value: 2, essential: true, detail: true, label: '개인정보처리 및 활용 동의합니다.' },
	{ value: 3, essential: true, detail: false, label: '14세 이상입니다.' },
	{ value: 4, essential: false, detail: true, label: '마케팅 정보수집' },
]

export const AGREE_TERM: Array<AgreeTerm> = [
	{ value: 1, privacy: true, title: '이용약관', contents: '이용약관이용약관이용약관이용약관이용약관이용약관이용약관이용약관', execDate: '20230202', version: '1' },
	{ value: 2, privacy: true, title: '개인정보 수집 및 이용약관', contents: '개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용개인정보수집 및 이용', execDate: '20240403', version: '2' },
	{ value: 3, privacy: false, title: '위치기반서비스 이용약관', contents: '위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관위치기반서비스 이용약관', execDate: '20211122', version: '2' },
	{ value: 4, privacy: false, title: '민감정보 처리방침', contents: '민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의민감정보 수집 동의', execDate: '20201104', version: '3' },
	{ value: 5, privacy: false, title: '마케팅 정보 수신 동의', contents: '마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의마케팅 정보 수신 동의', execDate: '20221203', version: '10' },
]

export const RIGHTS_DATA = {
	HEADT: '원장선생님',
	TCHER: '선생님',
	PRENT: '학부모님',
}
export const DOSAGE_TIME_OPTIONS = [
	{ value: 'DOS01', label: '식전 30분' },
	{ value: 'DOS02', label: '식후 30분' },
	{ value: 'DOS03', label: '식사시' },
	{ value: 'DOS04', label: '지정 시간' },
]
export const PRESENCE_STATE_OPTIONS = [
	{ value: '', label: '전체' },
	{ value: '1', label: '등원' },
	{ value: '9', label: '등원 전' },
	{ value: '0', label: '결석' },
]
export const PRESENCE_STATE_RADIO = [
	{ value: '1', label: '등원', state: '1' },
	{ value: '2', label: '인정결석', state: '0' },
	{ value: '3', label: '결석', state: '0' },
	{ value: '4', label: '등원전', state: '9' },
]
export const PRESENCE_ABSENCE_REASON = [
	{ value: '2-1', label: '질병 부상' },
	{ value: '2-2', label: '부모의 출산' },
	{ value: '2-3', label: '미세먼지' },
	{ value: '2-4', label: '자연재해 재난' },
	{ value: '2-5', label: '경조사' },
	{ value: '2-6', label: '모니터링 대상' },
	{ value: '2-7', label: '부모입원' },
	{ value: '2-8', label: '입양' },
	{ value: '2-9', label: '기타' },
]
export const HOME_CALENDER_OPTIONS = {
	notice: '공지',
	events: '일정',
	return: '귀가',
	remedy: '투약',
	attend: '출결',
}

export const HOME_FILTER_LIST = [
	{ value: 'all', name: '전체' },
	{ value: 'notice', name: '공지' },
	{ value: 'schedule', name: '일정' },
	{ value: 'remedy', name: '투약의뢰' },
	{ value: 'return', name: '귀가동의' },
]

export const NEWS_TEMPER_OPTIONS = [
	{ key: 'DNT01', value: 1, name: '정상', checked: true },
	{ key: 'DNT02', value: 2, name: '미열', checked: false },
	{ key: 'DNT03', value: 3, name: '고열', checked: false },
]
export const NEWS_MEAL_OPTIONS = [
	{ key: 'DNM01', value: 1, name: '정상', checked: true },
	{ key: 'DNM02', value: 2, name: '많음', checked: false },
	{ key: 'DNM03', value: 3, name: '적음', checked: false },
	{ key: 'DNM04', value: 4, name: '하지않음', checked: false },
]
export const NEWS_SLEEP_OPTIONS = [
	{ key: 'DNS01', value: 1, name: '정상', checked: true },
	{ key: 'DNS02', value: 2, name: '많음', checked: false },
	{ key: 'DNS03', value: 3, name: '적음', checked: false },
	{ key: 'DNS04', value: 4, name: '하지않음', checked: false },
]
export const NEWS_STOOL_OPTIONS = [
	{ key: 'DND01', value: 1, name: '보통', checked: true },
	{ key: 'DND02', value: 2, name: '딱딱함', checked: false },
	{ key: 'DND03', value: 3, name: '묽음', checked: false },
	{ key: 'DND04', value: 4, name: '설사', checked: false },
	{ key: 'DND05', value: 5, name: '하지않음', checked: false },
]
export const MEAL_TYPE = [
	{ idx: 0, name: '아침', thumb: null, imgFile: null, imgFileId: '', mealDesc: '', disabled: false },
	{ idx: 1, name: '오전 간식', thumb: null, imgFile: null, imgFileId: '', mealDesc: '', disabled: false },
	{ idx: 2, name: '점심', thumb: null, imgFile: null, imgFileId: '', mealDesc: '', disabled: false },
	{ idx: 3, name: '오후 간식', thumb: null, imgFile: null, imgFileId: '', mealDesc: '', disabled: false },
]
export const NOTI_SORT_OPTION = [
	{ value: 'health', label: '건강검진 등록' },
	{ value: 'vaccin', label: '예방접종 등록' },
	{ value: 'class', label: '새학기 반 공지' },
]

export const FILE_MAX_SIZE: number = 10000000
export const LUNCH_TIME = '12:00'
export const TEMP_SAVETIME = 10 * 1000

export const addTimeFormat = (addTime: Date) => {
	let month: number | string = addTime.getMonth() + 1
	let day: number | string = addTime.getDate()
	let hour: number | string = addTime.getHours()
	let minute: number | string = addTime.getMinutes()

	month = zeroFill(month, 2)
	day = zeroFill(day, 2)
	hour = zeroFill(hour, 2)
	minute = zeroFill(minute, 2)

	return addTime.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute
}

export const customDateFormat = (date: any) => `${moment(date).format('MM-DD')} (${WEEKDAYS_KR[moment(date).day()].charAt(0)})`
export const dateData = {
	days: [
		customDateFormat(moment()),
		customDateFormat(moment().add(1, 'days')),
		customDateFormat(moment().add(2, 'days')),
		customDateFormat(moment().add(3, 'days')),
		customDateFormat(moment().add(4, 'days')),
		customDateFormat(moment().add(5, 'days')),
		customDateFormat(moment().add(6, 'days')),
		customDateFormat(moment().add(7, 'days')),
		customDateFormat(moment().add(8, 'days')),
		customDateFormat(moment().add(9, 'days')),
		customDateFormat(moment().add(10, 'days')),
		customDateFormat(moment().add(11, 'days')),
		customDateFormat(moment().add(12, 'days')),
		customDateFormat(moment().add(13, 'days')),
		customDateFormat(moment().add(14, 'days')),
		customDateFormat(moment().add(15, 'days')),
		customDateFormat(moment().add(16, 'days')),
		customDateFormat(moment().add(17, 'days')),
		customDateFormat(moment().add(18, 'days')),
		customDateFormat(moment().add(19, 'days')),
		customDateFormat(moment().add(20, 'days')),
		customDateFormat(moment().add(21, 'days')),
		customDateFormat(moment().add(22, 'days')),
		customDateFormat(moment().add(23, 'days')),
		customDateFormat(moment().add(24, 'days')),
		customDateFormat(moment().add(25, 'days')),
		customDateFormat(moment().add(26, 'days')),
		customDateFormat(moment().add(27, 'days')),
		customDateFormat(moment().add(28, 'days')),
		customDateFormat(moment().add(29, 'days')),
		customDateFormat(moment().add(30, 'days')),
	],
}

export const CharacterList = [
	{ name: '토끼', before: '오늘은 재기발랄한', strong: '토끼', after: '같았어요', icon: 'rabbit' },
	{ name: '코알라', before: '오늘은 얌전한', strong: '코알라', after: '같았어요', icon: 'koala' },
	{ name: '나무늘보', before: '오늘은 차분한', strong: '나무늘보', after: '같았어요', icon: 'sloth' },
	{ name: '비버', before: '오늘은 협동적인', strong: '비버', after: '같았어요', icon: 'beaver' },
	{ name: '알파카', before: '오늘은 옹기종기 활발한', strong: '알파카', after: '같았어요', icon: 'alpaca' },
	{ name: '돌고래', before: '오늘은 활기찬', strong: '돌고래', after: '같았어요', icon: 'dolphin' },
	{ name: '양', before: '오늘은 옹기종기 활발한', strong: '알파카', after: '같았어요', icon: 'alpaca' },
]

export const AvgTodayMin = 70
export const AvgTodayMax = 130
export const AvgSevenMin = 70
export const AvgSevenMax = 130
