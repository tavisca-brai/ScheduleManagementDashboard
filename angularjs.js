var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {

    $scope.listOfOptions = ['SC'];
    $scope.calculatedValue="";

  	$scope.selectedItemChanged = function(){
    calculatedValue = String($scope.selectedItem);
    document.getElementsByClassName('filters')[0].style.display='block';
    }
    
    $scope.generateReport = function(){
        switch(calculatedValue){
            case 'SC':
                $http.get("https://reqres.in/api/users?page=1")
                .then(function (response) {$scope.names = response.data;});
                console.log($scope.names);
                document.getElementsByClassName('logs')[0].style.display='block';
                break;
            default:
                console.log('notfound');
        }
    }   

});