<?php
/**
 * Sanitize the database before download.
 */

// Don't ever santize the database on the live environment. Doing so would
// destroy the canonical version of the data.
if ( defined( 'PANTHEON_ENVIRONMENT' ) && ( PANTHEON_ENVIRONMENT !== 'live' ) ) {
	require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';

	global $wpdb;

	$wpdb->query( "UPDATE wp_users SET user_email = CONCAT(user_login, '@localhost'), user_pass = MD5(CONCAT('MILDSECRET', user_login)), user_activation_key = '';" );
}
