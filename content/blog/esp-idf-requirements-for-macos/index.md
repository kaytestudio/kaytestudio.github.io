+++
title = "esp-idf requirements for macOS"
date = 2023-01-17T13:42:14Z
lastmod = 2023-01-17T13:42:14Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/01/17/esp-idf-requirements-for-macos/"
+++

Today, we will see how to install the requirements for odroid and esp32 on a macOS machine. But you must install

https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip

After installation of that zip driver and reboot macos, you can follow the article.

``` bash
brew install cmake ninja dfu-util
```

![](Screenshot-2023-01-17-at-12.08.23-1.png)

On big sur you must have python3. But first type this on terminal:

![](Screenshot-2023-01-17-at-13.25.18.png)

``` bash
brew install python38
```

![](Screenshot-2023-01-17-at-13.26.18.png)

``` bash
sudo easy_install pip
```

![](Screenshot-2023-01-17-at-13.27.46.png)

``` bash
sudo pip install esptool
```

![](Screenshot-2023-01-17-at-13.29.05.png)

I have done these steps already. You must type them on terminal or iTerm2.

These procedures must be done before flashing or coding any kind of source code.
