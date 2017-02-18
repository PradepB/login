var User=require('./model/user.js');

module.exports=function(api)
{
    var session={};

////register///

    api.post('/signup',function(req,res){
    var userObject=new User();
    userObject.username=req.body.username;
    userObject.email=req.body.email;
    userObject.password=req.body.password;
    if (userObject.username && userObject.email && userObject.password ){
        User.create(userObject, function(err,data){
            if(err){
                console.log(err);
                res.send({errMessage:"already exitis"});
            }
            //  if(!data){
            //      res.send({errMessage:"try again"});       
            //  }
            if(data){
                res.send({corrMessage:"successfully login"});
            }
        });
    }
    else{
         res.send({errMessage:"missing"});            
    }
    });

////Signin////

     api.post('/signin',function(req,res){
         var userObject={};
         	userObject.email = req.body.email;
		userObject.password	 = req.body.password;
         if(userObject.email && userObject.password){
 User.findOne(userObject,function(err,foundUser){
     if(err){
         throw err;
     }    
     if(foundUser){
         session.user = foundUser;
         res.send(foundUser);
    }
 if(!foundUser){
     res.send({errMessage:"error in user id"})
 }
 });    
     }
     else{
                  res.send({errMessage:"missing"});            

     }
        
     });


api.get('/page',function(req,res){
    // if(!session.user){
    //     res.send({errMessage:"login first"});       
    // }
    // else{
        res.send(session.user);
    // }
})
}
