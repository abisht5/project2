/**
 *blogpostservice
 */

app.factory('BlogPostService',function($http){
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8084/adityabackend/saveblogpost",blogPost)
	}
	
	blogPostService.blogsApproved=function(){
		return $http.get("http://localhost:8084/adityabackend/listofblogs/"+1)
	}
	
	blogPostService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8084/adityabackend/listofblogs/"+0)
	}
	
	blogPostService.getBlogPost=function(id){
		return $http.get("http://localhost:8084/adityabackend/getblogpost/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogpost){
		return $http.put("http://localhost:8084/adityabackend/updateblogpost",blogpost)
	}
	
	blogPostService.addComment=function(blogComment){
		return $http.post("http://localhost:8084/adityabackend/addblogcomment",blogComment)
	}
	
	blogPostService.getBlogComments=function(blogId){
		return $http.get("http://localhost:8084/adityabackend/getblogcomments/"+blogId)
	}
	return blogPostService;
})
