import { HTMLAttributes, useId } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string
}

const Input = (props: Props) => {
	const id = useId()
	return (
		<div className="mb-4">
      <label className="block text-text text-sm font-bold mb-2" htmlFor={id}>{props.label}</label>
      <input className="shadow appearance-none border rounded w-full p-4 text-text text-base leading-tight focus:outline-none focus:shadow-outline" id={id} type="text" { ...props } />
    </div>
	)
}

export default Input