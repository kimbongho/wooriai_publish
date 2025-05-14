'use client'

import { Button, useDialog } from '@/entities'

const DialogToast = () => {
	const { dialog } = useDialog()
	const confirm = () => {
		alert('confirm')
	}
	const cancel = () => {
		alert('cancel')
	}
	const custom = () => {
		alert('게시물삭제')
	}

	return (
		<div>
			<div className='btn-wrap column'>
				<Button className='btn-type1 st1 full' onClick={() => dialog('alert창 입니다.<br><b>텍스텍스트</b> 텍스트텍스트 텍스트텍스트.', confirm, null)}>
					alert보기(확인)
				</Button>
				<Button className='btn-type1 st1 full' onClick={() => dialog('alert창 입니다.<br><b>텍스텍스트</b> 텍스트텍스트 텍스트텍스트.', null, cancel)}>
					alert보기(취소)
				</Button>
				<Button className='btn-type1 st1 full' onClick={() => dialog('alert창 입니다.<br><b>텍스텍스트</b> 텍스트텍스트 텍스트텍스트.', confirm, cancel)}>
					alert보기(확인,취소)
				</Button>
				<Button className='btn-type1 st1 full' onClick={() => dialog({ tit: '타이틀', txt: 'alert창 입니다.<br><b>텍스텍스트</b> 텍스트텍스트 텍스트텍스트.' }, confirm, cancel)}>
					alert보기(타이틀)
				</Button>
				<Button className='btn-type1 st1 full' onClick={() => dialog('alert창 입니다.<br><b>텍스텍스트</b> 텍스트텍스트 텍스트텍스트.', { txt: '게시물삭제', type: 'st1', callback: custom }, cancel)}>
					게시물삭제
				</Button>
			</div>
		</div>
	)
}

export default DialogToast
