/*!
 * Queue Event 1.0
 * https://github.com/raxcido/queue-event
 *
 * Released under the MIT license
 * https://github.com/raxcido/queue-event/blob/master/LICENSE.md
 */

(function() {

	function QueueEvent() {
		this.queue = {};
	}
	QueueEvent.prototype = {

		addListener : function(name, priority, fn) {

			var queue =  this.queue;

			event = {
				priority: priority,
				fn: fn
			};
			queue[ name ] = queue[ name ] ? queue[ name ] : [ ];
			queue[ name ].push( event );
			this.queue = queue;

			return this;

		},

		fire : function(name, args) {

			var queue = this.queue;

			if( 0 === queue[ name ].length ){
				return;
			}

			var sortable = [];
			for ( var event in queue[ name ] ) {
				sortable.push( [ queue[ name ][ event ], queue[ name ][ event ].priority ] );
			}

			sortable.sort(function( a, b ) {
				return parseFloat( a[ 1 ] ) - parseFloat( b[ 1 ] );
			});

			for( var i in sortable ){

				sortable[i][0].fn.apply( window, args );

			}
		}
	};

	window.QueueEvent = QueueEvent;
})();