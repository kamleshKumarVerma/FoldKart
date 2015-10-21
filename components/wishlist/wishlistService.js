angular.module('eShopper').service('wishlistService', function($http,$q,constant) {

  this.getWishlistProducts = function(wishlist_products) {
    var product_list = [];
    angular.forEach(wishlist_products , function(product_id) {
        var promise = $http({
            url   : constant.BASE_URL+'productses/'+product_id,
            method: 'GET'
        });
        product_list.push(promise);
    });
    return $q.all(product_list);
  }

  this.deleteItem = function(user_object) {
    var deferred = $q.defer();
    $http({ method: 'PUT', url: constant.BASE_URL+'userses/'+user_object.id , data : user_object })
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
