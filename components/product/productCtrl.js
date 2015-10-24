angular.module('foldKart').controller('productController', function($scope,$rootScope,$routeParams,productService) {
	
	/* First close wishlist modal */
	$('#wishlistModal').modal('hide');

    /* Get product */
	$scope.getProduct = function() {
		$scope.isLoading = true;
		productService.getProduct($routeParams.product_id).then(function(data) {
		  $scope.product = data;
		  $scope.isLoading = false;
		});
	}

    /* By default call the get product function */
	$scope.getProduct();

});
