'use strict'

import dialogFlowService from '../controllers/DialogFlowController'
import paths from '../conf/paths'
import Joi from 'joi'

module.exports = (server) => {
    server.route({
        method: 'GET',
        path : paths.intern.getDialogFlow,
        config: {
            tags: ['api'],
            validate: {
                params: {
                    text: Joi.string().min(1).required().description("message")
                }
            },
            handler: dialogFlowService.DialogFlow
        }
    })
}