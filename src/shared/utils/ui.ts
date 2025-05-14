export function zeroFill(n: any, width: any) {
	n = n + ''
	return n.length >= width ? n : new Array(width - n.length + 1).join(String(0)) + n
}

export function formatBytes(bytes: any, decimals = 2) {
	if (bytes === 0) return '0'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))
	const v = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
	return Math.round(v / 5) * 5 + sizes[i]
}

export function dateFormat(date: any) {
	let month = date.getMonth() + 1
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	month = month >= 10 ? month : '0' + month
	day = day >= 10 ? day : '0' + day
	hour = hour >= 10 ? hour : '0' + hour
	minute = minute >= 10 ? minute : '0' + minute
	second = second >= 10 ? second : '0' + second

	return date.getFullYear() + '.' + month + '.' + day + ' ' + hour + ':' + minute + ':' + second
}

export function gnbOpen() {
	document.documentElement.scrollTop = 0
	setTimeout(function () {
		document.body.classList.add('open-gnb')
	}, 300)
	;(document.querySelector('.outer-wrap') as HTMLInputElement).classList.add('open-gnb')
	;(document.querySelector('.gnb-wrap') as HTMLInputElement).style.display = 'block'
	;(document.querySelector('.gnb-wrap .gnb-content') as HTMLInputElement).scrollTop = 0

	const gnbWrap = document.querySelector('.gnb-wrap') as HTMLInputElement
	if (gnbWrap?.style !== undefined) {
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '0'
	}
}

export function gnbClose() {
	const gnbWrap = document.querySelector('.gnb-wrap') as HTMLInputElement
	if (gnbWrap?.style !== undefined) {
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '-100%'
	}

	setTimeout(function () {
		if (gnbWrap?.style !== undefined) {
			gnbWrap.style.display = 'none'
		}
		document.documentElement.classList.remove('open-gnb')
		document.body.classList.remove('open-gnb')
		;(document.querySelector('.outer-wrap') as HTMLInputElement).classList.remove('open-gnb')
	}, 300)
}

export function scrollCheck() {
	var lastScrollTop = 0
	const wrap = document.querySelector('.wrap') as HTMLDivElement
	const floatingmenu = document.querySelector('.floating-menu') as HTMLDivElement
	wrap.classList.remove('noscroll')

	if (document.documentElement.scrollHeight <= window.innerHeight) {
		wrap.classList.add('noscroll')
		return
	}

	window.addEventListener('scroll', function () {
		var wH = window.innerHeight,
			sT = window.pageYOffset || document.documentElement.scrollTop

		if (sT + window.innerHeight >= document.body.scrollHeight) return

		if (sT >= 5 && sT >= lastScrollTop) {
			document.body.classList.add('scroll-down')
			document.body.classList.remove('scroll-up')
			floatingmenu.classList.add('on')
		} else if (sT <= 0) {
			document.body.classList.remove('scroll-up', 'scroll-down')
			floatingmenu.classList.remove('on')
		} else {
			document.body.classList.add('scroll-up')
			document.body.classList.remove('scroll-down')
			floatingmenu.classList.add('on')
		}

		lastScrollTop = sT
	})

	window.dispatchEvent(new Event('scroll'))
}
