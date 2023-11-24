'use client'
import { Button, Title } from '@/components'
import { ModalsContext } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const Participate = () => {
	const { updateModals } = useContext(ModalsContext)

	const openLogin = () => {
		updateModals({login: true})
	}

	return (
		<section className="container py-20" id="participate">
			<Title>ինչպես մասնակցել</Title>

			<div className="flex justify-center flex-wrap">

				{/* section 1 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<button 
						onClick={openLogin}
						className="hover:opacity-70 w-24 h-24 relative"
					>
						<Image src="/images/calc.svg" alt="Calc" fill />
					</button>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">վաճառել</h3>
						<p className="flex-1 my-5 text-sm">IGNITE V50 սարքեր</p>
						<Button 
							variant="transparent-dark" 
							className="w-[328px] m-auto" 
							onClick={openLogin}
						>միանալ</Button>
					</div>
				</div>

				{/* section 2 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<Link href="/receipts" className="hover:opacity-70 w-24 h-24 relative">
						<Image src="/images/qr.svg" alt="Calc" fill />
					</Link>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">սնակնեք ձեր կտրոնը</h3>
						<p className="flex-1 my-5 text-sm">Պարզապես տեսախցիկի մոտ բերեք անդորրագրի QR կոդը</p>
						<Link href="/receipts">
							<Button variant="transparent-dark" className="w-[328px] m-auto">Ներբեռնեք անդորրագիրը</Button>
						</Link>
					</div>
				</div>

				{/* section 3 */}
				<div className="flex max-w-[360px] flex-1 flex-col items-center p-2">
					<Link href="#plans" className="hover:opacity-70 w-24 h-24 relative">
						<Image src="/images/wallet.svg" alt="Calc" fill />
					</Link>
					<div className="w-full flex flex-1 flex-col text-center">
						<h3 className="uppercase text-2xl my-3">սնացեք</h3>
						<p className="flex-1 my-5 text-sm">Պարգևատրում յուրաքանչյուր վաճառված սարքի համար և բոնուս ամսական վաճառքի ծավալի համար</p>
						<Link href="#plans">
							<Button variant="transparent-dark" className="w-[328px] m-auto">Ծրագրի պայմաններ</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Participate