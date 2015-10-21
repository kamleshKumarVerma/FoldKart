angular.module('eShopper').directive('wishList', function ($location) {
    return {
      restrict: 'EA',
      templateUrl : "components/wishlist/wishlistTemplate.html",
      scope: {},
      controller: function($scope,$rootScope,wishlistService){

         /* Get wishlist for the logged in user */
         $rootScope.getMyWishlist = function() {
            $scope.myWishlist = [];
            wishlistService.getWishlistProducts($rootScope.userObject.wishlist_products).then(function(data){
                 data.forEach(function (arrayItem) {
                     $scope.myWishlist.push(arrayItem.data)
                 });
            })
         }

         $scope.goToProductPage = function(product_id) {
           window.location.assign(window.location.href.split('#')[0] + '#/product/'+product_id);
         }

         $scope.deleteItem = function(product_id) {
            $rootScope.userObject.wishlist_products = _.reject($rootScope.userObject.wishlist_products, function(arrayItem){ 
              return arrayItem === product_id; 
            });
            wishlistService.deleteItem($rootScope.userObject ).then(function(data){
                $scope.myWishlist = _.reject($scope.myWishlist, function(arrayItem){ 
                  return arrayItem.id === product_id; 
                });
            })
         }

      }
    };
  });
