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

		data : {
			deploy : {
				verbose : false,
				files : [
					'index.php',
				],
				ignore : [
					'contributing.md',
					'gruntfile.js',
					'npm-debug.log',
					'package.json',
					'phpcs.ruleset.xml',
					'phpunit.xml.dist',
					'readme.md',
					'.editorconfig',
					'.eslintignore',
					'.eslintrc',
					'.git',
					'.gitattributes',
					'.gitignore',
					'.gitmodules',
					'.jscsrc',
					'.jshintignore',
					'.jshintrc',
					'.travis.yml',
				]
			}
		},

		preMerge : function( config, data ) {
			grunt.file.recurse( path.join( __dirname, 'wp-content' ), function( abspath, rootdir, subdir, filename ) {
				if ( 'undefined' !== typeof subdir ) {

					/**
					 * If the files is on the list of ignored or within a
					 * directory used primarily for development, add it to the
					 * deploy list.
					 */
					if ( -1 === data.deploy.ignore.indexOf( filename ) && null === subdir.match( /\/(.git|node_modules|dev-lib|tests|query-monitor)/g ) ) {
						data.deploy.files.push( path.join( subdir, filename ) );
					}
				}
			} );

			if ( 1 === grunt.option( 'debug' ) ) {
				data.deploy.verbose = true;
			}
		},
	} );

	// Register grunt tasks.
	grunt.registerTask(
		'default', []
	);

	grunt.registerTask(
		'pantheon:deploy', [
			'sync:content',
			'sync:private',
			'sync:configs',
		]
	);
}
