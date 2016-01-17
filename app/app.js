'use strict';

var app = angular.module("myApp", []);
app.directive("myDirective", function(){
	return {
		restrict: "E",
		replace: true,
		template: "<h1>Testttt</h1>",
			
	};
});