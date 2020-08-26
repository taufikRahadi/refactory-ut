import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

const fetch = async endpoints => {
    try {
        const { data } = await axios.get(endpoints)
        return data
    } catch (err) {
        throw new Error(err.response.message)
    }
}

export default fetch
