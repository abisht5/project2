app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8084/adityabackend/registration",user)
	
		
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8084/adityabackend/login",user)
		
	}
	
	userService.logout=function(){
		return $http.get("http://localhost:8084/adityabackend/logout")
	}
	
	userService.getUserByUsername=function(){
		return $http.get("http://localhost:8084/adityabackend/getuserdetails")
	}
	
	userService.updateUserProfile=function(user){
		return $http.put("http://localhost:8084/adityabackend/updateprofile",user)
	}
	
	
	
	return userService;
	
})