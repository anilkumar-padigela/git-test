(function() {
    "use strict";

    angular.module('common')
        .component('header', {
            templateUrl: 'src/common/header/header.html',
            controller: HeaderController
        });


    HeaderController.$inject = ['$scope'];

    function HeaderController($scope) {
        var $ctrl = this;


        $ctrl.$onInit = function() {

            console.log("I am in header controller");

        };

        $ctrl.$onDestroy = function() {
            console.log("Releasing the resources of header controller");
        };


    }

})();