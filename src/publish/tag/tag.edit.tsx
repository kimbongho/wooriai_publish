import { Button, UploadFiles } from '@/entities'
import { PopSelectList } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './tag.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '전자출결',
			back: true,
		})
	}, [])

	//업체 팝업
	const filterList = [{ name: '계약업체1' }, { name: '계약업체2' }, { name: '계약업체3' }, { name: '계약업체4' }, { name: '계약업체5' }]
	const [selectedFilter, setSelectedFilter] = useState({ name: '계약업체 선택' })
	const [popFilter, setPopFilter] = useState(false)
	const popOpenFilter = () => {
		setPopFilter(true)
	}
	const popCloseFilter = () => {
		setPopFilter(false)
	}

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	return (
		<>
			<Contents>
				<div className='electronic-attendance-modify-wrap'>
					<div className='page-top-area'>
						<div className='visual'>
							<div className='visual-electronic-attendance'></div>
							<div className='txt-sub'>
								전자출결정보 수정 시 <em>보육통합시스템</em>과
								<br />
								<em>정보가 동일한지</em> 확인해주세요.
							</div>
						</div>
					</div>
					<div className='electronic-attendance-modify-section'>
						<div className='attendance-info'>
							<b className='tit'>전자출결정보</b>
							<div className='code'>23234545787869756579809</div>
						</div>

						<div className='tag-info-regist'>
							<Button className='btn-select' onClick={popOpenFilter}>
								<span className={selectedFilter.name === '계약업체 선택' ? 'placeholder' : ''}>{selectedFilter.name}</span>
							</Button>
							<UploadFiles files={files} max={fileMax} onChange={setFiles} placeholder='태그 정보 파일 등록' />
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>
								<span>다음</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectList title='계약업체' value={selectedFilter} data={filterList} open={popFilter} close={popCloseFilter} onChange={setSelectedFilter} />
		</>
	)
}

export default _
