/**
 * FriendService
 */

app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:8084/adityabackend/suggesteduserslist")
	}
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8084/adityabackend/friendrequest/"+toUsername);
	}
	
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8084/adityabackend/pendingrequests");
	}
	
	friendService.updatePendingRequest=function(fromId,status){
		return $http.put("http://localhost:8084/adityabackend/updatependingrequest/"+fromId+"/"+status);
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8084/adityabackend/listoffriends");
	}
	
	return friendService;
})
