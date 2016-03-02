/**
 * Created by sandeepss on 19/11/15.
 */

'use strict'
let co = require('co');
let coDal = require('./../../JOS/DALNoSql');

let mongodb = require('mongodb');

exports.saveblog =  co.wrap(function*(blog) {
    try {
        let db = yield coDal.getNoSqlDB();
        //newuser._id= mongodb.ObjectID.createFromHexString(newuser._id);
        //yield db.test.update({"_id":newuser._id},newuser);
        //yield db.test.update({"_id":newuser._id},{$set: { name: "amit" }});
        //yield db.test.updateMany({},{$set: { name: "amit" }});
        //console.log(newuser);
        //yield db.test.insert(newuser);
        //yield db.test.insertMany(newuser);

            yield db.blogs.save(blog);

        //yield db.test.updateMany({},newuser,{multi:true});
        return true;
    } catch (err) {
        console.error(err.stack);
    }
});


exports.getblogs =  co.wrap(function*() {
    try {
        let db = yield coDal.getNoSqlDB();

        let blogs =   yield db.blogs.find().toArray();

        if (blogs != null) {

            return blogs;
        } else {
            blogs = {};
            return blogs;
        }

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
