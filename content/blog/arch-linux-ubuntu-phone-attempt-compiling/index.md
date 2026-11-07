+++
title = "Arch Linux Ubuntu-phone attempt compiling"
date = 2016-05-22T15:22:07Z
lastmod = 2016-05-22T15:22:07Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2016/05/22/arch-linux-ubuntu-phone-attempt-compiling/"
+++

Hi there everyone since a long time!

 

A new attempt here.

 

I tried this at home in the last days.

 

    mkdir -p ~/bin

    mkdir -p ~/android/omni

    curl http://commondatastorage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
     chmod a+x ~/bin/repo

    echo "export PATH=~/bin:$PATH" >> ~/.bashrc

    git config --global user.email "your@email.address"
     git config --global user.name "Your Name"

    repo init -u https://code-review.phablet.ubuntu.com/aosp/platform/manifest -b personal/w-ondra/xperia-5.1.1_r36 -g all,-darwin,-qcom_msm8x26,-qcom_msm8x27,-qcom_msm8x74,-x86,-omap3,-omap4,-omap4-aah,-manta,-grouper

    repo sync -j4 -f

    source build/envsetup.sh

    lunch - choose c6833

    make

    this is optional step, if you want to use specific channel to build ubuntu root from, for example . ubuntu/prebuilts/prepare-ubuntu-packages-for-build -d generic -c rc-proposed/ubuntu-pd

```
make ubunturootfsimage  -j8 -> build will downloads ubuntu rootfs and custom packages for default channel rc-proposed/ubuntu channel
```

```
```

```
```

 

I tried it in Arch Linux and I couldn't go further, for instance at the start I got an error in -lgcc

It's odd. Keep trying.

 

Thank you.
