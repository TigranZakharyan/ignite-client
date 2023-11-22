type Props = {
	large?: boolean,
	dark?: boolean
}

const ProfileImg = (props: Props) => {
	return (
		<div className={`hover:opacity-60 transition inline-block rounded-md bg-white-light p-1 ${props.large && 'p-5'} ${props.dark && `bg-text color-white-soft`}`}>
			<span className="uppercase block w-6 h-6 text-center font-bold text-xl">M</span>
		</div>
	)
}

export default ProfileImg