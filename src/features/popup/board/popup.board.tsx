import { Button, Icon, Popup } from '@/entities'

const _ = ({ type, data, title, open, close }: any) => {
	return (
		<Popup open={open} close={close} title={title}>
			<div className='pop-header'>
				<b className='title'>{title}</b>
			</div>
			<div className='pop-body'>
				<div className='pop-notice'>
					<span className='icon'>{type === 'ing' ? <Icon type='write-ing' /> : type === 'delete' ? <Icon type='write-del' /> : type === 'import' ? <Icon type='write-import' /> : null}</span>
					<div className='tit'>{type === 'ing' ? `작성중인 ${data?.name}을(를) 이어서 작성하시겠습니까?` : type === 'delete' ? `${data?.name}을(를) 정말 삭제하시겠어요?` : type === 'import' ? `가장 최근 작성한 ${data?.name}을(를) 불러올까요?` : null}</div>
					{type === 'ing' || type === 'import' ? (
						<div className='txt-box'>
							<div className='txt'>
								<span className='label'>제목 :</span>
								<span>{data?.title}</span>
							</div>
							<div className='txt'>
								<span className='label'>작성일 :</span>
								<span>{data?.createdAt}</span>
							</div>
						</div>
					) : null}
					<div className='txt-caution'>
						<span>{type === 'ing' ? `주의! 새로 작성할 경우 임시저장된 글은 삭제됩니다.` : type === 'delete' ? `주의! 삭제할 경우 복원할 수 없어요.` : type === 'import' ? `주의! 작성중인 내용은 삭제됩니다.` : null}</span>
					</div>
				</div>
			</div>
			<div className='pop-footer'>
				{type === 'ing' ? (
					<div className='btn-wrap'>
						<Button className='btn-type1 st4' onClick={data?.newWrite || close}>
							<span>새로 작성</span>
						</Button>
						<Button className='btn-type1 st1' onClick={data?.continueWrite || close}>
							<span>이어서 작성</span>
						</Button>
					</div>
				) : type === 'delete' ? (
					<div className='btn-wrap'>
						<Button className='btn-type1 st4' onClick={data?.edit || close}>
							<span>게시물 삭제</span>
						</Button>
						<Button className='btn-type1 st1' onClick={close}>
							<span>취소</span>
						</Button>
					</div>
				) : type === 'import' ? (
					<div className='btn-wrap'>
						<Button className='btn-type1 st4' onClick={close}>
							<span>불러오기</span>
						</Button>
						<Button className='btn-type1 st1' onClick={close}>
							<span>취소</span>
						</Button>
					</div>
				) : null}
			</div>
		</Popup>
	)
}

export default _
