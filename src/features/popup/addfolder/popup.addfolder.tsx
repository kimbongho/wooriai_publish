import { Button, Icon, Input, Popup } from '@/entities'
import { useState } from 'react'

const _ = ({ open, close, modify, addFunc, modifyFunc }: any) => {
	const [folder, setFolder] = useState('')

	return (
		<Popup open={open} close={close} modify={modify}>
			<div className='pop-header'>{modify ? <b className='title'>폴더명을 변경해주세요.</b> : <b className='title'>폴더명을 입력해주세요.</b>}</div>
			<div className='pop-body'>
				<Input
					type='text'
					value={folder}
					className='folder'
					placeholder='폴더명 (필수)'
					del={true}
					maxLength={300}
					onChange={(e: any) => {
						setFolder(e.target.value)
					}}
				/>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					{modify ? (
						<Button
							className='btn-type1 st1'
							onClick={() => {
								close()
								modifyFunc(folder)
								setFolder('')
							}}
						>
							<span>확인</span>
						</Button>
					) : (
						<Button
							className='btn-type1 st1'
							disabled={!folder}
							onClick={() => {
								close()
								addFunc(folder)
								setFolder('')
							}}
						>
							<Icon type='plus' />
							<span>추가</span>
						</Button>
					)}
				</div>
			</div>
		</Popup>
	)
}

export default _
