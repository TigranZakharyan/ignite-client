import { Banner, Bonuses, Participate, Plans, Questions } from './sections'
const HomeView = () => {
	return (
		<main className="[&>*]:scroll-mt-header">
			<Banner />
			<Participate />
			<Questions />
			<Plans />
			<Bonuses />
		</main>
	)
}

export default HomeView