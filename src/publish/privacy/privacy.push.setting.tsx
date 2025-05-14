import { Checkbox } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림설정',
			back: true,
		})
	}, [])

	// 전체선택
	const checkdata = [
		{ value: 1, label: '위험알림', txt: 'AI 위험 알림 정보' },
		{ value: 2, label: '학부모 알림', txt: '귀가동의서, 투약의뢰서' },
		{ value: 3, label: '새글 알림', txt: '공지, 알림장, 앨범 등' },
		{ value: 4, label: '등,하원 알림', txt: '등원, 하원 정보' },
		{ value: 5, label: '이벤트 및 유용한 정보', txt: '마케팅 알림' },
	]

	// 단일선택
	const [checkItems, setCheckItems] = useState<number[]>([])

	const handleSingleCheck = (checked: boolean, id: number): void => {
		if (checked) {
			setCheckItems(prev => [...prev, id])
		} else {
			setCheckItems(prev => prev.filter(el => el !== id))
		}
	}
	// 전체 선택
	const handleAllCheck = (checked: boolean): void => {
		if (checked) {
			const idArray: any[] = []
			checkdata.forEach((d: any) => idArray.push(d.value))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<Contents>
			<div className='alarm-manage-wrap'>
				<div className='toggle-box'>
					<div className='left'>
						<b>전체 설정</b>
					</div>
					<div className='right'>
						<Checkbox className='inp-range' name='check-all' onChange={handleAllCheck} checked={checkItems.length === checkdata.length ? true : false} />
					</div>
				</div>

				<div className='alarm-list'>
					{checkdata?.map((data, key) => (
						<div className='toggle-box' key={`alarm` + key}>
							<div className='left'>
								<b>{data.label}</b>
								<span>{data.txt}</span>
							</div>
							<div className='right'>
								<Checkbox className='inp-range' key={key} name={`check-${data.value}`} onChange={(e: any) => handleSingleCheck(e, data.value)} checked={checkItems.includes(data.value) ? true : false} />
							</div>
						</div>
					))}
				</div>
			</div>
		</Contents>
	)
}

export default _
