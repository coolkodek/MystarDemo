app.controller("listitemsController", function ($scope, $http) {
    debugger;
    $scope.items=[];
    if(localStorage.getItem("items"))
    {
        $scope.items = angular.fromJson( localStorage.getItem("items"));
    }

    $scope.markUsed = function (_id,ischecked) {
        debugger;
        $scope.items[findIndexByKeyValue($scope.items,"_id",_id)].IsUsed = ischecked;
        localStorage.setItem("items", angular.toJson($scope.items));

    };

    $scope.deleteItem= function (_id) {
        debugger;

        $http({
            method: 'post',
            url: 'http://localhost:9093/server/newRoute4/deleteitem',
            data: { id : _id }
        }).then(function successCallback(response) {

            $scope.items.splice(findIndexByKeyValue($scope.items,"_id",_id),1);
            localStorage.setItem("items", angular.toJson($scope.items));
            alert("Item Deleted Successfully");
            if (!response)
                alert("Error in the server");

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    };



    function findIndexByKeyValue(obj, key, value) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i][key] == value) {
                return i;
            }
        }
        return null;
    }
});