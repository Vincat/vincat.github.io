+++
archetype = "chapter"
title = "Homelab"
weight = 200
+++


![Servers](/images/server1.jpg)  

This section will contain my notes and configuration files on my home lab.  

### Environment  

As you can see from the picture, we are not talking about some powerful, power hungry set up.  
For the home user with modest requirements, i.e less than 4 users, then not much more than what is displayed in the image is all you will need.  
I have 3 HPEliteDesktop, and a bunch of Raspberry PI's, not all running at the same time. Due to my experimental nature, there are about 3 running constantly, the others are for experimentation purposes and come and go as needed.  
The cost of the HP EliteDesktop are at this time of writing (late 2023) is about `$140` AU off Ebay. The Raspberry Pi's I buy new, I have a few Pi3, 4 and one 5.  
As for power consumption, It is less than 10W, so should not make much difference to you power bill.  

### Internet connection  

I have a cable connection, with a relatively stable IP address, however if power is interrupted to the modem, then when it restarts I may end up with another IP address. The usual ports are blocked, so no running services from my IP, and I am behind a CGNAT network.  

## What OS am I using?
For servers it is predominantly Ubuntu Server 22.04 LTS, on some Raspberry pi devices it is Raspbian.  


## What services do I run?  

- Nextcloud
- PiHole with Pivpn
- Home Assistant
- lxd(Incus)
- Docker
  - Traefik
  - Mealie
  - Paperless-ngx
  - Nginx
  - Freshrss
  - Linkding
  - Photoprism



