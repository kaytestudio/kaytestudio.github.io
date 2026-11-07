+++
title = "CentOS 9 build a rpm dev-env"
date = 2023-02-07T11:15:58Z
lastmod = 2023-02-07T11:15:58Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/02/07/centos-9-build-a-rpm-dev-env/"
+++

Hello readers,

Today we are going to see how to build an rpm dev environment.

sudo yum install rpm-build

sudo yum install gcc make

Now, we are going to build a directory to work with an rpm building. In the next article, we will learn how to build and install an rpm on the centOS 9 stream.

sudo yum install redhat-rpm-config

mkdir -p ~/rpmbuild/{BUILD,RPMS,SOURCES,SPECS,SRPMS}

We must build on the (\$HOME) directory to avoid damage on the fly under the installment of the centOS 9. In the next article, we will learn how to build an rpm package under the \$HOME folder.
