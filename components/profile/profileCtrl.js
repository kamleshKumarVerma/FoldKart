angular.module('foldKart').controller('profileController', function($scope,$rootScope,profileService) {
     
    $scope.isUpdate = false;

    $scope.showUpdateTemplate = function() {
       $scope.isUpdate = !$scope.isUpdate;
    }

    $scope.updateMyProfile = function() {
    	 profileService.updateMyProfile( $rootScope.userObject ).then(function(data) {
              $rootScope.userObject = data;
              $scope.showUpdateTemplate();
		  });
    }

});
