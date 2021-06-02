echo please wait 1 minute for url to be saved to system
sleep 30s
cd ~/.bst/
if [ ! -d /data ]; then
  mkdir /data
fi
echo Done
cp config /data/config
cd /app
