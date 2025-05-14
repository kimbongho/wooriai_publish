import { Button, Checkbox, Input, Radio, RadioGroup, TabList, TabPanel, Tabs, Textarea, UploadFiles, UploadPhotos } from '@/entities'
import { PopBoard, PopSelectClass } from '@/features'
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

	const [tabIndex, setTabIndex] = useState(0)
	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
	}

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

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	//의무공지종류
	const [notiSort, setNotiSort] = useState('1')
	const notiSortOption = [
		{ value: '1', label: '건강검진 등록' },
		{ value: '2', label: '예방접종 등록' },
		{ value: '3', label: '새학기 반 공지' },
	]

	//게시물 delete 팝업
	const [popDel, setPopDel] = useState(true)
	// const popOpenDel = () => { setPopDel(true) }
	const popCloseDel = () => {
		setPopDel(false)
	}

	//게시물 import 팝업
	const [popImport, setPopImport] = useState(false)
	const popOpenImport = () => {
		setPopImport(true)
	}
	const popCloseImport = () => {
		setPopImport(false)
	}

	// 선택 동의 항목
	const [fixNoti, setFixNoti] = useState(false)

	return (
		<>
			<Contents>
				<div className='notice-write-wrap'>
					{tabIndex === 0 ? (
						<div className='page-top-area'>
							<Button className='btn-select' onClick={popOpenClass}>
								<span>{selectedClass.name}</span>
								<em>({selectedClass.total})</em>
							</Button>
						</div>
					) : null}

					<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
						<TabList>
							<Button>일반공지</Button>
							<Button>의무공지</Button>
						</TabList>
						<TabPanel>
							<div className='tab-content'>
								<div className='menu'>
									<Checkbox checked={fixNoti} onChange={setFixNoti}>
										고정공지
									</Checkbox>
									<div className='right'>
										<Button className='btn-import' onClick={popOpenImport}>
											불러오기
										</Button>
									</div>
								</div>
								<div className='form-wrap'>
									<Input type='text' value={title} placeholder='제목 (필수)' del={true} onChange={titleChange} />
									<Textarea placeholder='내용' />
									<UploadPhotos photos={photos} max={photoMax} onChange={setPhotos} />
									<UploadFiles files={files} max={fileMax} onChange={setFiles} />
								</div>
								<div className='btn-wrap'>
									<Button className='btn-type2 st1'>미리보기</Button>
								</div>
							</div>
							<div className='tab-content'>
								<div className='select-box'>
									<b className='tit'>의무 공지 종류를 선택해 주세요.</b>
									<ul>
										<RadioGroup label='notiSort' value={notiSort} onChange={setNotiSort}>
											{notiSortOption.map((item, idx) => (
												<li key={`radio` + idx}>
													<Radio key={item.value} value={item.value}>
														{item.label}
													</Radio>
												</li>
											))}
										</RadioGroup>
									</ul>
								</div>
								<div className='btn-wrap'>
									<Button className='btn-type1 st1'>다음</Button>
								</div>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</Contents>

			<PopSelectClass value={selectedClass} data={classList} open={popClass} close={popCloseClass} onChange={setSelectedClass} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '파일명파일명' }} open={popDel} close={popCloseDel} />

			<PopBoard type='import' title='가장 최근 작성글을 불러옵니다.' data={{ name: '파일명파일명' }} open={popImport} close={popCloseImport} />
		</>
	)
}

export default _
