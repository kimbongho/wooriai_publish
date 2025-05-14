/** @jsxImportSource react */
import { Button, Input, TabList, TabPanel, Tabs, useToast } from '@/entities'
import { convertTelNumberFormat, globalStore, isEmptyString, REGEXP_PHONE, RESPONSE_OK, ROUTE_PATH, Server, STATUS_FAIL, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './signin.style'

// const NOT_EXIST_USER = 'NOT_EXIST_USER'
const idCheck = 'idCheck'
const pwChange = 'pwChange'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setLoginId } = userStore()
	const { authPhone, setHeader, setAuthPhone, clearAuthPhone } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '아이디/비밀번호찾기',
		})
	}, [])

	const [tabIndex, setTabIndex] = useState<number>(authPhone?.tabIndex !== undefined ? authPhone.tabIndex : 0)
	const [phone, setPhone] = useState<string>('')
	const [id, setId] = useState<string>('')
	const [showPhoneNumCheck, setShowPhoneNumCheck] = useState<boolean>(false)
	const [sendBtnFlag, setSendBtnFlag] = useState<boolean>(false)
	const [idCheckBtnFlag, setIdCheckBtnFlag] = useState<boolean>(false)

	useEffect(() => {
		if (authPhone?.tabIndex !== undefined) {
			clearAuthPhone()
		}
	}, [router])

	const sendAuthNum = (div: string) => {
		Server.post('/api/user/findID/mobile', { mobile: phone }).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { code, state, data: resData, message } = data
				if (state === STATUS_OK) {
					if (div === idCheck || (div === pwChange && id === resData.loginId)) {
						setLoginId(resData.loginId)
						setAuthPhone({ phoneNumber: phone, prevRouter: div === idCheck ? 'SIGNIN_ID' : 'SIGNIN_PW' })
						router.push(ROUTE_PATH['02-04'])
					} else {
						toast('회원정보와 휴대폰번호가 일치하지 않습니다.\n다시 한 번 확인해주세요.')
					}
				} else if (state === STATUS_FAIL) {
					// if (code === NOT_EXIST_USER) {}
					// toast(message)
					toast('회원 정보에 없는 휴대폰 번호예요.\n다시 한 번 확인해주세요.')
					console.log(message)
				} else {
					toast('회원 정보에 없는 휴대폰 번호예요.\n다시 한 번 확인해주세요.')
				}
			}
		})
	}

	const checkId = () => {
		Server.post('/api/user/findID/loginId', { loginId: id }).then((response: any) => {
			const { status, data } = response
			if (status === RESPONSE_OK) {
				const { code, state, data: resData, message } = data
				if (state === STATUS_FAIL) {
					setShowPhoneNumCheck(true)
				} else {
					toast('회원 정보에 없는 아이디에요.\n다시 한 번 확인해주세요.')
				}
			}
		})
	}

	const tabIndexChange = (idx: number) => {
		setPhone('')
		setId('')
		setShowPhoneNumCheck(false)
		setSendBtnFlag(false)
		setIdCheckBtnFlag(false)
		setTabIndex(idx)
	}

	const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phoneNum = convertTelNumberFormat(e.target.value.replace(/\D/g, ''))

		setSendBtnFlag(REGEXP_PHONE.test(phoneNum))
		setPhone(phoneNum)
	}

	const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIdCheckBtnFlag(!isEmptyString(e.target.value))
		setId(e.target.value)
	}

	const drawFormPhone = () => (
		<>
			<div className='txt-guide'>
				등록한 <b>휴대폰번호</b>를 입력해주세요.
			</div>
			<div className='form-wrap'>
				<Input type='text' value={phone} placeholder='휴대폰번호 입력' maxLength={13} del={true} onChange={phoneChange} />
			</div>
		</>
	)

	const drawButtonFlag = (div: string) => (
		<Button className='btn-type1 st1' disabled={!sendBtnFlag} onClick={() => sendAuthNum(div)}>
			<span>인증번호발송</span>
		</Button>
	)

	return (
		<>
			<Contents>
				<div className='idpw-find-wrap'>
					<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
						<TabList>
							<Button>아이디찾기</Button>
							<Button>비밀번호찾기</Button>
						</TabList>
						<TabPanel>
							<div className='tab-content'>
								<div className='join-form'>{drawFormPhone()}</div>
							</div>
							<div className='tab-content'>
								<div className='join-form'>
									{!showPhoneNumCheck ? (
										<>
											<div className='txt-guide'>
												<b>아이디</b>를 입력해주세요.
											</div>
											<div className='form-wrap'>
												<Input type='text' value={id} placeholder='아이디 입력' del={true} onChange={idChange} />
											</div>
										</>
									) : (
										<>{drawFormPhone()}</>
									)}
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					{tabIndex === 0 ? (
						drawButtonFlag(idCheck)
					) : showPhoneNumCheck ? (
						drawButtonFlag(pwChange)
					) : (
						<Button className='btn-type1 st1' disabled={!idCheckBtnFlag} onClick={checkId}>
							<span>다음</span>
						</Button>
					)}
				</div>
			</Footer>
		</>
	)
}

export default _
