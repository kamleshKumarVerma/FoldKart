angular.module('foldKart').service('homeService', function($http,$q,constant) {
	
	this.getAllCategory = function() {
        var deferred = $q.defer();
		$http({ method: 'GET', url: constant.BASE_URL+'categories' })
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

	this.getProducts = function() {
	    var deferred = $q.defer();
	    $http({ method: 'GET', url: constant.BASE_URL+'productses' })
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

	this.addIntoWishlist = function(user_id,product_id) {
	    var deferred = $q.defer();
	    $http({ method: 'GET', url: constant.BASE_URL+'userses/'+user_id })
	    .success(function (data, status, headers, config)
	    {
	    	data.wishlist_products.push(product_id);
	    	data.wishlist_products = _.uniq(data.wishlist_products);
	        $http({ method: 'PUT', url: constant.BASE_URL+'userses/'+user_id , data : data })
		    .success(function (data, status, headers, config)
		    {
		      deferred.resolve(data);
		    })
	    })
	    return deferred.promise;
	}

});
