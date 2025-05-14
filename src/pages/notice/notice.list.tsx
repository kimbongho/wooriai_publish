/** @jsxImportSource react */
import { Button, Icon, Input, useToast } from '@/entities'
import { PopBoard } from '@/features'
import { globalStore, isEmptyString, isRightsAdmin, noticeStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Contents from './notice.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { notice, setNotice } = noticeStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '공지',
			back: true,
			menu: true,
			close: false,
			trash: false,
			dotmenu: false,
			menupop: false,
		})
	}, [])

	const [search, setSearch] = useState<string>('')
	const [holdNoti, setHoldNoti] = useState<Array<Noti>>([])
	const [noti, setNoti] = useState<Array<Noti>>([])
	const [tempNoti, setTempNoti] = useState<TempNoti | null>(null)
	const [moreBtnFlag, setMoreBtnFlag] = useState<boolean>(false)
	const [popIng, setPopIng] = useState<boolean>(false)

	const page = useRef<number>(1)

	useNotRights()
	useEffect(() => {
		; (async () => {
			getNotiList('init', false)
		})()
	}, [])

	useEffect(() => {
		if (tempNoti !== null) {
			setPopIng(true)
		}
	}, [tempNoti])

	const getNotiList = async (type: 'init' | 'more' | 'search', ignore = false) => {
		const { data, status } = await Server.get(`/api/notice/info/list?keyword=${search}&page=${page.current}&rows=15`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				const holdNotiList: Array<Noti> = resData.holdList
				const notiList: Array<Noti> = resData.list
				const totalCnt: number = resData.totalCnt

				if (ignore) return

				setHoldNoti(holdNotiList)
				if (type === 'more') {
					setNoti([...noti, ...notiList])
				} else {
					setNoti(notiList)
				}

				const totalPage: number = Math.floor(totalCnt / 15) + 1
				setMoreBtnFlag(page.current < totalPage)
			} else {
				toast(message)
			}
		}
	}

	const getNotiInfo = async (tempNoticeId: number) => {
		const { data, status } = await Server.get(`/api/notice/info/${tempNoticeId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				const tempNoti: Noti = resData.notice
				setTempNoti({
					noticeId: tempNoti.noticeId,
					name: '공지',
					title: tempNoti.noticeTitle,
					createdAt: tempNoti.createdAt,
					newWrite: () => handleNewWrite(tempNoti.noticeId),
					continueWrite: () => handleContinueWrite(tempNoti.noticeId),
				})
			} else {
				toast(message)
				setTempNoti(null)
			}
		}
	}

	const handlePlusBtn = async () => {
		const { data, status } = await Server.get('/api/notice/info/list/temp/common')
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				const tempNoticeId: number = resData.noticeId
				if (isEmptyString(tempNoticeId)) {
					router.push(ROUTE_PATH['06-02'])
				} else {
					await getNotiInfo(tempNoticeId)
				}
			} else {
				toast(message)
			}
		}
	}

	const handleNewWrite = async (noticeId: number) => {
		const { data, status } = await Server.post(`/api/notice/common/delete/${noticeId}`)
		if (status === RESPONSE_OK) {
			const { state, code, data: resData, message } = data
			if (state === STATUS_OK) {
				setNotice({ noticeId: null })
				router.push(ROUTE_PATH['06-02'])
			} else {
				toast(message)
			}
		}
	}

	const handleContinueWrite = (noticeId: number) => {
		router.push(`${ROUTE_PATH['06-02']}/${noticeId}`)
	}

	const DrawNoti = ({ item }: any) => (
		<li>
			<Button as='a' to={`${ROUTE_PATH['06-05']}/${item.noticeId}`}>
				<div className='cate'>
					<em>{item.className || '전체'}</em>
					{item.addYn === 'N' ? <span className='reserve'>예약</span> : null}
				</div>
				<div className='txt'>
					<b>{item.noticeTitle}</b>
					{item.isNewYn === 'Y' ? <Icon type='new' /> : null}
				</div>
				<div className='info'>
					<span className='time'>
						<span className='date'>{item.createdAt}</span>
					</span>
					<span className='from'>{item.createdName}</span>
				</div>
			</Button>
		</li>
	)

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
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setSearch(e.target.value)
							}}
							onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
								if (e.key === 'Enter') {
									page.current = 1
									getNotiList('search', false)
								}
							}}
						/>
						{holdNoti.length > 0 && (
							<ul className='notice-list'>
								{holdNoti.map((n: Noti) => (
									<DrawNoti key={n.noticeId} item={n} />
								))}
							</ul>
						)}
					</div>

					{noti.length > 0 ? (
						<ul className='notice-list'>
							{noti.map((n: Noti) => (
								<DrawNoti key={n.noticeId} item={n} />
							))}
						</ul>
					) : (
						<div className='no-data'>
							<p className='txt'>공지가 없습니다.</p>
						</div>
					)}

					{moreBtnFlag && (
						<Button
							className='btn-more'
							onClick={() => {
								page.current += 1
								getNotiList('more')
							}}
						>
							더보기
						</Button>
					)}
				</div>
			</Contents>

			{isRightsAdmin(user?.rights) && (
				<div className='floating-menu'>
					<Button className='btn-plus' onClick={handlePlusBtn}></Button>
				</div>
			)}

			<PopBoard type='ing' title='작성 중인 게시물이 있어요.' data={tempNoti} open={popIng} close={() => setPopIng(false)} />
			<MenuBar menu='noti' />
		</>
	)
}

export default _
