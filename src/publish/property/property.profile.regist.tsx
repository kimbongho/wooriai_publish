import { Button, Img, Input, Thumbnail } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './property.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '속성 등록',
			back: true,
			close: true,
		})
	}, [])

	const [file, setFile] = useState<File | null>(null)
	const [thumb, setThumb] = useState<string>('')
	const thumbMax = 1000000

	const [name, setName] = useState('')

	return (
		<Contents>
			<div className='profile-regist-wrap'>
				<div className='property-box profile-regist'>
					<b>프로필 설정이 필요해요.</b>
					<div className='banner-profile'>
						<div>
							{thumb ? (
								<div className='img'>
									<Img src={thumb} alt='' />
								</div>
							) : null}
							<span className='cls-name'>아리스토텔레스반</span>
							<span className='name'>홍길동</span>
						</div>
					</div>
					<div className='photo-regist-wrap'>
						<div className='txt-guide'>선생님이알아보기 쉬운 아동 사진으로 등록해주세요.</div>

						<Thumbnail thumb={thumb} max={thumbMax} setThumb={setThumb} setFile={setFile} />
					</div>
					<div className='nickname-regist-wrap'>
						<div className='txt-guide'>본인을 확인할 수 있는 닉네임을 입력해주세요.</div>
						<div className='txt-ex'>예) 이동욱엄마, 제제선생님, 홍길동원장님</div>
						<Input
							type='text'
							value={name}
							placeholder='2~10글자 이내의 한글, 영문 사용 가능'
							del={true}
							onChange={(e: any) => {
								setName(e.target.value)
							}}
						/>
						<div className='iput-txt-error'>한글, 영문 2-10글자 이내로 등록가능합니다.</div>
					</div>
				</div>
				<div className='btn-wrap'>
					<Button to='/' className='btn-type2 st1'>
						다음
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
