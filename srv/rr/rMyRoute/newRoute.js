/**
 * Created by ajitjagtap on 12/11/15.
 */
'use strict'
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let co = require('co');

let  newservice = require('./../../services/myService/newService');

let newRoute = {
    method: 'GET', path: '/newRoute/getusers',
    config: {
        auth: false,
        description: 'my route description',
        notes: 'Important stuff to know about this route',
        tags : ['users']
    },
    handler: function (request, reply) {

        co(function* () {
            try {


                let validUser = yield newservice.getusers();

                reply(validUser);
                }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });


    }
};

let newRoute2 = {
    method: 'POST', path: '/newRoute2/adduser',
    config: {
        auth: false,
        description: 'my route description',
        notes: 'Important stuff to know about this route',
        tags : ['users']
    },
    handler: function (request, reply) {

        co(function* () {
            try {

                let user = request.payload.user;

                console.log(user);

                let status = yield newservice.saveuser(user);
                if(status)
                    reply("ok");
                else
                    reply("Error");
            }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });


    }
};


let newRoute3 = {
    method: 'POST', path: '/newRoute3/additems',
    config: {
        auth: false,
        description: 'my route description',
        notes: 'Important stuff to know about this route',
        tags : ['users']
    },
    handler: function (request, reply) {

        co(function* () {
            try {

                let data = request.payload.data;

                console.log(data);

                let status = yield newservice.synchdata(data);
                if(status)
                    reply("true");
                else
                    reply("false");
            }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });


    }
};

let newRoute4 = {
    method: 'POST', path: '/newRoute4/deleteitem',
    config: {
        auth: false,
        description: 'my route description',
        notes: 'Important stuff to know about this route',
        tags : ['users']
    },
    handler: function (request, reply) {

        co(function* () {
            try {

                let id = request.payload.id;

                console.log(id);

                let status = yield newservice.deleteitem(id);
                if(status)
                    reply("true");
                else
                    reply("false");
            }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });


    }
};


module.exports = [

    newRoute,newRoute2,newRoute3,newRoute4


];
