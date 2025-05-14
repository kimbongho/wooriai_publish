import { Button, Icon, Input } from '@/entities'
import { PopBoard } from '@/features'
import { globalStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지',
			back: true,
			menu: true,
		})
	}, [])

	const [search, setSearch] = useState('')
	const notiData = [
		{ number: '45485485', cate: '전체', reserve: true, tit: '을지로 푸르니 하나 금융어린집 입학을 환영합', date: '2024.03.06', time: '07:10:01', from: '을지로푸르니하나금융어린이집' },
		{ number: '7878', cate: '전체', reserve: false, new: true, tit: '3월 식단표, 영양소식지 입니다.3월 식단표, 영양소식지 입니다.', date: '2024.03.06', time: '07:10:01', from: '을지로푸르니하나금융어린이집' },
	]
	const notiData2 = [
		{ number: '5656', cate: '전체', reserve: true, tit: '을지로 푸르니 하나 금융어린집 입학을 환영합', date: '2024.03.06', time: '07:10:01', from: '을지로푸르니하나금융어린이집' },
		{ number: '8523', cate: '전체', reserve: false, tit: '3월 식단표, 영양소식지 입니다.3월 식단표, 영양소식지 입니다.', date: '2024.03.06', time: '07:10:01', from: '[새싹반] 이유리 선생님' },
	]

	const Noti = ({ item, idx }: any) => {
		return (
			<li>
				<Button to='/'>
					<div className='cate'>
						<em>{item.cate}</em>
						{item.reserve ? <span className='reserve'>예약</span> : null}
					</div>
					<div className='txt'>
						<b>{item.tit}</b>
						{item.new ? <Icon type='new' /> : null}
					</div>
					<div className='info'>
						<span className='time'>
							<span className='date'>{item.date}</span>
							<span className='time'>{item.time}</span>
						</span>
						<span className='from'>{item.from}</span>
					</div>
				</Button>
			</li>
		)
	}

	//게시물 img 팝업
	const [popIng, setPopIng] = useState(false)
	const popOpenIng = () => {
		setPopIng(true)
	}
	const popCloseIng = () => {
		setPopIng(false)
	}

	return (
		<>
			<Contents>
				<div className='notice-list-wrap'>
					<div className='page-top-area'>
						<Input
							type='text'
							value={search}
							className='search'
							placeholder='제목, 작성자로 검색'
							del={true}
							onChange={(e: any) => {
								setSearch(e.target.value)
							}}
						/>

						<ul className='notice-list'>
							{notiData.map(d => (
								<Noti key={d.number} item={d} />
							))}
						</ul>
					</div>
					<ul className='notice-list'>
						{notiData2.map(d => (
							<Noti key={d.number} item={d} />
						))}
					</ul>
					<Button className='btn-more'>더보기</Button>
				</div>
			</Contents>

			<div className='floating-menu'>
				<button className='btn-plus' onClick={popOpenIng}></button>
			</div>

			<PopBoard type='ing' title='작성 중인 게시물이 있어요.' data={{ name: '파일명파일명' }} open={popIng} close={popCloseIng} />

			<MenuBar menu='noti' />
		</>
	)
}

export default _
