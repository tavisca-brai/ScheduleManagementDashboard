var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {

    $scope.listOfOptions = ['SC'];
    $scope.calculatedValue="";
    $scope.names =[];

  	$scope.selectedItemChanged = function(){
    calculatedValue = String($scope.selectedItem);
    document.getElementsByClassName('filters')[0].style.display='block';
    }
    
    $scope.generateReport = function(){
        switch(calculatedValue){
            case 'SC':
                $http.get("https://jsonplaceholder.typicode.com/comments?a=4")
                .then(function (response) {$scope.names.push(response)});
                // console.log($scope.names);
                
                document.getElementsByClassName('logs')[0].style.display='block';
                break;
            default:
                console.log('notfound');
        }
    }      
});

function exportTableToCSV(filename){
    var csv = [];
    var rows = document.querySelectorAll("table#log tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));     
    }
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename){
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});
    
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}