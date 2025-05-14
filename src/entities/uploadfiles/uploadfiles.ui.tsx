import { formatBytes } from '@/shared/utils/ui'
import { useEffect, useState } from 'react'
import { UploadFiles } from './uploadfiles.style'
import Button from '../button'

const _ = ({ files, filesOrg, max, onChange, placeholder, setRemoveFiles }: any) => {
	// TODO: formData file array 보내도 등록이 안됨
	const [totalSize, setTotalSize] = useState(0)
	const [previewFile, setPreviewFile] = useState<any>([])
	const [previewFileOrg, setPreviewFileOrg] = useState<any>([])

	useEffect(() => {
		setPreviewFile(
			files.map((v: any) => ({
				path: v.name,
				size: v.size,
			}))
		)
	}, [])

	useEffect(() => {
		setPreviewFileOrg(filesOrg || [])
	}, [filesOrg])

	const handleAddFiles = (event: any) => {
		const fileLists = event.target.files

		for (let i = 0; i < fileLists.length + previewFileOrg.length; i++) {
			if (fileLists[i].size <= max) {
				setPreviewFile((prev: any) => [...prev, { path: fileLists[i].name, size: fileLists[i].size }])
				onChange((prev: any) => [...prev, fileLists[i]])
				setTotalSize(prev => {
					return prev + fileLists[i].size
				})
			} else {
				alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			}
		}
	}
	const handleDeleteFileOrg = (id: any) => {
		setPreviewFileOrg((prev: any) => prev.filter((v: any) => v.fileId !== id))
		setRemoveFiles((prev: number[]) => [...prev, id])
	}
	const handleDeleteFile = (id: any) => {
		let selected = previewFile.filter((_: any, index: any) => index === id)[0].size
		setPreviewFile(previewFile.filter((_: any, index: any) => index !== id))
		onChange(files.filter((_: any, index: any) => index !== id))
		setTotalSize(prev => {
			return prev - selected
		})
	}

	return (
		<UploadFiles className='upload-files'>
			<label className='upload' onChange={handleAddFiles}>
				<span className='placeholder'>{placeholder || '파일첨부'}</span>
				<input type='file' multiple />
			</label>
			<div className='file-list' style={previewFile.length + previewFileOrg.length <= 0 ? { display: 'none' } : {}}>
				<ul>
					{previewFileOrg.map((file: any, id: any) => (
						<li key={id}>
							<span className='filename'>{file.orgFileName}</span>
							<div className='right'>
								<span className='byte'>{formatBytes(file.fileSize)}</span>
								<Button className='btn-del' onClick={() => handleDeleteFileOrg(file.fileId)} />
							</div>
						</li>
					))}
					{previewFile.map((file: any, id: any) => (
						<li key={id}>
							<span className='filename'>{file.path}</span>
							<div className='right'>
								<span className='byte'>{formatBytes(file.size)}</span>
								<Button className='btn-del' onClick={() => handleDeleteFile(id)} />
							</div>
						</li>
					))}
				</ul>
				{totalSize > 0 ? <div className='total-byte'>합계용량/{formatBytes(totalSize)}</div> : null}
			</div>
		</UploadFiles>
	)
}

export default _
