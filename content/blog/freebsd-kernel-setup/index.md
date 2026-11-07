+++
title = "FreeBSD kernel setup"
date = 2022-05-26T10:12:01Z
lastmod = 2022-05-26T10:12:01Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/05/26/freebsd-kernel-setup/"
+++

Hello again. It's coder by gleentech. Today, we are going to set up a FreeBSD kernel dev machine.

First of all, we must see the devices:

-\> sudo dmesg

-\> sudo psm

-\> sudo apropos

With those two commands, we can see our devices. In Windows is there a machine device application. Here we must check them with a terminal. The last command is useful too.

It's there another good tool also, which is :

-\> sudo pciconf -lv

All the tools are good to know our machine. I used them for my HP. For instance, I used them to check my realtek wifi adapter built-in. Not working yet. I am studying a way to fix it.

The FreeBSD comes with everything to build our kernel. cmake, make, clang, gdb but I made my own gdb. Based on the code from the official repository.

FreeBSD kernel

type this on the terminal:

-\> `svnlite checkout https://svn.freebsd.org/base/releng/13.0 /usr/src`

or:

-\> git clone https://github.com/freebsd/freebsd-src.git /usr/src

Now you must type always on the terminal

-\> cd /usr/src

-\> make buildkernel KERNCONF=*MYKERNEL*

-\> make installkernel KERNCONF=*MYKERNEL*

\
You must do this always with root, sudo account. Next week I will teach how to set up from the ground up a FreeBSD machine to do all this.
