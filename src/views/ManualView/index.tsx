import { Button, Input } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

const ManualView = () => {
	return (
		<section className="py-16 bg-white-light">
			<div className="max-w-[530px] w-full p-6 mx-auto bg-white rounded-md shadow">
				<h2 className="my-3.5 text-2xl text-center">Գրանցեք անդորրագիրը</h2>
				<p className="text-center text-xs text-gray-light">Մուտքագրեք անդորրագրի մանրամասները</p>
				<form className="my-6 mx-16 grid gap-y-6">
					<Input 
						label="Գնման ամսաթիվը և ժամը"
					/>
					<Input 
						label="Անդորրագրի գումարը"
						placeholder="000.00"
					/>
					<Input 
						label="ՖՍ"
						placeholder="Ֆիսկալ պահեստավորման համարը"
					/>
					<Input 
						label="ՖՏ"
						placeholder="Ֆիսկալ փաստաթղթի համարը"
					/>
					<Input 
						label="ՖՓ"
						placeholder="Փաստաթղթի ֆիսկալ նշան"
					/>
					<Button
						variant="dark"
						loading={false}
					>
						Ուղարկել
					</Button>
				</form>
				<hr />
				<Link href="/receipts" className="flex gap-4 items-center justify-center mt-6">
					<span className="group-hover:bg-gray-light transition bg-text w-8 h-8 p-1 rounded-full relative block flex items-center justify-center">
						<Image 
							src="/images/qrIcon.svg" 
							alt="QR" 
							width={32} 
							height={32} 
							className="m-1" 
						/>
					</span>
					<span>Վերադառնալ սկաներին</span>
				</Link>
			</div>
		</section>
	)
}

export default ManualView