import { Button, useToast } from '@/entities'
import { UploadInfo } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmpty, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, teacherStore, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './teacher.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setTeacherList } = teacherStore()
	const { setHeader, clearBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '선생님 정보',
			back: true,
		})
	}, [])

	const [file, setFile] = useState<File | null>(null)

	useEffect(() => {
		return () => clearBackLogic()
	}, [])

	const handleNextBtn = () => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			if (isEmpty(file)) {
				return toast('파일을 등록해주세요')
			}
			const formData = new FormData()
			formData.append('excel', file as File)

			Server.post(`/api/daycare/teacher/upsert/${user.daycareId}`, formData).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setTeacherList(resData)
						router.replace(ROUTE_PATH['20-03'])
					} else {
						toast(message)
					}
				}
			})
		}
	}

	return (
		<Contents className='bg-white'>
			<div className='teacher-modify-wrap'>
				<UploadInfo txt={'선생님'} file={file} max={FILE_MAX_SIZE} onChange={setFile} />
				<div className='btn-wrap'>
					<Button className='btn-type2 st1' disabled={isEmpty(file)}  onClick={() => handleNextBtn()}>
						<span>다음</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
