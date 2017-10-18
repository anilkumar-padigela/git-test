(function() {
    "use strict";

    angular.module('common')
        .service('AccountSummaryService', AccountSummaryService);


    AccountSummaryService.$inject = ['$http', 'ApiPath'];

    function AccountSummaryService($http, ApiPath) {
        var service = this;

        service.getAcctDetails = function() {
            console.log("ApiPath", ApiPath);
            return $http.get(ApiPath + '/accountDetails.json').then(function(response) {
                return response.data;
            });
        };

    }



})();