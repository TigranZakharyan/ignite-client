import { PropsWithChildren } from 'react'

const SubTitle = ({children}: PropsWithChildren) => {
	return <h3 className="uppercase text-center text-xl">{children}</h3>
}

export default SubTitle