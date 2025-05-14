import { isEmptyString, SRC_COMM, SRC_CHILD, SRC_CLOUD } from '@/shared'

const _ = ({ src }: any) => {
	const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		;(e.target as any).onerror = null
		;(e.target as HTMLInputElement).src = '/images/no-image.svg'
	}

	if (isEmptyString(src) || SRC_COMM === src || SRC_CHILD === src || SRC_CLOUD === src || `${SRC_COMM}undefined` === src || `${SRC_CHILD}undefined` === src || `${SRC_CLOUD}undefined` === src) {
		return <img src='/images/no-image.svg' alt='' />
	}
	return <img src={src} onError={onError} alt='' />
}

export default _
