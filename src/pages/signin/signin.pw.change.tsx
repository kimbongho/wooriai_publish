/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { globalStore, REGEXP_PASSWORD, removeAccessToken, removeRefreshToken, removeUserStorage, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './signin.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user, logoutUser } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '비밀번호 변경',
		})
	}, [])

	const [pw, setPw] = useState<string>('')
	const [pw2, setPw2] = useState<string>('')
	const [pwRule, setPwRule] = useState<boolean>(true)
	const [pwRule2, setPwRule2] = useState<boolean>(true)

	const handleSubmit = () => {
		Server.post('/api/user/resetPassword', { loginId: user.loginId, password: pw }).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { code, state, data: resData, message } = data
				if (state === STATUS_OK) {
					// router.push(ROUTE_PATH['24-01'])
					logoutUser()
					removeUserStorage()
					removeAccessToken()
					removeRefreshToken()
					router.push(ROUTE_PATH['03-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPwRule(REGEXP_PASSWORD.test(e.target.value))
		setPw(e.target.value)
	}

	const pwChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPwRule2(pw === e.target.value)
		setPw2(e.target.value)
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							변경할 <b>비밀번호</b>를 <br />
							입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' className={pwRule ? '' : 'error'} value={pw} placeholder='8글자 이상의 영문,숫자,기호 사용 가능' del={true} onChange={pwChange} />
							{!pwRule && <div className='txt-inp-error'>영문, 숫자, 기호 사용하여 8글자 이상</div>}
						</div>

						<div className='txt-guide'>
							변경할 <b>비밀번호</b>를
							<br />
							다시 한 번 입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' className={pwRule2 ? '' : 'error'} value={pw2} placeholder='비밀번호 재입력' del={true} onChange={pwChange2} />
							{!pwRule2 && <div className='txt-inp-error'>비밀번호와 동일하지 않아요.</div>}
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={!(pw !== '' && pw2 !== '' && pwRule && pwRule2)} onClick={handleSubmit}>
						<span>비밀번호 변경</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
