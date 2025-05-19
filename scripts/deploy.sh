#!/bin/bash

echo -n "Enter password for remote server: "
read -s PASSWORD
echo ""

sshpass -p "$PASSWORD" ssh julien@54.37.8.207 bash << EOF
  cd ./Urluberlu &&
  git pull &&
  npm install &&
  npm run build &&

  # Deploy to the checklist subdomain's document root
  echo "$PASSWORD" | sudo -S rm -rf /var/www/urluberlu/* &&
  echo "$PASSWORD" | sudo -S cp -r dist/* /var/www/urluberlu/ &&
  echo "$PASSWORD" | sudo -S cp .htaccess /var/www/urluberlu/ &&
  echo "$PASSWORD" | sudo -S chown -R www-data:www-data /var/www/urluberlu &&
  echo "$PASSWORD" | sudo -S chmod -R 755 /var/www/urluberlu &&
  echo "$PASSWORD" | sudo -S systemctl restart apache2
EOF
