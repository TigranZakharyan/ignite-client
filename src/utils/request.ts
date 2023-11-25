import axios from 'axios'

const request = axios.create({
	baseURL: `${process.env.API_URL}/api`,
})

export default request