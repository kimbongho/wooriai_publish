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
			title: '',
			back: true,
		})
	}, [])

	const [pw, setPw] = useState('')
	const pwChange = (e: any) => {
		setPw(e.target.value)
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
							<Input type='password' value={pw} placeholder='8글자 이상의 영문, 숫자, 기호 사용 가능' del={true} onChange={pwChange} />
							<Input type='password' className='error' value={pw} placeholder='8글자 이상의 영문, 숫자, 기호 사용 가능' del={true} onChange={pwChange} />
							<div className='txt-inp-error'>
								영문, 숫자, 기호 각 1글자 이상 사용하여 8글자 이상
								<br />
								기호는 !,@,#,$,%,^,&,*,-,_ 만 사용 가능합니다.
							</div>
						</div>

						<div className='txt-guide'>
							<b>비밀번호</b>를
							<br />
							다시 한 번 입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' placeholder='비밀번호 재입력' del={true} />
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>비밀번호 설정</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
