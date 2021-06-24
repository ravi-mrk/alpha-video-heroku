---
id: update
title: Auto Update
sidebar_label: Auto Update
---

You can now setup auto updates for the skill and its easy to do so. Open a terminal on your device and type the following command.  
``` docker run -d --name dockupdater --restart unless-stopped -v /var/run/docker.sock:/var/run/docker.sock dockupdater/dockupdater ```.
