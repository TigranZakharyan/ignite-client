type Props = React.HTMLAttributes<HTMLButtonElement> & {
	variant?: 'transparent' | 'transparent-dark' | 'light' | 'dark'
}

const Button = (props: Props) => {
	return (
		<button {...props} className={`
			py-4 px-12 rounded-lg transition text-base capitalize
			${props.variant === 'transparent' ? 'hover:text-gray-light hover:border-gray-light border-2 border-white text-white' : ''}
			${props.variant === 'transparent-dark' ? 'hover:text-gray-light hover:border-gray-light border-2 border-text text-text': ''}
			${props.variant === 'light' ? 'hover:bg-white/[0.7] bg-white text-text' : ''}
			${props.variant === 'dark' ? 'hover:bg-text/[0.7] bg-text text-white' : ''}
			${props.className}
		`}>
			{props.children}
		</button>
	)
}

export default Button