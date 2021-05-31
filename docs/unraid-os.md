---
id: unraid-os
title: Unraid
sidebar_label: Unraid OS
---

To install Alpha-Video on your Unraid machine you need to open the Apps-Tab which you can access if you have Community-Applications (CA) installed.

* Enter in the Search Alpha-Video to find the Application.
* Select the Image by Kippenhof and Press Download.

In the Template you will find 1 Variable, 1 Port and one Path.

* The Port you configure doesn't matter, since the App is using the Service [bespoken](https://bespoken.io).


* The Subdomain will be printed out in the Container-Console.

* The Path is needed to save the Configuration of [bespoken](https://bespoken.io) to save the generated url.


# Running over your Own Subdomain


To run the Application over your own Domain, you need an Reverse-Proxy on Port 443 with SSL Cerrtificates.

If you just want it to work, here are some Template-Configurations:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="Nginx"
  values={[
    {label: 'Nginx', value: 'Nginx'},
    {label: 'Nginx Proxy Manager', value: 'Nginx Proxy Manager'},
    {label: 'HAProxy', value: 'HAProxy'},
	{label: 'Traefik', value: 'Traefik'},
  ]}>
  <TabItem value="Nginx">


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


  
  </TabItem>
  <TabItem value="Nginx Proxy Manager">Coming Soon 🕒</TabItem>
  <TabItem value="HAProxy">Coming Soon 🕒</TabItem>
  <TabItem value="Traefik">Coming Soon 🕒</TabItem>
</Tabs>;

```


After you are done with the Configuration you can hit "Apply" and Continue [HERE](https://alpha-video.andrewstech.me/docs/doc4)




(You can find my Template-Repository [here](https://github.com/Kippenhof/docker-templates))


*Written by: [Kippenhof](https://github.com/Kippenhof)*
