/**
 * Created by sandeepss on 19/11/15.
 */

'use strict'
let co = require('co');
let coDal = require('./../../JOS/DALNoSql');

let mongodb = require('mongodb');



exports.getperson =  co.wrap(function*() {
    try {
        let db = yield coDal.getNoSqlDB();

        let dbUser = yield db.Persons.find().toArray();
        if (dbUser != null) {

            return dbUser;
        } else {
            dbUser = {};
            return dbUser;
        }
    } catch (err) {
        console.error(err.stack);
    }
});