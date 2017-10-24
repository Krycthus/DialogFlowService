'use strict'

require('dotenv').config()

const path = process.env.BASE_PATH
const sessionId = process.env.SESSIONID

module.exports = {

    extern: {
        apiai: (text) => {
            return `https://api.dialogflow.com/v1/query?v=20170712&query=${text}&lang=fr&sessionId=${sessionId}&timezone=CET`
        }
    },

    intern: {
        getDialogFlow: `${path}DialogFlow/message/{text}`
    }
}