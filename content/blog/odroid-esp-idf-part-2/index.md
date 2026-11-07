+++
title = "Odroid ESP idf Part 2"
date = 2019-09-27T13:56:57Z
lastmod = 2019-09-27T13:56:57Z
author = "Kayte Studio"
categories = []
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/09/27/odroid-esp-idf-part-2/"
+++

![](play_game.jpg)

In this part i will explain how to develop firmware for Odroid Go with an esp32 arduino builtin.

``` bash
git clone https://github.com/othercrashoverride/odroid-go-firmware.git -b factory
cd odroid-go-firmware/tools/mkfw
make
```

``` bash
sudo apt install ffmpeg
ffmpeg -i 86x48px-Arduino_Logo.png -f rawvideo -pix_fmt rgb565 tile.raw
```

``` bash
./mkfw test tile.raw 0 16 1048576 app Hello_World.ino.bin
```

``` bash
mv firmware.fw Hello_World.fw
```

Press on B button while is off, then press on while B button is being pressed, then flash with start button the firmware.

Make a data folder in \*.bin

``` text
mkspiffs -c ./data -b 4096 -p 256 -s 0x100000 spiffs.bin
```

Two projects in the same \*.bin

``` bash
./mkfw test tile.raw 0 16 1048576 app Weather_Station.ino.bin 1 130 1048576 "spiffs" spiffs.bin
cp firmware.fw Weather_Station.fw
```
