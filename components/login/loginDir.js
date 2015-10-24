angular.module('foldKart').directive('login', function() {
	return {
       restrict : "E",
       templateUrl : "components/login/loginTemplate.html",
       controller : function($scope,$rootScope,loginService,$localStorage) {
          $scope.login = function() {
             loginService.login($scope.loginData).then(function(data){
                if(data === undefined) {
                  alert("Invalid User or Password !");
                }else {
                  $localStorage.userObject = data;
                  $rootScope.userObject = $localStorage.userObject;
                  $rootScope.cart = [];
                  $('#loginModal').modal('hide');
                }
             })
          }

          $scope.openSignupModal = function() {
            $('#loginModal').modal('hide');
            $('#signupModal').modal('show');
          }
          
       }
	}
	
});