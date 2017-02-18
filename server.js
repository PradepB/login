var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongoose=require('mongoose');
var url='mongodb://localhost/userdata';
var api= require('./app/api.js')(app);

 
module.exports=mongoose.connect(url,function(err){
	if(err){
		console.log(err);
			}
			console.log('database is connected');
});


app.use(express.static(__dirname +'/ui'));


app.listen(3008);
console.log('app running in 3008');