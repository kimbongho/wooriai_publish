import { Button, Input } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './signin.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '비밀번호 변경',
			back: true,
		})
	}, [])

	const [pw, setPw] = useState('')
	const pwChange = (e: any) => {
		setPw(e.target.value)
	}
	const [pw2, setPw2] = useState('')
	const pwChange2 = (e: any) => {
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
							<Input type='password' value={pw} placeholder='8글자 이상의 영문,숫자,기호 사용 가능' del={true} onChange={pwChange} />
							<Input type='password' className='error' value={pw} placeholder='8글자 이상의 영문,숫자,기호 사용 가능' del={true} onChange={pwChange} />
							<div className='txt-inp-error'>영문, 숫자, 기호 사용하여 8글자 이상</div>
						</div>

						<div className='txt-guide'>
							변경할 <b>비밀번호</b>를
							<br />
							다시 한 번 입력해주세요.
						</div>
						<div className='form-wrap'>
							<Input type='password' value={pw2} placeholder='비밀번호 재입력' del={true} onChange={pwChange2} />
							<Input type='password' className='error' value={pw2} placeholder='비밀번호 재입력' del={true} onChange={pwChange2} />
							<div className='txt-inp-error'>비밀번호와 동일하지 않아요.</div>
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
