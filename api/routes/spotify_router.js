var tic = require("../../models/spotify_model");
var express=require('express');
var router=express.Router();
var url = require("url");
var querystring = require('querystring');


router.get('/filters/search/',(req,res,next) => {
  tic.getArtistByName(req,res,function(err,result)
{
  console.log("inside")
  var final = Object.assign({status:200}, result);
  res.send(final);
})});

// router.put('/:id',(req,res,next) => {tic.updateMovie(req,res,function(err,result)
// {
//   console.log("inside")
//   var final = Object.assign({status:200}, result);
//   res.send(final);
// })});
// router.post('/',tic.insertMovie);

router.get('/',(req,res,next) => {tic.getAllArtist(req,res,function(err,result)
{
  console.log("inside")
  var final = Object.assign({status:200}, result);
  res.send(final);
})});

module.exports = router;
