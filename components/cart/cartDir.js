angular.module('eShopper').directive('cart', function ($location) {
    return {
      restrict: 'EA',
      templateUrl : "components/cart/cartTemplate.html",
      scope: {
        items : "="
      },
      controller: function($scope,$rootScope){

         /* Calculate total amount in cart */
         $scope.$watch("items",function(){
           $scope.totalAmount = 0;
           $scope.items.forEach(function (item) {
                $scope.totalAmount = (item.price*item.quantity) + $scope.totalAmount;
            });
         },true);

         $scope.$watch("totalAmount",function(){
           $rootScope.totalAmount = $scope.totalAmount;
         });

         $scope.$watch("items",function(){
           $rootScope.items = $scope.items;
         });

         /* Delete the items from cart */
         $scope.deleteItem = function(id) {
             $scope.items = $scope.items.filter(function (item) {
                  return item.id !== id;
             });
         };

         /* Go for checkout */
         $scope.goForCheckout = function() {
           if($rootScope.userObject.email === '') {
             $('#cartModal').modal('hide');
             $('#loginModal').modal('show');
           }else {
            window.location.assign(window.location.href.split('#')[0] + '#/payment');
           }
         }

      }
    };
  });
