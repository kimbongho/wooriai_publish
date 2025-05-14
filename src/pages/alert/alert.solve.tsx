/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { alertStore, globalStore, isEmpty, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './alert.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { alert } = alertStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI 위험 해결 보고서',
			back: true,
		})
	}, [])

	const [alertRow, setAlertRow] = useState<any>({})

	useEffect(() => {
		if (isEmpty(alert.alertId)) return

		Server.get(`/api/alert/solve/info/daily?alertId=${alert.alertId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setAlertRow(resData.info)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	return (
		<Contents>
			<div className='danger-solve-wrap'>
				<div className='list-box'>
					<ul>
						<li>
							이벤트명
							<div className='right'>
								<b className='medium c-red'>{alertRow?.workoutGb}</b>
							</div>
						</li>
						<li>
							발생시각
							<div className='right'>{alertRow?.alertAt}</div>
						</li>
						<li>
							해결시각
							<div className='right c-primary'>{isEmpty(alertRow?.workoutDate) || isEmpty(alertRow?.workoutTime) ? `미결` : `${alertRow?.workoutDate} ${alertRow?.workoutTime}`}</div>
						</li>
						<li>
							해결자
							<div className='right'>
								<span className='teacher'>
									{!isEmpty(alertRow?.profileName) ? (
										<>
											<b>{alertRow?.profileName}</b>
											{alertRow?.rightsCode === 'HEADT' ? '원장선생님' : '선생님'}
										</>
									) : (
										<b>미정</b>
									)}
								</span>
							</div>
						</li>
					</ul>
				</div>

				{isEmptyString(alertRow?.solveType) ? (
					<div className='btn-wrap'>
						<Button className='btn-type1 st1' onClick={() => router.push(ROUTE_PATH['18-04'])}>
							보고서 작성
						</Button>
					</div>
				) : (
					<div className='btn-wrap'>
						<Button className='btn-type1 st1' onClick={() => router.push(ROUTE_PATH['18-05'])}>
							보고서 미리보기
						</Button>
					</div>
				)}
			</div>
		</Contents>
	)
}

export default _
