import { ProfileImg } from '@/components'
import Link from 'next/link'

const SideBar = () => {
	return (
		<section className="w-[290px] bg-white rounded-md shadow my-7">
			<div className="pl-6 pt-6 pr-6 mb-8">
				<ProfileImg large />
				<h4 className="my-3 text-xl">Michael Jackson</h4>
			</div>
			<nav>
				<ul>
					<li className="px-6 py-3 border-t-[1px] border-light-white cursor-pointer">
						<Link href="/" className="text-sm">hello</Link>
					</li>
					<li className="px-6 py-3 border-t-[1px] border-light-white cursor-pointer">
						<Link href="/" className="text-sm">hello</Link>
					</li>
					<li className="px-6 py-3 border-t-[1px] border-light-white cursor-pointer">
						<Link href="/" className="text-sm">hello</Link>
					</li>
					<li className="px-6 py-3 border-t-[1px] border-light-white cursor-pointer">
						<Link href="/" className="text-sm">hello</Link>
					</li>
					<li className="px-6 py-3 border-t-[1px] border-light-white cursor-pointer">
						<Link href="/" className="text-sm">hello</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default SideBar