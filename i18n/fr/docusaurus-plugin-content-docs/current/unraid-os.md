---
id: unraid
title: Unraid
sidebar_label: Unraid
---

import useBaseUrl from '@docusaurus/useBaseUrl';


To install Alpha-Video on your Unraid machine you need to open the Apps-Tab which you can access if you have Community-Applications (CA) installed.

* Enter in the Search Alpha-Video to find the Application.
* Select the Image by Kippenhof and Press Download.

In the Template you will find 1 Variable, 1 Port and one Path.

* The Port you configure doesn't matter, since the App is using the Service [bespoken](https://bespoken.io).


* The Subdomain will be printed out in the Container-Console.

* The Path is needed to save the Configuration of [bespoken](https://bespoken.io) to save the generated url.


## Running over your Own Subdomain


To run the Application over your own Domain, you need an Reverse-Proxy on Port 443 with SSL Cerrtificates.

If you just want it to work, here are some Template-Configurations:


### Nginx
```
  server {
    server_name alpha-video.example.com;
    listen 80;
    return 301 https://$server_name$request_uri;
}

server {
    server_name alpha-video.example.com;
    listen 443 ssl http2;
    include /config/nginx/ssl.conf;


    location / {
        set $alpha_video http://192.168.1.x:5000;
        proxy_pass $alpha_video;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Protocol $scheme;
}

}
```
### Nginx Proxy Manager

In Nginx Proxy Manager click the Hosts button and choose proxy hosts from the dropdown. When the page loads up click Add a proxy Host.

A new window will popup as shown below. Put your domain or subdomain in the domain box. Make sure the Scheme is set to http and the Foward hostname/Ip is the IP for your system running alpha-video. Set the port to 5000. Finally make sure websocket support is on.

<img alt="ports" src={useBaseUrl('/img/port-photo.PNG')} />

Now click the SSL tab and choose Request new certificate and force SSL. Enter your email in the email for let's encrypt box and tick the agree box. Now click save and it should be done and working. An example is shown bellow.

<img alt="ssl" src={useBaseUrl('/img/ssl.PNG')} />

TODO: Adding HAProxy & Traefik



After you are done with the Configuration you can hit "Apply" and Continue [HERE](https://alpha-video.andrewstech.me/docs/doc4)




(You can find my Template-Repository [here](https://github.com/Kippenhof/docker-templates))


*Written by: [Kippenhof](https://github.com/Kippenhof)*
