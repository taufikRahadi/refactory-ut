const axios = require('axios')

axios.default.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const getUserById = async id => {
    const request = await axios.get('/users/' + id)
    return request.data
}

const getPosts = async () => {
    try {
        const request = await axios.get('/posts')
        return Promise.all(request.data
            .map(async post => { 
                post['user'] = await getUserById(post.userId) 
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