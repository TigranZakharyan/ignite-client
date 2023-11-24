class LocalStorage {
	static saveToken(token: string): void {
		localStorage.setItem("token", token)
	}
	static getToken(): string | null {
		return localStorage.getItem("token")
	}
}

export default LocalStorage