import { Button, Photolist, Checkbox } from '@/entities'
import { PopPhotoView } from '@/features'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장',
			back: true,
			menu: true,
		})
	}, [])


	const [todayPhotos, setTodayPhotos] = useState([
		{ id: 1, src:'https://img.freepik.com/premium-photo/multiethnic-group-school-children-laughing-embracing_928131-664.jpg' },
		{ id: 2, src:'https://d14cvuwsb9oabg.cloudfront.net/c_fill,fl_lossy,w_960/v1470909225/jduwbwli1yozs9s4hfjs.jpg' },
		{ id: 3, src:'https://www.ibabynews.com/news/photo/201811/69850_15448_5732.jpg' },
		{ id: 4, src:'/images/temp/temp-album.jpg' },
		{ id: 5, src:'https://www.ibabynews.com/news/photo/201808/67329_11722_3422.jpg' },
		{ id: 6, src:'https://img.hankyung.com/photo/201708/BD.14560909.1.jpg' },
	])

	
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

  	// 단일선택
	const [checkItems, setCheckItems] = useState<any>(Array(3).fill(false))
	const handleSingleCheck = (idx: any) => {
		const newItems = checkItems.map((value: any, i: any) => {
			if (i === idx) {
				return !value
			} else {
				return value
			}
		})
		setCheckItems(newItems)
	}

	return (
		<>
			<Contents>
				<div className='report-select-wrap'>
          <div className="text-guide">
            AI가 <em>이동욱</em> 원아의 
            <br />오늘을 분석할 수 있도록 
            <br />해당 원아를 선택해주세요!            
          </div>

          <ul className="child-photo-select-list">
            <li>
              <Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]} />
              <div className="photos">
                <Photolist photos={todayPhotos} onView={popOpenPhotoView} />
              </div>
            </li>
            <li>
              <Checkbox name='report' onChange={() => handleSingleCheck(1)} checked={checkItems[1]} />
              <div className="photos">
                <Photolist photos={todayPhotos} onView={popOpenPhotoView} />
              </div>
            </li>
          </ul>
        </div>
			</Contents>

      <PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />

      <Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>AI 분석 시작하기</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
