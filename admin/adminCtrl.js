angular.module('foldKartAdmin',[]).controller('adminController', function($scope,adminService) {

	/* Open the admin login modal */
	$('#adminLoginModal').modal('show');

	$scope.getAllProducts = function() {
        adminService.getAllProducts().then(function(data){
			$scope.allProducts = adminService.addCategoryIntoProducts(data,$scope.allCategory)
		})
	}

	$scope.getAllCategory = function() {
		adminService.getAllCategory().then(function(data){
			$scope.allCategory = data;
			$scope.getAllProducts();
		})
	}

	$scope.adminLogin = function() {
		adminService.adminLogin($scope.admin).then(function(data){
			if(data === undefined) {
				alert("Invalid User or Password !");
			}else {
				$scope.admin = data;
				$scope.getAllCategory();
				$('#adminLoginModal').removeAttr("data-keyboard");
				$('#adminLoginModal').removeAttr("data-backdrop");
				$('#adminLoginModal').modal('hide');
			}
		})
	}

	$scope.addCategory = function() {
		adminService.addCategory($scope.category,$scope.admin).then(function(data){
			$scope.category = {};
			$scope.allCategory.push(data);
			$('#addCategoryModal').modal('hide');
		})
	}

	$scope.addProduct = function() {
		if($scope.product["category"] !== undefined) {
			$scope.product.quantity  = 1;
			adminService.addProduct($scope.product,$scope.admin).then(function(data){
				$scope.product = {};
				$scope.allProducts.push(data)
				$scope.allProducts = adminService.addCategoryIntoProducts($scope.allProducts,$scope.allCategory)
				alert("Successfully Added !");
				$('#addProductModal').modal('hide');
			})
		}else {
           alert("Please select Category");
		}
	}

	$scope.adminLogout = function() {
		$scope.admin = {};
		location.reload(); 
	}

	$scope.deleteProduct = function(product_id) {
		adminService.deleteProduct(product_id).then(function(data){
			$scope.allProducts = _.reject($scope.allProducts, function(product) { return product.id === product_id; });
		})
	}

    $scope.openAddCategoryModal = function() {
		$('#addProductModal').modal('hide');
		$('#addCategoryModal').modal('show');
	}

	$scope.updateProductModal = function(product_object) {
		$scope.productForUpdate = jQuery.extend(true, {}, product_object);
	}

	$scope.updateProduct = function() {
		var tempCategoryName = $scope.productForUpdate.category;
		$scope.productForUpdate.category = adminService.addCategoryIdForProduct($scope.productForUpdate.category,$scope.allCategory);
		adminService.updateProduct($scope.productForUpdate).then(function(data){
			$scope.allProducts = _.reject($scope.allProducts, function(product) { return product.id === data.id; });
			$scope.productForUpdate.category = tempCategoryName;
			$scope.allProducts.unshift($scope.productForUpdate);
			alert("Successfully Updated !");
			$('#updateProductModal').modal('hide');
		})
	}

});
