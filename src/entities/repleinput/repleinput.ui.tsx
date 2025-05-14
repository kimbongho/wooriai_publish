/** @jsxImportSource react */
import { PopMenu, PopRepleInput } from '@/features'
import { globalStore, isEmptyString, RESPONSE_OK, Server, STATUS_OK, userStore } from '@/shared'
import { memo, useEffect, useState } from 'react'
import Button from '../button'
import Input from '../input'
import { useToast } from '../toast'
import { RepleInput } from './repleinput.style'

const _ = ({ type, setList, id, popRepleInput, setPopRepleInput, targetReply, setTargetReply, trigger, setTrigger, popRepleMenu, setPopRepleMenu }: any) => {
	const { toast } = useToast()

	const { user } = userStore()
	const { setFooter } = globalStore()
	useEffect(() => {
		setFooter({
			fixed: true,
			reple: true,
		})
	}, [])

	const wrap = document.querySelector('.wrap') as HTMLDivElement
	if (wrap) wrap.classList.add('has-reple')

	const [reple, setReple] = useState<string>('')
	const [taggedUser, setTaggedUser] = useState({
		tagId: '',
		tagName: '',
		tagUserId: '',
	})

	useEffect(() => {
		getReplyList()
	}, [])

	const getReplyList = () => {
		if (isEmptyString(id)) return

		Server.get(`/api/comment/list/${type}/${id}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					setList(
						resData
							.filter(v => v.delYn === 'N')
							.map((v: any) => ({
								user: v.createdName,
								date: v.createdAt?.split(' ')[0],
								time: v.createdAt?.split(' ')[1],
								to: v.targetUserName,
								reple: v.commentText,
								src: user.profileImg,
								userId: v.createdId,
								...v,
							}))
					)
				} else {
					toast(message)
				}
			}
		})
	}

	const onSubmitReply = (reple: string) => {
		Server.post(`/api/comment/create/${type}`, { referId: id, commentText: reple, targetUserId: taggedUser.tagUserId })
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						setReple('')
						setTaggedUser({ tagId: '', tagName: '', tagUserId: '' })
						getReplyList()
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const onSubmitModify = (text: any) => {
		Server.post(`/api/comment/update/${type}`, {
			commentId: targetReply.commentId,
			commentText: text,
		})
			.then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						popCloseRepleInput()
						getReplyList()
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const onSubmitDelete = () => {
		Server.post(`/api/comment/delete/${type}/${targetReply.commentId}`, {})
			.then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						getReplyList()
					} else {
						toast(message)
					}
				}
			})
			.catch()
	}

	const popCloseRepleInput = () => {
		setPopRepleInput(false)
		setTargetReply({
			commentId: '',
			createdId: '',
			commentText: '',
			taggedUserName: '',
			taggedUserId: '',
		})
	}

	const popOpenRepleInput = () => {
		setPopRepleInput(true)
		triggerHandeler()
	}

	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}

	return (
		<>
			<RepleInput className='reple-input-wrap'>
				<Input
					type='text'
					className='reple'
					value={reple}
					placeholder='댓글을 입력해주세요.'
					del={true}
					onChange={(e: any) => setReple(e.target.value)}
					onKeyDown={(e: any) => {
						if (e.key === 'Enter' && reple) {
							onSubmitReply(reple)
						}
					}}
				/>
				<Button className='btn-send' disabled={!reple} onClick={() => onSubmitReply(reple)}></Button>
			</RepleInput>
			<PopRepleInput data={targetReply} open={popRepleInput} close={popCloseRepleInput} trigger={trigger} onSubmitModify={onSubmitModify} />
			<PopMenu
				data={[
					{ name: '댓글 수정', fnc: () => popOpenRepleInput() },
					{ name: '댓글 삭제', fnc: () => onSubmitDelete() },
				]}
				open={popRepleMenu}
				close={() => setPopRepleMenu(false)}
			/>
		</>
	)
}

export default memo(_)
