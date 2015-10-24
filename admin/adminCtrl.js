angular.module('foldKartAdmin',[]).controller('adminController', function($scope,adminService) {

	/* Open the admin login modal */
	$('#adminLoginModal').modal('show');

	$scope.getAllCategory = function() {
		adminService.getAllCategory().then(function(data){
			$scope.allCategory = data;
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
				alert("Successfully Added !");
			})
		}else {
           alert("Please select Category");
		}
	}

	$scope.adminLogout = function() {
		$scope.admin = {};
		location.reload(); 
	}



});
