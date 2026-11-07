+++
title = "AiryxOS on an HP Part 1"
date = 2022-01-29T13:32:31Z
lastmod = 2022-01-29T13:32:31Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/01/29/airyxos-on-a-hp/"
+++


Hello readers. Coder by Gleentech came with a new article. When I read about this new OS to be an openness MacOS gave me a lot of attention.

After 4 days of managing it I decided to install on my HP 2015 laptop instead of my mbp. I don't want to mess up my mbp. Today, I have drm-kmod working, a network manager too. 

What I have done for now?

I installed it from the airyxos.app from the USB live session. After finishing and after boot I connectd my wired cable.

 

I done:

-\> sudo portsnap update && sudo portsnap extract

-\> git clone https://vic3t3chn0/networkmgr && cd networkmgr

-\> sudo `python3.8 setup.py install`

`-> ``pw groupmod wheel -m username`

`-> sudo cp start-network /usr/sbin && sudo chmod +x /usr/sbin/start-network`\

-\> git clone https://github.com/freebsd/drm-kmod.git

-\> cd drm-kmod && sudo make install clean

 

I will keep update this topic on live.

` `
