import { getAccessToken } from '@/shared/utils/sessionStorage'
import moment from 'moment'
import { ROUTE_PATH, SRC_CHILD, SRC_CLOUD, SRC_CLOUD_DIR, SRC_CLOUD_LIST, SRC_COMM } from './constant'

export const convertTelNumberFormat = (tel: string) => {
	return tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
}
export const convertPhoneNumberFormat = (tel: string) => {
	return tel.replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
}

export const isEmpty = (param: any): boolean => param === undefined || param === null
export const isEmptyString = (str: any): boolean => str === undefined || str === null || str === ''
export const isEmptyArray = (arr: Array<any> | undefined | null): boolean => arr === undefined || arr === null || arr.length < 1
export const isEmptyObject = (obj: any): boolean => obj === undefined || obj === null || Object.keys(obj).length < 1

export const formatLeftTimer = (timeLeft: number) => {
	const minutes = String(Math.floor((timeLeft / 60) % 60)).padStart(2, '0')
	const seconds = String(Math.floor(timeLeft % 60)).padStart(2, '0')
	return `${minutes}:${seconds}`
}
export const formatDateHypen = (dateStr: string) => {
	if (typeof dateStr === 'string' && dateStr.length === 8) {
		return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6)
	}
}
export const redirectLoginWithNext = (toast: any, router: any) => {
	toast('로그인이 필요합니다.')
	router.replace(ROUTE_PATH['03-01'])
}

export const downloadFile = async (fileId: string, div?: string) => {
	if (isEmptyString(fileId)) return

	if (div === 'cloud') {
		await window.open(proxySrcCloud(fileId), '_blank')
	} else {
		window.location.href = proxySrcComm(fileId)
	}
}
export const downloadFileList = async (fileIds: string) => {
	if (isEmptyString(fileIds)) return

	const token = getAccessToken()

	try {
		const response = await fetch(proxySrcCloudList(fileIds), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: fileIds }),
		})

		if (!response.ok) {
			throw new Error('ERR: 경로가 없는 파일이 존재합니다.')
		}

		const blob = await response.blob()

		// @ts-ignore
		const filename = decodeURIComponent(response.headers.get('Content-Disposition').split('filename=')[1].split(';')[0])
		// alert(filename)

		// 다운로드를 위한 링크 생성
		const url = window.URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = filename

		// 링크를 클릭하여 다운로드 실행
		document.body.appendChild(a)
		a.click()

		// 정리 작업
		a.remove()
		window.URL.revokeObjectURL(url)
	} catch (error) {
		console.error('파일 다운로드 오류:', error)
		alert('ERR: 경로가 없는 파일이 존재합니다.')
	}
}
export const downloadDir = async (forderIds: string) => {
	if (isEmptyString(forderIds)) return

	const token = getAccessToken()

	try {
		const response = await fetch(proxySrcCloudDir(forderIds), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: forderIds }),
		})

		if (!response.ok) {
			throw new Error('파일 다운로드에 실패하였습니다.')
		}

		const blob = await response.blob()

		// @ts-ignore
		const filename = response.headers.get('Content-Disposition').split('filename=')[1].split(';')[0]

		// 다운로드를 위한 링크 생성
		const url = window.URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = filename

		// 링크를 클릭하여 다운로드 실행
		document.body.appendChild(a)
		a.click()

		// 정리 작업
		a.remove()
		window.URL.revokeObjectURL(url)
	} catch (error) {
		console.error('파일 다운로드 오류:', error)
		alert('파일 다운로드에 실패하였습니다.')
	}
}

export const proxySrcComm = (src: string | undefined) => `${SRC_COMM}${src}`
export const proxySrcChild = (src: string | undefined) => `${SRC_CHILD}${src}`
export const proxySrcCloud = (src: string | undefined) => `${SRC_CLOUD}${src}`
export const proxySrcCloudList = (src: string | undefined) => `${SRC_CLOUD_LIST}${src}`
export const proxySrcCloudDir = (src: string | undefined) => `${SRC_CLOUD_DIR}${src}`

export const convertHourMinute = (hour: string | number, minute: string | number) => `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
export const extractTimeFromDate = (date: string) => moment(date).format('HH:mm:ss')
export const calculateExtraSign = (value: number) => (value > 0 ? `+${value}` : value < 0 ? `-${value}` : value)
export const deepCopy = (data: any) => JSON.parse(JSON.stringify(data))

export const isRightsAdmin = (rights: string) => rights === 'HEADT' || rights === 'TCHER'
export const isRightsParents = (rights: string) => rights === 'PRENT'
