+++
title = "esp-idf macos (en Castellano)"
date = 2023-05-10T14:49:53Z
lastmod = 2023-05-10T14:49:53Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/05/10/esp-idf-macos-en-castellano/"
+++

Hoy, tenemos un tutorial sobre requisitos para odroid y esp32 en macOS ordenadora. Para eso tenemos que obtener estes paquetes.

https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip

Después de terminar la instalación del driver zip tenemos que hacer "reboot" en macos, ahora sigue el artículo.

brew install cmake ninja dfu-util

![](Screenshot-2023-01-17-at-12.08.23-1.png)

En big sur necesitamos de obtener el python3. Primero escribe esto en el terminal:

![](Screenshot-2023-01-17-at-13.25.18.png)

brew install python38

![](Screenshot-2023-01-17-at-13.26.18.png)

sudo easy_install pip

![](Screenshot-2023-01-17-at-13.27.46.png)

sudo pip install esptool

![](Screenshot-2023-01-17-at-13.29.05.png)

Ahora con las tareas hechas tenemos todo para empezar .
