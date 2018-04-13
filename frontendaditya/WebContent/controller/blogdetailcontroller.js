
/**
 *BlogDetailController 
 *getBlogForApproval/14
 *getBlogForApproval/:id
 *14 is blogpost id
 *to read the value 14 from the route, $routeParams.id
 */

app.controller('BlogDetailController',function($scope,$location,BlogPostService,$routeParams){
	var id=$routeParams.id
	$scope.showComments=false
	$scope.blogPost=BlogPostService.getBlogPost(id).then(function(response){
		$scope.blogPost=response.data;
	},function(response){
		console.log(response.status)
	})
	
	$scope.updateApproval=function(){
		BlogPostService.updateBlogPost($scope.blogPost).then(function(response){
			$location.path('/getblogpost')
		},function(response){
			console.log(response.status);
			$loction.path('/getBlogForApproval/'+id)
		})
	}
	
	$scope.addComment=function(){
		$scope.blogComment.blogPost=$scope.blogPost
		BlogPostService.addComment($scope.blogComment).then(function(response){
			alert('Comment added successfully')
			$scope.blogComment.body=''
			console.log(response.status)
		},function(response){
			console.log(response.status);
		})
		
	}
	
	$scope.getBlogComments=function(blogId){
		$scope.showComments=true;
		BlogPostService.getBlogComments(blogId).then(function(response){
			$scope.blogComments=response.data;
			console.log(response.status);
		},function(response){
			console.log(response.status)
		})
	}
})
