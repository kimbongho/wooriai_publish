import { Button, Input, Textarea, UploadFile, useToast } from '@/entities'
import { FILE_MAX_SIZE, globalStore, isEmptyString, noticeStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { notice, setNotice } = noticeStore()
	const { user } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지 작성',
			back: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const [notiForm, setNotiForm] = useState({
		noticeId: null,
		noticeTitle: '',
		noticeText: '',
		addTm: '',
		addYn: 'Y',
		holdYn: 'N',
		tempSaveYn: 'N',
		daycareId: user.daycareId,
		createdId: user.userId,
		classId: null,
	})

	const [file, setFile] = useState<any>(null)

	useEffect(() => {
		// 임시저장건 있으면 삭제
		Server.get(`/api/notice/info/list/temp/${notice.noticeGb}`).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					const noticeId = resData.noticeId
					if (!isEmptyString(noticeId)) {
						deleteTempNotice(noticeId)
					}
				} else {
					toast(message)
				}
			}
		})
	}, [])

	const deleteTempNotice = (noticeId: string) => {
		Server.post(`/api/notice/required/delete/health/${noticeId}`).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					toast(message)
				}
			}
		})
	}

	const handlePreviewBtn = () => {
		const formData = new FormData()
		formData.append('notice', JSON.stringify(notiForm))
		formData.append('excel', file)

		Server.post(`/api/notice/required/upsert/health`, formData).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setNotice({ noticeId: resData.noticeId })
					router.push(ROUTE_PATH['06-04'])
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<Contents>
			<div className='notice-write-wrap'>
				<div className='form-wrap'>
					<Input type='text' value={notiForm.noticeTitle} placeholder='제목 (필수)' del={true} onChange={(e: any) => setNotiForm((prev: any) => ({ ...prev, noticeTitle: e.target.value }))} />
					<Textarea placeholder='내용' value={notiForm.noticeText} onChange={(e: any) => setNotiForm((prev: any) => ({ ...prev, noticeText: e.target.value }))} />
					<UploadFile file={file} max={FILE_MAX_SIZE} placeholder='파일을 등록해주세요.' onChange={setFile} accept={`.xlsx, .xls, .csv`} />
				</div>
				<div className='notice-box'>
					<b className='tit'>안심하세요</b>
					<div className='text'>
						<p>개인정보는 우리 AI가 알아서 제외하고 공지글로 만들어드려요.</p>
						<p className='c-red'>
							주의해주세요!
							<br />
							보건복지부에서 수신한 엑셀파일 혹은 통합보육센터에서 다운받은 엑셀 파일을 올려야 해요.
						</p>
					</div>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type2 st1' onClick={handlePreviewBtn}>
						미리보기
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
