---
id: build
title: Build
sidebar_label: Build
slug: /build
---

If you want to build the docker image on your system then make sure you have both Docker and Git installed on your system.

First we need to clone our code to do this run ``` git clone https://github.com/unofficial-skills/alpha-video ```. This dowload the code to the system. We need to open that directory ``` cd alpha-video ``` We are now in our code directory you can now run ``` docker build . -t alpha-video ```. Once this command has completed then we can runn it with the command ``` docker run -d --restart unless-stopped --name alpha-video -p 5000:5000 -e subdomain=changeme alpha-video:latest ```

The part of the command which says changeme, change this to somthing unique to you. If you choose something generic like youtube then someone else will probably have already claimed the domain. A good example is andrewstech7863 . After you have changed that then run the command. It should start downloading multiple files and give you an output such as ``` 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604 ```. This means the code has been installed. Now we need to see if our unique domain was avalible.

Run docker logs followed by the number you just copyed. For example ``` docker logs 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604. ```

This should show the logs of the skill and at the bottom you should see the line your url is: Followed by the url. If your unique domain is available it should dissplay your unique-domain followed by .loca.lt. If it was not available it would have generated a random one. If the domain is a random one then it will change on every startup.
