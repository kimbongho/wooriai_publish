/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { globalStore, isEmpty, isEmptyString, isRightsAdmin, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './teacher.style'

const NO_DATA = 'NO_DATA'

const _ = () => {
	const router = useRouter()
	const toast = useToast()

	const { user } = userStore()
	const { setHeader, setBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '선생님 정보',
			back: true,
			menu: true,
		})
	}, [])

	const [teacherList, setTeacherList] = useState<any[]>([])

	useNotRights()
	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/teacher/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						if (resData.length > 0) {
							setTeacherList(resData)
						} else if (user.rights !== 'PRENT') {
							setBackLogic(NO_DATA)
							router.push(ROUTE_PATH['20-02'])
						}
					} else {
						toast.toast(message)
					}
				}
			})
		}
	}, [])

	const handleManageBtn = () => {
		router.push(ROUTE_PATH['20-02'])
	}

	const drawClassInfo = (teacher: any) => {
		let classArr: Array<string> = []
		if (!isEmpty(teacher?.className)) {
			classArr.push(teacher.className)
		}
		if (!isEmpty(teacher?.classExtsNm)) {
			classArr.push(teacher.classExtsNm)
		}
		return <div className='cls-info'>{classArr.join(', ')}</div>
	}

	return (
		<>
			<Contents>
				<div className='teacher-home-wrap'>
					<div className='teacher-info-list'>
						<ul>
							{teacherList.map((teacher: any) => (
								<li key={uuidv4()}>
									<div className='box' key={teacher.loginId}>
										<div className='desc'>
											<div className='name'>
												<b>{teacher.teacherName}</b>
												<span>선생님</span>
											</div>
											<div className='info'>
												<span className='position'>{teacher.teacherGb}</span>
												{isRightsAdmin(user?.rights) && <span className='tel'>{teacher.teacherTel}</span>}
											</div>
											{drawClassInfo(teacher)}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Contents>

			{isRightsAdmin(user?.rights) && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={handleManageBtn}>
						<span>선생님 정보 관리</span>
					</Button>
				</Footer>
			)}
		</>
	)
}

export default _
