+++
title = "Vi – Unix Editor"
date = 2019-07-26T14:36:38Z
lastmod = 2019-07-26T14:36:38Z
author = "Kayte Studio"
categories = []
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/26/vi-unix-editor/"
+++

This tutorial is to teach how to use vi the editor, the common on every Unix-like systems. This software doesn't have menu, it's all about commands.

1.  More On Cursor Movement

``` text
From Command Mode

    e    Move to end of current word

    $    Move to end of current line

    ^    Move to beginning of current line

    +    Move to beginning of next line

    -    Move to beginning of previous line


    G    Go to last line of the file

    :n   Go to line with this number (:10 goes to line 10)


    <Ctrl>d   Scroll down one-half screen

    <Ctrl>u   Scroll up one-half screen

    <Ctrl>f   Scroll forward one full screen

    <Ctrl>b   Scroll backward one full screen


    )         Move to the next sentence

    (         Move to the previous sentence

    }         Move to the next paragraph

    {         Move to the previous paragraph


    H         Move to the top line of the screen

    M         Move to the middle line of the screen

    L         Move to the last line of the screen


    %         Move to matching bracket:  ( { [ ] } )
```

``` text
2 - Text Mode:
From Command Mode

    i    Insert text before current character

    a    Append text after current character

    I    Begin text insertion at the beginning of a line

    A    Append text at end of a line

    o    Open a new line below current line

    O    Open a new line above current line
  
```

3 - Commands & Objects

``` text
    Format                         Example

      operator number object          c2w

      number operator object          2cw


    Operators

      c   change

      d   delete

      y   yank


    Objects and Locations

      w           one word forward

      b           one word backward

      e           end of word

      H, M, L     top, middle, or bottom line on screen

      ), (        next sentence, previous sentence

      }, {        next paragraph, previous paragraph

      ^, $        beginning of line, end of line

      /pattern/   forward to pattern
```
