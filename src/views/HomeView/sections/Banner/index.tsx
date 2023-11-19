import Image from 'next/image'
import s from './style.module.css'
import { Button } from '@/components'

const Banner = () => {
	return (
		<section className="relative pt-[74px] bg-text">
			<video src="/videos/banner.mp4" autoPlay muted className={`lg:absolute md:w-full md:h-auto h-screen z-0 object-cover ${s.bg}`} />

			<div className="h-full container pt-8 pb-20 flex flex-col items-center justify-center align-center relative z-10">
				<div className="h-[365px] w-[365px] relative">
					<Image src="/images/logo-v2.svg" alt="Ignite" fill />
				</div>
				<div className="my-3 text-center text-white text-4xl uppercase">
					<h1>քո կյանքը: քո ուղին:</h1>
					<h4 className="mt-5">քո եկամուտը:</h4>
				</div>
				<div className="mt-10 text-white text-center">
					<p>Ներբեռնեք IGNITE վաճառքի անդորրագրերը և վաստակեք միավորներ</p>
					<p className="mt-3">և ստացեք դրամական պարգևներ</p>
				</div>
				<div className="flex flex-wrap justify-center gap-x-8 gap-y-6 my-12">
					<Button variant="light">Միանալ</Button>
					<Button variant="transparent">Ավելի մանրամասն</Button>
				</div>
			</div>
		</section>
	)
}

export default Banner