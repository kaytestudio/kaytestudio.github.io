+++
title = "Bash on Ubuntu on Windows – First tests"
date = 2016-09-18T15:38:55Z
lastmod = 2016-09-18T15:38:55Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["bash", "ubuntu", "windows", "x11", "codermag archive"]
originalUrl = "https://codermag.gleentech.com/2016/09/18/bash-on-ubuntu-on-windows-first-tests/"
+++

Hi!

I'm been using Bash on Ubuntu on Windows in the last days. I think as a thought this software is like an Unix-like userland.

 

I got successful running ubuntu-sdk, now I'm testing npm and nodejs also python.

First of all I got an account with my name through these steps:

- adduser pedro
- adduser pedro sudo
- su - pedro

Then in the bash I ran apt install nodejs npm

- node -v
- npm install -g node-red cordova

Besides I typify  nano /etc/apt/sources.list and change trusty for xenial

- apt update
- apt upgrade

Everyone can test to run XMing export DISPLAY=localhost:0.0 and run for instance ubuntu-sdk & or other app like xeyes &

By the way I think chromium browser works too.

I'l update my tests.

 

Thanx
