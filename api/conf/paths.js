'use strict'

require('dotenv').config()

const path = process.env.PATH

module.exports = {

    intern: {
        getDialogFlow: () => {
            return '${path}DialogFlow/message'
        }
    }
}