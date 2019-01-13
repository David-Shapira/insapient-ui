import axios from 'axios'

let baseURL

if (process.env.NODE_ENV === 'production') {
	baseURL = `http://www.insapient.org`
}
else {
	baseURL = `http://localhost:3000`
}

export default() => {
	return axios.create({baseURL})
}
