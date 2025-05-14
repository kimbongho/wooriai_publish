import { Button, Img } from '@/entities'
import { globalStore, isEmptyString, proxySrcComm, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './institute.style'

const _ = () => {
	const router = useRouter()

	const { user } = userStore()
	const { setHeader, setFooter, setMenubar } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원 정보',
			back: true,
			menu: true,
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

	const [orgInfo, setOrgInfo] = useState<Institute>()

	useNotRights()
	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/comm/find/daycare/${user.daycareId}`)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							setOrgInfo(resData || {})
						}
					}
				})
				.catch()
		}
	}, [])

	return (
		<>
			<Contents className='bg-white'>
				<div className='institute-home-wrap'>
					<div className='institute-profile'>
						<div className='thumb'>{orgInfo?.fileDownloadId && <Img src={proxySrcComm(orgInfo?.fileDownloadId)} alt='' />}</div>
						<b className='name'>{orgInfo?.daycareName}</b>
						<div className='addr'>
							{orgInfo?.daycareAddr?.split('|')[0]} {orgInfo?.daycareAddr?.split('|')[1]}
						</div>
					</div>
					<ul className='info-desc-box'>
						<li>
							<em>원장님</em>
							<span>{orgInfo?.headtName}</span>
						</li>
						<li>
							<em>연락처</em>
							<span>{orgInfo?.daycareTel}</span>
						</li>
					</ul>
				</div>
			</Contents>

			{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
				<Footer className='full-btn'>
					<Button
						className={'btn-type1 st1'}
						onClick={() => {
							router.push(ROUTE_PATH['19-02'])
						}}
					>
						<span>원 정보 관리</span>
					</Button>
				</Footer>
			)}
		</>
	)
}

export default _
