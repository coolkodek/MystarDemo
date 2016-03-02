app.factory('$exceptionHandler', function () {
    return function (exception, cause) {
        var msg = "Error Message: " + exception.message + "\n"
            + "Error Type: " + exception.name + "\n"
            + "File Name: " + exception.fileName + "\n"
            + "Line Number: " + exception.lineNumber + "\n"
            + "Column Number: " + exception.columnNumber;

        console.log(msg);


    };
});

