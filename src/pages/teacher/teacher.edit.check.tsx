/** @jsxImportSource react */
import { Button, useToast } from '@/entities'
import { PopEditConfirm } from '@/features'
import { globalStore, isEmpty, isEmptyArray, isEmptyString, RESPONSE_OK, Server, STATUS_OK, teacherStore, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './teacher.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { teacherList, clearTeacherList } = teacherStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '선생님 정보',
			back: true,
		})
	}, [])

	const [popConfirm, setPopConfirm] = useState<boolean>(false)

	useEffect(() => {
		if (isEmptyArray(teacherList)) {
			toast('엑셀파일을 다시 등록해주세요.')
			router.back()
		}
	}, [])

	const handleConfirmBtn = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.post(`/api/daycare/teacher/comfirm/${user.daycareId}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						clearTeacherList()
						router.back()
					} else {
						toast(message)
					}
				}
			})
		}
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
								<li key={teacher.teacherId}>
									<div className='box' key={teacher.loginId}>
										<div className='desc'>
											<div className='name'>
												<b>{teacher.teacherName}</b>
												<span>선생님</span>
											</div>
											<div className='info'>
												<span className='position'>{teacher.teacherGb}</span>
												<span className='tel'>{teacher.teacherTel}</span>
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
			<Footer className='full-btn'>
				<Button className='btn-type1 st1' onClick={() => setPopConfirm(true)}>
					<span>확인</span>
				</Button>
			</Footer>

			<PopEditConfirm title='선생님' open={popConfirm} close={() => setPopConfirm(false)} confirm={handleConfirmBtn} />
		</>
	)
}

export default _
