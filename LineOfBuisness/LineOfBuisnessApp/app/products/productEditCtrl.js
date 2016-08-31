(function() {
    'use strict';

    angular.module('productManagement').controller('ProductEditCtrl', ['product', ProductEditCtrl]);

    // ReSharper disable once InconsistentNaming
    function ProductEditCtrl(product) {
        var vm = this;
        debugger;
        vm.product = product;

        if (vm.product && vm.product.productId) {
            vm.title = 'Edit: ' + vm.product.productName;
        }
        else {
            vm.title = 'New Product';
        }
    }
}());