var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.config(function($routeProvider,$locationProvider){
     $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'../views/index.html'
    }).when('/signin',{
        templateUrl:'../views/login.html'
    }).when('/signup',{
        templateUrl:'../views/register.html'
    }).when('/page',{
        templateUrl:'../views/page.html',
        controller:'logincontroller'
    }).when('/reset',{
		templateUrl:'../views/reset.html'
	}).otherwise({
        redirectTo:'/'
    });

});

mainApp.controller('logincontroller' , function($scope,$http,$location,$window){


	$scope.getUser = function(){
		
		$http.get('http://localhost:3008/page').then(function(response){
		
				console.log(response.data.username);
				$scope.username = response.data.username;

			// if(response.data.errMessage){
			// 	window.location.href="#/signin"
			// }
		},function(response){
			console.log('some errors');
		});
	}



//adduser///

//  $scope.useGet = function(){
//    $http.get('http://localhost:3008/page').then (function success(response){
//         console.log("got data  req");
//                 console.log(response.data);

//         $scope.name  = response.data;
//    },function(response){
// 			console.log('some errors');
// 		});

//  }


////user///

	$scope.addUser = function(){
		$scope.username;
			$scope.email;
			$scope.password;
			$scope.cpassword;
			$scope.errorMessage;
			if ( $scope.username &&  $scope.email && $scope.password && $scope.cpassword && ($scope.password === $scope.cpassword )) {
				var user = {username:$scope.username,email:$scope.email,password:$scope.password};
				$http.post('http://localhost:3008/signup',user).then(function(response)
				{
					if (response.data.corrMessage) {
						window.location.href='#/signin';	
					}
					if (response.data.errMessage) {
						$scope.errorMessage = response.data.errMessage;
					}
				},function(response){
						$scope.errorMessage = "error ";
					});
				
			}
			else{
				$scope.errorMessage = response.data.errMessage;
			}
	}

$scope.loginuser=function(){
$scope.email;
$scope.password;
$scope.errorMessage;
if($scope.email && $scope.password){
var user={email:$scope.email,password:$scope.password};
$http.post('http://localhost:3008/signin',user).then (function(response){
    if(!response.data.errMessage){
        window.location.href='#/page';
    }
    if(response.data.errMessage && !response.data.foundUser){
        $scope.errorMessage=response.data.errMessage;
    }
},function(response){
    $scope.errorMessage="error";
});
}
else{
    $scope.errorMessage="complete the form";
}
}



});