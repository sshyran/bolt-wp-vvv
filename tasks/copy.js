/**
 * Module: grunt-contrib-copy
 * Documentation: https://www.npmjs.com/package/grunt-contrib-copy
 */

var path = require( 'path' );
var grunt = require( 'grunt' );

module.exports = {
	core : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : '<%= init.files %>',
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
	},

	package : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : 'package.json',
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
		options : {
			process : function ( content, srcpath ) {
				var package = JSON.parse( content ),
					project = grunt.config( 'init.project' );

				// Delete unknown or unneeded package information
				delete package.author;
				delete package.bugs;
				delete package.homepage;
				delete package.devDependencies['grunt-shell'];
				delete package.devDependencies['grunt-contrib-copy'];
				delete package.devDependencies['grunt-prompt'];

				// Set new package information.
				package.name = project.slug;
				package.description = project.name;
				package.repository.url = project.repo;

				return JSON.stringify( package, null, '  ' );
			},
		},
	},

	gruntfile : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : '.gruntfile.js',
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
		rename : function( dest, src ) {
			return path.join( dest, src.substr( 1 ) );
		}
	},

	vvv : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : [ 'vvv-init.sh', 'vvv-nginx.conf' ],
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
		options : {
			process : function ( content, srcpath ) {
				var project = grunt.config( 'init.project' );

				content = content.replace( /bolt/g, project.slug );
				content = content.replace( /Bolt/g, project.name );

				return content;
			},
		},
	},

	config : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : 'wp-config-local.php',
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
		options : {
			process : function ( content, srcpath ) {
				var slug, project = grunt.config( 'init.project' );

				slug = project.slug.replace( /[-_]/g, '' );

				content = content.replace( /(bolt)/g, slug );

				return content;
			},
		},
	},

	readme : {
		expand : true,
		cwd : path.join( __dirname, '../' ),
		src : '.readme.md',
		dest : path.join( __dirname, '../../<%= init.project.slug %>' ),
		options : {
			process : function ( content, srcpath ) {
				var slug, project = grunt.config( 'init.project' );

				content = content.replace( /^# Bolt/g, '# ' + project.name );
				content = content.replace( /bolt/g, project.slug );

				return content;
			},
		},
		rename : function( dest, src ) {
			return path.join( dest, src.substr( 1 ) );
		}
	},
};
