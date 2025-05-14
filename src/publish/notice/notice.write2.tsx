import { Button, Input, Textarea, UploadFiles } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지 작성',
			back: true,
		})
	}, [])

	const [title, setTitle] = useState('')
	const titleChange = (e: any) => {
		setTitle(e.target.value)
	}

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	return (
		<Contents>
			<div className='notice-write-wrap'>
				<div className='form-wrap'>
					<Input type='text' value={title} placeholder='제목 (필수)' del={true} onChange={titleChange} />
					<Textarea placeholder='내용' />
					<UploadFiles files={files} max={fileMax} onChange={setFiles} />
				</div>
				<div className='notice-box'>
					<b className='tit'>안심하세요</b>
					<div className='text'>
						<p>개인정보는 우리 AI가 알아서 제외하고 공지글로 만들어드려요.</p>
						<p className='c-red'>
							주의해주세요!
							<br />
							보건복지부에서 수신한 엑셀파일 혹은 통합보육센터에서 다운받은 엑셀 파일을 올려야 해요.
						</p>
					</div>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type2 st1'>미리보기</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
