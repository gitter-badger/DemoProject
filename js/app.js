var app = angular.module("WishListProject", ["firebase"]);

app.controller("WishListController", function($scope, $firebaseArray) {
    var ref = new Firebase("https://jordanfinnigandemo.firebaseio.com/data");
    
    $scope.entries = $firebaseArray(ref)
    
    $scope.addNewEntry = function() {
        $scope.entries.$add({
            name: $scope.entry.name,
            url: $scope.entry.url,
            author: $scope.entry.author,
            priority: $scope.entry.priority
        });
        $scope.entry.name = '';
        $scope.entry.url = '';
        $scope.entry.author = '';
        $scope.entry.priority = '';
        $scope.addNewEntryForm.$setPristine();
    };
});