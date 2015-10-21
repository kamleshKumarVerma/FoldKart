angular.module('eShopper').controller('homeController', function($scope,$rootScope,$filter,homeService) {
	
	$('#orderCompleted').modal('hide');

	$scope.getAllProducts = function() {
        homeService.getProducts().then(function(data) {
          	$scope.allProducts = data;
          	$scope.filteredProducts = $scope.allProducts;
		});
	}
	$scope.getAllProducts();

	$scope.getProductsByCategory = function(category) {
		$scope.filteredProducts = $filter('filter')($scope.allProducts, { category: category })
	}

	$rootScope.addInCart = function(product_id) {
		var selectedProduct = _.find($scope.filteredProducts, function(product) { return product.id == product_id })
		$rootScope.cart.push(selectedProduct);
		$rootScope.cart = _.uniq($rootScope.cart, 'id'); 
		$('#cartModal').modal('show');
	}

	$rootScope.addIntoWishlist = function(product_id) {
		if($rootScope.userObject.email !== '') {
			homeService.addIntoWishlist( $rootScope.userObject.id , product_id ).then(function(data) {
          	  $rootScope.userObject.wishlist_products = data.wishlist_products;
		    });
		}else {
			$('#loginModal').modal('show');
		}
	}

});
