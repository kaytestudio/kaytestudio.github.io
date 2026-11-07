+++
title = "ringsCE status"
date = 2024-01-09T09:49:19Z
lastmod = 2024-01-09T09:49:22Z
author = "Kayte Studio"
categories = ["Alpha"]
tags = ["ringsCE archive"]
originalUrl = "https://ringscejs.gleentech.com/2024/01/09/ringsce-status/"
+++

Hello readers,

Today, we are going to learn how to build the proof of concept of ringsCE framework and its API.

``` text
mkdir poc && cd poc
git clone https://github.com/ringsce-editor editor
git clone https://github.com/west west
```

![](Screenshot-2024-01-09-at-09.37.48-1024x509.png)

``` text
cd editor
cd intel
open project1.lpi 
```

![](Screenshot-2024-01-09-at-09.40.38-1024x559.png)

``` text
compile
run without debugging 
```

![](Screenshot-2024-01-09-at-09.42.19-1024x530.png)

Now, we are going to see how to build a qt6 application for launcher. The CMakeLists.txt is not yet implemented. Next ticket to do.

``` text
cd $USER/Projects/poc/west/tools/launcher
open launch.pro (this will open qt creator on a macOS Sonoma)
```

![](Screenshot-2024-01-09-at-09.46.10-1024x590.png)

``` text
build
run
```

![](Screenshot-2024-01-09-at-09.47.25.png)

We are working on a new alpha called 0.5, where we can see an API demo, a Lua implementation, on 0.6 alpha we will see a UDP Server for MMO and RPG server localhost.
