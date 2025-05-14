import { getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '@/shared/utils/sessionStorage'
import axios from 'axios'
import { isEmpty } from '../function'
import { STATUS_OK } from '../constant'

const URL_REFRESH_TOKEN = `/api/user/refresh`
const TIMEOUT = 500000

const Server = axios.create({
	timeout: TIMEOUT,
	withCredentials: false,
})

Server.interceptors.request.use(
	async config => {
		const token = getAccessToken()
		if (!isEmpty(token)) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

const getAuthToken = async () => {
	const token = getAccessToken()
	const refreshToken = getRefreshToken()
	const response = await Server.patch(
		URL_REFRESH_TOKEN,
		{ refreshToken },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	console.log('>>> Refreshing token!')
	return response
}

let queueAuth: string | null = null

Server.interceptors.response.use(null, async err => {
	const { config, name, code, response } = err
	if (isEmpty(response)) {
		console.log(`${code} : ${name}`)
		return Promise.reject(`${code} : ${name}`)
	}
	console.log('intercept.reponse : ', response.status, config.url)

	if (response.status === 401 && config && !config.__isRetryRequest) {
		const {
			data: { state, token, refreshToken },
		} = await getAuthToken()
		if (state === STATUS_OK) {
			setAccessToken(token)
			setRefreshToken(refreshToken)

			config.__isRetryRequest = true
			config.headers.Authorization = `Bearer ${token}`
			return Server(config)
		} else {
			if (queueAuth === null || queueAuth !== token) {
				queueAuth = token
				removeAccessToken()
				removeRefreshToken()

				alert('로그인이 필요합니다')
				location.href = '/signin/login'
				setTimeout(() => {
					queueAuth = null
				}, 1000)
			}
			return Promise.reject(config.url)
		}
	} else {
		// alert('서버통신에 문제가 발생했습니다.')
		console.log(response.data.message)
		return Promise.reject(response.data.message)
	}
})

export default Server
