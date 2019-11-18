import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

import './database'

class App {
    constructor() {
        this.server = express()

        this.middleware()
        this.routes()
    }

    middleware() {
        this.server.use(express.json(), bodyParser.json(), (req, res, next) => {
            const origin = req.get('origin')
            res.header('Access-Control-Allow-Origin', origin)
            res.header('Access-Control-Allow-Credentials', true)
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma'
            )
            next()
        })
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server
