angular.module('foldKart').service('ordersService', function($http,$q,constant) {

	var findMyOrders = function(data,user_id) {
		var myOrders = [];
		data.forEach(function (arrayItem) {
			if(arrayItem.user === user_id)
				myOrders.push(arrayItem);
		});
		return myOrders;
	}

	this.getMyOrders = function(user_id) {
		var deferred = $q.defer();
		$http({ method: 'GET', url: constant.BASE_URL+'user_orderses' })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(findMyOrders(data,user_id));
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data, status, headers, config);
		})
		return deferred.promise;
	}

	this.getOrderDetails = function(product_list) {
		var user_ordered_products = [];
	    angular.forEach(product_list , function(product_id) {
	        var promise = $http({
	            url   : constant.BASE_URL+'user_ordered_productses/'+product_id,
	            method: 'GET',
	            cache: true
	        });
	        user_ordered_products.push(promise);
	    });
	    return $q.all(user_ordered_products);
	}

});
