import { Button } from '@/entities'
import { UploadInfo } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './teacher.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '선생님 정보',
			back: true,
		})
	}, [])

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	return (
		<Contents className='bg-white'>
			<div className='teacher-modify-wrap'>
				<UploadInfo txt={'선생님'} files={files} max={fileMax} onChange={setFiles} />
				<div className='btn-wrap'>
					<Button className='btn-type2 st1'>
						<span>다음</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
