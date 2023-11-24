import jwt from 'jsonwebtoken'

class Token {
	static sign(id: string): string {
		return jwt.sign({ id }, process.env.PRIVATE_KEY as string)
	}

	static verify(token: string) {
		return jwt.verify(token, process.env.PRIVATE_KEY as string) as { id: string }
	}
}

export default Token