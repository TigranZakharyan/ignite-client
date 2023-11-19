import { PropsWithChildren } from 'react'

const Title = ({children}: PropsWithChildren) => {
	return <h2 className="uppercase text-center text-4xl my-3.5">{children}</h2>
}

export default Title