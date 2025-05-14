/** @jsxImportSource react */
import { Button, Img, useToast } from '@/entities'
import { globalStore, isEmpty, proxySrcComm, removeAccessToken, removeRefreshToken, removeUserStorage, ROUTE_PATH, useAuth, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	useAuth()
	const router = useRouter()
	const { toast } = useToast()

	const { user, logoutUser } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '개인정보 설정',
			back: true,
			menu: true,
		})
	}, [])

	const btnLogoutClick = () => {
		logoutUser()
		removeUserStorage()
		removeAccessToken()
		removeRefreshToken()
		router.push(ROUTE_PATH['03-01'])
	}

	return (
		<Contents>
			<div className='basic-info-wrap'>
				<div className='page-top-area'>
					{!!user && !isEmpty(user?.userId) && (
						<>
							<div className='thumb'>
								<Img src={proxySrcComm(user?.profileImg)} alt='' />
							</div>
							<div className='user-id'>{user?.loginId}</div>
							<div className='logout'>
								<Button className='btn' onClick={btnLogoutClick}>
									로그아웃
								</Button>
							</div>
						</>
					)}
				</div>
				<ul className='link-menu-list'>
					<li>
						<Button as={'a'} to={ROUTE_PATH['24-02']}>
							연락처관리
						</Button>
					</li>
					<li>
						<Button as={'a'} to={ROUTE_PATH['24-03']}>
							비밀번호관리
						</Button>
					</li>
					{/* <li>
						<Button onClick={() => toast('MVP 개발 제외')}>속성관리</Button>
					</li> */}
					<li>
						<Button as={'a'} to={ROUTE_PATH['24-04']}>
							알림설정
						</Button>
					</li>
					<li>
						<Button as={'a'} to={ROUTE_PATH['24-05']}>
							앱정보확인
						</Button>
					</li>
				</ul>
				<div className='withdrawal'>
					<Button onClick={() => router.push(ROUTE_PATH['24-07'])}>
						<span>회원탈퇴</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
