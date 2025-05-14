'use client'

import { Button, useToast } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const TestToast = () => {
	const router = useRouter()
	const { toast } = useToast()
	const { header, setHeader } = globalStore()

	// console.log(`header: ${JSON.stringify(header, null, 4)}`)
	useEffect(() => {
		setHeader({
			title: '????????????',
		})
		// console.log(`header: ${JSON.stringify(header, null, 4)}`)
	}, [])

	return (
		<div>
			<Button className='btn-type1 st1' onClick={() => toast('이미 사용하고 있는 아이디입니다.\n새로운 아이디를 입력해주세요.')}>
				토스트보기
			</Button>
			<Button className='btn-type1 st1' onClick={() => toast('이미 사용하고 있는 아이디입니다.')}>
				토스트보기2
			</Button>
			<Button className='link' onClick={(e: any) => router.push('/home')}>
				이동
			</Button>
		</div>
	)
}

export default TestToast
