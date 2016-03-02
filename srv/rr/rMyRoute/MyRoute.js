/**
 * Created by ajitjagtap on 12/11/15.
 */
'use strict'
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let co = require('co');

let  myservice = require('./../../services/myService/myService');
let myRoute = {
    method: 'GET', path: '/myRoute/Home',
    config: {
        auth: false,
        description: 'this is secure webservice for mkcl',
        notes: 'gives you userdata ',
        tags : ['users']
    },
    handler: function (request, reply) {

        co(function* () {
            try {


                let validUser = yield myservice.getperson();

                reply(validUser);
                }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });


    }
};



module.exports = [

    myRoute


];
