+++
title = "vuejs3 – part 1 & 2"
date = 2022-04-13T13:41:02Z
lastmod = 2022-04-13T13:41:02Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2022/04/13/vuejs3-part-1-2/"
+++

Hello, It’s coder by gleentech. Dear readers today I will talk about my vuejs 3 frontend struggles to make a magazine website. I will teach in this first part how to create a project, add small fragments of Menu and footer components, and the build itself.

I will show it how I made it on my MBP 2011. First of all, I made already in Python flask all the backend environments. I made a small software to render HTML and markdown with flask. I can now manage all my posts. When I decided to use all these technologies was to have a web application. I hope to teach API too. This will be three-part tutorial. I will teach now how we can create and manage the main core. I have been learning vue since I started to code nativescript with typescript.

1:

``` bash
vue create name_of_the_project
```

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

``` html
<template>
<header>
</header>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
setup() {
},
})
</script>
<style scoped>
header {
background-color: bluebird;
padding: 10px;
}
</style>
Inside Footer.vue
<template>
<footer>
<p>(C) Copyright Brand 2020</p>
</footer>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
setup() {
},
})
</script>
<style scoped>
footer {
background-color: blue;
padding: 10px;
}
</style>
```

on the vs code type yarn serve to see what it happens. If shows a few lines to see localhost. You are ready to go. Next article I will teach how to manage components and bootstrap next which is bootstrap 5. This first part is a basic tutorial, not an in-depth tutorial that I have in mind.

I still have other projects to embrace. I am coding typescript, javascript, and c++ most of the time. I will rather be good at these languages than know a lot of them. It sounds like we are not good at all knowing a lot. I have been working on vue and nativescript since December. Also, I am working with c++ to make my own games which are my hobbies.

Thanks for reading.

As a javascript, nodejs, and Unix/Linux developer I will teach how to hack a vuejs3 as a hacking way.

I started to code vuejs3 in December after coding ecmascript5 and 6 under the hood, besides typescript. Typescript is a superset of the ECMAscript 5 and 6. It’s a transpiling tool. With the management of babel and webpack. Which I will write an article about both.

To do this we must have part1 done. The majority of things we will hack are on the top of the vuejs3 part 1. If you didn’t do part1 we cannot understand the hacking. But I will explain again part 1 here. Under as a part 2. This part 2 will be delivered as an ebook pdf for kindle and kobo devices. This magazine coder by gleentech delivered by Gleentech Solutions and kreatyve Designs will give techniques about coding and operating systems such as MacOS, FreeBSD and Linux. We will see deployments of those OS’es under Parallels use. I will teach how to manage them with some tutorials under VMs. As a coder, I rather use Parallels Inc instead of Oracle VB and VMWare Inc. These last ones in my opinion are not so optimized for macOS or even Apple structure. So much consumption. This magazine will give some new approaching techniques to optimize your machines, trying to get rid of Kubernetes or even docker-compose. I had some issues with those applications for composing and containerizing them. It made my battery go. So I needed to switch for a new battery around 2 years ago.

``` bash
vue create nameofproject
choose vue3 babel / eslint
cd nameofproject
yarn serve
```

I will explain later what is it babel and eslint. These two come as a bundle for yarn serve to debug our web applications.

This article will teach how to work on vuejs 3 under macOS with the vs code and terminal. Besides I am finishing writing an article about cli, the terminal of POSIX family. POSIX family is the environment for Unix and Linux. Slackware is more POSIX-like than Ubuntu or others. It’s a superuser, power user admin operating system. You need to install everything from the iso from them as a cli shell. You need to install vs code on macOS, I am teaching how to use it on my MBP 2011 but I have also a mac mini from 2015 series. Go to the page of vscode to install the file for macOS.

Eslint is a javascript tool to debug our own code, we can make npm test or run tests with yarn. Babel tool which we can use to serve our own code basis as a testing and bundler object. We can use it with webpack. For instance, we can run webpack projects with eslint and babel mixed-in.

When we do

``` bash
yarn build
```

We build a ‘dist’ folder with all the website, and components inside to be delivered. With eslint we can test with eval commands to see what is happening with our code. I think the worst scenario is to delete the folder and copy everything into the back. Sometimes when we are learning the worst scenario is to delete all the folders and code everything back on.

``` bash
rm -rf foldername
vue create foldername
cd foldername
yarn serve
```

Now I am going to teach how to hack a simple vuejs3 application.

First of all, type the before commands then follow what I am writing.

``` html
cd foldername
rename HelloWorld.vue to Index.vue
<HelloWorld msg="Welcome to Your Vue.js App"/>
rename it to <Home msg="Welcome to Your Vue.js App"/>
<script>
import Home from './components/Index.vue'
//import Footer from './components/Footer.vue'
//import Header from '.components/Header.vue'
export default {
name: 'App',
components: {
Home
}
}
</script>
Under this script rename
import HelloWorld from './components/HelloWorld.vue'
to
import Home from './components/Index.vue'
yarn serve
```

Now you can see a logo and a page.

Next time we learn how to modify the main component to be seen as a spa application interface.
