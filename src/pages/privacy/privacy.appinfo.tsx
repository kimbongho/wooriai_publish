import { Button } from '@/entities'
import { AGREE_DATA, AGREE_TERM, globalStore, isEmpty, ROUTE_PATH } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const router = useRouter()

	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앱정보',
			back: true,
		})
	}, [])

	const ruleDetailClick = (idx: any) => {
		router.push(`${ROUTE_PATH['02-02']}/${idx}`)
	}

	const goUpdate = () => {
		// 해당OS의 마켓으로 이동
	}

	return (
		<Contents>
			<div className='app-info-wrap'>
				<ul className='link-menu-list'>
					{AGREE_DATA.filter(v => v.detail).map((data, key) => {
						const row = AGREE_TERM.find(v => v.value === data.value)
						if (row?.privacy) {
							return (
								<li key={key}>
									<Button
										onClick={() => {
											ruleDetailClick(row.value)
										}}
									>
										{row?.title}
									</Button>
								</li>
							)
						}
					})}
					<li>
						<Button
							onClick={() => {
								router.push(ROUTE_PATH['24-06'])
							}}
						>
							Open license
						</Button>
					</li>
				</ul>
				<div className='app-update'>
					<div className='app-ver'>앱버전 : 1.0</div>
					{/* {window !== undefined && !isEmpty((window as any)?.ReactNativeWebView) && (
						<Button className='btn-type2 st1' onClick={goUpdate}>
							업데이트
						</Button>
					)} */}
				</div>
			</div>
		</Contents>
	)
}

export default _
