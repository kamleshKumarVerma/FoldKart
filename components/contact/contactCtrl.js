angular.module('foldKart').controller('contactController', function($scope,contactService) {

   $scope.contactMe = function() {
     contactService.contactMe($scope.contactData).then(function(data){
        if(data !== undefined){
           $scope.contactData = {};
           alert("Thanks for your valuable Feedback ");
        }else {
           alert("Internal Server Error !");
        }
     })
   }

});
