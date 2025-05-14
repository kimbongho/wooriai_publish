'use client'

import { Button, Icon, useToast } from '@/entities'
import { globalStore, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FooterInfo from '../footerinfo'
import { Menubar } from './menubar.style'

const _ = ({ menu }: any) => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setMenubar } = globalStore()
	useEffect(() => {
		setMenubar({ fixed: true })
	}, [])

	const wrap = document.querySelector('.wrap') as HTMLDivElement
	if (wrap) wrap.classList.add('has-menubar')

	const menuOn = (name: any) => {
		return menu === name ? 'on' : ''
	}

	const [notiNew, setNotiNew] = useState<boolean>(false)
	const [reportNew, setReportNew] = useState<boolean>(false)
	const [albumNew, setAlbumNew] = useState<boolean>(false)
	const [presNew, setPresNew] = useState<boolean>(false)

	useEffect(() => {
		Server.get(`/api/menubar/count/${user.daycareId}?datetime=${moment().format('YYYY-MM-DD HH:mm')}`).then((response: any) => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setNotiNew(resData?.notice.newCount > 0)
					setReportNew(resData?.dailynews.newCount > 0)
					setAlbumNew(resData?.album.newCount > 0)
					setPresNew(resData?.presence.newCount > 0)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	return (
		<>
			<FooterInfo />
			<Menubar className='menu-bar'>
				<ul>
					<li className={menuOn('home')}>
						<Button className='link' onClick={(e: any) => router.push(ROUTE_PATH['05-01'])}>
							<span className={`icon`}>
								<Icon type='gnb-home' />
							</span>
							<span className='txt'>홈</span>
						</Button>
					</li>
					<li className={menuOn('noti')}>
						<Button className='link' onClick={(e: any) => router.push(ROUTE_PATH['06-01'])}>
							<span className={`icon ` + (notiNew ? 'new' : null)}>
								<Icon type='gnb-noti' />
							</span>
							<span className='txt'>공지</span>
						</Button>
					</li>
					<li className={menuOn('alarm')}>
						<Button className='link' onClick={(e: any) => router.push(ROUTE_PATH['07-01'])}>
							<span className={`icon ` + (reportNew ? 'new' : null)}>
								<Icon type='gnb-alarm' />
							</span>
							<span className='txt'>알림</span>
						</Button>
					</li>
					<li className={menuOn('album')}>
						<Button className='link' onClick={(e: any) => router.push(ROUTE_PATH['08-01'])}>
							<span className={`icon ` + (albumNew ? 'new' : null)}>
								<Icon type='gnb-album' />
							</span>
							<span className='txt'>앨범</span>
						</Button>
					</li>
					<li className={menuOn('attend')}>
						<Button className='link' onClick={(e: any) => router.push(ROUTE_PATH['09-01'])}>
							<span className={`icon ` + (presNew ? 'new' : null)}>
								<Icon type='gnb-attend' />
							</span>
							<span className='txt'>출결</span>
						</Button>
					</li>
				</ul>
			</Menubar>
		</>
	)
}

export default _
