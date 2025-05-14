import { Button, useToast } from '@/entities'
import { UploadInfo } from '@/features'
import { childStore, FILE_MAX_SIZE, globalStore, isEmpty, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setChildList } = childStore()
	const { setHeader, clearBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
		})
	}, [])

	const [file, setFile] = useState<File | null>(null) // 파일업로드

	useEffect(() => {
		return () => clearBackLogic()
	}, [])

	const handleNextBtn = () => {
		if (isEmpty(file)) {
			return toast('파일을 등록해주세요')
		}

		const formData = new FormData()
		formData.append('excel', file as File)

		Server.post(`/api/daycare/child/upsert/${user.daycareId}`, formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setChildList(resData)
					router.replace(ROUTE_PATH['22-05'])
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<Contents className='bg-white'>
			<div className='child-modify-wrap'>
				<UploadInfo txt={'원아'} file={file} max={FILE_MAX_SIZE} onChange={setFile} />
				<div className='btn-wrap'>
					<Button className='btn-type2 st1' disabled={isEmpty(file)} onClick={handleNextBtn}>
						<span>다음</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
