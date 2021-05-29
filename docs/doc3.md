---
id: doc3
title: Install
sidebar_label: Install
---

Once Docker is fully installed and running. Open a terminal on your device.


``` docker run -d --restart unless-stopped --name alpha-video -p 5000:5000 -p 9001:9001 andrewstech/alpha-video:latest ```


That command downloads the latest version of the code and runs it in a virtual environment.

It should start downloading multiple files and give you an output such as ``` 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604 ```. This means the code has been installed. Now we need to see our endpoint domain.

Run ``` docker logs ``` followed by the number you just copyed. For example ``` docker logs 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604 ```.

This should show the logs of the skill and at the bottom you should see the line ``` your url is: ``` Followed by the url.

Copy this down as you will need this later. 





