import { Button } from '@/entities'
import { UploadInfo } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
		})
	}, [])

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	return (
		<Contents className='bg-white'>
			<div className='child-modify-wrap'>
				<UploadInfo txt={'원아'} files={files} max={fileMax} onChange={setFiles} />
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
