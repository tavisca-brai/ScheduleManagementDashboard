var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {

    $scope.listOfOptions = ['SC'];
<<<<<<< HEAD
    $scope.calculatedValue="";
    $scope.names =[];
=======
    $scope.calculatedValue = "";
>>>>>>> f3f530f23645f39383238e7711e905478582a8f2

    $scope.selectedItemChanged = function() {
        calculatedValue = String($scope.selectedItem);
        document.getElementsByClassName('filters')[0].style.display = 'block';
    }

    $scope.generateReport = function() {
        switch (calculatedValue) {
            case 'SC':
<<<<<<< HEAD
                $http.get("https://jsonplaceholder.typicode.com/comments?a=4")
                .then(function (response) {$scope.names.push(response)});
                // console.log($scope.names);
                
                document.getElementsByClassName('logs')[0].style.display='block';
=======
                $http.get("https://reqres.in/api/users?page=1")
                    .then(function(response) { $scope.names = response.data; });
                console.log($scope.names);
                document.getElementsByClassName('logs')[0].style.display = 'block';
>>>>>>> f3f530f23645f39383238e7711e905478582a8f2
                break;
            default:
                console.log('notfound');
        }
<<<<<<< HEAD
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
=======
    }

});
var setMaxDate = function(id) {
    if (document.getElementById("toDate").value != "") {
        var x = document.getElementById("toDate").value;
        document.getElementById(id).setAttribute("max", x);
    } else {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById(id).setAttribute("max", today);
    }
}

function setMinDate() {

    var minDate = document.getElementById("fromDate").value;
    document.getElementById("toDate").setAttribute("min", minDate);
>>>>>>> f3f530f23645f39383238e7711e905478582a8f2
}