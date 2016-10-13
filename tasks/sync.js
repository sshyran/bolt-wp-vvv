/**
 * Module: grunt-sync
 * Documentation: https://www.npmjs.com/package/grunt-sync
 */

var path = require( 'path' );

module.exports = {
	/**
	 * Command: grunt content:push
	 * Action: Copys content from the local environment into the WP submodule.
	 */
	push : {
		verbose: true,
		files : [
			{
				cwd:  path.join( __dirname, '../wp-content' ),
				dest: path.join( __dirname, '../wp/wp-content' ),
				src: [
					'**',
					'!contributing.md',
					'!dev-lib/**',
					'!gruntfile.js',
					'!node_modules/**',
					'!npm-debug.log',
					'!package.json',
					'!phpcs.ruleset.xml',
					'!phpunit.xml.dist',
					'!readme.md',
					'!tests/**'
				],
			}
		],
	},

	/**
	 * Command: grunt content:pull
	 * Action: Copys upstream changes in the WP submodule (which should be rare)
	 */
	pull : {
		verbose: true,
		files : [
			{
				cwd:  path.join( __dirname, '../wp/wp-content' ),
				dest: path.join( __dirname, '../wp-content' ),
				src: [
					'**',
					'!index.php',
					'!mu-plugins/pantheon.php',
					'!mu-plugins/pantheon/**',
					'!{plugins,themes}/index.php',
					'!plugins/hello.php',
					'!themes/twenty{ten,eleven,twelve,thirteen,fourteen,fifteen}/**',
				],
			}
		],
	},

	/**
	 * Command: grunt sync:configs
	 * Action: Syncs WordPress configuration files.
	 */
	configs : {
		verbose: true,
		files : [
			{
				cwd:  path.join( __dirname, '../' ),
				dest: path.join( __dirname, '../wp' ),
				src: [
					'wp-config.php',
					'wp-config-local.php',
				],
			}
		],
	},

	/**
	 * Command: grunt sync:private
	 * Action: Syncs files in the private directory (usually rare updates).
	 */
	private : {
		verbose: true,
		files : [
			{
				cwd:  path.join( __dirname, '../private' ),
				dest: path.join( __dirname, '../wp/private' ),
				src: [
					'**',
				],
			}
		],
	},
};
