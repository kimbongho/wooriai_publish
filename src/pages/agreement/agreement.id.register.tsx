/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { globalStore, REGEXP_ID, registerStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_FAIL, STATUS_OK } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setRegisterInfo } = registerStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '',
			back: true,
		})
	}, [])

	const [id, setId] = useState<string>('')
	const [errMsg, setErrMsg] = useState<boolean>(false)
	const [confirmState, setConfirmState] = useState<boolean>(false)

	// 중복확인 클릭
	const dupIdCheck = () => {
		Server.post('/api/user/findID/loginId', { loginId: id })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setRegisterInfo({ loginId: id })
						router.push(ROUTE_PATH['02-06'])
					} else if (state === STATUS_FAIL) {
						if (code === 'IS_EXIST_ID') {
							toast('이미 사용하고 있는 아이디에요.\n다른 아이디를 입력해주세요.')
						}
					}
				}
			})
			.catch()
	}

	// input change
	const handleChange = (e: any) => {
		let inputVal = e.target.value.replace(' ', '')
		setId(inputVal)

		if (REGEXP_ID.test(inputVal)) {
			setConfirmState(true)
			setErrMsg(false)
		} else {
			setConfirmState(false)
			setErrMsg(true)
		}
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							사용하고자 하는 <b>아이디</b>를
							<br />
							입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='text' className={errMsg ? 'error' : ''} value={id} placeholder='영문, 숫자만 사용하여 6-20자 이내' del={true} maxLength={20} onChange={handleChange} />
							{errMsg && <div className='txt-inp-error'>영문, 숫자만 사용하여 6-20자 이내</div>}
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={!confirmState} onClick={dupIdCheck}>
						<span>중복확인</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
