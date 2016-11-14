module.exports = function( grunt ) {
	var path = require( 'path' );

	/**
	 * Keep Grunt tasks in their own directory (tasks) and include them all at
	 * once, including registering the tasks.
	 * See: https://www.npmjs.com/package/load-grunt-config
	 */
	require( 'load-grunt-config' )( grunt, {
		configPath : path.join( process.cwd(), 'tasks' ),

		data : {
			init : {
				project : {},
				files : [
					'**',
					'.gitignore',
					'.travis.yml',
					'!node_modules/**',
					'!wp/**',
					'!wp-content/plugins/pantheon-hud/**',
					'!gruntfile.js',
					'!index.php',
					'!package.json',
					'!readme.md',
					'!vvv-init.sh',
					'!vvv-nginx.conf',
					'!wp-config-local.php',
					'!tasks/prompt.js',
					'!tasks/copy.js',
					'!tasks/shell.js',
				],
			}
		},

		preMerge : function( config, data ) {
			// if ( 0 === grunt.cli.tasks.indexOf( 'copy' ) ) {
			// 	console.log( '\x1b[31mError:', '\x1b[0mYou must run \x1b[32mgrunt init:project\x1b[0m to setup a new project.' );
			// 	process.exit(1);
			// }
		},
	} );

	grunt.registerTask(
		'init:project', [
			'prompt:project',
		]
	);
}
