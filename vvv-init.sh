#!/bin/bash

set -e

printf "## -------------------------------------------------- ##"
printf "Setting up: %s\n" $(basename $(pwd))

# Export required PHP constants into Bash.
printf "Creating database, if we don't already have one."
eval $(php -r '
	require_once( "wp-config-local.php" );
	foreach( explode( " ", "DB_NAME DB_HOST DB_USER DB_PASSWORD DB_CHARSET" ) as $key ) {
		echo $key . "=" . constant( $key ) . PHP_EOL;
	}
')
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS $DB_NAME CHARACTER SET $DB_CHARSET"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO $DB_USER@localhost IDENTIFIED BY '$DB_PASSWORD';"

if ! $(wp core is-installed --allow-root); then
	wp --allow-root core install --url="http://bolt.local" --title="Bolt" --admin_user="admin" --admin_password="password" --admin_email="admin@127.0.0.1"
fi

printf "Finished setting up: %s\n" $(basename $(pwd))
printf "## -------------------------------------------------- ##"
