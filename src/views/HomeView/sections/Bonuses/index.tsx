import { Title } from '@/components'
import Image from 'next/image'

const Bonuses  = () => {
	return (
		<section className="container py-20">
			<Title>ինչպես ծախսել միավորները</Title>
			<div className="flex flex-wrap justify-center">
				<div className="p-3">
					<Image src="/images/bonus1.webp" alt="Bonus" width={407} height={407} />
					<h5 className="text-center break-words text-2xl py-2 max-w-[407px] px-3">Դրամական միջոցների դուրսբերում բանկային քարտի վրա</h5>
				</div>
				<div className="p-3">
					<Image src="/images/bonus2.webp" alt="Bonus" width={407} height={407} />
					<h5 className="text-center break-words text-2xl py-2 max-w-[407px] px-3">Գումարների դուրսբերում բջջային համարին</h5>
				</div>
			</div>
		</section>
	)
}

export default Bonuses