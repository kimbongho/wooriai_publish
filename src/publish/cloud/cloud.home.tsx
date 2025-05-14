import { Button, Checkbox, Icon, Img, Input } from '@/entities'
import { PopAddFolder, PopMenu } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './cloud.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '클라우드',
			back: true,
			menu: true,
		})
	}, [])

	const [search, setSearch] = useState('')

	//메뉴팝업
	const dataMenu = [
		{
			name: '폴더명 변경',
			fnc: () => {
				setModifyHandler(true)
				popOpenAddfolder()
			},
		},
		{
			name: '폴더 삭제',
			fnc: () => {
				alert('삭제')
			},
		},
	]
	const [popAddfolder, setPopAddfolder] = useState(false)
	const popOpenAddfolder = () => {
		setPopAddfolder(true)
	}
	const popCloseAddfolder = () => {
		setPopAddfolder(false)
		setModifyHandler(false)
	}

	// 폴더추가 팝업
	const [popMenu, setPopMenu] = useState(false)
	const popOpenMenu = () => {
		setPopMenu(true)
	}
	const popCloseMenu = () => {
		setPopMenu(false)
	}

	let selectCheck: any = []
	const [totalChk, setTotalChk] = useState(false)
	const [check, setCheck] = useState(false)
	const [checkNum, setCheckNum] = useState(0)

	const [modify, setModify] = useState(false)
	const setModifyHandler = (v: any) => {
		setModify(v)
	}

	const [folderData, setFolderData] = useState([
		{
			date: { year: '2024', date: '2.19', day: '월요일' },
			files: [
				{ id: '202402191', number: '25', title: '2.28일 오늘의 사진', date: '2024.03.06 ', time: '07:10:01', teacher:'이유리 선생님', checked: false, src: '/images/temp/temp-profile.png' },
				{ id: '202402192', number: '25', title: '2.28일 오늘의 사진', date: '2024.03.06 ', time: '07:10:01', teacher:'이유리 선생님', checked: false, src: '/images/temp/temp-profile.png' },
			],
		},
		{
			date: { year: '2024', date: '2.20', day: '화요일' },
			files: [
				{ id: '202402201', number: '25', title: '2.28일 오늘의 사진', date: '2024.03.06 ', time: '07:10:01', teacher:'이유리 선생님', checked: false, src: '/images/temp/temp-profile.png' },
				{ id: '202402202', number: '25', title: '2.28일 오늘의 사진', date: '2024.03.06 ', time: '07:10:01', teacher:'이유리 선생님', checked: false, src: '/images/temp/temp-profile.png' },
			],
		},
	])

	const checkEvt = (dataArray: any) => {
		let checked: any = []
		for (let i = 0; i < dataArray.length; i++) {
			const data = dataArray[i]
			for (let j = 0; j < data.files.length; j++) {
				const d = data.files[j]
				checked.push(d.checked)
			}
		}
		selectCheck = checked
		setCheckNum(checked.filter((v: any) => v === true).length)
		//선택체크
		if (selectCheck.includes(true)) setCheck(true)
		else setCheck(false)
		//전체체크
		if (selectCheck.includes(false)) setTotalChk(false)
		else setTotalChk(true)
	}

	const allCheck = () => {
		const newItems = folderData.map((data: any) => {
			const innerItems = data.files.map((d: any, i: any) => {
				return { ...d, checked: !totalChk }
			})
			return { date: data.date, files: innerItems }
		})

		setFolderData(newItems)
		checkEvt(newItems)
	}

	const handleCheck = (item: any, f: any) => {
		const newItems = folderData.map((data: any) => {
			if (data === item) {
				const innerItems = data.files.map((d: any, i: any) => {
					if (d === f) {
						return { ...d, checked: !d.checked }
					} else {
						return d
					}
				})
				return { date: data.date, files: innerItems }
			} else {
				return data
			}
		})

		setFolderData(newItems)
		checkEvt(newItems)
	}

	return (
		<>
			<Contents>
				<div className='cloud-home-wrap'>
					<div className='page-top-area'>
						<Input
							type='text'
							value={search}
							className='search'
							placeholder='폴더 검색'
							del={true}
							onChange={(e: any) => {
								setSearch(e.target.value)
							}}
						/>
						<div className='btn-wrap'>
							<Button className='btn-type1 st2' onClick={popOpenAddfolder}>
								<Icon type='plus'></Icon>
								<span>폴더 추가</span>
							</Button>
						</div>
					</div>
					<div className='cloud-view-wrap'>
						<div className='menus'>
							<div className='left'>
								<Button
									className={`btn-selc total ` + (totalChk ? 'on' : '')}
									onClick={() => {
										allCheck()
									}}
								>
									전체선택
								</Button>
							</div>
							<div className='right'>
								<Button className={`btn-selc ` + (check ? 'on' : '')} disabled={!check}>
									선택폴더 삭제 ({checkNum})
								</Button>
							</div>
						</div>
						{folderData.map((item, idx) => (
							<div key={`folder` + idx} className='cloud-folder'>
							<div className='date-text'>
								<div className='year'>{item.date.year}</div>
								<div className='date'>{item.date.date}</div>
								<span className='day'>{item.date.day}</span>
							</div>
							<ul>
								{item.files.map((file, i) => (
									<li key={`files` + idx + i}>
										<div className='menu'>
											<Checkbox checked={file.checked} onChange={() => handleCheck(item, file)} />
											<div className='right'>
												<span className='number'>{file.number}장</span>
												<Button className='btn-dot-menu' onClick={popOpenMenu}></Button>
											</div>
										</div>
										<Button className='link'>
											<div className='thumb'>
												<Img src={'/images/temp/temp-album.jpg'} alt='' />
											</div>
											<div className='desc'>
												<div className='txt'>{file.title}</div>
												<div className="info">
													<span className="date-time"><span>{file.date}</span><span>{file.time}</span></span>
													<span className="from">{file.teacher}</span>
												</div>
											</div>
										</Button>
									</li>
								))}
							</ul>
						</div>
						))}
					</div>
				</div>
			</Contents>

			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />

			<PopAddFolder open={popAddfolder} close={popCloseAddfolder} modify={modify} />
		</>
	)
}

export default _
