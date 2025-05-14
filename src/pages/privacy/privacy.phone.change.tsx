/** @jsxImportSource react */
import { Button, Input } from '@/entities'
import { convertPhoneNumberFormat, globalStore, privacyStore, REGEXP_PHONE, ROUTE_PATH } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const router = useRouter()

	const { setPrivacyInfo } = privacyStore()
	const { setHeader, setAuthPhone } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '연락처관리',
			back: true,
		})
	}, [])

	const [phone, setPhone] = useState<string>('')

	const phoneChange = (e: any) => {
		let inputPhone = e.target.value
		if (!inputPhone.includes('-') && inputPhone.length > 11) {
			inputPhone = inputPhone.slice(0, 11)
		}
		const hyphNo = convertPhoneNumberFormat(inputPhone.replace(/\D/g, ''))
		setPhone(hyphNo)
	}

	// 인증번호발송 버튼 클릭
	const goAgreementCertify = () => {
		setPrivacyInfo({ mobile: phone })
		setAuthPhone({ phoneNumber: phone, prevRouter: 'PRIVACY' })
		router.push(ROUTE_PATH['02-04'])
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='phone-manage-wrap'>
					<div className='txt-guide'>
						변경할<b> 휴대폰번호</b>를 입력해주세요.
					</div>
					<div className='form-wrap'>
						<Input type='text' value={phone} placeholder='휴대폰번호 입력' del={true} onChange={phoneChange} maxLength={13} />
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={!RegExp(REGEXP_PHONE).exec(phone)} onClick={goAgreementCertify}>
						<span>인증번호발송</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
