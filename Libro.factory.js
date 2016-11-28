(function(){
	'use strict';
	angular
	.module( 'helloApp' )

	.factory( 'Libro',[ '$http', Libro]);

	function Libro( $http ){
			
			function Libro(){};		//As you can see, the controller became very thin. It now creates a Book instance, assigns it
									//to the scope and loads it from the backend. When the book will be loaded, it’s properties 							//will be changed and so the template. Keep in mind that other controllers that interact with 								//a book, simply inject the Book service.
			
			Libro.prototype = {
				load:function(){
					var url = 'http://www.mocky.io/v2/583664bb1100006b190c00a1?callback=JSON_CALLBACK';
					var _scope=this;
					$http.jsonp( url ).success( function( jsonBookData ) {
						_scope.setData( jsonBookData );
					});

				},
				setData:function( _jsonBookData ){
					angular.extend( this,_jsonBookData );
				},
				delete:function(){
					alert( "Se ha invocado el borrado" );
				},
				update:function(){
					alert( "Se ha invocado el Update" );
				},
				isAvailable:function(){
					if ( !this.stores || this.stores.length === 0 ) {
						return false;
					}

					return ( this.stores.length>0 );
				}

			};

			return Libro;
	};
})();