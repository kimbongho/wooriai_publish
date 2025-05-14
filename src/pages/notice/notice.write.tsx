/** @jsxImportSource react */
import { Button, Checkbox, Input, Radio, RadioGroup, TabList, TabPanel, Tabs, Textarea, UploadFiles, UploadPhotos, useToast } from '@/entities'
import { PopBoard, PopSelectClass, SelectBoxClass } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmptyString, NOTI_SORT_OPTION, noticeStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const params: any = useParams()

	const { user } = userStore()
	const { notice, setNotice, deleteNotice } = noticeStore()
	const { setHeader, setMenubar, setFooter, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지 작성',
			back: true,
			menu: false,
			close: false,
			trash: !isEmptyString(notice?.noticeId ?? params?.id),
			dotmenu: false,
			menupop: false,
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

	const [tabIndex, setTabIndex] = useState(0)
	const [notiForm, setNotiForm] = useState({
		noticeId: null,
		noticeTitle: '',
		noticeText: '',
		addTm: '',
		addYn: 'N',
		holdYn: 'N',
		tempSaveYn: 'Y',
		daycareId: user.daycareId,
		createdId: user.userId,
		loginId: user.loginId,
		createdName: user.userName,
		classId: null,
	})
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [popClass, setPopClass] = useState<boolean>(false)
	const [editorfiles, setEditorfiles] = useState<Array<File>>([])
	const [files, setFiles] = useState<Array<File>>([])
	const [editorfilesOrg, setEditorfilesOrg] = useState<Array<File>>([])
	const [filesOrg, setFilesOrg] = useState<any>([])
	const [removeFiles, setRemoveFiles] = useState<number[]>([])
	const [notiSort, setNotiSort] = useState('health')
	const [popDel, setPopDel] = useState(false)
	const [popImport, setPopImport] = useState(false)

	const tempNotiForm = useRef<any>({
		noticeId: null,
		noticeTitle: '',
		noticeText: '',
		addTm: '',
		addYn: 'N',
		holdYn: 'N',
		tempSaveYn: 'Y',
		daycareId: user.daycareId,
		createdId: user.userId,
		loginId: user.loginId,
		createdName: user.userName,
		classId: null,
	})

	useEffect(() => {
		if (params?.id) {
			getNotiInfo(params.id)
		} else if (notice?.noticeId) {
			getNotiInfo(notice.noticeId)
		} else {
			getTempNotiInfo()
		}
	}, [])

	useEffect(() => {
		tempNotiForm.current = notiForm
	}, [notiForm])

	useEffect(() => {
		if (isEmptyString(params?.id)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	// useEffect(() => {
	// 	const intervalId = setInterval(tempSave, TEMP_SAVETIME)
	// 	return () => clearInterval(intervalId)
	// }, [])

	const getNotiInfo = async (noticeId: number) => {
		const { data, status } = await Server.get(`/api/notice/info/${noticeId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				setNotiForm((prev: any) => ({
					...prev,
					...resData.notice,
					editYn: 'Y',
				}))
				setFilesOrg(resData.files)
				setEditorfilesOrg(resData.editorfiles)
			} else {
				toast(message)
			}
		}
	}

	const getTempNotiInfo = async () => {
		const { data, status } = await Server.get('/api/notice/info/list/temp/common')
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				if (isEmptyString(resData.noticeId)) {
					setNotiForm((prev: any) => ({
						...prev,
						noticeId: resData.noticeId,
						editYn: 'N',
					}))
					setFilesOrg(data.files)
					setEditorfilesOrg(data.editorfiles)
				}
			} else {
				toast(message)
			}
		}
	}

	const tempSave = async () => {
		const formData = new FormData()

		if (removeFiles.length > 0) tempNotiForm.current['removeFiles'] = removeFiles

		const reqBody = {
			noticeId: params?.id,
			noticeTitle: notiForm.noticeTitle,
			noticeText: notiForm.noticeText,
			daycareId: user.daycareId,
			createdId: user.userId,
			loginId: user.loginId,
			createdName: user.userName,
			classId: selectedClass.classId,
			addTm: '',
			addYn: 'N',
			holdYn: 'N',
			tempSaveYn: 'Y',
		}

		formData.append('notice', JSON.stringify(reqBody))
		files?.map((v: File) => formData.append('files', v))
		editorfiles?.map((v: File) => formData.append('editorfiles', v))

		Server.post('/api/notice/common/upsert', formData).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setNotice({ ...resData, noticeGb: 'NOTICE_CMM', files, editorfiles })
					setNotiForm((prev: any) => ({ ...prev, noticeId: resData.noticeId }))
					router.push(ROUTE_PATH['06-04'])
				} else {
					toast(message)
				}
			}
		})
	}

	const handleDeleteBtn = () => {
		const noticeId: string = params?.id || ''

		Server.post(`/api/notice/common/delete/${noticeId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					deleteNotice()
					router.push(ROUTE_PATH['06-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const handleSelectClass = (selected: any) => {
		setNotiForm(prev => ({ ...prev, classId: selected.classId }))
		setSelectedClass(selected)
	}

	const handleNextBtn = () => {
		setNotice({ noticeGb: notiSort })
		router.push(ROUTE_PATH['06-03'])
	}

	const handlePreviewBtn = () => {
		if (isEmptyString(notiForm.noticeTitle)) return toast('제목을 입력해주세요.')

		tempSave()
	}

	return (
		<>
			<Contents>
				<div className='notice-write-wrap'>
					{tabIndex === 0 ? (
						<div className='page-top-area'>
							<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						</div>
					) : null}

					<Tabs
						index={tabIndex}
						className='tab-type1'
						tabChange={(idx: any) => {
							setTabIndex(idx)
						}}
					>
						<TabList>
							<Button>일반공지</Button>
							<Button>의무공지</Button>
						</TabList>
						<TabPanel>
							<div className='tab-content'>
								<div className='menu'>
									<Checkbox checked={notiForm.holdYn === 'Y'} onChange={(e: any) => (e ? setNotiForm(prev => ({ ...prev, holdYn: 'Y' })) : setNotiForm(prev => ({ ...prev, holdYn: 'N' })))}>
										고정공지
									</Checkbox>
									<div className='right'>
										<Button className='btn-import' onClick={() => setPopImport(true)}>
											불러오기
										</Button>
									</div>
								</div>
								<div className='form-wrap'>
									<Input type='text' value={notiForm.noticeTitle} placeholder='제목 (필수)' del={true} onChange={(e: any) => setNotiForm((prev: any) => ({ ...prev, noticeTitle: e.target.value }))} />
									<Textarea placeholder='내용' value={notiForm.noticeText} onChange={(e: any) => setNotiForm((prev: any) => ({ ...prev, noticeText: e.target.value }))} />
									<UploadPhotos photos={editorfiles} photosOrg={editorfilesOrg} max={FILE_MAX_SIZE} total={50} onChange={setEditorfiles} setRemoveFiles={setRemoveFiles} />
									<UploadFiles files={files} filesOrg={filesOrg} max={FILE_MAX_SIZE} onChange={setFiles} setRemoveFiles={setRemoveFiles} />
								</div>
								<div className='btn-wrap'>
									<Button className='btn-type2 st1' onClick={handlePreviewBtn}>
										미리보기
									</Button>
								</div>
							</div>
							<div className='tab-content'>
								<div className='select-box'>
									<b className='tit'>의무 공지 종류를 선택해 주세요.</b>
									<ul>
										<RadioGroup label='notiSort' value={notiSort} onChange={setNotiSort}>
											{NOTI_SORT_OPTION.map((item, idx) => (
												<li key={`radio` + idx}>
													<Radio key={item.value} value={item.value}>
														{item.label}
													</Radio>
												</li>
											))}
										</RadioGroup>
									</ul>
								</div>
								<div className='btn-wrap'>
									<Button className='btn-type1 st1' onClick={handleNextBtn}>
										다음
									</Button>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => handleSelectClass(param)} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '공지', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '공지' }} open={popImport} close={() => setPopImport(false)} />
		</>
	)
}

export default _
