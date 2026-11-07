+++
title = "C – Bubble Sort"
date = 2019-07-25T18:11:07Z
lastmod = 2019-07-25T18:11:07Z
author = "Kayte Studio"
categories = ["Amiga OS", "Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/25/c-bubble-sort/"
+++

Hello Everyone!

One of these days I decided to solve a sort of data with C, using c99.

I tried to solve it as a issue for my filesystem implementations.

``` c
< bubble (item,count) char *item; int count; { register int a,b; register char t; for(a=1;a=a;--b){ if(item[b-1]> item[b]){ /* elements to exchange */ t = item[b-1]; item[b-1] = item[b]; item[b]=t; } } }

main() /* main function of the bubble sort */ { char s[80]; int count; sprintf("enter a string:"); gets(s); count = strlen(s); bubble(s,count); printf("the sorted string is : %s", s); return 0; }
```

As I did the workaround.
