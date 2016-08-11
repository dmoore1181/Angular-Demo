/**
 * Created by david.moore on 8/10/2016.
 */
(function(){
    angular.module('app')
        .factory('dataService', ['$q', '$timeout', 'logger', '$http', 'constants', dataService]);

    function dataService ($q, $timeout,  logger, $http, constants){
        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders,
            getBookByID: getBookByID,
            updateBook: updateBook
        };

        function getAllBooks(){
            return $http({
                method: 'GET',
                url: 'api/books',
                headers: {
                    'PS-BookLogger-Version': constants.APP_VERSION
                }
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }

        function sendResponseData(response){
            return response.data;
        }

        function sendGetBooksError(response){
            return $q.reject('Error retrieving book(s). (HTTP status: ' + response.status + ')' );
        }

        function getBookByID(bookID){
            return $http({
                method: 'GET',
                url: 'api/books/' + bookID
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }

        function updateBook(book){
            return $http({
                method: 'PUT',
                url: 'api/books/' + book.book_id,
                data: book
            })
                .then(updateBookSuccess)
                .catch(updateBookError);
        }

        function updateBookSuccess(response){
            return 'Book updated: ' + response.config.data.title;
        }

        function updateBookError(response){
            return $q.reject('Error updating book. (HTTP status: ' + response.status + ')');
        }

        // function getAllBooks(){
        //
        //     logger.output('getting all Books');
        //
        //     var booksArray = [
        //         {
        //             book_id: 1,
        //             title: 'Harry Potter and the Deathly Hallows',
        //             author: 'J.K. Rowling',
        //             year_published: 2000
        //         },
        //         {
        //             book_id: 2,
        //             title: 'The Cat in the Hat',
        //             author: 'Dr. Seuss',
        //             year_published: 1957
        //         },
        //         {
        //             book_id: 3,
        //             title: 'Encyclopedia Brown, BOy Detective',
        //             author: 'Donald J. Sobol',
        //             year_published: 1963
        //         }
        //     ];
        //
        //     var deferred = $q.defer();
        //
        //     //$timeout(function(){
        //         var successful = true;
        //         if (successful){
        //             deferred.notify('Just getting started gatherinb books...');
        //             deferred.notify('Almost done gathering books...');
        //             deferred.resolve(booksArray);
        //         } else{
        //             deferred.reject('Error retrieving books.');
        //         }
        //     //}, 1000);
        //
        //     return deferred.promise;
        // }

        function getAllReaders(){

            logger.output('getting all Readers');

            var readersArray = [
                {
                    reader_id: 1,
                    name: 'Marie',
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: 'Daniel',
                    weeklyReadingGoal: 210,
                    totalMinutesRead: 3000
                },
                {
                    reader_id: 3,
                    name: 'Lanier',
                    weeklyReadingGoal: 140,
                    totalMinutesRead: 600
                }
            ];

            var deferred = $q.defer();

            //$timeout(function(){
                deferred.resolve(readersArray);
            //}, 1500);

            return deferred.promise;
        }
    }

    dataService.$inject = ['logger'];
}());