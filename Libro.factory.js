(function(){
	'use strict';
	angular
	.module( 'helloApp' )

	.factory( 'Libro',fLibro);
	
	fLibro.$inject=['$http'];
	
	function fLibro( $http ){
	
		function Libro(){};		//As you can see, the controller became very thin. It now creates a Book instance, assigns it
								//to the scope and loads it from the backend. When the book will be loaded, it’s properties 							
								//will be changed and so the template. Keep in mind that other controllers that interact with
								//a book, simply inject the Book service.
		function setData( _jsonBookData ){
			angular.extend( this,_jsonBookData );
		};

		function load(){
			var url = 'http://www.mocky.io/v2/583664bb1100006b190c00a1?callback=JSON_CALLBACK';
			var _scope=this;
			$http.jsonp( url ).success( function( jsonBookData ) {
				_scope.setData( jsonBookData );
			});
		};

		function remove(){
			alert( "Se ha invocado el borrado" );
		};

		function update(){
			alert( "Se ha invocado el Update" );
		};

		function isAvailable(){
			if ( !this.stores || this.stores.length === 0 ) {
				return false;
			}
			return ( this.stores.length>0 );
		};


		Libro.prototype = {
			load: load,
			setData:setData,
			remove:remove,
			update:update,
			isAvailable:isAvailable
		};

		return Libro;
	};

})();