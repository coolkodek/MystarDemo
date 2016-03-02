/**
 * Created by ajitjagtap on 12/11/15.
 */
'use strict'
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let co = require('co');

let  spaService = require('./../../services/sSpaService/spaService');

var saveblogRoute = {
    method: "POST", path: "/spa/saveblog", config: {
        auth: false,
        description: 'User signin route',
        notes: 'validate Username/password ',
        tags: ['login', 'signin']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                let blog = request.payload.blog;

                let validUser = yield spaService.saveblog(blog)
                console.log(blog);
                //Checks object is empty or not
                if(validUser)
                reply("Ok");
                else
                    reply("ERROR");
                }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });
    }
};

var getblogsRoute = {
    method: "GET", path: "/spa/getblogs", config: {
        auth: false,
        description: 'User signin route',
        notes: 'validate Username/password ',
        tags: ['login', 'signin']
    },
    handler: function(request, reply) {
        co(function* () {
            try {

                let blog = yield spaService.getblogs();
                console.log(blog);
                //Checks object is empty or not
                if(blog)
                    reply(blog);
                else
                    reply("ERROR");
            }
            catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });
    }
};


module.exports = [


    saveblogRoute,getblogsRoute

];
