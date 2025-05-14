'use client'

import { isEmptyArray, isEmptyObject, RESPONSE_OK, Server, STATUS_OK } from '@/shared'
import { useEffect, useState } from 'react'

const useCommCode = (code: string, options?: { code: string; name: string }) => {
	const [codeArr, setCodeArr] = useState<Array<CommCodeProps>>([])

	useEffect(() => {
		Server.get(`/api/comm/find/code/${code}`)
			.then((response: any) => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, code, data: resData, message } = data
					if (state === STATUS_OK) {
						if (isEmptyObject(options)) {
							setCodeArr(resData)
						} else if (isEmptyArray(resData)) {
							setCodeArr([])
						} else {
							const codeObject = (row: CommCodeProps) => (options?.code ? { [options.code]: row.code } : {})
							const nameObject = (row: CommCodeProps) => (options?.name ? { [options.name]: row.name } : {})
							setCodeArr(resData.map((v: CommCodeProps) => ({ ...codeObject(v), ...nameObject(v) })))
						}
					}
				}
			})
			.catch()
	}, [])

	return codeArr
}

export default useCommCode
