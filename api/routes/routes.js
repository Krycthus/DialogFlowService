'use strict'

import dialogFlowService from '../controllers/DialogFlowController'
import paths from '../conf/paths'
import Joi from 'joi'

module.exports = (server) => {
    server.route({
        method: 'GET',
        path : paths.intern.getDialogFlow(),
        handler: dialogFlowService.DialogFlow,
        config: {
            tag: ['api']
        }
    })
}