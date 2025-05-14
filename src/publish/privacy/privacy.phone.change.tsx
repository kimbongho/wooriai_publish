import { Button, Input } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '연락처관리',
			back: true,
		})
	}, [])

	const [phone, setPhone] = useState('')
	const phoneChange = (e: any) => {
		setPhone(e.target.value)
	}

	const [phoneSend, setPhoneSend] = useState(false)
	const onPhoneSend = (e: any) => {
		setPhoneSend(true)
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='phone-manage-wrap'>
					<div className='txt-guide'>
						변경할 <b>휴대폰번호</b>를 입력해주세요.
					</div>
					<div className='form-wrap'>
						<Input type='text' value={phone} placeholder='휴대폰번호 입력' del={true} onChange={phoneChange} />
						{phoneSend ? (
							<Input type='number' placeholder='인증번호 6자리 입력' del={true}>
								<span className='time'>03:00</span>
							</Input>
						) : null}
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					{!phoneSend ? (
						<Button className='btn-type1 st1' disabled={phone.length > 0 ? false : true} onClick={onPhoneSend}>
							<span>인증번호발송</span>
						</Button>
					) : (
						<Button className='btn-type1 st1'>
							<span>번호인증</span>
						</Button>
					)}
				</div>
			</Footer>
		</>
	)
}

export default _
