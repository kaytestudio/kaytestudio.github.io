+++
title = "ELF – Tutorial Part 1"
date = 2019-07-25T10:22:57Z
lastmod = 2019-07-25T10:22:57Z
author = "Kayte Studio"
categories = ["Amiga OS", "Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/25/elf-tutorial-part-1/"
+++

Hello everyone!

Today I will be talking about ELF, a format used well used nowadays on micro technology although on open systems already in use on the market.

``` c
#include <stdio>
#include <iostream>
int main()
{
printf("hello world\n");
return 0;
}
gcc -o main.c a.out
```

This is our example to use and verify ELF format. It's a format used since 1999, as a standard. It can be called a standardisation.

With ELF we can, debug, study how the behaviour of the system have under the CPU and the format CPU smp. It can run on 32 bit and 64 bit cpu.

In Linux if you want to have a describe style for the format, you can run this command on the terminal or in MacOS (Terminal or iTerm2)

``` bash
file a.out
```

or the name you gave: `file main.out`

To make use of debugging under ELF format is useful to study how the Operating System behaves. Perhaps the libraries are built or their behave too.
