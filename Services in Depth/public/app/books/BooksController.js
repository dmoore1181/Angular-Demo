(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', BooksController]);


    function BooksController(books, dataService, logger, badgeService) {

        var vm = this; //short for view model

        vm.appName = books.appName;

        vm.allBooks = dataService.getAllBooks();
        vm.allReaders = dataService.getAllReaders();

        vm.getBadge = badgeService.retrieveBadge;

        logger.output('BooksController has been created.');

    }

}());