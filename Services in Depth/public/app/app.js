(function(){
    var app = angular.module('app', []);

    app.provider('books',['constants', function(){
        this.$get = function(constants){

            var appName = constants.APP_TITLE;
            var appDesc = constants.APP_DESCRIPTION;

            var version = constants.APP_VERSION;

            if (includeVersionInTitle){
                appName += ' ' + version;
            }

            return {
                appName: appName,
                appDesc: appDesc
            };
        };

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function(value){
            includeVersionInTitle = value;
        };
    }]);

    app.config(['booksProvider', 'constants', 'dataServiceProvider', function(booksProvider, constants){
        booksProvider.setIncludeVersionInTitle(false);

        console.log('title from constants service: ' + constants.APP_TITLE);

    }]);
}());