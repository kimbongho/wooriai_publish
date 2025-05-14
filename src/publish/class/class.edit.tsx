import { Button } from '@/entities'
import { UploadInfo } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './class.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '반 정보',
			back: true,
		})
	}, [])

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	return (
		<Contents className='bg-white'>
			<div className='class-modify-wrap'>
				<UploadInfo txt={'반'} files={files} max={fileMax} onChange={setFiles} noti={'반 정보 변경 시 선생님, 원아 정보를 다시 등록 해야 합니다.'} />
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
