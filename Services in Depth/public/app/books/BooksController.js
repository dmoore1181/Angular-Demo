(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', '$cookies', '$cookieStore', '$log', BooksController]);


    function BooksController(books, dataService, logger, badgeService, $q, $cookies, $cookieStore, $log) {

        var vm = this; //short for view model

        vm.appName = books.appName;

        var booksPromise = dataService.getAllBooks();
        var readersPromise = dataService.getAllReaders();

        $q.all([booksPromise, readersPromise])
            .then(getAllDataSuccess)
            .catch(getAllDataError);

        function getAllDataSuccess(dataArray){
            vm.allBooks = dataArray[0];
            vm.allReaders = dataArray[1];
        }

        function getAllDataError(reason){
            console.log(reason);
        }


        //vm.allBooks = dataService.getAllBooks();
        dataService.getAllBooks()
            .then(getBooksSuccess, null, getBooksNotification)
            .catch(errorCallback)
            .finally(getAllBooksComplete);

        function getBooksSuccess(books){
            vm.allBooks = books;
        }

        // function getBooksError(reason){
        //     console.log(reason);
        // }

        function errorCallback(errorMsg){
            console.log('Error Message:' + errorMsg);
        }

        function getAllBooksComplete(){
            console.log('Get All Books Completed.');
        }

        function getBooksNotification(notification){
            console.log('Promise notification ' + notification);
        }

        dataService.getAllReaders()
            .then(getReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);

        function getReadersSuccess(readers){
            vm.allReaders = readers;
        }

        function getAllReadersComplete(){
            console.log('getAllReaders has completed');
        }
        //vm.allReaders = dataService.getAllReaders();


        vm.getBadge = badgeService.retrieveBadge;

        logger.output('BooksController has been created.');

        vm.favoriteBook = $cookies.favoriteBook;
        vm.lastEdited = $cookieStore.get('lastEdited');

        $log.log('logging with log');
        $log.info('logging with info');
        $log.warn('logging with warn');
        $log.error('logging with error');
        $log.debug('logging with debug');
    }

}());