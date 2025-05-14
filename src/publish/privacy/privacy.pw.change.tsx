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
			title: '비밀번호관리',
			back: true,
		})
	}, [])

	const [pw, setPw] = useState('')
	const pwChange = (e: any) => {
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
						<Input type='text' value={pw} placeholder='현재 비밀번호를 입력해주세요.' del={true} onChange={pwChange} />
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>다음</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
