import { Button, Title } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

const Participate = () => {
	return (
		<section className="container py-20 scroll-mt-[74px]" id="participate">
			<Title>ինչպես մասնակցել</Title>

			<div className="flex justify-center flex-wrap">

				{/* section 1 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<Link href="/" className="hover:opacity-70 w-24 h-24 relative">
						<Image src="/images/calc.svg" alt="Calc" fill />
					</Link>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">վաճառել</h3>
						<p className="flex-1 my-5 text-sm">IGNITE V50 սարքեր</p>
						<Button variant="transparent-dark" className="w-[328px] m-auto">միանալ</Button>
					</div>
				</div>

				{/* section 2 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<Link href="/" className="hover:opacity-70 w-24 h-24 relative">
						<Image src="/images/qr.svg" alt="Calc" fill />
					</Link>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">սնակնեք ձեր կտրոնը</h3>
						<p className="flex-1 my-5 text-sm">Պարզապես տեսախցիկի մոտ բերեք անդորրագրի QR կոդը</p>
						<Button variant="transparent-dark" className="w-[328px] m-auto">Ներբեռնեք անդորրագիրը</Button>
					</div>
				</div>

				{/* section 3 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<Link href="/" className="hover:opacity-70 w-24 h-24 relative">
						<Image src="/images/wallet.svg" alt="Calc" fill />
					</Link>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">սնացեք</h3>
						<p className="flex-1 my-5 text-sm">Պարգևատրում յուրաքանչյուր վաճառված սարքի համար և բոնուս ամսական վաճառքի ծավալի համար</p>
						<Button variant="transparent-dark" className="w-[328px] m-auto">Ծրագրի պայմաններ</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Participate