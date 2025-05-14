/** @jsxImportSource react */
import { Button, Input } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
		})
	}, [])

	const [certify, setCertify] = useState('')
	const certifyChange = (e: any) => {
		setCertify(e.target.value)
	}

	return (
		<>
			<Contents>
				<div className='certify-wrap'>
					<div className='join-form'>
						<div className='txt-guide'>
							<b>010-1234-5678 </b>
							<br />
							인증번호를 보냈습니다.
						</div>
						<div className='form-wrap'>
							<Input type='number' value={certify} placeholder='인증번호 6자리 입력' del={true} onChange={certifyChange}>
								<span className='time'>03:00</span>
							</Input>
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={certify.length > 0 ? false : true}>
						<span>번호인증</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
