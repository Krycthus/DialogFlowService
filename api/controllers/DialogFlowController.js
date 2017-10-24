'use strict'

import fetch from 'node-fetch'
import Paths from '../conf/paths'
const apiaiApp = require('apiai')(process.env.APIAI_TOKEN)

exports.DialogFlow = (resquest, reply) => {
    getMessage(reply)
}


const getMessage = (event) => {
    let sender = event.sender.id;
    let text = event.message.text;

    let apiai = apiaiApp.textRequest(text, {
        sessionId: 'Webservice-Bot'
    });

    apiai.on('response', (response) => {

        let aiText = response.result.fulfillment.speech;
        var json = {
            recipient: {id: sender},
            message: {text: aiText}
        }
    });

    apiai.on('error', (error) => {
        console.log(error);
    });
    
    apiai.end
}