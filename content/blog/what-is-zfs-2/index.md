+++
title = "What is ZFS"
date = 2022-04-23T09:37:31Z
lastmod = 2022-04-23T09:37:31Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/04/23/what-is-zfs-2/"
+++

**What is ZFS**

*The ZFS article*

*Hello it’s coder by gleentech again. This week, we will talk about ports and its installment. We are going to teach what is ZFS, the filesystem, its structure, and its pool data node.*

*First of all, as we saw before, about the ports, we cannot delete the structure. If you try to do :*

``` bash
sudo rm -rf /usr/ports
```

*You will see a device busy. I will teach how to bypass that issue.*

``` bash
sudo fstat | grep "/usr/ports"
```

*But first you should know you cannot delete it. Before I will explain the ZFS itself do this command when you try to delete ports folder.*

``` bash
sudo svnlite co https://svn.freebsd.org/ports/head /usr/ports
```

*If this syncing broke up or hang up, we can always do this:*

``` bash
sudo rm -rf /usr/ports/ && sudo rm -rf /usr/ports/.svn*
```

→ *or do these commands  separately.*

``` bash
sudo rm -rf /usr/ports/*
sudo rm -rf /usr/ports/.svn
```

*I think you can’t now use anymore the subversion stable. I keep seeing most the help outside from git freebsd hosting.*

*What is ZFS?*

*ZFS is the default node filesystem adopted and adapted for FreeBSD OS and its derivatives. Unix itself uses a schema called pool nodes. Everything is a node, a file, a structure for files Inside the structure, we can see usr,boot, bin, home, dev, entropy, lib, etc..*.

*Inside usr, you can see the ports node. Here you can see a structured folder with the major applications to build.*

*This project of ZFS is based on openZFS.*

*What is openZFS?*

*The openZFS is a filesystem coded by Sun Microsystems, then have ported and maintained for FreeBSD, macOS, and Linux. We can see ZFS on macOS, Ubuntu by default. Since 16.04 LTS version and FreeBSD. We see openZFS ported for FreeBSD under version 7.0, since then we see it has a default structure.*

*Today we saw filesystems too much stable and good enough coming from Sun Microsystems technology. *

*The openZFS, ZFS itself for me is much safer than ext4 or btrfs. But in spite of you should migrate to openZFS, for me is much safer. You can use RAID-Z with openZFS. Today you can find ZFS by default on Ubuntu also. To have on Ubuntu by default, it’s safe to have it plugged.*

*This structure began as a closed source then released as CDDL license in 2005, in 2007 Apple and FreeBSD organizations began to implement it under their systems.*

*The structure works as pool nodes. The pool nodes are the files structure we build when we install the operating system. Nowadays, the pool node version is zpool.5000 structure.*

*With this structure, the RAID pool is much safer than used with other filesystems. We can operate with tons of data.*
