var myApp=angular.module('myCV',[]);
myApp.controller('controller_CV',function($scope,$http){
	$http.get("json/summary.json").success(function(result){
		$scope.summary=result.summary;
	});
	
	$http.get("json/experience.json").success(function(result){
		$scope.experience=result.experience;
	});
	
	$http.get("json/education.json").success(function(result){
		$scope.education=result.education;
	});
	
	$http.get("json/project.json").success(function(result){
		$scope.project=result.project;
	});
	
		
	$http.get("json/mySkill.json").success(function(result){
		$scope.mySkill=result.skill;
		$scope.otherskill=result.otherskill;
	});
	
	$http.get("json/profile.json").success(function(result){
		$scope.profile=result;
	});
	
	$scope.addSummary=function(newSummary){
		$scope.summary.push(
			{
				"data":newSummary
			}
		);
	};
	
	$scope.addExperience=function(titleEx,datetimeEx,contentEx){
		$scope.experience.push(
			{
				"title":titleEx,
				"datetime":datetimeEx,
				"content":contentEx
			}
		);
	};
	
	$scope.addProject=function(titleP,datetimeP,contentP){
		$scope.project.push(
			{
				"title":titleP,
				"datetime":datetimeP,
				"content":contentP
			}
		);
	};
	
	$scope.addExperience=function(titleEx,datetimeEx,contentEx){
		$scope.experience.push(
			{
				"title":titleEx,
				"datetime":datetimeEx,
				"content":contentEx
			}
		);
	};
	
	$scope.addEducation=function(titleE,datetimeE,contentE){
		$scope.education.push(
			{
				"title":titleE,
				"datetime":datetimeE,
				"content":contentE
			}
		);
	};
	
	$scope.addSkill=function(newSkill){
		$scope.otherskill.push(
			{
				"data":newSkill
			}
		);
	};
	
	$scope.deleteSummary = function(item) {
        var index = $scope.summary.indexOf(item);
        $scope.summary.splice(index,1);
    };
	
	$scope.deleteExperience = function(item) {
        var index = $scope.experience.indexOf(item);
        $scope.experience.splice(index,1);
    };
	
	$scope.deleteProject = function(item) {
        var index = $scope.project.indexOf(item);
        $scope.project.splice(index,1);
    };
	
	$scope.deleteEducation = function(item) {
        var index = $scope.education.indexOf(item);
        $scope.education.splice(index,1);
    };
	
	
	$scope.deleteSkill = function(item) {
        var index = $scope.mySkill.indexOf(item);
        $scope.mySkill.splice(index,1);
    };
	
	$scope.deleteOtherSkill = function(item) {
        var index = $scope.otherskill.indexOf(item);
        $scope.otherskill.splice(index,1);
    };
});


$(document).ready(function(){

   $("#show_edit-name").click(function(){
    showpopup_name();
   });
	
	$("#close-box-edit-name").click(function(){
    hidepopup_name()
   });
	
	
	$("#show_edit-headline").click(function(){
    showpopup_headline();
   });
	
	$("#close-box-edit-headline").click(function(){
    hidepopup_headline()
   });

	
	 $("#show_edit-country").click(function(){
    showpopup_country();
   });
	
	$("#close-box-edit-country").click(function(){
    hidepopup_country()
   });
	
	
	 $("#show_edit-major").click(function(){
    showpopup_major();
   });
	
	$("#close-box-edit-major").click(function(){
    hidepopup_major()
   });
	
	
	 $("#show_edit-email").click(function(){
    showpopup_email();
   });
	
	$("#close-box-edit-email").click(function(){
    hidepopup_email()
   });
	
	
	 $("#show_edit-phone").click(function(){
    showpopup_phone();
   });
	
	$("#close-box-edit-phone").click(function(){
    hidepopup_phone()
   });
	
	
	
	 $("#show_edit-summary").click(function(){
    showpopup_summary();
   });
	
	$("#close-box-edit-summary").click(function(){
    hidepopup_summary()
   });
	
	$("#show-add-summary").click(function(){
    showpopup_summary_add();
   });
	
	$("#close-box-add-summary").click(function(){
    hidepopup_summary_add()
   });
	
	$("#save-add-summary").click(function(){
    hidepopup_summary_add()
   });
	
	
	
	
	 $("#show_edit-experience").click(function(){
    showpopup_experience();
   });
	
	$("#close-box-edit-experience").click(function(){
    hidepopup_experience()
   });
	
	
	$("#show-add-experience").click(function(){
    showpopup_experience_add();
   });
	
	$("#close-box-add-experience").click(function(){
    hidepopup_experience_add()
   });
	
	$("#save-add-experience").click(function(){
    hidepopup_experience_add()
   });
	
	
	
	 $("#show_edit-project").click(function(){
    showpopup_project();
   });
	
	$("#close-box-edit-project").click(function(){
    hidepopup_project()
   });
	
	$("#show-add-project").click(function(){
    showpopup_project_add();
   });
	
	$("#close-box-add-project").click(function(){
    hidepopup_project_add()
   });
	
	$("#save-add-project").click(function(){
    hidepopup_project_add()
   });
	
	
	
	 $("#show_edit-skill").click(function(){
    showpopup_skill();
   });
	
	$("#close-box-edit-skill").click(function(){
    hidepopup_skill()
   });
	
	
	 $("#show_edit-education").click(function(){
    showpopup_education();
   });
	
	$("#close-box-edit-education").click(function(){
    hidepopup_education()
   });
	
	
	$("#show-add-education").click(function(){
    showpopup_education_add();
   });
	
	$("#close-box-add-education").click(function(){
    hidepopup_education_add()
   });
	
	$("#save-add-education").click(function(){
    hidepopup_education_add()
   });
	
	$("#show-add-skill").click(function(){
    showpopup_skill_add();
   });
	
	$("#close-box-add-skill").click(function(){
    hidepopup_skill_add()
   });
	
	$("#save-add-skill").click(function(){
    hidepopup_skill_add()
   });
	
});


