import { Button, Icon, Img, Input, RepleInput, RepleList } from '@/entities'
import { PopMenu, PopRepleInput } from '@/features'
import { formatBytes, globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지사항',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) popOpenMenu()
	}, [header.menupop])

	const [trigger, setTrigger] = useState(false)
	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}

	const [files, setFiles] = useState([
		{ path: '오늘의 공지.jpg', size: 4500000 },
		{ path: '오늘의 공지2.jpg', size: 250000 },
	])
	const handleDeleteFile = (id: any) => {
		setFiles(files.filter((_, index) => index !== id))
	}

	//댓글수정팝업
	const [popRepleInput, setPopRepleInput] = useState(false)
	const popOpenRepleInput = () => {
		setPopRepleInput(true)
		triggerHandeler()
	}
	const popCloseRepleInput = () => {
		setPopRepleInput(false)
	}

	//메뉴팝업
	const dataMenu = [
		{
			name: '수정',
			fnc: () => {
				alert('수정')
			},
		},
		{
			name: '삭제',
			fnc: () => {
				alert('삭제')
			},
		},
	]
	const [popMenu, setPopMenu] = useState(false)
	const popOpenMenu = () => {
		setPopMenu(true)
	}
	const popCloseMenu = () => {
		setPopMenu(false)
		setHeader({ menupop: false })
	}

	//댓글수정메뉴팝업
	const dataRepleMenu = [
		{
			name: '댓글 수정',
			fnc: () => {
				popOpenRepleInput()
			},
		},
		{ name: '댓글 삭제', fnc: () => {} },
	]
	const [popRepleMenu, setPopRepleMenu] = useState(false)
	const popOpenRepleMenu = () => {
		setPopRepleMenu(true)
	}
	const popCloseRepleMenu = () => {
		setPopRepleMenu(false)
	}

	//댓글
	const repleData = [
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '동동맘', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png', delete: true },
	]

	const [reple, setReple] = useState('')
	const repleChange = (e: any) => {
		setReple(e.target.value)
	}

	return (
		<>
			<Contents>
				<div className='notice-detail-wrap'>
					<div className='view-detail'>
						<div className='view-desc'>
							<b className='tit'>풀잎반 학부모님들께 안내드립니다.</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : 2024.03.06 07:10:01</span>
									<span className='date'>수정날짜 : 2024.03.06 07:10:01</span>
								</div>
								<div className='right'>
									<span className='writer'>이유리 선생님</span>
								</div>
							</div>
						</div>
						<div className='content-view'>
							<p>풀잎반 수료 페스티벌</p>
							<ul>
								<li>일시: 2월 22일 </li>
							</ul>
							<br />
							<p>신입 재원, 오리엔테이션</p>
							<ul>
								<li>일시 : 2월 24일</li>
								<li>오전 10시 : 만 0세, 만 1세, 만 2세</li>
							</ul>
							<br />
							<Img src={'/images/temp/temp-notice.jpg'} alt='' />
						</div>
						<div className='file-list' style={files.length <= 0 ? { display: 'none' } : { display: 'block' }}>
							<ul>
								{files.map((file, id) => (
									<li key={id}>
										<Icon type='clip' />
										<span className='filename'>{file.path}</span>
										<div className='right'>
											<span className='byte'>{formatBytes(file.size)}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					<RepleList data={repleData} onPop={[popOpenRepleMenu]} />
				</div>
			</Contents>

			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />
			<PopMenu data={dataRepleMenu} open={popRepleMenu} close={popCloseRepleMenu} />

			<PopRepleInput open={popRepleInput} close={popCloseRepleInput} trigger={trigger} />

			<RepleInput className='reple-input-wrap'>
				<Input type='text' className='reple' value={reple} placeholder='댓글을 입력해주세요.' del={true} onChange={repleChange} />
				<button className='btn-send'></button>
			</RepleInput>
		</>
	)
}

export default _
