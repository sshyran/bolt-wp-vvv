/**
 * Module: grunt-prompt
 * Documentation: https://www.npmjs.com/package/grunt-prompt
 */

var path = require( 'path' );
var grunt = require( 'grunt' );

module.exports = {
	project : {
		options : {
			questions : [
				{
					config : 'init.project.name',
					type: 'input', // list, checkbox, confirm, input, password
					message: 'Project name?', // Question to ask the user, function needs to return a string,
					validate: function( value ) {
						if ( value.length ) {
							if ( /^[A-Za-z0-9 ]+$/.test( value ) ) {
								return true;
							} else {
								console.log( ' - \x1b[31mError:', '\x1b[0mProject name must consist only of alpha-numeric characters (uppercase or lowercase) separated by spaces.' );
								return false;
							}
						} else {
							console.log( '- \x1b[31mError:', '\x1b[0mProject name is required.' );
							return false;
						}
					}
				},

				{
					config : 'init.project.slug',
					type: 'input',
					message: 'Project slug?',
					validate: function( value ) {
						if ( value.length ) {
							if ( /^[a-z0-9-_]+$/.test( value ) ) {
								if ( grunt.file.isDir( path.join( __dirname, '../../', value ) ) ) {
									console.log( ' - \x1b[31mError:', '\x1b[0mA project with the slug (\x1b[33m' + value + '\x1b[0m) already exists in the parent directory.' );
									return false;
								} else {
									return true;
								}
							} else {
								console.log( ' - \x1b[31mError:', '\x1b[0mProject slug must consist only of alpha-numeric characters (lowercase) separated by hyphens or underscores.' );
								return false;
							}
						} else {
							console.log( '- \x1b[31mError:', '\x1b[0mProject slug is required.' );
							return false;
						}
					}
				},

				{
					config : 'init.project.repo',
					type: 'input',
					message: 'Project repo?',
					default: null,
					validate: function( value ) {
						if ( value.length ) {
							if ( /^(https:|git@|ssh:)/.test( value ) ) {
								return true;
							} else {
								console.log( ' - \x1b[31mError:', '\x1b[0mPlease provide a valid repo URL (e.g. https:, git@, ssh:).' );
								return false;
							}
						} else {
							console.log( '- \x1b[31mError:', '\x1b[0mProject repo is required.' );
							return false;
						}
					}
				},
			],

			then: function( results, done ) {
				console.log( '\n-', 'Initializing new project:', '\x1b[32m' + results['init.project.name'], '\x1b[0m' );

				grunt.task.run( 'copy:core' );
				grunt.task.run( 'copy:package' );
				grunt.task.run( 'copy:gruntfile' );
				grunt.task.run( 'copy:vvv' );
				grunt.task.run( 'copy:config' );
				grunt.task.run( 'copy:readme' );
				grunt.task.run( 'shell:setup' );
			}
		},
	},
};
