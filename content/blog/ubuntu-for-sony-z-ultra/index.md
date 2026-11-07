+++
title = "Ubuntu for Sony Z Ultra"
date = 2016-02-07T09:01:04Z
lastmod = 2016-02-07T09:01:04Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2016/02/07/ubuntu-for-sony-z-ultra/"
+++

To build this image successful, it will be necessary two repositories under my github.

Everyone will need to go to github.com/vicetechno then git clone the kernel msm8974 sony and sony installer.

After that and repo sync:

- cd phablet
- source build/envsetup.sh
- lunch aosp_c6833-userdebug
- make or make -j n (n = number of threads capable on cpu)

In terminal too:

``` bash
sudo adb kill-server
sudo adb start-server
adb devices
adb reboot bootloader
sudo fastboot flash boot boot.img
sudo fastboot reboot
```

Go to recovery and flash Ubuntu with my flasher tool on github.

``` bash
chmod a+x Ubuntu-rootstock-installer
sudo ./Ubuntu-rootstock-installer Ubuntu-preinstalled.tar.gz system.img
```

In the end it will reboot, then Ubuntu bootup.

The new changes I will test it today and I will release the files too.
