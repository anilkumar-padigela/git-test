(function() {
"use strict";

angular.module('common')
.component('menu', {
  templateUrl: 'src/common/menu/menu.html',
  controller: MenuController
});


MenuController.$inject = ['$scope'];
function MenuController ($scope) {
  var $ctrl = this;
  

  $ctrl.$onInit = function() {
   
   console.log("I am in menu controller");
   
  };

  $ctrl.$onDestroy = function() {
    console.log("Releasing the resources of menu controller");
  };

  
}

})();
