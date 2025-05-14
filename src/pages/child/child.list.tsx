/** @jsxImportSource react */
import { Button, Img, useToast } from '@/entities'
import { PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmptyString, isRightsAdmin, proxySrcChild, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './child.style'

const NO_DATA = 'NO_DATA'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setHeader, setBackLogic } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
		})
	}, [])

	const [childList, setChildList] = useState<any>([])
	const [filteredChildList, setFilteredChildList] = useState<any>([])
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [popClass, setPopClass] = useState<boolean>(false)

	useNotRights()
	useEffect(() => {
		if (!!user && !isEmptyString(user?.daycareId)) {
			Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						console.log(resData)
						if (resData.length > 0) {
							setChildList(resData)
							setFilteredChildList(resData)
						} else if (user.rights !== 'PRENT') {
							setBackLogic(NO_DATA)
							router.push(ROUTE_PATH['22-03'])
						}
					} else {
						toast(message)
					}
				}
			})
		}
	}, [])

	const handleClassSelect = (param: any) => {
		setFilteredChildList(param.classId ? childList.filter((v: any) => v.classId === param.classId) : childList)
		setSelectedClass(param)
	}

	const handleDetailBtn = (id: string) => {
		router.push(`${ROUTE_PATH['22-02']}/${id}`)
	}

	const handleManageBtn = () => {
		router.push(ROUTE_PATH['22-03'])
	}

	return (
		<>
			<Contents>
				<div className='child-home-wrap'>
					{isRightsAdmin(user?.rights) && (
						<div className='page-top-area'>
							<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						</div>
					)}

					<div className='child-info-list'>
						<ul>
							{filteredChildList.map((child: any, id: number) => (
								<li key={uuidv4()}>
									<Button style={{ width: '100%' }} onClick={() => handleDetailBtn(child.childId)}>
										<div className='box'>
											<div className='thumb'>
												<Img src={!isEmptyString(child?.profileImg) ? proxySrcChild(child.profileImg) : '/images/temp/temp-profile.png'} alt='' />
											</div>
											<div className='desc'>
												<div className='info'>
													<span>{child.className}</span>
													<b>{child.childName}</b>
												</div>
												<div className='parents'>학부모 : {child.parentUserName}</div>
											</div>
										</div>
									</Button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Contents>

			{isRightsAdmin(user?.rights) && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={handleManageBtn}>
						<span>원아 정보 관리</span>
					</Button>
				</Footer>
			)}

			{isRightsAdmin(user?.rights) && <PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => handleClassSelect(param)} />}
		</>
	)
}

export default _
