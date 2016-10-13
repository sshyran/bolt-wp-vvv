<?php
/**
 * Local configuration overrides.
 *
 * @package Pantheon Skeleton
 */

define( 'DB_NAME', 'pantheonskeleton' );
define( 'DB_USER', 'pantheonskeleton' );
define( 'DB_PASSWORD', 'pantheonskeleton' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

define( 'WP_CACHE', false );
define( 'WP_CACHE_KEY_SALT', 'pantheonskeleton' );

define( 'WP_DEBUG', true );
define( 'SAVEQUERIES', true );
define( 'SCRIPT_DEBUG', true );
define( 'STYLE_DEBUG', true );
define( 'CONCATENATE_SCRIPTS', false );
define( 'COMPRESS_SCRIPTS', false );
define( 'COMPRESS_CSS', false );

define( 'FORCE_SSL_LOGIN', false );
define( 'FORCE_SSL_ADMIN', false );

if ( isset( $_SERVER['HTTP_HOST'] ) ) {
	define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] );
	define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp' );
	define( 'WP_CONTENT_DIR', dirname( dirname( __FILE__ ) ) . '/wp-content' );
	define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/wp-content' );
}
