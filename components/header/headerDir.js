angular.module('eShopper').directive('header', function() {
  return {
    restrict : "E",
    templateUrl : "components/header/headerTemplate.html",
    controller : function($scope,$rootScope,$location,$localStorage) {

      /* By default user object */
      $rootScope.userObject = {
        id : "",
        password : "",
        email : "",
        name : "",
        date : "",
        wishlist_products : ""
      }

      /* Take the value from local storage into user object */
      if($localStorage.userObject !== undefined){
        $rootScope.userObject = $localStorage.userObject;
      }

      /* By default initialize cart and total amount */
      $rootScope.cart = [];
      $rootScope.totalAmount = 0;

      /* Logout function */
      $scope.logout = function() {
        $rootScope.userObject = {
          id : "",
          password : "",
          email : "",
          name : "",
          date : "",
          wishlist_products : ""
        }
        $localStorage.userObject = $rootScope.userObject;
        $location.path("#/");
      }

    }
  }

});


