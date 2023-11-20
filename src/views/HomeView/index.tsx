import { Banner, Bonuses, Participate, Plans, Questions } from './sections'
import s from './style.module.css'
const HomeView = () => {
	return (
		<main className={s.main}>
			<Banner />
			<Participate />
			<Questions />
			<Plans />
			<Bonuses />
		</main>
	)
}

export default HomeView