import { ProfileContentLayout } from '@/layouts'
import { ScoresView } from '@/views'

const Scores = () => {
	return (
		<ProfileContentLayout 
			title="Մասնակցության պատմություն"
			emptyTitle="Ոչ մի գործունեություն"
			emptySubTitle="Դեռևս ավարտված գործունեություն չունեք ցուցադրելու համար"
		>
			<ScoresView />
		</ProfileContentLayout>
	)
}

export default Scores