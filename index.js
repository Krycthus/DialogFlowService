'use strict'

import Hapi from 'hapi'
//import Db from './src/api/conf/db'
import routes from './api/routes/routes'
import swaggered from 'hapi-swaggered'
import swaggeredUI from 'hapi-swaggered-ui'
import vision from 'vision'
import inert from 'inert'

require('dotenv').config()

if (!process.env.APIAI_TOKEN && !process.env.BASE_PATH) {
  throw 'Make sure you defined BASE_PATH and APIAI_TOKEN in your .env file'
}

const server = new Hapi.Server();
//server.connection({ port: 4003, host: '88.161.155.93', routes: { cors: true }, labels: ['api'] })
server.connection({ port: 4003, host: 'localhost', routes: { cors: true }, labels: ['api'] })

server.register([
    vision,
    inert,
    {
        register: swaggered,
        options: {
            info: {
                title: 'DialogFlow API',
                description: 'API documentation for DialogFlow API',
                version: '1.0'
            }
        }
    },
    {
        register: swaggeredUI,
        options: {
            title: 'DialogFlow API',
            path: '/docs',
            swaggerOptions: {}
        }
    }
], {
    select: 'api'
}, (err) => { if (err) { throw err } })

routes(server)

server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})