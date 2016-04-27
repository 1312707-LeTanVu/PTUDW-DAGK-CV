var myApp=angular.module('myCV',[]);
myApp.controller('controller_CV',function($scope,$http){
	$http.get("json/summary.json").success(function(result){
		$scope.summary=result;
	});
	
	$http.get("json/experience.json").success(function(result){
		$scope.experience=result;
	});
	
	$http.get("json/education.json").success(function(result){
		$scope.education=result;
	});
	
	$http.get("json/project.json").success(function(result){
		$scope.project=result;
	});
	
		
	$http.get("json/mySkill.json").success(function(result){
		$scope.mySkill=result;
	});
});