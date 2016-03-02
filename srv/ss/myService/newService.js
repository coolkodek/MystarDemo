/**
 * Created by sandeepss on 19/11/15.
 */

'use strict'
let co = require('co');
let coDal = require('./../../JOS/DALNoSql');

let mongodb = require('mongodb');



exports.getusers =  co.wrap(function*() {
    try {
        let db = yield coDal.getNoSqlDB();

        let dbUser = yield db.test.find().toArray();
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

exports.saveuser =  co.wrap(function*(newuser) {
    try {
        let db = yield coDal.getNoSqlDB();
        //newuser._id= mongodb.ObjectID.createFromHexString(newuser._id);
        //yield db.test.update({"_id":newuser._id},newuser);
        //yield db.test.update({"_id":newuser._id},{$set: { name: "amit" }});
        //yield db.test.updateMany({},{$set: { name: "amit" }});
        //console.log(newuser);
        //yield db.test.insert(newuser);
        //yield db.test.insertMany(newuser);
        for (let i =0;i<newuser.length ;i++)
        {
            yield db.test.save(newuser[i]);
        }
        //yield db.test.updateMany({},newuser,{multi:true});
        return true;
    } catch (err) {
        console.error(err.stack);
    }
});



exports.synchdata =  co.wrap(function*(data) {
    try {
        let db = yield coDal.getNoSqlDB();

        for (let i =0;i<data.length ;i++)
        {
            yield db.Items.save(data[i]);
        }
        return true;
    } catch (err) {
        console.error(err.stack);
    }
});


exports.deleteitem =  co.wrap(function*(id) {
    try {
        let db = yield coDal.getNoSqlDB();
        yield db.Items.remove({"_id":id});

        return true;
    } catch (err) {
        console.error(err.stack);
    }
});
