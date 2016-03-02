app.controller("additemController", function ($scope, $http) {





    debugger;
    $scope.items = [];
    $scope.item = {};
    $scope.types = ["Tiers", "Steering", "Engine", "battery"];
    if (JSON.parse(localStorage.getItem('items')))
        $scope.items = JSON.parse(localStorage.getItem('items'));

    $scope.additem = function (valid) {
        debugger;
        if(valid) {
            $scope.item.synch = "false";
            $scope.item._id = generateUUID();
            $scope.items.push($scope.item);
            localStorage.setItem("items", angular.toJson($scope.items));
            $scope.item = {};
            alert("item added to local storage");
        }
        else{

            alert ("Please enter * Marked Fields");
        }
    };

    $scope.synch = function () {

        $http({
            method: 'post',
            url: 'http://localhost:9093/server/newRoute3/additems',
            data: { data : angular.fromJson(localStorage.getItem("items")) }
        }).then(function successCallback(response) {

            alert("Data in Synch with Database");
            if (!response)
                alert("Error in the server");

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    };

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };
});