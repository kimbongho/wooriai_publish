import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './tag.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '전자출결',
			back: true,
			menu: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='electronic-attendance-wrap'>
					<div className='page-top-area'>
						<div className='attendance-info'>
							<b className='tit'>전자출결정보</b>
							<div className='code'>23234545787869756579809</div>
						</div>
					</div>
					<div className='electronic-attendance-list-section'>
						<ul className='info'>
							<li>
								<span className='label'>계약 업체</span>
								<em>LGU+</em>
							</li>
							<li>
								<span className='label'>등록태그</span>
								<em>52</em>
							</li>
						</ul>
						<div className='child-info-list'>
							<ul>
								<li>
									<div className='box'>
										<div className='desc'>
											<div className='info'>
												<span>풀입반</span>
												<b>홍길동</b>
											</div>
											<div className='code'>23234545787869756579809</div>
										</div>
									</div>
								</li>
								<li>
									<div className='box'>
										<div className='desc'>
											<div className='info'>
												<span>풀입반</span>
												<b>홍길동</b>
											</div>
											<div className='code'>23234545787869756579809</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>전자출결 정보 관리 / 확인</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
