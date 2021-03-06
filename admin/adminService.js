angular.module('foldKartAdmin').service('adminService', function($http,$q) {

	var BASE_URL = "https://foldkartnewapi.restlet.net/v1/";

    this.addCategoryIntoProducts = function(allProducts,allCategory) {
       for(var i=0 ; i<allProducts.length ; i++) {
       	var tempId = allProducts[i].category;
       	for(var j=0 ; j<allCategory.length ; j++) {
       		if(allCategory[j].id === tempId) {
       			allProducts[i].category = allCategory[j].category;
       		}
       	}
       }
       return allProducts;
	}

	this.addCategoryIdForProduct = function(products_category_name,allCategory) {
       	for(var j=0 ; j<allCategory.length ; j++) {
       		if(allCategory[j].category === products_category_name) {
       			return allCategory[j].id;
       		}
       	}
	}

    this.getAllProducts = function() {
    	var deferred = $q.defer();
		$http({ method: 'GET', url: BASE_URL + 'productses' })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data, status, headers, config);
		})
		return deferred.promise;
    }
    
	var findUser = function(data,admin) {
		return _.find(data, function(user) { 
			return ( user.name === admin.name && user.password === admin.password )
		});
	}
    
    this.getAllCategory = function() {
        var deferred = $q.defer();
		$http({ method: 'GET', url: BASE_URL + 'categories' })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data, status, headers, config);
		})
		return deferred.promise;
    }

	this.adminLogin = function(admin) {
		var deferred = $q.defer();
		$http({ method: 'GET', url: BASE_URL + 'admins' })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(findUser(data,admin));
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data, status, headers, config);
		})
		return deferred.promise;
	}

	this.addCategory = function(category,admin) {
		var deferred = $q.defer();
		$http({ method: 'GET', url: BASE_URL + 'admins' })
		.success(function (data, status, headers, config)
		{
			if(findUser(data,admin) !== undefined) {
				$http({ method: 'POST', url: BASE_URL + 'categories' , data : category })
				.success(function (data, status, headers, config)
				{
					deferred.resolve(data);
				})
			}else {
				deferred.resolve(undefined);
			}
		})
		return deferred.promise;
	}

	this.addProduct = function(product,admin) {
		var deferred = $q.defer();
		$http({ method: 'GET', url: BASE_URL + 'admins' })
		.success(function (data, status, headers, config)
		{
			if(findUser(data,admin) !== undefined) {
				$http({ method: 'POST', url: BASE_URL + 'productses' , data : product })
				.success(function (data, status, headers, config)
				{
					deferred.resolve(data);
				})
			}else {
				deferred.resolve(undefined);
			}
		})
		return deferred.promise;
	}


	this.deleteProduct = function(product_id) {
		var deferred = $q.defer();
		$http({ method: 'DELETE', url: BASE_URL + 'productses/'+ product_id })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data);
		})
		return deferred.promise;
	}

	this.updateProduct = function(product) {
        var deferred = $q.defer();
		$http({ method: 'PUT', url: BASE_URL + 'productses/'+ product.id , data : product })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data);
		})
		return deferred.promise;
	}


});
