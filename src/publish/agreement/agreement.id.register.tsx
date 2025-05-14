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

	const [id, setId] = useState('')
	const handleChange = (e: any) => {
		setId(e.target.value)
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
							<Input type='text' value={id} placeholder='8글자 이상의 영문,숫자,기호 사용 가능' del={true} onChange={handleChange} />
							<Input type='text' className='error' value={id} placeholder='8글자 이상의 영문,숫자,기호 사용 가능' del={true} onChange={handleChange} />
							<div className='txt-inp-error'>영문, 숫자, 기호 사용하여 8글자 이상</div>
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' disabled={true}>
						<span>중복확인</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
