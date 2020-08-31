import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1/'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use(
    (config) => {
        console.log(config)
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error) 
)

export default instance
