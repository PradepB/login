var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
    unique:true
},
    password:String
},
{
    collection:'Admin'
});
module.exports=mongoose.model('User',UserSchema);
