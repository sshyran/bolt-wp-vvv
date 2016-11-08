<?php
/**
 * Local configuration overrides.
 *
 * @package Pantheon Skeleton
 */

define( 'DB_NAME', 'bolt' );
define( 'DB_USER', 'bolt' );
define( 'DB_PASSWORD', 'bolt' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

define( 'WP_CACHE', false );
define( 'WP_CACHE_KEY_SALT', 'bolt' );

define( 'WP_DEBUG', true );
define( 'SAVEQUERIES', true );
define( 'SCRIPT_DEBUG', true );
define( 'STYLE_DEBUG', true );
define( 'CONCATENATE_SCRIPTS', false );
define( 'COMPRESS_SCRIPTS', false );
define( 'COMPRESS_CSS', false );

define( 'FORCE_SSL_LOGIN', false );
define( 'FORCE_SSL_ADMIN', false );

define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/wp-content' );

if ( isset( $_SERVER['HTTP_HOST'] ) ) {
	define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] );
	define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp' );
	define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp-content' );
}
