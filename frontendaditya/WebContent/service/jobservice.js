
app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8084/adityabackend/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8084/adityabackend/getalljobs")
	}
	
	jobService.getJobById=function(id){
		return $http.get("http://localhost:8084/adityabackend/getjobbyid/"+id)
	}
	
	return jobService;
})
