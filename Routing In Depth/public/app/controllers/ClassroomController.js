(function () {

    angular.module('app')
        .controller('ClassroomController', ['dataService', 'notifier', '$routeParams', ClassroomController]);

    function ClassroomController(dataService, notifier, $routeParams) {

        var vm = this;

        dataService.getClassroom($routeParams.id)
            .then(function(classroom){
                vm.currentClassroom = classroom;
            })
            .catch(showError);
        function showError(message){
            notifier.error(message);
        }
    }

}());