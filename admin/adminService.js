angular.module('foldKartAdmin').service('adminService', function($http,$q) {

	var findUser = function(data,admin) {
		return _.find(data, function(user) { 
			return ( user.name === admin.name && user.password === admin.password )
		});
	}
    
    this.getAllCategory = function() {
        var deferred = $q.defer();
		$http({ method: 'GET', url: 'https://my-selfie-tech-login.apispark.net/v5/categories' })
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
		$http({ method: 'GET', url: 'https://my-selfie-tech-login.apispark.net/v5/admins' })
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
		$http({ method: 'GET', url: 'https://my-selfie-tech-login.apispark.net/v5/admins' })
		.success(function (data, status, headers, config)
		{
			if(findUser(data,admin) !== undefined) {
				$http({ method: 'POST', url: 'https://my-selfie-tech-login.apispark.net/v5/categories' , data : category })
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
		$http({ method: 'GET', url: 'https://my-selfie-tech-login.apispark.net/v5/admins' })
		.success(function (data, status, headers, config)
		{
			if(findUser(data,admin) !== undefined) {
				$http({ method: 'POST', url: 'https://my-selfie-tech-login.apispark.net/v5/productses' , data : product })
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

});
