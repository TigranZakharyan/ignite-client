import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
	title: string,
	subTitle?: string,
	open: boolean,
	onClose?: () => void
}

const Modal = (props: Props) => {
	return (
		<div tabIndex={-1} className={`overflow-y-auto overflow-x-hidden fixed p-4 z-50 w-full min-h-full inset-0 bg-black/[0.8] ${props.open ? 'block': 'hidden'}`}>
				<div className="relative w-full min-h-full flex justify-center items-center">
						<div className="relative bg-white rounded-lg shadow p-10 dark:bg-gray-700 max-w-[500px] w-full mx-auto">
								{
									props?.onClose && (
										<button type="button" className="absolute top-2 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={props.onClose}>
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">Close modal</span>
									</button>
									)
								}
								<h4 className="text-2xl text-center my-4">{props.title}</h4>
								{
									props?.subTitle && <p className="text-center text-gray-light text-sm mb-4">{props.subTitle}</p>
								}
								{props.children}
						</div>
				</div>
		</div>
	)
}

export default Modal