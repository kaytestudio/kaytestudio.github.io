+++
title = "Data Recovery"
date = 2022-06-03T14:49:43Z
lastmod = 2022-06-03T14:49:43Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/06/03/data-recovery/"
+++

It's coder by gleentech again. Today, I will talk about data recovery.

I opened a store to fix and build computers. I had in my hands one acer aspire to make a backup. This aspire 5050 had an issue, it's old too. I needed to recover data from there.

First I tried ubuntu, fedora, and Gentoo in USB to recover the data inside. In the end, I found Debian version 11. I flashed the iso into a USB drive. After the flashing completion, I ran it on Acer's laptop. I booted the live iso, I installed it, then I did some steps to get it on.

This version worked because I made a few changes.

Why?

This Acer had an issue with wifi, HDD SATA corruption, and fat32 second partition. I needed to install Debian because the Windows 7 got corrupted. The fat32 shouldn't even exist but in NTFS. I pulled out the fat32 into an ext4 partition.

To copy this data. I needed to compile the CPU, Wi-Fi, ati Radeon GPU, and trackpad. To get the hands-on that.

As this laptop is old, I needed to make some research. I am doing some research to have this old laptop working with Microsoft, instead of Linux. I made a tailored distro just for data recovery.
