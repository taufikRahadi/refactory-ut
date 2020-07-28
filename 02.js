const axios = require('axios')
// set default baseUrl
axios.default.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const getUserById = async id => {
    // send get request to url
    const request = await axios.get('/users/' + id)
    // return response data
    return request.data
}

const getPosts = async () => {
    // make try catch to handle error
    try {
        const request = await axios.get('/posts')
        // create promise from fetched posts
        return Promise.all(request.data
            // inject user key value to post
            .map(async post => { 
                post['user'] = await getUserById(post.userId) 
                return post 
            }))
            // promise resolve send posts
                .then(posts => Promise.resolve(posts))
            // promise reject send err
                .catch(err => Promise.reject(err))
    } catch(e) {
        throw Error(e)
    }
}

(async () => {
    const posts = await getPosts()
    console.log(posts)
})()