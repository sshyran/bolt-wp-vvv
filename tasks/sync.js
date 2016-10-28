/**
 * Module: grunt-sync
 * Documentation: https://www.npmjs.com/package/grunt-sync
 */

var path = require( 'path' );

module.exports = {
	/**
	 * Command: grunt sync:content
	 * Action: Copys content from the local environment into the WP submodule.
	 */
	content : {
		verbose : '<%= deploy.verbose %>',
		updateAndDelete : true,
		files : [
			{
				cwd:  path.join( __dirname, '../wp-content' ),
				dest: path.join( __dirname, '../pantheon/wp-content' ),
				src : '<%= deploy.files %>',
			}
		]
	},

	/**
	 * Command: grunt sync:configs
	 * Action: Syncs WordPress configuration files.
	 */
	configs : {
		verbose: '<%= deploy.verbose %>',
		files : [
			{
				cwd:  path.join( __dirname, '../' ),
				dest: path.join( __dirname, '../pantheon' ),
				src: [
					'wp-config.php',
					'pantheon.yml',
				],
			}
		],
	},

	/**
	 * Command: grunt sync:private
	 * Action: Syncs files in the private directory (usually rare updates).
	 */
	private : {
		verbose: '<%= deploy.verbose %>',
		files : [
			{
				cwd:  path.join( __dirname, '../private' ),
				dest: path.join( __dirname, '../pantheon/private' ),
				src: [
					'**',
				],
			}
		],
	},
};
