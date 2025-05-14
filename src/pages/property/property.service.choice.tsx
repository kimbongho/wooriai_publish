import { Button, Icon } from '@/entities'
import { globalStore, rightsStore, ROUTE_PATH, userStore, RIGHTS_DATA } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Contents from './property.style'

const _ = () => {
	const router = useRouter()

	const { user } = userStore()
	const { setRightsCode, setUserId } = rightsStore()
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

	const goDaycareSearch = (type: keyof typeof RIGHTS_DATA) => {
		setRightsCode(type)
		setUserId(user.userId)
		router.push(ROUTE_PATH['04-02'])
	}

	return (
		<Contents>
			<div className='property-service-wrap'>
				<div className='page-top-area'>
					<div className='visual'>
						<div className='visual-service'></div>
						<div className='txt'>어떻게 사용하실 건가요?</div>
					</div>
				</div>
				<ul className='service-list'>
					<li>
						<Button onClick={() => goDaycareSearch('HEADT')}>
							<span className='icon'>
								<Icon type='service-ledger' />
							</span>
							<div className='desc'>
								<b>원장선생님</b>
								<p>
									원 설정, 원아 정보 등록 등 어린이집에
									<br />
									전체 관리를 할 수 있어요.
								</p>
							</div>
						</Button>
					</li>
					<li>
						<Button onClick={() => goDaycareSearch('TCHER')}>
							<span className='icon'>
								<Icon type='service-teacher' />
							</span>
							<div className='desc'>
								<b>선생님</b>
								<p>
									일정 관리, 알림장 작성, 앨범 작성 등
									<br />
									담당 반 원아의 어린이집에서의 하루를
									<br />
									기록할 수 있어요
								</p>
							</div>
						</Button>
					</li>
					<li>
						<Button onClick={() => goDaycareSearch('PRENT')}>
							<span className='icon'>
								<Icon type='service-parents' />
							</span>
							<div className='desc'>
								<b>학부모님</b>
								<p>
									알림장 확인, 앨범 확인 등 우리아이의
									<br />
									어린이집에서 어떻게 하루를 보냈는지
									<br />
									확인 할 수 있어요.
								</p>
							</div>
						</Button>
					</li>
				</ul>
			</div>
		</Contents>
	)
}

export default _
