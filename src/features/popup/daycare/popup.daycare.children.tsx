import { Button, Popup } from '@/entities'

const _ = ({ data, open, close, select, next }: any) => {
	return (
		<Popup
			open={open}
			close={() => {
				close(false)
			}}
		>
			<div className='pop-header'>
				<b className='title'>먼저 등록할 아동을 선택해주세요.</b>
			</div>
			<div className='pop-body'>
				<div className='text'>
					걱정마세요. 지금 등록하지 않는 아동은 메뉴의
					<br />
					아동 정보에서 등록할 수 있어요.
				</div>

				<div className='banner-profile-wrap' ref={data.childrenList}>
					{data.filteredChildList.map((child: any) => (
						<div className='banner-profile align-c' key={child.childId}>
							<button onClick={(e: any) => select(e, child)}>
								<span className='cls-name'>{child.className}</span>
								<span className='name'>{child.childName}</span>
							</button>
						</div>
					))}
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={next}>
						<span>확인</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
