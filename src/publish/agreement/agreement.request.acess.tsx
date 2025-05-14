import { Button, Icon } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '권한확인',
			back: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='request-access-wrap'>
					<div className='text'>원활한 서비스 제공을 위해 다음의 기능들에 대한 접근 권한을 요청하고 있어요.</div>
					<div className='access-box'>
						<b className='tit'>[필수 접근 권한]</b>
						<p className='txt'>서비스를 이용하기 위한 권한으로, 권한 동의를 하지 않을 시, 서비스를 사용할 수 없어요.</p>
						<ul className='list'>
							<li>
								<span className='icon'>
									<Icon type='access-phone' />
								</span>
								<div className='desc'>
									<b>휴대전화</b>
									<p>기기 인증 상태 유지 및 사용자 인증 확인</p>
								</div>
							</li>
							<li>
								<span className='icon'>
									<Icon type='access-save' />
								</span>
								<div className='desc'>
									<b>저장공간</b>
									<p>게시글 임시저장</p>
								</div>
							</li>
							<li>
								<span className='icon'>
									<Icon type='access-media' />
								</span>
								<div className='desc'>
									<b>기기 사진, 미디어, 파일</b>
									<p>속성 등록, 게시글 작성, 사진 등록</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='access-box'>
						<b className='tit'>[선택 접근 권한]</b>
						<p className='txt'>일부 서비스를 이용하기 위한 권한으로, 거부할 수 있어요. 다만, 권한 동의를 하지 않을 시, 해당 서비스를 사용할 수 없어요.</p>
						<ul className='list'>
							<li>
								<span className='icon'>
									<Icon type='access-tel' />
								</span>
								<div className='desc'>
									<b>전화</b>
									<p>추천하기, 112 신고</p>
								</div>
							</li>
							<li>
								<span className='icon'>
									<Icon type='access-contact' />
								</span>
								<div className='desc'>
									<b>연락처</b>
									<p>추천하기</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>확인</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
