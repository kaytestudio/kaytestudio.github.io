+++
title = "nativescript jdk11"
date = 2022-05-09T17:31:11Z
lastmod = 2022-05-09T17:31:11Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/05/09/nativescript-jdk11/"
+++

Hello it's coder by gleentech. Today the day tip is how to install openjdk 11 with brew to get nativescript worked. I needed to do this because I am coding a professional application. Then this was my solution.

``` bash
brew cask install java
```

``` bash

 brew tap adoptopenjdk/openjdk
```

``` bash
 brew cask install adoptopenjdk11
```

``` bash
export JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)
export JAVA_11_HOME=$(/usr/libexec/java_home -v11)

alias java8='export JAVA_HOME=$JAVA_8_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
```

Do everything on ~/.profile then reload the file

``` bash
source ~/.profile
```

Then type java11 on terminal and type at last

java11 or java8
