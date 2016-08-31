(function() {
    'use strict';

    angular.module('productManagement').controller('ProductDetailCtrl',['product', ProductDetailCtrl]);

    // ReSharper disable once InconsistentNaming
    function ProductDetailCtrl(product) {
        var vm = this;

        vm.product = product;

        debugger;
        vm.title = 'Product Detail: ' + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    };

}());