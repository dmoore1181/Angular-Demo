/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    'use strict';
    var app = angular.module('productManagement', ['common.services', 'ui.router', 'productResourceMock']);

    app.config([
            '$stateProvider', '$urlRouterProvider', function ($stateProvier, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvier
                    //Home
                    .state('home',
                    {
                        url: '/',
                        templateUrl: 'app/welcomeView.html'
                    })
                    //Products
                    .state('productList',
                    {
                        url: '/products',
                        templateUrl: 'app/products/productListView.html',
                        controller: 'ProductListCtrl as vm'
                    })
                    //Product Detail
                    .state('productDetail',
                    {
                        url: '/products/:productId',
                        templateUrl: 'app/products/productDetailView.html',
                        controller: 'ProductDetailCtrl as vm',
                        resolve: {
                            productResource: 'productResource',
                            product: function(productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId }).$promise;
                            }
                        }
                    })
                    //Edit
                    .state('productEdit',
                    {
                        abstract: true,
                        url: '/products/edit/:productId',
                        tempateUrl: 'app/products/productEditView.html',
                        controller: 'ProductEditCtrl as vm',
                        resolve: {
                            productResource: 'productResource',
                            product: function (productResource, $stateParams) {
                                debugger;
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId });
                            }
                        }
                    })
                    //Edit.Info
                    .state('productEdit.info',
                    {
                        url: '/info',
                        templateUrl: 'app/products/productEditInfoView.html'
                    })
                    //Edit.Price
                    .state('productEdit.price',
                    {
                        url: '/price',
                        templateUrl: 'app/products/productEditPriceView.html'
                    })
                    //Edit.Tags
                    .state('productEdit.tags',
                    {
                        url: '/tags',
                        templateUrl: 'app/products/productEditTagsView.html'
                    });
            }
        ]
    );
}());