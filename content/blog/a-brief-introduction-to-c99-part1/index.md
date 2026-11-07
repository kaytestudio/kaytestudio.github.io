+++
title = "A brief Introduction to C99 – Part1"
date = 2019-07-29T09:39:53Z
lastmod = 2019-07-29T09:39:53Z
author = "Kayte Studio"
categories = ["Amiga OS", "Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/29/a-brief-introduction-to-c99-part1/"
+++

Chapter 1 – A Brief Introduction to C/C++

This chapter will introduce the reader to the brave world of C and C++. Working with C is not an easy task, it’s a world outside, it takes time to be a good developer on C. I learn C and C++ at high school and I never stopped since then. Sometimes, I took time to achieve my tasks too nowadays. To become a good coder, you must struggle.

The days are to be fought; think you have a goal to be one of them.

This chapter will be brief, I will talk about variables, enumeration, struct, perhaps matrices to 4x4x4, are harder to achieve. As C ansi does not have OOP (Object Oriented Programming), I will talk when I wrote about templating or common use STL.

In C or C++ even on Java, every language has a way to make enclosures, iterations, loops.

 In this chapter, I would like to present if/else, while, for(loop).

For instance, an if clause can be to make decisions.

``` c
If(num1>=num2)
return num1;
else
return num2;
```

Imagine do you want to make an infinite loop for an Application Non- Ending Loop, being hardcoded like Amiga OS or write hardcoded POSIX software Kernel.

``` c
While(;;)
//do the task;
```

Are so many ways to do it. A for loop is more like to run in matrices, think on a matrix, a follow the list. A for loop can be considered to run a list, dictionary a lambda way to sort.

``` c
for(i=0; i<=list[i]; i++)
{
//do the task;
}
```

Structs are a sort of function to struct a type of elements with n elements inside

.

``` c
struct [structure tag] {
   member definition;
   member definition;
   ...
   member definition;
} [one or more structure variables];
```

Struct Books Exemple:

``` c
struct Books {
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book;
```

Exemple:

``` c
#include <stdio.h>
#include <string.h>
struct Books {
   char  title[50];
   char  author[50];
   char  subject[100];
   int   id_book;
};
int main( ) {
   struct Books Book1;        /* Declare Book1 of type Book */
   struct Books Book2;        /* Declare Book2 of type Book */
   /* book 1 specification */
   strcpy( Book1.title, "C Programming");
   strcpy( Book1.author, "Nuha Ali");
   strcpy( Book1.subject, "C Programming Tutorial");
   Book1.book_id = 6495407;
   /* book 2 specification */
   strcpy( Book2.title, "Telecom Billing");
   strcpy( Book2.author, "Zara Ali");
   strcpy( Book2.subject, "Telecom Billing Tutorial");
   Book2.book_id = 6495700;
   /* print Book1 info */
   printf( "Book 1 title : %s\n", Book1.title);
   printf( "Book 1 author : %s\n", Book1.author);
   printf( "Book 1 subject : %s\n", Book1.subject);
   printf( "Book 1 book_id : %d\n", Book1.id_book);
   /* print Book2 info */
   printf( "Book 2 title : %s\n", Book2.title);
   printf( "Book 2 author : %s\n", Book2.author);
   printf( "Book 2 subject : %s\n", Book2.subject);
   printf( "Book 2 book_id : %d\n", Book2.id_book);
   return 0;
}
```

Enum

Enumeration (or enum) is a user defined data type in C. It is mainly used to assign names to integral constants, the names make a program easy to read and maintain.

``` c
enum State {
true = 1, false = 0
};
// In both of the below cases, "day" is
// defined as the variable of type week.
enum week{Mon, Tue, Wed};
enum week day;
// Or
enum week{Mon, Tue, Wed, Thur,Fri}day; // An example program to
//demonstrate working
// of enum in C
#include<stdio.h>
enum week{Mon, Tue, Wed, Thur, Fri, Sat, Sun}day;
int main()
{
    //enum week day;
    day = Wed;
    printf("%d",day);
    return 0;
}
```
