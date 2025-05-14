import { Button, Input, Textarea, UploadPhotoAnalyze } from '@/entities'
import { PopBoard, PopSelectChild, PopSelectClass } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './album.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '앨범 작성',
			back: true,
			trash: true,
		})
	}, [])

	const [title, setTitle] = useState('')
	const titleChange = (e: any) => {
		setTitle(e.target.value)
	}

	//반선택 팝업
	const classList = [
		{ name: '전체', total: 20, taacher: '' },
		{ name: '아리스토텔레스반', total: 8, taacher: '김이순신' },
		{ name: '가가반', total: 12, taacher: '을지문덕' },
		{ name: '나나반', total: 5, taacher: '홍길동' },
		{ name: '노노반', total: 10, taacher: '강감찬' },
	]
	const [selectedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
	const popOpenClass = () => {
		setPopClass(true)
	}
	const popCloseClass = () => {
		setPopClass(false)
	}

	//아동 팝업
	const childList = [
		{ clsName: '풀잎반', name: '홍길동', src: '/images/temp/temp-album.jpg' },
		{ clsName: '새싹반', name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ clsName: '장미반', name: '이지은', src: '/images/temp/temp-album.jpg' },
		{ clsName: '풀잎반', name: '홍길동', src: '/images/temp/temp-album.jpg' },
		{ clsName: '새싹반', name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ clsName: '장미반', name: '이지은', src: '/images/temp/temp-album.jpg' },
	]
	const [popChild, setPopChild] = useState(false)
	const popOpenChild = () => {
		setPopChild(true)
	}
	const popCloseChild = () => {
		setPopChild(false)
	}

	// 사진업로드
	const [photos, setPhotos] = useState(['/images/temp/temp-profile.png', '/images/temp/temp-profile.png'])
	const photoMax = 1000000

	//게시물 delete 팝업
	const [popDel, setPopDel] = useState(true)
	// const popOpenDel = () => { setPopDel(true) }
	const popCloseDel = () => {
		setPopDel(false)
	}

	return (
		<>
			<Contents>
				<div className='album-write-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
					</div>
					<div className='album-write'>
						<div className='form-wrap'>
							<Input type='text' value={title} placeholder='제목 (필수)' del={true} onChange={titleChange} />
							<Textarea placeholder='내용' />
						</div>

						<UploadPhotoAnalyze photos={photos} max={photoMax} total={50} onChange={setPhotos} openPop={[popOpenChild]} />

						<div className='btn-wrap'>
							<Button className='btn-type2 st1'>미리보기</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />

			<PopSelectChild title='태그된 아동 목록' data={childList} open={popChild} close={popCloseChild} />

			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '파일명파일명' }} open={popDel} close={popCloseDel} />
		</>
	)
}

export default _
