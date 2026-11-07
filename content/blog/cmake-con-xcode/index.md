+++
title = "cmake con XCode"
date = 2024-01-08T10:39:33Z
lastmod = 2024-01-08T10:39:34Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2024/01/08/cmake-con-xcode/"
+++

Hola Lectores,

Hoy, tenemos una lección sobre cmake fichero con XCode. Ha sido testeado con un m2 "motherboard".

![](Screenshot-2024-01-08-at-09.41.29.png)

Para nosotros, tenemos la instalación. Para tí tienes que hacer la instalación.

![](Screenshot-2024-01-08-at-09.42.46.png)

Ahora:

![](Screenshot-2024-01-08-at-09.44.19.png)

``` text
mulle-xcode-to-cmake -b export shadow.xcodeproj > CMakeLists.txt
```

![](Screenshot-2024-01-08-at-09.46.30.png) ![](Screenshot-2024-01-08-at-09.47.21.png)

Ahora es un "boilerplate", que necesita de hacer cambios.

``` bash
mkdir build && cd build
cmake ../
make
```

Cada vez que hacemos de cambio, tenemos que actualizar el CMakeLists.txt para cada "build", tenemos que hacer siempre

``` bash
cd .. 
rm -rf build
mkdir build && cd build
cmake ../
make 
```
