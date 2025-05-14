/** @jsxImportSource react */
import { Button, Input, useToast } from '@/entities'
import { globalStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_FAIL, STATUS_OK } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '비밀번호관리',
			back: true,
		})
	}, [])

	const [pw, setPw] = useState<string>('')

	const pwCheck = () => {
		Server.post('/api/user-info/checkPassword', { password: pw })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						router.push(ROUTE_PATH['03-05'])
					} else if (state === STATUS_FAIL) {
						toast('비밀번호를 다시 확인해주세요.')
					} else {
						toast('관리자에게 문의하세요.')
					}
				}
			})
			.catch()
	}

	const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPw(e.target.value)
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='pw-manage-wrap'>
					<div className='txt-guide'>
						개인정보 보호를 위해서
						<br />
						<b>현재 비밀번호를 확인</b>이 필요해요.
					</div>
					<div className='form-wrap'>
						<Input type='password' value={pw} placeholder='현재 비밀번호를 입력해주세요.' del={true} maxLength={16} onChange={pwChange} />
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={pw.length <= 0} onClick={pwCheck}>
						<span>다음</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
