var express = require('express');
var router =  express.Router();
var mongodb = require('mongodb') 

router.post('/save-que', async function(req,res){
    try{
        const dataObj =req.body.data
        // const url = "mongodb://127.0.0.1:27017"
        const url= "mongodb+srv://brahmap07:Brahmi@brahmi-first-react.c3qw88l.mongodb.net/"
        const mongodbClient = mongodb.MongoClient
        const server = await mongodbClient.connect(url)
        const db = server.db('school')
        const collection = db.collection('questions')

        const result = await collection.insertOne(dataObj)

        res.send(dataObj)

    }catch(e){
        console.log(e)
        res.send(e)
    }

})

module.exports = router