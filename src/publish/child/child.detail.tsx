import { Button, Img, UploadPhotos } from '@/entities'
import { PopPhotoView } from '@/features'
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

	const [photoList, setPhotoList] = useState<Array<any>>(['/images/temp/temp-album.jpg', '/images/temp/temp-dosage.jpg', '/images/temp/temp-meal.jpg', '/images/temp/temp-profile.png'])
	const handleDeletePhoto = (id: any) => {
		setPhotoList(photoList.filter((_: any, index: any) => index !== id))
	}

	// 사진보기
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}
	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	return (
		<>
			<Contents>
				<div className='child-detail-wrap'>
					<div className='page-top-area'>
						<div className='profile'>
							<div className='thumb'>
								<Img src={'/images/temp/temp-profile.png'} alt='' />
							</div>
							<b className='name'>홍길동</b>
							<div className='sub'>학부모 : 이효경</div>
							<div className='tel'>010-1234-5678</div>
						</div>
						<ul className='info-desc-box'>
							<li>
								<em>입소일</em>
								<span>2020.12.10</span>
							</li>
							<li>
								<em>생년월일</em>
								<span>2020.12.10</span>
							</li>
						</ul>
					</div>

					<div className='child-detail-section'>
						<ul className='album-list'>
							{photoList.map((src: any, id: any) => (
								<li key={id}>
									<button
										type='button'
										className='btn-del'
										onClick={() => {
											handleDeletePhoto(id)
										}}
									></button>
									<button
										className='img'
										onClick={() => {
											popOpenPhotoView(src)
										}}
									>
										<Img src={'/images/temp/temp-album.jpg'} alt='' />
									</button>
								</li>
							))}
						</ul>
						<div className='photo-guide'>
							우리AI가 아이의 얼굴을 기억할 수 있게 아이의 사진을 최소 4장 이상 등록해주세요.
							<span className='sub'>아이의 얼굴이 뚜렷할 수록 우리 아이를 잘지킬 수 있습니다.</span>
						</div>

						<p className='txt-noti'>※ 필터를 적용하지 않은 정면 얼굴 사진, 왼쪽 얼굴 사진, 오른쪽 얼굴 사진, 정면 45도에서 찍은 사진 각 1장 이상 필수</p>

						<UploadPhotos photos={photos} max={photoMax} total={10} onChange={setPhotos} />

						<div className='btn-wrap'>
							<Button className='btn-type2 st1'>
								<span>BI 리포트 확인</span>
							</Button>
						</div>
						<div className='btn-wrap'>
							<Button className='btn-add'>
								<span>우리아이 사진 등록</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
		</>
	)
}

export default _
