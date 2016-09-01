(function() {
    'use strict';
    angular.module('productManagement').controller('PriceAnalyticsCtrl', ['$scope', 'products', 'productService', '$filter', PriceAnalyticsCtrl]);

    function PriceAnalyticsCtrl($scope, products, productService, $filter) {
        $scope.title = 'Price Analytics';

        //Computed Property
        for (var i = 0; i < products.length; i++) {
            products[i].marginPercent = productService.calculateMarginPercent(products[i].price, products[i].cost);
            products[i].marginAmount = productService.calculateMarginAmount(products[i].price, products[i].cost);
        }

        var orderedProductsAmount = $filter('orderBy')(products, 'marginAmount');
        var filteredProductsAmount = $filter('limitTo')(orderedProductsAmount, 5);

        var orderedProductsPercent = $filter('orderBy')(products, 'marginPercent');
        var filteredProductsPercent = $filter('limitTo')(orderedProductsPercent, 5);

        var chartDataAmount = [];
        for (var i = 0; i < products.length; i++) {
            chartDataAmount.push({
                x: products[i].productName,
                y: [products[i].cost, products[i].price, products[i].marginAmount]
            });

        }

        $scope.dataAmount = {
            series: ['Cost', 'Price', 'Margin Amount'],
            data: chartDataAmount
        };

        var chartDataPercent = [];
        for (var i = 0; i < products.length; i++) {
            chartDataPercent.push({
                x: products[i].productName,
                y: [ products[i].marginPercent]
            });

        }
        
        $scope.dataPercent = {
            series: ['Margin Percent'],
            data: chartDataPercent
        };

        $scope.configAmount = {
            title: 'top $ Margin Products',
            tooltips: true,
            labels: false,
            mouseover: function() {},
            mouseout: function() {},
            click: function() {},
            legend: {
                display: true,
                position: 'right'
            }
        };

        $scope.configPercent = {
            title: 'top % Margin Products',
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };
    }
}());