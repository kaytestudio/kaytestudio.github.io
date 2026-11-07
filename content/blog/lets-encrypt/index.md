+++
title = "Let's Encrypt"
date = 2022-04-17T10:51:20Z
lastmod = 2022-04-17T10:51:20Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/04/17/lets-encrypt/"
+++

Today, coder by gleentech will talk about let’s encrypt under Ubuntu 20.04, how to deploy it for a safety https procedure.

What is let’s encrypt? Let’s encrypt is a ssl certificate generation mode, which works as nonce procedure. It is good to encrypt the apache2 or nginx websites.

The lets encrypt is a good way and open source to have or generated certificate. Every 30 day you can renew your certification.

We will teach here how to add letsencrypt.

``` bash
sudo apt install python3-certbot-nginx
sudo apt install python3-certbot-apache
sudo ufw status
sudo ufw enable
sudo ufw status
sudo ufw allow 'Apache Full'
sudo ufw delete allow 'Apache'
sudo ufw status
sudo certbot --apache
sudo ufw allow 80
sudo ufw allow 443
sudo apt install letsencrypt
sudo systemctl status certbot.timer
sudo certbot certonly --standalone --agree-tos --preferred-challenges http -d domain-name.com
For nginx
sudo certbot --nginx --agree-tos --preferred-challenges http -d domain-name.com
For apache2
sudo certbot --apache --agree-tos --preferred-challenges http -d domain-name.com
sudo certbot certonly --manual --agree-tos --preferred-challenges dns -d
```

domain-name.com -d \*.domain-name.com

To block:

``` bash
sudo ufw deny from 1.2.3.4 to any
sudo ufw deny from 1.2.3.0/24 to any
sudo ufw insert 1 deny from 2.3.4.5 comment 'block hacker'
sudo ufw insert 1 reject from 192.168.5.100
sudo sh -c 'apt update && apt upgrade && apt install gufw'
```
