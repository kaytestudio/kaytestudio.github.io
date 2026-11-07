+++
title = "Sony Z Ultra build compilation"
date = 2016-03-12T16:25:23Z
lastmod = 2016-03-12T16:25:23Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2016/03/12/sony-z-ultra-build-compilation/"
+++

Hi there everyone!

 

To get this source code you will to follow as this has been written.

1.) git clone https://github.com/vic3t3chn0/ubuntu_sony_installer.git ubuntu

2.) cd ubuntu

3.) chmod a+x sony.sh && ./sony.sh

4.) try to make source build/envsetup.sh

5.) lunch aosp_6833-userdebug

6.)  But instead wait for my device/sony patch to be released today I think

7.) ls vendor/sony

8.) make -j2 (-j X depends on the number of cpus and threads)

9.) git clone https://github.com/vic3t3chn0/sony_msm8974_ubuntu.git kernel/sony/msm8974

10.) cd kernel/sony/msm8974

11.) make mrproper and then chmod a+x build_kernel.sh

12.) ./build_kernel.sh

13.) finally connect to Ubuntu, the z Ultra and make sudo adb reboot bootloader

14.) sudo fastboot flash boot boot.img

15.) vol - + power to get download mode and flash system.img and vivid.tar.gz file.

But before 15 step I will give a flasher. Then you can use for this purpose only.

I hope this tutorial an idiot-proof.

 

Best Regards.
