class Controller {
    constructor(model) {
        this.model = model
    }

    async index(payload) {
        try {
            const data = this.model.findAll(payload)
            return this.response('success', 'data fetched', data)
        } catch (err) {
            return this.response('fail', err)
        }
    }

    response(status, message, data) {
        return {
            status,
            message,
            data
        }
    }
}

module.exports = Controller
