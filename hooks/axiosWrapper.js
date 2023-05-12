import axios from 'axios'

const AxiosWrapper = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

AxiosWrapper.defaults.headers.post['Content-Type'] = 'application/json'

export default AxiosWrapper
