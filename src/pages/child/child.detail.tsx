/** @jsxImportSource react */
import { Button, Img, UploadPhotos, useToast } from '@/entities'
import { PopPhotoView } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmptyArray, isEmptyString, proxySrcChild, proxySrcComm, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import moment from 'moment'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const param: any = useParams()

	const { user } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
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

	const [photo, setPhoto] = useState<string>('')
	const [photos, setPhotos] = useState<Array<File>>([]) // 사진업로드
	const [popPhotoView, setPopPhotoView] = useState<boolean>(false)
	const [photoList, setPhotoList] = useState<Array<any>>([])
	const [childInfo, setChildInfo] = useState<any>({
		childBirth: '',
		childId: '',
		childName: '',
		childResidence: '',
		classId: null,
		daycareId: '',
		delYn: '',
		parentTel: '',
		tagId: '',
		teacherId: '',
	})

	const id: string = param?.id

	useEffect(() => {
		getLoadData()
	}, [])

	const getLoadData = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/child/info/${user.daycareId}/${id}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setChildInfo(resData)
					} else {
						toast(message)
					}
				}
			})

			Server.get(`/api/daycare/child/ai/info/${id}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setPhotoList(resData)
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const handleRegistBtn = () => {
		if (isEmptyArray(photos)) {
			return toast('사진을 업로드 후 등록해주세요.')
		}
		if (photoList.length + photos.length > 10) {
			return toast('사진은 10장까지 등록이 가능합니다.')
		}

		const formData = new FormData()
		photos.map((photo: File) => {
			formData.append('imgFiles', photo)
		})

		const child: any = { childId: id }
		formData.append('child', JSON.stringify(child))

		Server.post(`/api/daycare/child/ai/upsert`, formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setPhotos([])
					getLoadData()
				} else {
					toast(message)
				}
			}
		})
	}

	const handleReportBtn = () => {
		router.push(`${ROUTE_PATH['22-04']}/${id}`)
	}

	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}
	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	const handleDeletePhoto = (fileId: any) => {
		const formData = new FormData()
		const child: any = { childId: id, removeFiles: [fileId] }
		formData.append('child', JSON.stringify(child))

		Server.post(`/api/daycare/child/ai/upsert`, formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					getLoadData()
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='child-detail-wrap'>
					<div className='page-top-area'>
						<div className='profile'>
							<div className='thumb'>
								<Img src={proxySrcChild(childInfo.profileImg)} alt='' />
							</div>
							<b className='name'>{childInfo?.childName}</b>
							<div className='sub'>학부모 : {childInfo?.parentUserName}</div>
							<div className='tel'>{childInfo?.parentTel}</div>
						</div>
						<ul className='info-desc-box'>
							<li>
								<em>입소일</em>
								<span>{childInfo?.enterDate && moment(childInfo.enterDate).format('YYYY.MM.DD')}</span>
							</li>
							<li>
								<em>생년월일</em>
								<span>{childInfo?.childBirth && moment(`20${childInfo.childBirth}`).format('YYYY.MM.DD')}</span>
							</li>
						</ul>
					</div>

					<div className='child-detail-section'>
						<ul className='album-list'>
							{photoList.map((p: any) => (
								<li key={p.aiFileId}>
									<button
										type='button'
										className='btn-del'
										onClick={() => {
											handleDeletePhoto(p.aiFileId)
										}}
									></button>
									<button
										className='img'
										onClick={() => {
											popOpenPhotoView(proxySrcChild(p.fileDownloadId))
										}}
									>
										<Img src={proxySrcChild(p.fileDownloadId)} alt='' />
									</button>
								</li>
							))}
						</ul>
						{user.rights === 'PRENT' && (
							<>
								<div className='photo-guide'>
									우리AI가 아이의 얼굴을 기억할 수 있게 아이의 사진을 최소 4장 이상 등록해주세요.
									<span className='sub'>아이의 얼굴이 뚜렷할 수록 우리 아이를 잘지킬 수 있습니다.</span>
								</div>

								<p className='txt-noti'>※ 필터를 적용하지 않은 정면 얼굴 사진, 왼쪽 얼굴 사진, 오른쪽 얼굴 사진, 정면 45도에서 찍은 사진 각 1장 이상 필수</p>

								<UploadPhotos photos={photos} max={FILE_MAX_SIZE} total={10} onChange={setPhotos} />
							</>
						)}
						{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
							<div className='btn-wrap'>
								<Button className='btn-type1 st1' onClick={handleReportBtn}>
									<span>BI 리포트 확인</span>
								</Button>
							</div>
						)}
						{user.rights === 'PRENT' && (
							<div className='btn-wrap'>
								<Button className='btn-add' onClick={handleRegistBtn}>
									<span>우리아이 사진 등록</span>
								</Button>
							</div>
						)}
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
