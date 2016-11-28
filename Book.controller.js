(function(){

	'use strict';
	angular
	.module( 'helloApp' )

	.controller( 'BookController', cBookController );

	cBookController.$inject=['Libro', '$scope', '$http'];
	
	function cBookController( Libro, $scope, $http ) {
		  $scope.book = new Libro();   	//This way all book’s behavior is encapsulated in Book service. Now, let’s use our shiny Book 
		  $scope.book.load();			//service in our BookController.
	};

})();