+++
title = "macOS terminal"
date = 2023-09-13T08:36:07Z
lastmod = 2023-09-13T08:36:26Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/09/13/macos-terminal/"
+++

[](https://codermag.gleentech.com/wp-admin/edit.php?post_type=post)[](https://codermag.gleentech.com/2023/08/05/macos-terminal-passwords-and-users/)

# macOS terminal llaves y users

Hola Lectores,

Hoy, ustedes a van aprender como hacer un terminal para gestión de llaves.

Empezamos por escribir password para cambiar de llave.

- passwd

Cómo listar un cliente en macOS:

- dscl . list /Users

&nbsp;

- `dscl . list /Users | grep -v '_'`

![This image has an empty alt attribute; its file name is Screenshot-2023-08-08-at-12.02.34.png](Screenshot-2023-08-08-at-12.02.34.png)

Resultados:

Listar todos clientes

![This image has an empty alt attribute; its file name is Screenshot-2023-08-08-at-12.03.50.png](Screenshot-2023-08-08-at-12.03.50.png)

Solo user

![This image has an empty alt attribute; its file name is Screenshot-2023-08-08-at-12.04.57.png](Screenshot-2023-08-08-at-12.04.57.png)
