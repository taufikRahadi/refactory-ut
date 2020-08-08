require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const response = require('../utils/response-template')

module.exports = (req, res, next) => {
    if(req.headers['authorization'])  {
        const token = req.headers['authorization'].split(' ')[1]
        if(!token) return res.status(401).json(response('fail', 'unauthenticated'))
        
        try {
            const verify = jwt.verify(token, jwtSecret)
            if (verify) {
                req.token = token
                return next()
            }
        } catch (error) {
            return res.status(500).json(response('fail', 'failed to authenticate'))
        }
    } else {
        return res.status(403).json(response('fail', 'this endpoint need a token'))
    }
}