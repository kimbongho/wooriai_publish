/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { getAccessToken, getRefreshToken, globalStore, isEmpty, RESPONSE_OK, ROUTE_PATH, Server, setAccessToken, setRefreshToken, STATUS_FAIL, STATUS_OK, userStore } from '@/shared'
import { FooterInfo } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import Contents from './signin.style'

const NOT_EXIST_RIGHTS = 'NOT_EXIST_RIGHTS'
// const NOT_EXIST_ID = 'NOT_EXIST_ID'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user, loginUser, logoutUser } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '로그인',
		})
	}, [])

	const [loginId, setLoginId] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	useEffect(() => {
		const token = getAccessToken()
		const refreshToken = getRefreshToken()

		if (!isEmpty(user?.userId)) {
			if (!isEmpty(token) || !isEmpty(refreshToken)) {
				toast('이미 로그인 된 상태입니다.')
				router.push(ROUTE_PATH['05-01'])
			} else {
				logoutUser()
			}
		}
	}, [router])

	const handleLogin = () => {
		Server.post('/api/user/login', { loginId, password }).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					const { token, refreshToken } = resData
					const decode: User | null = decodeToken(token)
					if (decode === null) {
						return
					}

					loginUser(decode)
					setAccessToken(token)
					setRefreshToken(refreshToken)

					if (code === NOT_EXIST_RIGHTS) {
						router.push(ROUTE_PATH['04-01'])
					} else {
						router.push(ROUTE_PATH['05-01'])
					}
				} else if (state === STATUS_FAIL) {
					// if (code === NOT_EXIST_ID) { }
					// toast(message)
					toast('로그인 정보가 잘못되었어요.\n아이디 혹은 비밀번호를 확인해주세요.')
					console.log(message)
				} else {
					toast('로그인 정보가 잘못되었어요.\n아이디 혹은 비밀번호를 확인해주세요.')
				}
			}
		})
	}

	const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginId(e.target.value)
	}

	const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (loginId && password && e.key === 'Enter') {
			handleLogin()
		}
	}

	return (
		<>
			<Contents>
				<div className='login-wrap'>
					<div className='visual'></div>
					<div className='form-wrap'>
						<Input type='text' className='id' value={loginId} placeholder='아이디' del={true} onChange={idChange} onKeyDown={onKeyDown} />
						<Input type='password' className='pw' value={password} placeholder='비밀번호' del={true} onChange={pwChange} onKeyDown={onKeyDown} />
					</div>
					<div className='btn-wrap'>
						<Button className='btn-type1 st1' disabled={!(loginId && password)} onClick={handleLogin}>
							<span>로그인</span>
						</Button>
					</div>
					<div className='idpw-find'>
						<span className='txt'>로그인이 안되시나요?</span>
						<Button as='a' to={ROUTE_PATH['03-03']}>
							아이디/비밀번호찾기
						</Button>
					</div>
					<div className='text-join'>
						<div className='txt'>
							대한민국 최초 AI 전자수첩
							<br />
							우리아이AI를 사용해보세요!
						</div>
						{/* TODO: QA 끝나고 제거해야함 */}
						{/* {!isEmpty((window as any)?.ReactNativeWebView) && ( */}
							<div className='link'>
								<Button as='a' to={ROUTE_PATH['02-01']}>
									회원가입
								</Button>
							</div>
						{/* )} */}
					</div>
				</div>
			</Contents>
			<FooterInfo />
		</>
	)
}

export default _
