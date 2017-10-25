'use strict'
require('dotenv').config()
import fetch from 'node-fetch'
import Paths from '../conf/paths'
import Boom from 'boom'

exports.DialogFlow = (request, reply) => {
    console.log(request.params.text)
    const text = encodeURIComponent(request.params.text)
    fetch(Paths.extern.apiai(text), {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.APIAI_TOKEN}`
        } })
    .then(res => res.json())
    .then(json => {
        const res = {
            message: json.result.fulfillment.speech
        }
        reply(res)
    })
    .catch(err => console.log(err))
}