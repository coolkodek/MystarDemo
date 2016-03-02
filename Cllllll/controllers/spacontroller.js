app.controller("spacontroller", function ($scope, $http,config) {

    $scope.blog={};
    $scope.blogs=[];
    var getblogs = function (){

        $http({
            method: 'get',
            url: config.ServerURL + 'spa/getblogs',
            data: { blog : $scope.blog }
        }).then(function successCallback(response) {
            debugger;
            $scope.blogs=response.data;
            if (!response)
                alert("Error in the server");

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    };


    getblogs();
    $scope.addblog = function() {
        $scope.blog._id=generateUUID();
        $http({
            method: 'post',
            url: config.ServerURL + 'spa/saveblog',
            data: { blog : $scope.blog }
        }).then(function successCallback(response) {
            $scope.blog={};
            alert("Blog Saved Successfully");
            getblogs();
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