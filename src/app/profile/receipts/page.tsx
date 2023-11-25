import { ProfileContentLayout } from '@/layouts'
import { ProfileReceiptsView } from '@/views'

const Receipts = () => {
	return (
		<ProfileContentLayout 
			title="Ստացման պատմություն: 0"
			emptyTitle="Տվյալներ չկան"
			emptySubTitle="Դուք դեռ չունեք անդորրագրեր ցուցադրելու համար"
		>
			<ProfileReceiptsView />
		</ProfileContentLayout>
	)
}

export default Receipts