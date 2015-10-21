angular.module('eShopper', ['ngRoute','ngSanitize','ngStorage']).config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'components/home/homeTemplate.html',
			controller  : 'homeController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'components/contact/contactTemplate.html',
			controller  : 'contactController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'components/about/aboutTemplate.html',
			controller  : 'aboutController'
		})

		// route for the product page
		.when('/product/:product_id', {
			templateUrl : 'components/product/productTemplate.html',
			controller  : 'productController'
		})

		// route for the payment page
		.when('/payment', {
			templateUrl : 'components/payment/paymentTemplate.html',
			controller  : 'paymentController'
		})

		// route for the my orders page
		.when('/orders', {
			templateUrl : 'components/orders/ordersTemplate.html',
			controller  : 'ordersController'
		})

		// route for the my orders page
		.when('/profile', {
			templateUrl : 'components/profile/profileTemplate.html',
			controller  : 'profileController'
		})

		.otherwise({redirectTo:'/'});

});
