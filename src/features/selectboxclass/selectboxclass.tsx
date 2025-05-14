import { Button } from '@/entities'
import { isRightsAdmin, userStore } from '@/shared'

const _ = ({ data, setFunc, disabled }: any) => {
	const { user } = userStore()
	return (
		<Button className='btn-select' disabled={disabled} onClick={() => isRightsAdmin(user?.rights) && setFunc(true)}>
			<span>{data?.name}</span>
			{isRightsAdmin(user?.rights) && <em>({data?.total})</em>}
		</Button>
	)
}

export default _
