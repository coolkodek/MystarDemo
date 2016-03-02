app.config(function ($routeProvider) {
    $routeProvider

        .when('/additem', {
            templateUrl: 'partials/additem.html',
            controller: 'additemController'
        })

        .when('/listitems', {
            templateUrl: 'partials/listitems.html',
            controller: 'listitemsController'
        });
});