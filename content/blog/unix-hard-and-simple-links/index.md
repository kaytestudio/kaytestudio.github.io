+++
title = "UNIX – Hard and Simple links"
date = 2023-07-18T13:31:56Z
lastmod = 2023-07-18T13:31:56Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/07/18/unix-hard-and-simple-links/"
+++

Hello again!

Today, we are going to learn about hard or simple links on a POSIX system.

What is a hard link?

A hard link is used by a root mode. Be careful with EOACCESS. We recommend soft links, this links are user mode.

What is a user mode?\
A user mode is a link made by our account on the system. With soft link, we can build several links of the original binary or text file.

Example:\
sudo ln -s /home/user/text.txt user1.txt

This example is very back because can be an EOACCESS error.

Soft link:\
ln -s /home/user/text.txt /home/user/text1.txt

With soft links we can make more links, it's easier.
