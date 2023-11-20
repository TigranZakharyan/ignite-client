import { Button, Title } from '@/components'
import { Dropdown } from './ui'
import { questions } from '@/data'

const Questions = () => {
	return (
		<section className="py-20 bg-white-soft" id="questions">
			<div className="container">
				<Title>ինչպես մասնակցել</Title>
				<div className="my-8">
					{
						questions.map((e) => <Dropdown {...e} key={e.number} />)
					}
				</div>
				<Button variant="dark" className="mx-auto block">Հարց տալ</Button>
			</div>
		</section>
	)
}

export default Questions