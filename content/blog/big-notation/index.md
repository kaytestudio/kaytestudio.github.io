+++
title = "Big Notation"
date = 2021-12-04T11:41:08Z
lastmod = 2021-12-04T11:41:08Z
author = "Kayte Studio"
categories = ["netbeans"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2021/12/04/big-notation/"
+++

Almost the software works with big o notation.

What means big o notation?

Big O Notation is used in computer science also computation. It’s used to tell us the performance and or complexity solution we should approach.

To know how to use it we should study algorithmics and logarithmic.

O(1)

This tells us the algorithm will run one time or in one space-time.

Bool l IsFirstElementNull(IList\<String\> elements)

{

    return elements\[0\] == null;

}

O(N)

O(N) describes an algorithm whose performance will grow linearly. And by itself have proportion.

bool ContainsValue(IEnumerable\<string\> elements, string value)

{

    foreach (var element in elements)

    {

        if (element == value) return true; 

    }     

    return false; 

}

O(N²)

This algorithm is directionally proportional to the square of the input data size.

This works well with nested loops. 

bool ContainsDuplicates(IList\<string\> elements)

{

    for (var outer = 0; outer \< elements.Count; outer++) 

    {

        for (var inner = 0; inner \< elements.Count; inner++) 

        { 

            // Don't compare with self 

            if (outer == inner) continue;             

            if (elements\[outer\] == elements\[inner\]) return true; 

        }

    }    

    return false;

}

O(2^N)

One of the sets we can see is the Fibonacci function. 

int Fibonacci(int number)

{

    if (number \<= 1) return number;

    return Fibonacci(number - 2) + Fibonacci(number - 1); 

}
