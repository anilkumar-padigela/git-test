(function() {
    "use strict";

    angular.module('public')
        .controller('AccountSummaryController', AccountSummaryController);

    AccountSummaryController.$inject = ['accountDetails'];

    function AccountSummaryController(accountDetails) {
        var $ctrl = this;
        $ctrl.accountDetails = accountDetails;
    }


})();