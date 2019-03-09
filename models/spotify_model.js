var request = require('request');
var dbHelper = require("../models/databaseHelper");
var url = require('url');

 exports.getAllArtist = function(req,res)
 {
	 var connection = dbHelper.getConnection();
	 var z = (req.url).split('/');
	 var ee=parseInt(z[1]);
	 console.log(z);
	 console.log(req.url);
	 connection.query("select * from spotify",function(err,result){
		 console.log(result);
		 if(err)
		 {
			 res.statusCode = 400;
			 res.message = "error in  getting";
			 res.send(err);
		 }
		 else {
			 res.statusCode = 200;
 			res.message = "successful";
 			res.send(result);
		 }
	 });
 };

  exports.getArtistByName = function(req,res)
  {
 	 var connection = dbHelper.getConnection();
   console.log("*************************************");
   var names = req.query.name;
   console.log(req.query.name);
   console.log(req.url.toString());
 	 connection.query("select * from spotify where name= ?",[names],function(err,result){
     console.log(names);
 		 console.log(result);
     console.log(err);
 		 if(err)
 		 {
 			 res.statusCode = 400;
 			 res.message = "error in  getting";
 			 res.send(err);
 		 }
 		 else {
 			 res.statusCode = 200;
  			res.message = "successful";
  			res.send(result);
 		 }
 	 });
  };


// exports.insertArtist = function(req,res)
//  { getArtistByName
//
// 	 var connection = dbHelper.getConnection();
// 	connection.query("insert into spotify  set ?",req.body,
//     function(err, result){
// 			console.log(err)
// 			if(err){
// 			res.statusCode = 400;
// 			res.message = "Error in query";
// 			res.send(err);
// 		}
// 		else{
// 			connection.query("select * from spotify where id=?",[result.insertId],function(err1,result1){
// 	 		 if(err)
// 	 		 {
// 	 			 res.statusCode = 400;
// 	 			 res.message = "error in  getting";
// 	 			 res.send(err1);
// 	 		 }
// 	 		 else {
// 	 			 res.statusCode = 200;
// 	  			res.message = "successful";
// 	  			res.send(result1);
// 	 		 }
// 	 	 });
// 		}
// 	});
//  };
//
//  exports.updateArtist = function(req,res,callback)
//  {
// 	 var connection = dbHelper.getConnection();
// 	 var z=(req.url).split('/');
// 	 var ee=parseInt(z[1]);
// connection.query("update spotify set name=? where id=?",[req.body.name,ee],
//  			function(err,result){
// 				if(err)
// 				{
// 					res.statusCode = 400;
// 					 res.message = "error in update";
// 					 res.send(err);
// 				}
// 				else
// 					{
// 						connection.query("select * from spotify where id=?",[ee],function(err1,result1){
// 				 		 if(err)
// 				 		 {
// 				 			 res.statusCode = 400;
// 				 			 res.message = "error in  getting";
// 				 			 res.send(err1);
// 				 		 }
// 				 		 else {
// 				 			return callback(null,result1);
// 				 		 }
// 				 	 })
//
// 				}
// 			});
//  };
//
//  exports.getArtist = function(req,res)
//  {
// 	 var connection = dbHelper.getConnection();
// 	 var z = (req.url).split('/');
// 	 var ee=parseInt(z[1]);
// 	 console.log(z);
// 	 console.log(req.url);
// 	 connection.query("select * from spotify where id=?",[ee],function(err,result){
// 		 console.log(result);
// 		 if(err)
// 		 {
// 			 res.statusCode = 400;
// 			 res.message = "error in  getting";
// 			 res.send(err);
// 		 }
// 		 else {
// 			 res.statusCode = 200;
//  			res.message = "successful";
//  			res.send(result);
// 		 }
// 	 });
//  };
