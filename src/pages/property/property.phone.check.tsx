/** @jsxImportSource react */
import { Button, Input } from '@/entities'
import { PopDaycareChildren, PopDaycareInputInfo } from '@/features'
import { convertTelNumberFormat, globalStore, REGEXP_TEL, RESPONSE_OK, rightsStore, ROUTE_PATH, Server, STATUS_OK } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Contents from './property.style'

const _ = () => {
	const router = useRouter()

	const { daycareId, rightsCode, setChildId, setTeacherId, setClassId, setClassName, setChildName, setMobile } = rightsStore()
	const { setHeader, setMenubar, setFooter } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '속성 등록',
			back: true,
			close: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	const childrenList = useRef<HTMLDivElement>(null)
	const [phone, setPhone] = useState<string>('')
	const [nextBtnFlag, setNextBtnFlag] = useState<boolean>(false)
	const [popInputInfo, setPopInputInfo] = useState<boolean>(false) // 입력 정보  팝업
	const [popChildren, setPopChildren] = useState<boolean>(false) // 아동 선택  팝업
	const [filteredChildList, setFilteredChildList] = useState<any[]>([])

	const handleNextBtn = () => {
		Server.post('/api/rights/check/validate', { daycareId, rightsCode, mobile: phone }).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setMobile(phone)
					if (rightsCode === 'PRENT') {
						const childList = resData.childList
						if (childList.length === 1) {
							const childInfo = childList[0]
							setChildId(childInfo.childId)
							setTeacherId(childInfo.teacherId)
							setChildName(childInfo.childName)
							setClassId(childInfo.classId)
							setClassName(childInfo.className)

							router.push(ROUTE_PATH['04-05'])
						} else {
							setFilteredChildList(childList)
							setPopChildren(true)
						}
					} else {
						if (rightsCode === 'TCHER') {
							const teacherInfo = resData.teacherInfo
							setTeacherId(teacherInfo.teacherId)
							setClassId(teacherInfo.classId)
						}
						router.push(ROUTE_PATH['04-05'])
					}
				} else {
					setPopInputInfo(true)
				}
			}
		})
	}

	const selectChildren = (e: any, child: any) => {
		if (childrenList.current) {
			childrenList.current.querySelectorAll('button').forEach((el: HTMLButtonElement) => {
				el.classList.remove('on')
			})
			e.target.classList.add('on')
			setChildId(child.childId)
			setTeacherId(child.teacherId)
			setChildName(child.childName)
			setClassId(child.classId)
			setClassName(child.className)
		}
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phoneNum = convertTelNumberFormat(e.target.value.replace(/\D/g, ''))
		setNextBtnFlag(REGEXP_TEL.test(phoneNum))
		setPhone(phoneNum)
	}

	const handleSelectBtn = () => {
		setPopChildren(false)
		router.push(ROUTE_PATH['04-05'])
	}

	return (
		<>
			<Contents>
				<div className='name-regist-wrap'>
					<div className='property-box name-regist'>
						<b>연락처를 등록해주세요.</b>
						<div className='txt'>
							아동 정보 보호를 위해 어린이집 등록 여부를 <br />
							확인하고 있어요.
						</div>
						<div className='txt'>어린이집에 등록한 연락처를 입력해 주세요.</div>
						<Input
							type='text'
							value={phone}
							placeholder='010-1234-5678'
							maxLength={13}
							del={true}
							onChange={(e: any) => {
								handlePhoneChange(e)
							}}
						/>
					</div>
					<div className='btn-wrap'>
						<Button className='btn-type2 st1' disabled={!nextBtnFlag} onClick={handleNextBtn}>
							다음
						</Button>
					</div>
				</div>
			</Contents>

			<PopDaycareInputInfo open={popInputInfo} close={setPopInputInfo} />
			<PopDaycareChildren data={{ childrenList, filteredChildList }} open={popChildren} close={setPopChildren} select={selectChildren} next={handleSelectBtn} />
		</>
	)
}

export default _
