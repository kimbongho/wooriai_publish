/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { globalStore, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './class.style'

const NO_DATA = 'NO_DATA'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setHeader, setBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '반 정보',
			back: true,
			menu: true,
		})
	}, [])

	const [classList, setClassList] = useState<Array<Class>>([])

	useNotRights()
	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/class/info/${user.daycareId}/list`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						const list: Array<Class> = resData.list
						if (list.length > 0) {
							setClassList(list)
						} else if (user.rights !== 'PRENT') {
							setBackLogic(NO_DATA)
							router.push(ROUTE_PATH['21-02'])
						}
					} else {
						toast(message)
					}
				}
			})
		}
	}, [])

	const handleManageBtn = () => {
		router.push(ROUTE_PATH['21-02'])
	}

	return (
		<>
			<Contents>
				<div className='teacher-home-wrap'>
					<div className='class-list-wrap'>
						<div className='class-info-list'>
							<ul>
								{classList.map((c: any) => (
									<li key={c.classId}>
										<div className='box'>
											<em>{c.classGb}</em>
											<div className='info'>
												<span className='cls'>{c.className}</span>
												<span className='teacher'>
													<b>{c.teacherName}</b>
													<span className='unit'>선생님</span>
												</span>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Contents>

			{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={handleManageBtn}>
						<span>반 정보 관리</span>
					</Button>
				</Footer>
			)}
		</>
	)
}

export default _
