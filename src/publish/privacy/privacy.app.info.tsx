import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앱정보',
			back: true,
		})
	}, [])

	return (
		<Contents>
			<div className='app-info-wrap'>
				<ul className='link-menu-list'>
					<li>
						<button>이용약관</button>
					</li>
					<li>
						<button>개인정보 수집 및 이용약관</button>
					</li>
					<li>
						<button>위치기반서비스 이용약관</button>
					</li>
					<li>
						<button>민감정보 처리방침</button>
					</li>
					<li>
						<button>Open license</button>
					</li>
				</ul>
				<div className='app-update'>
					<div className='app-ver'>앱버전 : 1.0</div>
					<Button className='btn-type2 st1'>업데이트</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
