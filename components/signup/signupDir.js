angular.module('foldKart').directive('signup', function() {
	return {
       restrict : "E",
       templateUrl : "components/signup/signupTemplate.html",
       controller : function($scope,$rootScope,signupService) {
          $scope.signup = function() {
             var today = new Date();
             $scope.signupData.date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
             signupService.signup($scope.signupData).then(function(data){
                if(data.email === 'ALREADY_REGISTERED') {
                   alert("User Already Registered !");
                }else {
                   alert("Successfully Registered. Please login !");
                }
             })
          }

          $scope.openLoginModal = function() {
            $('#signupModal').modal('hide');
            $('#loginModal').modal('show');
          }

       }
	}
});