class Auth
{
    constructor()
    {
        this.token = ""
        this.user = [
            {
                id: 1,
                username: 'root',
                password: 'secret',
                last_login: new Date().toLocaleString()
            },
            {
                id: 2,
                username: 'admin',
                password: '4dm1n',
                last_login: new Date().toLocaleString()
            }
        ]
    }

    generateToken()
    {
        return [...Array(32)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
    }

    setToken(token)
    {
        this.token = token
        return this
    }

    getToken()
    {
        return this.token
    }

    getUser()
    {
        return this.user
    }

    getLoggedInUser(token, id)
    {
        if(token === this.getToken()) {
            return this.getUser().filter(user => user.id === id)[0]
        } 

        return "unauthenticated"
    }

    getLastLoggedIn(id)
    {
        return this.getUser().filter(user => id === user.id)[0].last_login
    }

    check(token)
    {
        return (token === this.getToken())
    }

    validate(payload)
    {
        
    }

    removeToken(token)
    {
        if(token === this.getToken()) {
            return this.setToken("")
        }
    }

    guest()
    {
        if(!this.getToken()) {
            return true
        }

        return "anda sudah login"
    }

    validate(payload)
    {
        const user = this.getUser().filter(user => user.username === payload.username)[0]
        return user ? true : false
    }

    login(payload)
    {
        const userNow = this.getUser().filter(user => user.username === payload.username)[0]
        if(userNow != 0) {
            if(payload.password === userNow.password) {
                const token = this.generateToken()

                return {
                    token: this.setToken(token).getToken(),
                    user: userNow,
                    status: 'login'
                }

            }
             else {
                 return "Wrong Passworrd"
             }
        }

        return "Unauthenticated"
    }

    logout(token)
    {
        if(token === this.getToken()) {
            this.removeToken(token)
            return "logout success"
        }

        return "Unauthenticated"
    }
}

const auth = new Auth()

const payload = {
    username: 'root',
    password: 'secret'
}
const validate = auth.validate(payload)
console.log(validate)

const userLogin = auth.login(payload)
const userData = auth.getLoggedInUser(userLogin.token, userLogin.user.id)
const isLoggedIn = auth.check(userLogin.token)
const logout = auth.logout(userLogin.token)
const guest = auth.guest()

console.log(userLogin)
setTimeout(() => {
    console.log(isLoggedIn)
}, 2000);

setTimeout(() => {
    console.log(auth.getLastLoggedIn(userLogin.user.id))
}, 2000);

setTimeout(() => {
    console.log(userData)
}, 4000);

setTimeout(() => {
    console.log(logout)
}, 6000);

setTimeout(() => {
    console.log(guest)
}, 8000);