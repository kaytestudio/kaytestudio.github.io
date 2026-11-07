+++
title = "nativescript setup"
date = 2022-01-05T12:46:55Z
lastmod = 2022-01-05T12:46:55Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/01/05/nativescript-setup/"
+++

Hello again! It's coder by gleentech. today we will learn nativescript setup and installation.

As I referred before we here at coder we will have some tutorials, guidance about nativescript with vuejs.

First of all in your mac go to terminal or iterm2.

``` bash
npm install -g nativescript
```

then we need to setup a folder for nativescript vue.

``` bash
tns create vue-example --vue
```

We need to have the android SDK 30 and higher on the path too. We need xcode-select active too.

To check your setup you should do this:

``` bash
tns doctor
```

In the end we can run the application

``` bash
tns run ios | android
```
