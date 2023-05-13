var express = require('express');
var router =  express.Router();

router.get('/get-test',function(req,res){
    res.send('my name is sachin,my hobbies is batting')
})
//query parameter

router.get('/test-query',function(req,res,next){
   const n= req.query.name
  const h = req.query.hobbies
  res.send(`my name is ${n},my hobbies is ${h}`)
})
//path parameter

router.patch('/test-path/:name/:hobbies',function(req,res,next){
    const n= req.params.name
   const h = req.params.hobbies
   res.send(`my name is ${n},my hobbies is ${h}`)
 })

 //request header

router.put('/test-headers',function(req,res,next){
    const n= req.headers.name
   const h = req.headers.hobbies
   res.send(`my name is ${n},my hobbies is ${h}`)
 })

  //request body

router.post('/test-post',function(req,res,next){
    const n= req.body.name
   const h = req.body.hobbies
   res.send(`my name is ${n},my hobbies is ${h}`)
 })

module.exports = router
