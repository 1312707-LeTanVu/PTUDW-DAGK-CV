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
	
	$http.get("json/profile.json").success(function(result){
		$scope.profile=result;
	});
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