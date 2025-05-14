// const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

export function getAccessToken() {
	return typeof window !== 'undefined' && sessionStorage.getItem('accessToken')
}

export function setAccessToken(token: string) {
	typeof window !== 'undefined' && sessionStorage.setItem('accessToken', token)
}

export function removeAccessToken() {
	typeof window !== 'undefined' && sessionStorage.removeItem('accessToken')
}

export function getRefreshToken() {
	return typeof window !== 'undefined' && sessionStorage.getItem('refreshToken')
}

export function setRefreshToken(token: string) {
	typeof window !== 'undefined' && sessionStorage.setItem('refreshToken', token)
}

export function removeRefreshToken() {
	typeof window !== 'undefined' && sessionStorage.removeItem('refreshToken')
}

export function getUserStorage() {
	return typeof window !== 'undefined' && sessionStorage.getItem('user-storage')
}

export function removeUserStorage() {
	typeof window !== 'undefined' && sessionStorage.removeItem('user-storage')
}

export function removeRightsStorage() {
	typeof window !== 'undefined' && sessionStorage.removeItem('rights-storage')
}

export function removeNoticeStorage() {
	typeof window !== 'undefined' && sessionStorage.removeItem('notice-storage')
}
