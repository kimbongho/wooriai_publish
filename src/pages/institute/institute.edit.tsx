/** @jsxImportSource react */
import { Button, Input, Thumbnail, useToast } from '@/entities'
import { PopAddress, PopEditConfirm } from '@/features'
import { convertPhoneNumberFormat, FILE_MAX_SIZE, globalStore, isEmptyString, proxySrcComm, redirectLoginWithNext, RESPONSE_OK, Server, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './institute.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원 정보 관리',
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

	// 기존 원  - (placeholder에 보여주기 위함)
	const [orgInfo, setOrgInfo] = useState<any>({
		daycareId: '',
		daycareName: '',
		daycareZipcode: '',
		daycareAddr: '',
		daycareTel: '',
		daycareType: '',
		headtName: '',
		imgFileId: '',
		fileDownloadId: '',
	})

	// 수정된 원 정보
	const [modifyInfo, setModifyInfo] = useState<any>({
		daycareName: '',
		daycareAddr1: '',
		daycareAddr2: '',
		daycareZipcode: '',
		daycareTel: '',
	})

	const [popAddress, setPopAddress] = useState<boolean>(false)
	const [popConfirm, setPopConfirm] = useState<boolean>(false)
	const [photo, setPhoto] = useState<string>()
	const [photoFile, setPhotoFile] = useState<File | null>(null)

	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/comm/find/daycare/${user.daycareId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setOrgInfo(resData)
							setPhoto(proxySrcComm(resData.fileDownloadId))
						}
					}
				})
				.catch()
		} else {
			redirectLoginWithNext(toast, router)
		}
	}, [])

	// 등록 버튼 클릭 시
	const onSubmit = () => {
		const daycareInfoForm = {
			daycareName: isEmptyString(modifyInfo.daycareName) ? orgInfo.daycareName : modifyInfo.daycareName,
			daycareAddr: isEmptyString(modifyInfo.daycareAddr1) ? orgInfo.daycareAddr : `${modifyInfo.daycareAddr1} ${modifyInfo.daycareAddr2}`.trim(),
			daycareZipcode: isEmptyString(modifyInfo.daycareZipcode) ? orgInfo.daycareZipcode : modifyInfo.daycareZipcode,
			daycareTel: isEmptyString(modifyInfo.daycareTel) ? orgInfo.daycareTel : modifyInfo.daycareTel,
		}

		const formData = new FormData()
		formData.append(
			'daycareInfo',
			new Blob([JSON.stringify(daycareInfoForm)], {
				type: 'application/json',
			})
		)
		if (photoFile !== null) {
			formData.append('imgFile', photoFile)
		}

		Server.post(`/api/daycare/update`, formData)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						// router.replace(ROUTE_PATH['19-01'])
						router.back()
					} else {
						toast('원 정보 수정에 실패했습니다.')
					}
				}
			})
			.catch()
	}

	const popCloseConfirm = () => {
		setPopConfirm(false)
	}

	const daycareNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setModifyInfo({ ...modifyInfo, daycareName: e.target.value })
	}

	const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const hyphNo = convertPhoneNumberFormat(e.target.value.replace(/\D/g, ''))
		setModifyInfo({ ...modifyInfo, daycareTel: hyphNo })
	}

	const popOpenAddress = () => {
		setPopAddress(true)
	}

	const popCloseAddress = () => {
		setPopAddress(false)
	}

	const addr2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setModifyInfo({ ...modifyInfo, daycareAddr2: e.target.value })
	}

	const onAddressComplete = ({ zonecode, fullAddress, extraAddress }) => {
		setModifyInfo({ ...modifyInfo, daycareAddr1: fullAddress, daycareZipcode: zonecode })
	}

	return (
		<>
			<Contents>
				<div className='institute-detail-wrap'>
					<div className='institute-edit-wrap'>
						<div className='main-noti'>어린이집의 기본 정보를 변경하는 경우, 어린이집 소속 선생님과 학부모에게 정보 변경 공지가 전달됩니다.</div>
						<div className='institute-profile'>
							<Thumbnail thumb={photo} max={FILE_MAX_SIZE} setThumb={setPhoto} setFile={setPhotoFile} />
						</div>

						<div className='form-wrap'>
							<div className='inp-label'>어린이집 명</div>
							<Input type='text' value={modifyInfo.daycareName} placeholder={orgInfo.daycareName} del={true} onChange={daycareNameChange} />

							<div className='inp-label'>주소</div>
							<Input type='text' placeholder={orgInfo.daycareAddr.split('|')[0]} disabled={true} value={''} />
							<div className='btn-addr-search' onClick={popOpenAddress}>
								{modifyInfo?.daycareAddr1}
							</div>
							<Input type='text' value={modifyInfo.daycareAddr2} del={true} onChange={addr2Change} />

							<div className='inp-label'>연락처</div>
							<Input type='text' value={modifyInfo.daycareTel} placeholder={orgInfo.daycareTel} del={true} onChange={phoneChange} maxLength={13} />

							<div className='inp-label'>원장님</div>
							<Input type='text' className='disabled' value={orgInfo.headtName} disabled={true} />
						</div>
						<div className='btn-wrap'>
							<Button
								className='btn-type1 st1'
								onClick={() => {
									setPopConfirm(true)
								}}
							>
								등록
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopAddress open={popAddress} close={popCloseAddress} onComplete={onAddressComplete} />
			<PopEditConfirm title='원' open={popConfirm} close={popCloseConfirm} confirm={onSubmit} />
		</>
	)
}

export default _
