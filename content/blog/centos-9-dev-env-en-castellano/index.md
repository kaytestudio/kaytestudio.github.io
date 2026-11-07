+++
title = "centos 9 dev env (en Castellano)"
date = 2023-05-23T08:24:54Z
lastmod = 2023-05-23T08:24:54Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/05/23/centos-9-dev-env-en-castellano/"
+++

Hola Lectores,

Hoy, el tema serán como obtener un servidor centos 9 para desenrollar rpm.

``` bash
sudo yum install rpm-build
sudo yum install gcc make
```

Ahora, tenemos que crear un directorio para hacer todo trabajo. Estos ejemplos son con stream.

``` bash
sudo yum install redhat-rpm-config
mkdir -p ~/rpmbuild/{BUILD,RPMS,SOURCES,SPECS,SRPMS}
```

Tenemos que crear en el directorio (\$HOME) para prevenir el estropiamento en la "root".
