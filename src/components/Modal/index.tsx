import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
	title: string,
	open: boolean,
	onClose: () => void
}

const Modal = (props: Props) => {
	return (
		<div tabIndex={-1} className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/[0.8] ${props.open ? 'flex': 'hidden'}`}>
				<div className="relative p-4 w-full max-w-md max-h-full">
						<div className="relative bg-white rounded-lg shadow p-10 dark:bg-gray-700 w-[500px]">
								<button type="button" className="absolute top-2 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={props.onClose}>
										<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
										</svg>
										<span className="sr-only">Close modal</span>
								</button>
								<h4 className="text-2xl text-center my-4">{props.title}</h4>
								{props.children}
						</div>
				</div>
		</div>
	)
}

export default Modal