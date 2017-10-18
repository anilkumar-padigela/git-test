(function() {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('apohome', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            }).state('actSumry', {
                url: '/actSumry',
                templateUrl: 'src/public/home/actSumry.html',
                controller: 'AccountSummaryController',
                controllerAs: 'acctCtrl',
                resolve: {
                    accountDetails: ['AccountSummaryService', function(AccountSummaryService) {
                        return AccountSummaryService.getAcctDetails();
                    }]
                }
            }).state('createACH', {
                url: '/createACH',
                templateUrl: 'src/public/home/createACH.html'
            });
    }
})();