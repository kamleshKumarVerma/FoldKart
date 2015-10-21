angular.module('eShopper').controller('ordersController', function($scope,$rootScope,$location,$filter,ordersService) {
	
	$scope.getMyOrders = function() {
       ordersService.getMyOrders($rootScope.userObject.id).then(function(data){
           $scope.myOrders = data;
       })
	}
	$scope.getMyOrders();

	$scope.getOrderDetails = function(product_list) {
	   $scope.isLoading = true;
	   $scope.userOrderedProducts = [];
	   $scope.totalPrice = 0;
	   ordersService.getOrderDetails(product_list).then(function(data){
           if(data !== undefined){
                data.forEach(function (arrayItem) {
			       $scope.userOrderedProducts.push(arrayItem.data);
			       $scope.totalPrice = (arrayItem.data.price*arrayItem.data.quantity) + $scope.totalPrice;
			    });
			    $scope.isLoading = false;
	  		}
       })
	}

	$scope.goToHomePage = function() {
      $location.path("#/")
	}

});
