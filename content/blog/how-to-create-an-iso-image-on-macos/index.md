+++
title = "how to create an iso image on macOS"
date = 2023-02-15T16:30:51Z
lastmod = 2023-02-15T16:30:51Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/02/15/how-to-create-an-iso-image-on-macos/"
+++

Hello readers,

Today, we are going to learn how to make an iso image on macOS.

First of all, call the disk utility.

![](Screenshot-2023-02-15-at-16.25.42.png)

Then go to file. New as image.

![](Screenshot-2023-02-15-at-16.26.57.png) ![](Screenshot-2023-02-15-at-16.27.44.png) ![](Screenshot-2023-02-15-at-16.28.10.png)

Now finally, on the terminal type the following command.

``` bash
cd Downloads
hdiutil makehybrid -iso -joliet -o -FILENAME.iso FILENAME.cdr
```