function showpopup_name()
{
   $("#box-edit-name").fadeIn();
   $("#box-edit-name").css({"visibility":"visible","display":"inline"});
}

function hidepopup_name()
{
   $("#box-edit-name").fadeOut();
   $("#box-edit-name").css({"visibility":"hidden","display":"none"});
}


function showpopup_headline()
{
   $("#box-edit-headline").fadeIn();
   $("#box-edit-headline").css({"visibility":"visible","display":"inline"});
}

function hidepopup_headline()
{
   $("#box-edit-headline").fadeOut();
   $("#box-edit-headline").css({"visibility":"hidden","display":"none"});
}


function showpopup_country()
{
   $("#box-edit-country").fadeIn();
   $("#box-edit-country").css({"visibility":"visible","display":"inline"});
}

function hidepopup_country()
{
   $("#box-edit-country").fadeOut();
   $("#box-edit-country").css({"visibility":"hidden","display":"none"});
}


function showpopup_major()
{
   $("#box-edit-major").fadeIn();
   $("#box-edit-major").css({"visibility":"visible","display":"inline"});
}

function hidepopup_major()
{
   $("#box-edit-major").fadeOut();
   $("#box-edit-major").css({"visibility":"hidden","display":"none"});
}


function showpopup_email()
{
   $("#box-edit-email").fadeIn();
   $("#box-edit-email").css({"visibility":"visible","display":"inline"});
}

function hidepopup_email()
{
   $("#box-edit-email").fadeOut();
   $("#box-edit-email").css({"visibility":"hidden","display":"none"});
}


function showpopup_phone()
{
   $("#box-edit-phone").fadeIn();
   $("#box-edit-phone").css({"visibility":"visible","display":"inline"});
}

function hidepopup_phone()
{
   $("#box-edit-phone").fadeOut();
   $("#box-edit-phone").css({"visibility":"hidden","display":"none"});
}


function showpopup_summary()
{
   $("#box-edit-summary").fadeIn();
   $("#box-edit-summary").css({"visibility":"visible","display":"inline"});
}

function hidepopup_summary()
{
   $("#box-edit-summary").fadeOut();
   $("#box-edit-summary").css({"visibility":"hidden","display":"none"});
}


function showpopup_experience()
{
   $("#box-edit-experience").fadeIn();
   $("#box-edit-experience").css({"visibility":"visible","display":"inline"});
}

function hidepopup_experience()
{
   $("#box-edit-experience").fadeOut();
   $("#box-edit-experience").css({"visibility":"hidden","display":"none"});
}

function showpopup_project()
{
   $("#box-edit-project").fadeIn();
   $("#box-edit-project").css({"visibility":"visible","display":"inline"});
}

function hidepopup_project()
{
   $("#box-edit-project").fadeOut();
   $("#box-edit-project").css({"visibility":"hidden","display":"none"});
}


function showpopup_skill()
{
   $("#box-edit-skill").fadeIn();
   $("#box-edit-skill").css({"visibility":"visible","display":"inline"});
}

function hidepopup_skill()
{
   $("#box-edit-skill").fadeOut();
   $("#box-edit-skill").css({"visibility":"hidden","display":"none"});
}


function showpopup_education()
{
   $("#box-edit-education").fadeIn();
   $("#box-edit-education").css({"visibility":"visible","display":"inline"});
}

function hidepopup_education()
{
   $("#box-edit-education").fadeOut();
   $("#box-edit-education").css({"visibility":"hidden","display":"none"});
}

function showpopup_summary_add()
{
   $("#box-add-summary").fadeIn();
   $("#box-add-summary").css({"visibility":"visible","display":"inline"});
}

function hidepopup_summary_add()
{
   $("#box-add-summary").fadeOut();
   $("#box-add-summary").css({"visibility":"hidden","display":"none"});
}

function showpopup_experience_add()
{
   $("#box-add-experience").fadeIn();
   $("#box-add-experience").css({"visibility":"visible","display":"inline"});
}

function hidepopup_experience_add()
{
   $("#box-add-experience").fadeOut();
   $("#box-add-experience").css({"visibility":"hidden","display":"none"});
}

function showpopup_project_add()
{
   $("#box-add-project").fadeIn();
   $("#box-add-project").css({"visibility":"visible","display":"inline"});
}

function hidepopup_project_add()
{
   $("#box-add-project").fadeOut();
   $("#box-add-project").css({"visibility":"hidden","display":"none"});
}

function showpopup_education_add()
{
   $("#box-add-education").fadeIn();
   $("#box-add-education").css({"visibility":"visible","display":"inline"});
}

function hidepopup_education_add()
{
   $("#box-add-education").fadeOut();
   $("#box-add-education").css({"visibility":"hidden","display":"none"});
}

function showpopup_skill_add()
{
   $("#box-add-skill").fadeIn();
   $("#box-add-skill").css({"visibility":"visible","display":"inline"});
}

function hidepopup_skill_add()
{
   $("#box-add-skill").fadeOut();
   $("#box-add-skill").css({"visibility":"hidden","display":"none"});
}