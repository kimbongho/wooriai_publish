import { Img } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '개인정보 설정',
			back: true,
			menu: true,
		})
	}, [])

	return (
		<Contents>
			<div className='basic-info-wrap'>
				<div className='page-top-area'>
					<div className='thumb'>
						<Img src={'/images/temp/temp-profile.png'} alt='' />
					</div>
					<div className='user-id'>innodep</div>
					<div className='logout'>
						<button className='btn'>로그아웃</button>
					</div>
				</div>
				<ul className='link-menu-list'>
					<li>
						<button>연락처관리</button>
					</li>
					<li>
						<button>비밀번호관리</button>
					</li>
					<li>
						<button>속성관리</button>
					</li>
					<li>
						<button>알림설정</button>
					</li>
					<li>
						<button>앱정보확인</button>
					</li>
				</ul>
				<div className='withdrawal'>
					<button>
						<span>회원탈퇴</span>
					</button>
				</div>
			</div>
		</Contents>
	)
}

export default _
