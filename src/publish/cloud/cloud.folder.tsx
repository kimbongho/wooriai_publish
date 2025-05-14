import { Button, Icon, UploadPhotoAnalyze } from '@/entities'
import { PopSelectChild } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './cloud.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '클라우드',
			back: true,
		})
	}, [])

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
	const [photos, setPhotos] = useState(['/images/temp/temp-notice.jpg', '/images/temp/temp-album.jpg'])
	const [trigger, setTrigger] = useState(false)
	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}
	const photoMax = 1000000

	return (
		<>
			<Contents>
				<div className='cloud-folder-wrap'>
					<div className='page-top-area'>
						<div className='folder-title'>
							<b>2.28일 오늘의 사진</b>
							<span className='num'>3장</span>
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st2' onClick={triggerHandeler}>
								<Icon type='plus'></Icon>
								<span>사진 추가</span>
							</Button>
						</div>
					</div>
					<div className='cloud-view-wrap'>
						<UploadPhotoAnalyze type='st2' photos={photos} max={photoMax} total={50} onChange={setPhotos} openPop={[popOpenChild]} trigger={trigger} />
					</div>
				</div>
			</Contents>

			<PopSelectChild type='del' title='태그된 아동 목록' data={childList} open={popChild} close={popCloseChild} />

			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>선택한 사진 첨부</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
