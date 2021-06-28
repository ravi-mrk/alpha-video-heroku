---
id: unraid
title: Unraid
sidebar_label: Unraid
---

import useBaseUrl from '@docusaurus/useBaseUrl';


Um Alpha-Video auf Unraid zu installieren, benötigt ihr die Community-Applications (CA) App, welche ihr [hier](https://forums.unraid.net/topic/38582-plug-in-community-applications/) bekommt.

* Sucht nach Alpha-Video in der Suche des "Apps" Tabs.
* Wählt die Version von Kippenhof aus und clickt den Download-Pfeil.

In dem Template findet ihr 1 Variable, 1 Port und einen Pfad.

* unter dem Angegebenen Port könnt ihr die Seite der App zu Testzwecken oder beim nutzen [eines Reverse-Proxys und einer Custom domein](##-nutzen-einer-eigenen-subdomain) erreichen. sonst ist dieser Egal, da die App den Service [bespoken](https://bespoken.io) nutzt.


* Falls ihr bespoken nutzen wollt, wird die Subdomain im Log des Containers angezeigt.

* unter dem eingegebenem Pfad wird die Config von [bespoken](https://bespoken.io) gespeichert, um die URL zu behalten.

Wenn ihr fertig seid drückt "Apply" und setzt die Anleitung [hier](doc4.md) fort.

## Nutzen einer eigenen Subdomain


Um die Anwendung über eine eigene Domain zu betreiben, benötigt ihr einen Reverse-Proxy auf Port 443 mit  SSL Zertifikaten für eure Domain.

Wenn ihr es einfach zu laufen bekommen wollt, könnt ihr diese Endpoint-Config gerne als Vorlage nutzen und eure Werte eintragen:


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

In Nginx Proxy Manager clickt einfach den "Hosts" button und wählt proxy hosts im dropdown-menü aus. Wenn die Seite geladen ist clickt  "Add a proxy Host".

In einem neuen Fenster wird das Popup wie unten gezeigt. Tragt eure Domain oder Subdomain in die Domain-Box ein. Stellt sicher, dass das Scheme auf http und Foward hostname/Ip is die IP der laufenden alpha-video instanz. Setzt den Port auf 5000 oder den im Template ausgewählten. Stellt ebenfalls sicher, dass die Websockets aktiviert sind.

<img alt="ports" src={useBaseUrl('/img/port-photo.PNG')} />

Nun klickt den SSL tab und wält new certificate und force SSL. Wählt nun eine E-Mail für das Zertifikat und akzeptiert die Box. Nun Drückt auf Save, und es sollte alles Korrekt funktionieren. Hier ein Beispiel:

<img alt="ssl" src={useBaseUrl('/img/ssl.PNG')} />

(Falls es nicht Funktioniert, probiert einen Neustart des Containers)

TODO: Adding HAProxy & Traefik



Wenn ihr fertig setzt die Anleitung [hier](doc4.md) fort.




(You can find my Template-Repository [here](https://github.com/Kippenhof/docker-templates))


*Written by: [Kippenhof](https://github.com/Kippenhof)*
