/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { convertPhoneNumberFormat, globalStore, REGEXP_PHONE, registerStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './agreement.style'

const NOT_EXIST_USER = 'NOT_EXIST_USER'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setRegisterInfo } = registerStore()
	const { setHeader, setAuthPhone } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '',
		})
	}, [])

	const [phone, setPhone] = useState<string>('')

	const goAgreementCertify = () => {
		Server.post('/api/user/findID/mobile', { mobile: phone })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (code === NOT_EXIST_USER) {
						setRegisterInfo({ mobile: phone })
						setAuthPhone({ phoneNumber: phone, prevRouter: 'AGREEMENT' })
						router.push(ROUTE_PATH['02-04'])
					} else if (state === STATUS_OK) {
						toast('이미 존재하는 휴대폰번호입니다.')
					} else {
						toast('유효하지 않은 휴대폰번호입니다.')
					}
				}
			})
			.catch()
	}

	const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(convertPhoneNumberFormat(e.target.value.replace(/\D/g, '')))
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							연락이 가능한 본인의
							<br />
							<b>휴대폰번호</b>를 입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='text' value={phone} placeholder='휴대폰번호 입력' del={true} onChange={phoneChange} maxLength={13} />
						</div>
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
