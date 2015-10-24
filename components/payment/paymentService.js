angular.module('foldKart').service('paymentService', function($http,$q,constant,$rootScope) {

  this.saveCheckoutDetails = function(items) {
    var product_list = [];
    angular.forEach(items , function(product) {
        var promise = $http({
            url   : constant.BASE_URL+'user_ordered_productses',
            method: 'POST',
            data  : product
        });
        product_list.push(promise);
    });
    return $q.all(product_list);
  }

  this.completeOrder = function(userOrders,shippingAddress) {
    var deferred = $q.defer();
    $http({ method: 'POST', url: constant.BASE_URL+'user_orderses' , data: userOrders })
    .success(function (data, status, headers, config)
    {
      shippingAddress.user_orders = data.id
      /* Now we will save the shipping address for this complete order */
      $http({ method: 'POST', url: constant.BASE_URL+'shipping_addresses' , data : shippingAddress })
      .success(function (data, status, headers, config)
      {
        deferred.resolve(data);
      })
    })
    return deferred.promise;
  }

});
