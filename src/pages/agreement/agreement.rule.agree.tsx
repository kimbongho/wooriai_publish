/** @jsxImportSource react */
import { Button, Checkbox } from '@/entities'
import { AGREE_DATA, agreementStore, globalStore, ROUTE_PATH } from '@/shared'
import { Footer } from '@/widgets'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Contents from './agreement.style'

const _ = () => {
	const router = useRouter()

	const { agreement, setAgreementStore } = agreementStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '약관동의',
		})
	}, [])

	const [checkItems, setCheckItems] = useState<Array<number>>(agreement?.checkStore ? agreement.checkStore : [])

	const handleSingleCheck = (checked: boolean, id: number) => {
		if (checked) {
			setCheckItems((prev: Array<number>) => [...prev, id])
		} else {
			setCheckItems(checkItems.filter((v: number) => v !== id))
		}
	}

	const handleAllCheck = (checked: boolean) => {
		if (checked) {
			let idArray: Array<number> = []
			AGREE_DATA.forEach((v: AgreeData) => idArray.push(v.value))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	const ruleDetailClick = (idx: number) => {
		setAgreementStore({ checkStore: checkItems })
		router.push(`${ROUTE_PATH['02-02']}/${idx}`)
	}

	const goAgreementCertify = () => {
		setAgreementStore({ checkStore: checkItems })
		router.push(`${ROUTE_PATH['02-03']}`)
	}

	const drawRowAgree = (data: AgreeData, key: number) => (
		<li key={uuidv4()}>
			<Checkbox key={key} name={`check-${data.value}`} onChange={(checked: boolean) => handleSingleCheck(checked, data.value)} checked={checkItems.includes(data.value)}>
				{data.label}
			</Checkbox>
			{data.detail && (
				<Button
					className='btn-detail'
					onClick={() => {
						ruleDetailClick(data.value)
					}}
				></Button>
			)}
		</li>
	)

	return (
		<>
			<Contents>
				<div className='agree-checks-wrap'>
					<div className='visual'></div>
					<div className='visual-text'>
						우리 아이의 미래를 키웁니다.
						<br />
						<em>우리아이AI</em>와 함께 하세요.
					</div>
					<div className='agree-checks'>
						<div className='check-all'>
							<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === AGREE_DATA.length}>
								전체 동의
							</Checkbox>
						</div>
						<div className='check-box'>
							<strong className='check-tit'>필수 동의 항목</strong>
							<ul>{AGREE_DATA.filter(v => v.essential).map((data, key) => drawRowAgree(data, key))}</ul>
						</div>
						<div className='check-box'>
							<strong className='check-tit'>선택 동의 항목</strong>
							<ul>{AGREE_DATA.filter(v => !v.essential).map((data, key) => drawRowAgree(data, key))}</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={goAgreementCertify} disabled={AGREE_DATA.filter((z: AgreeData) => checkItems.filter(v => z.essential && z.value === v).length).length !== AGREE_DATA.filter(v => v.essential).length}>
						<span>다음</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
