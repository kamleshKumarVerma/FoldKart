angular.module('eShopper').service('contactService', function($http,$q,constant) {

 
  this.contactMe = function(dataObject) {
    var deferred = $q.defer();
    $http({ method: 'POST', url: constant.BASE_URL+'contacts' , data : dataObject })
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