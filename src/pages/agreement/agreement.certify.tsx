/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { globalStore, REGEXP_NUMBER, RESPONSE_OK, ROUTE_PATH, Server, STATUS_FAIL, STATUS_OK, userStore, useTimer } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { authPhone, setHeader, setAuthPhone, clearAuthPhone } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '',
		})
	}, [])

	const [authNo, setAuthNo] = useState<string>('')
	const [confirmState, setConfirmState] = useState<boolean>(true)

	const [minute, seconds, phoneNumView] = useTimer({
		timeoutFn: () => {
			clearAuthPhone()
			switchRouter('cancel')
			toast(`인증번호 유효 시간이 다되었어요.\n인증번호 발송을 다시 한 번 시도해주세요.`)
		},
		setConfirmState,
	})

	const goUpdateNumber = () => {
		Server.post(`/api/user-info/update/${user.userId}`, {
			mobile: authPhone.phoneNumber,
			userId: user.userId,
		})
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						toast('연락처가 변경되었습니다.')
						router.replace(ROUTE_PATH['24-01'])
					} else {
						toast('정보 수정에 실패했습니다.')
					}
				}
			})
			.catch()
	}

	// 번호인증 버튼 클릭
	const goRegisterId = () => {
		Server.post('/api/user/checkAuthCode', {
			mobile: authPhone.phoneNumber,
			authCode: authNo,
		})
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						switchRouter('complete')
					} else if (state === STATUS_FAIL) {
						toast('인증번호가 일치하지 않습니다.')
					} else {
						toast('관리자에게 문의하세요.')
					}
				}
			})
			.catch()
	}
	const switchRouter = (flag: 'cancel' | 'complete') => {
		switch (authPhone.prevRouter) {
			case 'AGREEMENT':
				if (flag === 'cancel') {
					router.replace(`${ROUTE_PATH['02-03']}`)
				} else if (flag === 'complete') {
					router.push(ROUTE_PATH['02-05'])
				}
				break
			case 'SIGNIN_ID':
				if (flag === 'cancel') {
					setAuthPhone({ tabIndex: 0 })
					router.replace(`${ROUTE_PATH['03-03']}`)
				} else if (flag === 'complete') {
					router.push(ROUTE_PATH['03-04'])
				}
				break
			case 'SIGNIN_PW':
				if (flag === 'cancel') {
					setAuthPhone({ tabIndex: 1 })
					router.replace(`${ROUTE_PATH['03-03']}`)
				} else if (flag === 'complete') {
					router.push(ROUTE_PATH['03-05'])
				}
				break
			case 'PRIVACY':
				if (flag === 'cancel') {
					router.replace(`${ROUTE_PATH['24-02']}`)
				} else if (flag === 'complete') {
					goUpdateNumber()
				}
				break

			default:
				if (flag === 'complete') {
					router.replace(`/`)
				}
				break
		}
	}

	// 인증번호 input change
	const handleChange = (e: any) => {
		setAuthNo(e.target.value.replace(REGEXP_NUMBER, ''))
		setConfirmState(e.target.value.length == 6)
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							<b>{phoneNumView}</b>
							<br />
							인증번호를 보냈습니다.
						</div>
						<div className='form-wrap'>
							<Input type='number' value={authNo} maxLength={6} placeholder='인증번호 6자리 입력' del={true} onChange={handleChange}>
								<span className='time'>
									{minute}:{seconds}
								</span>
							</Input>
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={!phoneNumView || !confirmState} onClick={goRegisterId}>
						<span>번호인증</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
