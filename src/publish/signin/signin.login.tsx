import { FooterInfo } from '@/widgets'
import { Button, Input } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './signin.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '로그인',
			back: true,
		})
	}, [])

	const [id, setId] = useState('')
	const idChange = (e: any) => {
		setId(e.target.value)
	}
	const [pw, setPw] = useState('')
	const pwChange = (e: any) => {
		setPw(e.target.value)
	}

	return (
		<>
			<Contents>
				<div className='login-wrap'>
					<div className='visual'></div>
					<div className='form-wrap'>
						<Input type='text' className='id' value={id} placeholder='아이디' del={true} onChange={idChange} />
						<Input type='password' className='pw' value={pw} placeholder='비밀번호' del={true} onChange={pwChange} />
					</div>
					<div className='btn-wrap'>
						<Button className='btn-type1 st1' disabled={!(id && pw)}>
							<span>로그인</span>
						</Button>
					</div>
					<div className='idpw-find'>
						<span className='txt'>출석 로그인이 안되시나요?</span>
						<Button to='/'>아이디/비밀번호찾기</Button>
					</div>
					<div className='text-join'>
						<div className='txt'>
							대한민국 최초 AI 전자수첩
							<br />
							우리아이AI를 사용해보세요!
						</div>
						<div className='link'>
							<Button to='/'>회원가입</Button>
						</div>
					</div>
				</div>
			</Contents>
			<FooterInfo />
		</>
	)
}

export default _
