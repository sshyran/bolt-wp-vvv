module.exports = function( grunt ) {
	require( 'time-grunt' )( grunt );

	var path = require( 'path' );

	/**
	 * Keep Grunt tasks in their own directory (tasks) and include them all at
	 * once, including registering the tasks.
	 * See: https://www.npmjs.com/package/load-grunt-config
	 */
	require( 'load-grunt-config' )( grunt, {
		configPath : path.join( process.cwd(), 'tasks' ),

		data : {},

		preMerge : function( config, data ) {},
	} );

	// Register grunt tasks.
	grunt.registerTask(
		'default', []
	);

	grunt.registerTask(
		'content:push', [
			'sync:push',
			'sync:private',
		]
	);

	grunt.registerTask(
		'content:pull', [ 'sync:pull' ]
	);
}
