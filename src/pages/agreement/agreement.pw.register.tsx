/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { globalStore, REGEXP_PASSWORD, registerStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './agreement.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { member, clearRegisterInfo } = registerStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '',
		})
	}, [])

	const [pw1, setPw1] = useState<string>('')
	const [errMsg1, setErrMsg1] = useState<boolean>(false)
	const [pwConfirm1, setPwConfirm1] = useState<boolean>(false)
	const [pw2, setPw2] = useState<string>('')
	const [errMsg2, setErrMsg2] = useState<boolean>(false)
	const [pwConfirm2, setPwConfirm2] = useState<boolean>(false)

	const onSubmit = async () => {
		Server.post('/api/user/create', { ...member, password: pw1, uuid: uuidv4(), userName: '' })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						clearRegisterInfo()
						router.push(ROUTE_PATH['02-07'])
					} else {
						toast('입력하신 정보에 문제가 발생했습니다.\n다시 처음부터 시도해주세요.')
					}
				}
			})
			.catch()
	}

	const pw1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputVal = e.target.value.replace(' ', '')
		setPw1(inputVal)

		if (RegExp(REGEXP_PASSWORD).exec(inputVal)) {
			setPwConfirm1(true)
			setErrMsg1(false)
		} else {
			setPwConfirm1(false)
			setErrMsg1(true)
		}

		if (inputVal === pw2) {
			setPwConfirm2(true)
			setErrMsg2(false)
		} else {
			setPwConfirm2(false)
			setErrMsg2(true)
		}
	}

	const pw2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputVal = e.target.value.replace(' ', '')
		setPw2(inputVal)

		if (inputVal === pw1) {
			setPwConfirm2(true)
			setErrMsg2(false)
		} else {
			setPwConfirm2(false)
			setErrMsg2(true)
		}
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							사용하고자 하는 <b>비밀번호</b>를
							<br />
							입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' className={errMsg1 && 'error'} value={pw1} placeholder='8글자 이상의 영문, 숫자, 기호 사용 가능' del={true} maxLength={16} onChange={pw1Change} />
							{errMsg1 && (
								<div className='txt-inp-error'>
									영문, 숫자, 기호 각 1글자 이상 사용하여 8글자 이상 <br />
									기호는 !,@,#,$,%,^,&,*,-,_ 만 사용 가능합니다.
								</div>
							)}
						</div>

						<div className='txt-guide'>
							<b>비밀번호</b>를
							<br />
							다시 한 번 입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' value={pw2} className={errMsg2 && 'error'} placeholder='비밀번호 재입력' del={true} maxLength={16} onChange={pw2Change} />
							{errMsg2 && <div className='txt-inp-error'>비밀번호와 동일하지 않아요.</div>}
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className={'btn-type1 st1'} disabled={!(pwConfirm1 && pwConfirm2)} onClick={onSubmit}>
						<span>비밀번호 설정</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
