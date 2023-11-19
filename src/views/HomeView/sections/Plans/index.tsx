import { SubTitle, Title } from '@/components'
import Image from 'next/image'

const Plans = () => {
	return (
		<section className="container py-20">
			<Title>ստանալ գործակցության պարգեվատիրներ ամսական վաճառքի ծավալի համար</Title>
			<SubTitle>բոնուս 40 ռուբլի վաճառված յուրաքանչուր ignite v50 սարքի համար (առնվազն 10 միավորի վաճառքի համար)*
վաճառքի ծավալի համար կոմուլատիվ բոնուս**</SubTitle>
		<div className="flex flex-wrap justify-center">
			{/* Section-1 */}
			<div className="m-8 flex-1 min-w-[245px] max-w-[250px]">
				<div className="flex justify-between items-center">
					<Image src="/images/product.png" alt="Product" width={80} height={100}/>
					<h4 className="text-7xl">&#215; 50</h4>
				</div>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">*սկսած 3000</p>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">**+ 3000</p>
				<div className="py-4 border-b-[1px] border-text">
					<span className="text-center block">amsva verj</span>
					<p className="text-3xl text-center">սկսած 3000</p>
				</div>
			</div>

			{/* Section-2 */}
			<div className="m-8 flex-1 min-w-[245px] max-w-[250px]">
				<div className="flex justify-between items-center">
					<Image src="/images/product.png" alt="Product" width={80} height={100}/>
					<h4 className="text-7xl">&#215; 50</h4>
				</div>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">*սկսած 3000</p>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">**+ 3000</p>
				<div className="py-4 border-b-[1px] border-text">
					<span className="text-center block">amsva verj</span>
					<p className="text-3xl text-center">սկսած 3000</p>
				</div>
			</div>

			{/* Section-3 */}
			<div className="m-8 flex-1 min-w-[245px] max-w-[250px]">
				<div className="flex justify-between items-center">
					<Image src="/images/product.png" alt="Product" width={80} height={100}/>
					<h4 className="text-7xl">&#215; 50</h4>
				</div>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">*սկսած 3000</p>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">**+ 3000</p>
				<div className="py-4 border-b-[1px] border-text">
					<span className="text-center block">amsva verj</span>
					<p className="text-3xl text-center">սկսած 3000</p>
				</div>
			</div>

			{/* Section-4 */}
			<div className="m-8 flex-1 min-w-[245px] max-w-[250px]">
				<div className="flex justify-between items-center">
					<Image src="/images/product.png" alt="Product" width={80} height={100}/>
					<h4 className="text-7xl">&#215; 50</h4>
				</div>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">*սկսած 3000</p>
				<p className="text-3xl text-center py-4 border-b-[1px] border-text">**+ 3000</p>
				<div className="py-4 border-b-[1px] border-text">
					<span className="text-center block">amsva verj</span>
					<p className="text-3xl text-center">սկսած 3000</p>
				</div>
			</div>
		</div>
		</section>
	)
}

export default Plans