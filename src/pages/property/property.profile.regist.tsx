import { Button, Img, Input, Thumbnail, useToast } from '@/entities'
import { FILE_MAX_SIZE, globalStore, REGEXP_NAME, RESPONSE_OK, rightsStore, ROUTE_PATH, Server, setAccessToken, setRefreshToken, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import Contents from './property.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { rightsCode, daycareId, childId, childName, className, classId, teacherId, mobile, userId, setProfileThumb } = rightsStore()
	const { loginUser } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '속성 등록',
			back: true,
			close: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const [file, setFile] = useState<File | null>(null)
	const [thumb, setThumb] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [nameErr, setNameErr] = useState<boolean>(false)

	const createRightUser = () => {
		Server.post('/api/rights/create', { rightsCode, userId, daycareId, profileName: name, mobile }).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					const token = resData.token
					const refreshToken = resData.refreshToken
					const decode: User | null = decodeToken(token)
					loginUser(decode)
					setAccessToken(token)
					setRefreshToken(refreshToken)
					router.push(ROUTE_PATH['04-06'])
				} else {
					toast(message)
				}
			}
		})
	}

	const handleNextBtn = () => {
		const formData = new FormData()
		const profile: any = {
			profileName: `${name}님`,
			teacherId,
			classId,
			daycareId,
			...(rightsCode === 'PRENT' ? { childId } : {}),
		}
		// setProfileThumb(thumb)

		formData.append('imgFiles', file as File)
		formData.append('profile', JSON.stringify(profile))

		Server.post('/api/user-profile/create', formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					createRightUser()
				} else {
					toast(message)
				}
			}
		})
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.value
		setNameErr(!REGEXP_NAME.test(name))
		setName(name)
	}

	return (
		<Contents>
			<div className='profile-regist-wrap'>
				<div className='property-box profile-regist'>
					<b>프로필 설정이 필요해요.</b>
					{rightsCode === 'PRENT' && (
						<div className='banner-profile'>
							<div>
								{thumb ? (
									<div className='img'>
										<Img src={thumb} alt='' />
									</div>
								) : null}
								<span className='cls-name'>{className}</span>
								<span className='name'>{childName}</span>
							</div>
						</div>
					)}
					<div className='photo-regist-wrap'>
						{rightsCode === 'PRENT' && <div className='txt-guide'>선생님이알아보기 쉬운 아동 사진으로 등록해주세요.</div>}
						<Thumbnail thumb={thumb} max={FILE_MAX_SIZE} setThumb={setThumb} setFile={setFile} />
					</div>
					<div className='nickname-regist-wrap'>
						<div className='txt-guide'>
							본인을 확인할 수 있는 닉네임을 입력해주세요.
							<br />
							닉네임 맨 뒤에 "님"자가 붙어서 등록됩니다.
						</div>
						<div className='txt-ex'>예) 이동욱부모님, 제제선생님, 홍길동원장님</div>
						<Input type='text' value={name} placeholder='2~10글자 이내의 한글, 영문 사용 가능' del={true} onChange={handleNameChange} />
						{nameErr && <div className='iput-txt-error'>한글, 영문 2-10글자 이내로 등록가능합니다.</div>}
					</div>
				</div>
				<div className='btn-wrap'>
					<Button to='/' className='btn-type2 st1' disabled={!(thumb && !nameErr)} onClick={handleNextBtn}>
						다음
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
