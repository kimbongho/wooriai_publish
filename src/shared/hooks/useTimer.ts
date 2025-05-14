'use client'

import { useToast } from '@/entities'
import { globalStore, RESPONSE_OK, Server, STATUS_OK, zeroFill } from '@/shared'
import { useEffect, useRef, useState } from 'react'

let timerFn: ReturnType<typeof setInterval>
const DEFAULT_TIME: number = 180

const useTimer = ({ timeoutFn, setConfirmState }: { timeoutFn: () => void; setConfirmState: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const DEFAULT_MINUTE: string = zeroFill(Math.floor(DEFAULT_TIME / 60), 2)
	const DEFAULT_SECOND: string = zeroFill(Math.floor(DEFAULT_TIME % 60), 2)

	const { toast } = useToast()

	const limitTime = useRef<number>(DEFAULT_TIME)
	const [minute, setMinute] = useState<string>(DEFAULT_MINUTE)
	const [seconds, setSeconds] = useState<string>(DEFAULT_SECOND)
	const [phoneNumView, setPhoneNumView] = useState<string>('')

	const { authPhone } = globalStore()

	useEffect(() => {
		limitTime.current = DEFAULT_TIME
		setMinute(DEFAULT_MINUTE)
		setSeconds(DEFAULT_SECOND)
		setConfirmState(false)
		setPhoneNumView(authPhone.phoneNumber as string)

		if (!authPhone.phoneNumber) {
			toast('휴대폰번호가 입력되지 않았습니다.')
		} else {
			const phoneCheckForm = { mobile: authPhone.phoneNumber }
			Server.post('/api/user/sendAuthCode', phoneCheckForm)
				.then((response: any) => {
					const { data, status } = response
					if (status === RESPONSE_OK) {
						const { state, code, data: resData, message } = data
						if (state === STATUS_OK) {
							timerFn = setInterval(loop, 1000)
						} else {
							toast('휴대폰번호가 유효하지 않습니다.')
						}
					}
				})
				.catch()
		}

		return () => {
			stopTimer()
		}
	}, [])

	const loop = () => {
		limitTime.current--
		const minuteStr = zeroFill(Math.floor(limitTime.current / 60), 2)
		const secStr = zeroFill(limitTime.current % 60, 2)

		setMinute(minuteStr)
		setSeconds(secStr)
		if (limitTime.current === 0) {
			stopTimer()
			limitTime.current = DEFAULT_TIME
			setConfirmState(false)
			setMinute(DEFAULT_MINUTE)
			setSeconds(DEFAULT_SECOND)

			if (timeoutFn !== undefined) {
				timeoutFn()
			}
		}
	}

	const stopTimer = () => {
		clearInterval(timerFn)
	}

	return [minute, seconds, phoneNumView]
}

export default useTimer
