angular.module('foldKart').service('signupService', function($http,$q,constant) {

  var verifyUser = function(data,dataObject) {
    return _.find(data, function(user) { 
      return ( user.email === dataObject.email )
    });
  }

  this.signup = function(dataObject) {
    var deferred = $q.defer();
    /* First i will get all user so that verify, user is already exists or not */
    $http({ method: 'GET', url: constant.BASE_URL+'userses' })
    .success(function (data, status, headers, config)
    {
      if( verifyUser(data,dataObject) === undefined ) {
        /* Now we will save the user on server */
        $http({ method: 'POST', url: constant.BASE_URL+'userses', data: dataObject })
        .success(function (data, status, headers, config)
        {
          deferred.resolve(data);
        })
        .error(function (data, status, headers, config)
        {
          deferred.reject(data, status, headers, config);
        })
      }else{
        data = {email : "ALREADY_REGISTERED"};
        deferred.resolve(data);
      }
    })
    .error(function (data, status, headers, config)
    {
      deferred.reject(data, status, headers, config);
    })
    return deferred.promise; 
  }

  

});