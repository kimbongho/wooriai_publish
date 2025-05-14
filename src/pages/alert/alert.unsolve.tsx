/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { PopPhotoView, PopSolveConfirm } from '@/features'
import { alertStore, extractTimeFromDate, globalStore, isEmpty, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import moment from 'moment'
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
			title: 'AI 위험 알림 목록',
			back: true,
			dotmenu: true,
		})
	}, [])

	const [popSolve, setPopSolve] = useState<boolean>(false)
	const [alertRow, setAlertRow] = useState<any>({})
	const [images, setImages] = useState<Array<any>>([])
	const [popPhotoView, setPopPhotoView] = useState(false)

	useEffect(() => {
		if (isEmpty(alert.alertId)) return

		Server.get(`/api/alert/solve/info/daily?alertId=${alert.alertId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					// console.log(resData)
					setAlertRow(resData.info)
					setImages(resData.info.resourceUrls)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	const solveAlert = () => {
		Server.post(`/api/alert/solve`, {
			alertId: alert.alertId,
			workoutDate: moment().format('YYYY-MM-DD'),
			workoutTime: moment().format('HH:mm'),
		}).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setPopSolve(false)
					router.replace(ROUTE_PATH['18-03'])
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='danger-unsolve-wrap'>
					<div className='page-top-area'>
						<div className='visual'></div>
						<div className='txt'>본인은 어린이집 외부로 CCTV 화면을 반출할 수 없음을 인지하고 있으며, 아동의 안전을 위한 용도로 본 이미지에 대한 열람을 요청합니다.</div>
						<div className='btn-wrap'>
							<button className='btn-img-view' onClick={() => setPopPhotoView(true)}>
								이미지 열람
							</button>
						</div>
					</div>

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
								<div className='right'>
									<span className='c-red'>{extractTimeFromDate(alertRow?.alertAt)}</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='btn-wrap'>
						<Button className='btn-type1 st3'>
							<a href='tel:112' style={{ flex: 1, textAlign: 'center' }}>
								112 신고
							</a>
						</Button>
						<Button className='btn-type1 st1' onClick={() => setPopSolve(true)}>
							해결
						</Button>
					</div>
				</div>
			</Contents>

			<PopSolveConfirm title='위험 알림 해결' data={alertRow} open={popSolve} close={() => solveAlert()} />
			<PopPhotoView src={images} open={popPhotoView} close={() => setPopPhotoView(false)} />
		</>
	)
}

export default _
