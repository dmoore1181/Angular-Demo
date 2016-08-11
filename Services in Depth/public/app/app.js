(function(){
    var app = angular.module('app', ['ngRoute']);

    app.provider('books',['constants', function(constants){
        var includeVersionInTitle = false;

        this.setIncludeVersionInTitle = function(value){
            includeVersionInTitle = value;
        };
         this.$get = function(){

            var appName = constants.APP_TITLE;
            var version = constants.APP_VERSION;

            if (includeVersionInTitle){
                appName += ' ' + version;
            }

            var appDesc = constants.APP_DESCRIPTION;

            return {
                appName: appName,
                appDesc: appDesc
            };
        };
    }]);

    app.config(['booksProvider', '$routeProvider', function(booksProvider, $routeProvider){
        booksProvider.setIncludeVersionInTitle(false);

        $routeProvider
            .when('/',{
                templateUrl: '/app/templates/books.html',
                controller: 'BooksController',
                controllerAs: 'books'
            })
            .when('/AddBook', {
                templateUrl: '/app/templates/addBook.html',
                controller: 'AddBookController',
                controllerAs: 'addBook'
            })
            .when('/EditBook/:bookID',{
                templateUrl: '/app/templates/editBook.html',
                controller: 'EditBookController',
                controllerAs: 'bookEditor'
            })
            .otherwise('/');

        //console.log('title from constants service: ' + constants.APP_TITLE);

    }]);
}());