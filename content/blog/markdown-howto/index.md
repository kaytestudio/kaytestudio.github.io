+++
title = "Markdown Howto"
date = 2018-11-07T10:56:40Z
lastmod = 2018-11-07T10:56:40Z
author = "Kayte Studio"
categories = ["Posts"]
tags = ["github", "markdown", "codermag archive"]
originalUrl = "https://codermag.gleentech.com/2018/11/07/markdown-howto/"
+++

Everyday we face with markdown at github or gitlab, even for our README.md files. Explaining our porocedures for compilation.

Today, my new post will be about markdown texting format.

Headers I think it's the main way to learn how we done in our daily basis.\

``` text
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```

Lists - A way to schematic our goals or our tasks.

``` text
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

Links - The hyperlinks we can share or inter connect in our documents.

``` text
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.
```

In the next post I will show how we can do a markdown for a github project even how we can share our code globally.

Take care. See you soon.

\[arbitrary case-insensitive reference text\]

: https://www.mozilla.org \[1\]: http://slashdot.org

\[link text itself\]

: http://www.reddit.com
