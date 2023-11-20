import Image from 'next/image'
import s from './style.module.css'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={`py-20 ${s.footer}`}>
			<div className='flex justify-center gap-3 my-6'>
				<Link href="/" className='relative w-10 h-10 block h-10 p-2 rounded-full bg-white'>
					<Image src="/images/vk.svg" alt="Instagram" fill className='p-2' />
				</Link>
				<Link href="/" className='relative w-10 h-10 block h-10 p-2 rounded-full bg-white'>
					<Image src="/images/inst.svg" alt="VK" fill className='p-2' />
				</Link>
			</div>
			<div className="flex justify-center gap-3 my-6">
				<Link href="/" className="hover:text-gray-light text-white transition text-xs">Մոտիվացիոն ծրագրի կանոններ</Link>
				<Link href="/" className="hover:text-gray-light text-white transition text-xs">Հետադարձ կապ</Link>
			</div>
			<div>
				<p className="text-center text-xs text-white/[0.6]">&copy; 2023 Ignite</p>
				<p className="text-center text-xs text-white/[0.6] my-1.5">Ծրագրի տևողությունը՝ 01.11.2023 – 30.11.2023</p>
			</div>
		</footer>
	)
}

export default Footer