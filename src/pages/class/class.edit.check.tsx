import { Button, useToast } from '@/entities'
import { PopEditConfirm } from '@/features'
import { classStore, globalStore, isEmptyArray, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './class.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { classList, clearClassList } = classStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '반 정보',
			back: true,
		})
	}, [])

	const [popConfirm, setPopConfirm] = useState<boolean>(false)

	useEffect(() => {
		if (isEmptyArray(classList)) {
			toast('엑셀파일을 다시 등록해주세요.')
			router.back()
		}
	}, [])

	const handleConfirmBtn = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post(`/api/daycare/class/comfirm/${user.daycareId}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						clearClassList()
						router.replace(ROUTE_PATH['21-01'])
					} else {
						toast(message)
					}
				}
			})
		}
	}

	const popOpenConfirm = () => {
		setPopConfirm(true)
	}

	const popCloseConfirm = () => {
		setPopConfirm(false)
	}

	console.log(classList)
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
			<Footer className='full-btn'>
				<Button className='btn-type1 st1' onClick={popOpenConfirm}>
					<span>확인</span>
				</Button>
			</Footer>

			<PopEditConfirm title='반' open={popConfirm} close={popCloseConfirm} confirm={handleConfirmBtn} />
		</>
	)
}

export default _
