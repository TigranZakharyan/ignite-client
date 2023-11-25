import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
	title: string,
	emptyTitle?: string,
	emptySubTitle?: string
}

const ProfileContentLayout = (props: Props) => {
	return (
		<div className="flex h-full flex-col">
			<h2 className="my-3.5 text-2xl">{props.title}</h2>
			<div className="flex-1 shadow bg-white rounded-md p-6">
				{
					props.emptyTitle || props.emptySubTitle ? (
						<div className="h-full flex flex-col items-center justify-center text-center">
							{props.emptyTitle && <h4 className="text-2xl my-3">{props.emptyTitle}</h4>}
							{props.emptySubTitle && <p className="max-w-[300px] text-gray-light my-2">{props.emptySubTitle}</p>}
						</div>
					) : props.children
				}
			</div>
		</div>
	)
}

export default ProfileContentLayout