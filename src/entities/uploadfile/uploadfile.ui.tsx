import { formatBytes } from '@/shared/utils/ui'
import { useEffect, useRef } from 'react'
import { UploadFile } from './uploadfile.style'
import Button from '../button'

const _ = ({ file, max, onChange, placeholder, accept }: any) => {
	const fileInput = useRef<any>()

	useEffect(() => { }, [file])
	const handleAddFiles = (event: any) => {
		const file = event.target.files[0]

		if (file.size > max) {
			alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			return
		}
		onChange(file)
	}
	const handleDeleteFile = () => {
		fileInput.current.value = ''
		onChange(null)
	}

	return (
		<UploadFile className='upload-files'>
			<label className='upload' onChange={handleAddFiles}>
				<span className='placeholder'>{placeholder || '파일첨부'}</span>
				<input type='file' ref={fileInput} accept={accept ?? ''} />
			</label>
			{file && (
				<div className='file-list'>
					<ul>
						<li>
							<span className='filename'>{file?.name}</span>
							<div className='right'>
								<span className='byte'>{formatBytes(file?.fileSize || file?.size)}</span>
								<Button className='btn-del' onClick={() => handleDeleteFile()} />
							</div>
						</li>
					</ul>
				</div>
			)}
		</UploadFile>
	)
}

export default _
