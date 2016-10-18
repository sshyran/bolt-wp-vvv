<?php
/**
 * Debug Pantheon when in development environment.
 */
if ( in_array( $_ENV['PANTHEON_ENVIRONMENT'], Array( 'dev' ) ) ) {
	define( 'WP_DEBUG', true );
	define( 'SAVEQUERIES', true );
	define( 'SCRIPT_DEBUG', true );
	define( 'STYLE_DEBUG', true );
	define( 'CONCATENATE_SCRIPTS', false );
	define( 'COMPRESS_SCRIPTS', false );
	define( 'COMPRESS_CSS', false );
	define( 'JETPACK_DEV_DEBUG', true );
}
