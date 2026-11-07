+++
title = "Sega Saturn SDK"
date = 2018-11-22T19:59:23Z
lastmod = 2018-11-22T19:59:23Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2018/11/22/sega-saturn-sdk/"
+++

In due my case studies with OpenGL, WebGL and Vulkan API. In the last years and moths of study to get an Open System with C++ and try to reboot systems mostly vintage systems such as Sega Saturn and Gameboy Advance.

I found a reasonable tool called Jo-Saturn. I was playing around and still do it.

\#include \<jo/jo.h\>

enum\

[TABLE]

void            my_draw(void)\
{\
    jo_sprite_draw3D(0, 0, 0, 500);\
}

void            jo_main(void)\
{\
    jo_core_init(JO_COLOR_Black);\
    jo_sprite_add_tga("TEX", "A.TGA", JO_COLOR_Transparent);\
    jo_core_add_callback(my_draw);\
    jo_core_run();\
}

See you soon for a Gameboy Advance and another one about spectrum.\
