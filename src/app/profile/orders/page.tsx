import { ProfileContentLayout } from '@/layouts'
import { OrdersView } from '@/views'

const Orders = () => {
	return (
		<ProfileContentLayout 
			title="Մրցանակների պատվերներ"
			emptyTitle="Տվյալներ չկան"
			emptySubTitle="Դուք դեռ ցուցադրելու պատվերներ չունեք"
		>
			<OrdersView />
		</ProfileContentLayout>
	)
}

export default Orders