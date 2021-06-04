#!/bin/sh
echo "          _      _____  _    _           __      _______ _____  ______ ____  "
echo "    /\   | |    |  __ \| |  | |   /\     \ \    / /_   _|  __ \|  ____/ __ \ "
echo "   /  \  | |    | |__) | |__| |  /  \     \ \  / /  | | | |  | | |__ | |  | |"
echo "  / /\ \ | |    |  ___/|  __  | / /\ \     \ \/ /   | | | |  | |  __|| |  | |"
echo " / ____ \| |____| |    | |  | |/ ____ \     \  /   _| |_| |__| | |___| |__| |"
echo "/_/    \_\______|_|    |_|  |_/_/    \_\     \/   |_____|_____/|______\____/ "

echo "For support please visit the Github Project or send a message on our Discord server."

FILE=/data/config
if [[ -f "$FILE" ]]; then
    echo "$FILE exists."
    mkdir -p ~/.bst/
    cp /data/config ~/.bst/config

fi

FILE2=/data/database.db
if [[ -f "$FILE2" ]]; then
    echo "$FILE2 exists."
else
    cp database.db /data/database.db

fi


if [ -z "$localtunnel" ]
then
      export localtunnel=false
else
      echo "startup"
fi
echo "set nameserver to 1.1.1.1"
echo nameserver 1.1.1.1 > /etc/resolv.conf
echo "Starting"
/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf
bash
