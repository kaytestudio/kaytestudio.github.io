+++
title = "vuejs 3 – Part 1"
date = 2022-04-12T11:29:56Z
lastmod = 2022-04-12T11:29:56Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/04/12/vuejs-3-part-1/"
+++

Hello, It’s coder by gleentech. Dear readers today I will talk about my vuejs 3 frontend struggles to make a magazine website. I will teach in this first part how to create a project, add a small fragment of Menu and footer components, and the build itself.

I will show it how I made it on my MBP 2011. First of all, I made already in Python flask all the backend environments. I made a small software to render html and markdown with flask. I can now manage all my posts. When I decided to use all these technologies was to have a web application. I hope to teach API too. This will be three part tutorial. I will teach now how we can create and manage the main core. I have been learning vue since I started to code nativescript with typescript.

1:

→ vue create name_of_the_project

→ choose vuejs3

→ in the end yarn serve

2:

→ Open the browser and type localhost:8080

You will see the main project

Close it with ctrl+c

3:

You will need vs code to code all the source files

After opened create two files on components.

One called Menu.vue and the other as Footer.vue

4:

inside Menu.vue type this lines of code

\<template\>

\<header\>

\</header\>

\</template\>

\<script\>

import { defineComponent } from '@vue/composition-api'

export default defineComponent({

setup() {

},

})

\</script\>

\<style scoped\>

header {

background-color: bluebird;

padding: 10px;

}

\</style\>

Inside Footer.vue

\<template\>

\<footer\>

\<p\>(C) Copyright Brand 2020\</p\>

\</footer\>

\</template\>

\<script\>

import { defineComponent } from '@vue/composition-api'

export default defineComponent({

setup() {

},

})

\</script\>

\<style scoped\>

footer {

background-color: blue;

padding: 10px;

}

\</style\>

On the vs code type yarn serve to see what it happens. If shows a few lines to see localhost. You are ready to go. Next article I will teach how to manage components and bootstrap next which is bootstrap 5. This first part is a basic tutorial, not an in-depth tutorial which I have in mind.

I still have other projects to embrace. I am coding typescript, javascript and c++ most of the time. I rather be good on these languages than know a lot of them. It sounds like we are not good at all knowing a lot. I have been working on vue and nativescript since December. Also, I am working with c++ to make my own games which are my hobbies.

Thanks for reading.
