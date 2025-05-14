import { Button, useToast } from '@/entities'
import { globalStore, isEmpty, removeAccessToken, removeRefreshToken, removeUserStorage, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user, logoutUser } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '회원탈퇴',
			back: true,
		})
	}, [])

	const btnClickYes = () => {
		if (!!user && !isEmpty(user?.userId)) {
			Server.post(`/api/user-info/withdraw/${user.userId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							logoutUser()
							removeUserStorage()
							removeAccessToken()
							removeRefreshToken()
							router.replace(ROUTE_PATH['03-01'])
							toast('탈퇴 완료되었습니다.')
						} else {
							toast(message)
						}
					}
				})
				.catch()
		}
	}

	return (
		<Contents className='bg-white'>
			<div className='withdrawal-wrap'>
				<div className='visual'></div>
				<div className='txt'>
					회원 탈퇴시, 법령에 정하는 저장 정보 이외의
					<br />
					개인정보와 알림장, 앨범 등의 모든 정보가
					<br />
					삭제되며, 복구 할 수 없습니다.
				</div>
				<div className='txt'>
					<b>정말 탈퇴하시겠습니까?</b>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st2' onClick={btnClickYes}>
						네
					</Button>
					<Button className='btn-type1 st1' as={'a'} to={ROUTE_PATH['24-01']}>
						아니오
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
