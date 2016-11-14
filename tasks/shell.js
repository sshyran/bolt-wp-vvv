/**
 * Module: grunt-shell
 * Documentation: https://www.npmjs.com/package/grunt-shell
 */

var path = require( 'path' );

module.exports = {
	setup : {
		cwd : path.join( __dirname, '../../<%= init.project.slug %>' ),
		command : [
			'git init',
			'git remote add origin <%= init.project.repo %>',
			'git submodule add https://github.com/WordPress/WordPress.git wp',
			'git submodule add https://github.com/pantheon-systems/pantheon-hud.git wp-content/plugins/pantheon-hud',
			'ln -s wp/index.php index.php',
			'git add -A',
			'git commit -m "Initial commit."'
		].join( '&&' )
	}
};
