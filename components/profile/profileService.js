angular.module('foldKart').service('profileService', function($http,$q,constant) {
	
	this.updateMyProfile = function(userObject) {
		var deferred = $q.defer();
	    $http({ method: 'PUT', url: constant.BASE_URL+'userses/'+userObject.id , data : userObject })
	    .success(function (data, status, headers, config)
	    {
		   deferred.resolve(data);
	    })
	    return deferred.promise;
	}

});
