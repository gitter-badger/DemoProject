var app = angular.module("DemoProject", ["firebase"]);

app.controller("DemoController", function($scope, $firebaseObject) {
    var ref = new Firebase("https://jordanfinnigandemo.firebaseio.com/data");
    
    var syncObject = $firebaseObject(ref);
    
    syncObject.$bindTo($scope, "data");
	
});