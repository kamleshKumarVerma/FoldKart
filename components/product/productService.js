angular.module('foldKart').service('productService', function($http,$q,constant) {
	
	this.getProduct = function(product_id) {
	    var deferred = $q.defer();
	    $http({ method: 'GET', url: constant.BASE_URL+'productses/'+product_id })
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

});
