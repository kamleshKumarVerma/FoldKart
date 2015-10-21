angular.module('eShopper').service('loginService', function($http,$q,constant) {

  var findUser = function(data,dataObject) {
    return _.find(data, function(user) { 
      return ( user.email === dataObject.email && user.password === dataObject.password )
    });
  }

  this.login = function(dataObject) {
    var deferred = $q.defer();
    $http({ method: 'GET', url: constant.BASE_URL+'userses' })
    .success(function (data, status, headers, config)
    {
      deferred.resolve(findUser(data,dataObject));
    })
    .error(function (data, status, headers, config)
    {
      deferred.reject(data, status, headers, config);
    })
    return deferred.promise;
  }

});
