+++
title = "Spectrum on Linux"
date = 2019-07-30T13:40:55Z
lastmod = 2019-07-30T13:40:55Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/30/spectrum-on-linux/"
+++

Today i will talk about spectrum development on Red Hat and Fedora 30.

First of all I will teach how to install the software through the repositories.

``` bash
sudo dnf install z80asm
```

Next step will be to install the spectrum Unix emulator called fuse-emulator-gtk.

``` bash
sudo dnf install fuse-emulator
```

With this way we can now, code basic for spectrum or z80 assembly.

If you have old spectrum computer coding books you can now code it.

create a directory development folder called projects/spectrum

Before this on your home directory:

``` bash
vi ~/.vimrc
syntax on
:wq
mkdir -p ~/projects/spectrum
touch ~/projects/spectrum/hello.asm
vi ~/projects/spectrum/hello.asm
```

write this code or copy paste it:

``` nasm
;Sample print at program
ORG 32768
LD A,2
CALL 5633
LD DE,string
LD BC,eostring-string
CALL 8252
RET
string: DEFB 22,0,11,"Hello World"
eostring: equ $
For compilation a asm file from z80 spectrum code type this:
z80asm -o hello.bin hello.asm
```
