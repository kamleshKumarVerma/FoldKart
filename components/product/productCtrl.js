angular.module('eShopper').controller('productController', function($scope,$rootScope,$routeParams,productService) {
	$('#wishlistModal').modal('hide');
	$scope.getProduct = function() {
		productService.getProduct($routeParams.product_id).then(function(data) {
		  $scope.product = data;
		});
	}
	$scope.getProduct();
});
