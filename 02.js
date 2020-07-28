const axios = require('axios')

axios.default.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const getUserById = async id => {
    try {
        const request = await axios.get('/users/' + id)
        return request.data
    } catch(e) {
        throw Error(e.statusText)
    }
}

const getPosts = async () => {
    try {
        const request = await axios.get('/posts')
        return Promise.all(request.data
            .map(async post => { 
                post['users'] = await getUserById(post.userId) 
                return post 
            }))
                .then(posts => Promise.resolve(posts))
                .catch(err => Promise.reject(err))
    } catch(e) {
        throw Error(e)
    }
}

(async () => {
    const posts = await getPosts()
    console.log(posts);
    
})()