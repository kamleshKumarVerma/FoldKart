angular.module('foldKart').controller('paymentController', function($scope,$rootScope,$location,paymentService) {
	
	/* If total amount is zero than redirect to main page */
	if($rootScope.totalAmount === 0 || $rootScope.userObject.email === '') {
		$location.path("/#");
	}

    /* initializing shippingAddress rootscope variable as null object */
	$rootScope.shippingAddress = {};

    /* Set by default text value for button, later change "loading" while doing server request */
	$scope.buttonStateForPayment = "Pay";
	$scope.buttonStateForCompleteOrder = "Complete Order";

	/* Closing the cart modal */
	$('#cartModal').modal('hide');
    
    /* Shipping address saving */
	$scope.addShippingAddress = function() {
	  $("#shippingForm :input").attr("disabled", true);
	}
  
    /* Here actually saving all checkout details except payment details because of security reason */
	$scope.saveCheckoutDetails = function() {
		$scope.buttonStateForPayment = "Loading...";
		$("#paymentForm :input").attr("disabled", true);
		$scope.product_list = [];
		paymentService.saveCheckoutDetails( $rootScope.items ).then(function(data) {
	  		if(data !== undefined){
                data.forEach(function (arrayItem) {
			       $scope.product_list.push(arrayItem.data.id)
			    });
	  			$scope.buttonStateForPayment = "Paid";
	  		}
	  	})
	}

	/* Complete Order */
	$scope.completeOrder = function() {
	  if($('#shippingAddressSubmitButton').is('[disabled=disabled]') && $('#paymentSubmitButton').is('[disabled=disabled]')) {
	  	$scope.buttonStateForCompleteOrder = "Processing...";
	  	$("#completeOrderForm :input").attr("disabled", true);
	  	$scope.userOrders = {};
	  	var today = new Date();
		$scope.userOrders.user = $rootScope.userObject.id;
        $scope.userOrders.date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
		$scope.userOrders.product_list = $scope.product_list;
	  	paymentService.completeOrder( $scope.userOrders , $rootScope.shippingAddress ).then(function(data) {
	  		if(data !== undefined){
	  			$scope.buttonStateForCompleteOrder = "Done";
	  			$('#orderCompleted').modal('show');
	  		}
	  	})
	  }else {
	  	$('#errorMsgModal').modal('show');
	  }
	}

	$scope.redirectToLandingPage = function() {
      $location.path("/#");
	}

});
