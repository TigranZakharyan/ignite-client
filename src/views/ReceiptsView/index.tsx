import Image from 'next/image'

const ReceiptsView = () => {
	return (
		<main className="bg-[#eee] sm:py-16 pb-16 flex justify-center">
			<section className="w-full max-w-[540px] p-6 bg-white rounded shadow sm:mx-4">
				<h3 className="text-3xl text-center my-3.5">Կտրոնի գրանում</h3>
				<span className="text-sm text-gray-light text-center block">Ուղղեք ձեր տեսախցիկը անդորրագրի QR կոդի վրա</span>
				<div className="w-full h-[440px] bg-black rounded my-4 relative flex items-center justify-center">
					<button className="group">
						<Image 
							src="/images/power.webp" 
							alt="Camera" 
							width={32} 
							height={32} 
							className="group-hover:bg-gray-light bg-white p-1 rounded-full mx-auto" 
						/>
						<span className="group-hover:text-gray-light transition text-center text-white text-xs mt-4 block">Միացնել տեսախցիկը</span>
					</button>
				</div>
				<div className="flex justify-center">
					<button className="group border-r-[1px] px-4 border-white-soft">
						<span className="group-hover:bg-gray-light transition bg-text w-8 h-8 p-1 rounded-full relative block mx-auto flex items-center justify-center">
							<Image 
								src="/images/pen.svg" 
								alt="Camera" 
								width={32} 
								height={32} 
								className="m-1" 
							/>
						</span>
						<span className="group-hover:text-gray-light transition max-w-[160px] text-center text-text text-xs py-4 block">Մուտքագրեք ստուգման մանրամասները ձեռքով</span>
					</button>

					<button className="group px-4">
						<span className="group-hover:bg-gray-light transition bg-text w-8 h-8 p-1 rounded-full relative block mx-auto flex items-center justify-center">
							<Image 
								src="/images/bill.svg" 
								alt="Camera" 
								width={32} 
								height={32} 
								className="m-1" 
							/>
						</span>
						<span className="group-hover:text-gray-light transition max-w-[160px] text-center text-text text-xs py-4 block">Ներբեռնեք լուսանկար</span>
					</button>
				</div>
			</section>
		</main>
	)
}

export default ReceiptsView