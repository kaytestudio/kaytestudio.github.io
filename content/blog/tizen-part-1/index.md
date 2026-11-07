+++
title = "Tizen – Part 1"
date = 2021-09-01T11:21:36Z
lastmod = 2021-09-01T11:21:36Z
author = "Kayte Studio"
categories = ["Tizen"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2021/09/01/tizen-part-1/"
+++

Editor:

Hello my name is Pedro Dias Vicente, I am coder. I like to code c, c++, pascal, or objective-c. I learnt how to code when I was 12 years old. Today I work for and with open source. Today, I am working with tizen os. An operating system which have a lot to give as a whole operating system. It can be capable to work with mobile, iot, wearable or even TV.

Introduction

This issue is being worked over these years. It shows how to achieve the finest words. The words have been working since I decided to have a magazine for Linux, Unix and MacOS.

I came with the magazine in 2009, now today, 2021 is alive. Today we see a lot of Windows Magazines none about Mac or even Linux on development, operating systems tips or even coding.

Today, we need to change, shake the waters to another market sharing subjects or devices.

I am today the Co-Founder of Gleentech Solutions, the man behind of this magazine.

A bridge of today, I hope you enjoy the magazine.

Daylog \#1

Changelog:

Day 1:

Hello everyone. I am back to the Linux Foundation tizen os development. I was in the early days into it around 2011 and 2012. Over the years I was coding open source my own code for tizen os.

I built my own code based on c++ and web technologies. Over the following tizen posts that I will really post it, it will be a beginner guidance.

I have installed tizen ide and an ubuntu for coding. I am using a MacBook Pro. So, the code will be shared with virtualbox os and main core os.

After the instalment I could boot it up. Make a warm bootup qemu image and its ide. I built a calculator to see how it works an app functioning system. Over 8 years to 9 years being part of tizen organization. I came to write about web apps and code kernel for samsung devices. I was almost a ghost, now I am ready to talk about tizen. This operating system is openness and from Linux Foundation and Samsung. Is there a way to be success on our markets or even can be successful. Today our market have three top major os’es. Their are them, iOS, android and tizen. Inside these all os’es, are too many android, any manufacture have one os. Is there a need to have a wide open source operating system. And I found it around 9 years ago in 2012. There is a lot of flaws on android, which was adopted by Microsoft fans and not unices people. There were so many oses there was a flaw too or could be huge. But the time is other. I already downloaded the kernels for samsung wave s8500, nexus 5 and nexus 5x even for nexus 6p. I installed too the git build system(gbs) and mic command tools on my machine. In the next day I will try to compile the kernels, then debug it on my machine.

``` wp-block-preformatted
→ brew install virtualbox
→ brew cask install vagrant
→ brew cask install vagrant-manager
```

→ touch Vagrantfile

→ nano Vagrantfile

``` wp-block-preformatted
Vagrant.configure("2") do |config|
config.vm.box = "debian/jessie64"
config.vm.provision "shell", inline: <<-SHELL
apt-get update
apt-get install -y git bc bison flex libssl-dev make libc6-dev libncurses5-dev crossbuild-essential-armhf crossbuild-essential-arm64
SHELL
end
```

→ vagrant up

→ vagrant ssh

To halt the machine type:

→ vagrant halt

`→ ``git clone --depth=1 https://github.com/raspberrypi/linux`

→ git clone https://github.com/android-linux-stable/angler.git

→ git clone https://github.com/franciscofranco/hammerhead.git

→ git clone <https://github.com/Badadroid/android_kernel_samsung_wave.git>

→ git clone <https://github.com/Qiangong2/tizen_kernel_samsung_z2.git>

Day 2:

Today I will start debugging and compiling the kernels I already downloaded. For vagrant and virtualbox, every time you wish to get in on the VM, type always vagrant ssh and exit to quit off the system.

Day 3:

I am building a mic version kickstart. What is a kickstart file? Is a configuration script for tizen os. These kickstart files for instance are there on rpm linux distros such as fedora or red hat enterprise.

I installed on my debian machine the following commands:

→ nano /*etc/*apt/sources.list

→ `deb `

\[trusted=yes\]

http://download.tizen.org/tools/latest-release/Ubuntu_16.04/ /

`→ ``apt-get update`

`→ ``apt-get install gbs mic `

`Then you must use always connected to vagrant the command inside the folder of Vagrantfile, vagrant ssh. Every move or change move it always with vagrant halt to save the state of the machine itself.`

`Remove all boxes on macos`

`→ ``vagrant box list | cut -f 1 -d ' ' | xargs -L 1 vagrant box remove -f`

`It must be done every time the image is broken. Be careful that can be erased all data itself.`

`→ ``wget http://download.tizen.org/releases/daily/tizen/5.5-unified/latest/builddata/images/standard/image-configurations/mobile-wayland-armv7l-tm2.ks`

`→ ``gbs cr –-ks-file=mobile-wayland-armv7l-tm2.ks`

Day 4:

After build successful the mobile rootfs and iot the rpi version. I am reading the docs to see how it works the kernel 3.10.x for the operating system.

This devlog is trying to be a tutorial or an ebook to teach the persons to code or build an devOP system for tizen os.

I will teach or try to teach how to code web, c++. We can build too with tizen.NET, this version is for c#.

<http://releases.linaro.org/components/toolchain/binaries/4.9-2017.01/armeb-linux-gnueabi/gcc-linaro-4.9.4-2017.01-x86_64_armeb-linux-gnueabi.tar.xz>

<http://releases.linaro.org/components/toolchain/binaries/4.9-2017.01/arm-linux-gnueabi/gcc-linaro-4.9-2017.01.tar.xz>

<https://releases.linaro.org/components/toolchain/binaries/7.5-2019.12/arm-linux-gnueabi/gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabi.tar.xz>

<https://releases.linaro.org/components/toolchain/binaries/latest-7/aarch64-linux-gnu/gcc-linaro-7.5.0-2019.12-x86_64_aarch64-linux-gnu.tar.xz>

→ tar xvf gcc-linaro-4.9.4-2017.01-x86_64_armeb-linux-gnueabi.tar.xz

→sudo mkdir -p /*opt/*linaro

→ sudo mv linaro-4.9 /*opt/*linaro/

``` wp-block-preformatted
→ cd kernel && make CROSS_COMPILE=folder_compile ARCH=arm tizen_tm1_defconfig
```

I chose the linaro gcc for arm. It is one of the most used, or widely spread. I have been using linaro since 2012, when I started to code for tizen os. The wide and the facilities are abroad for tizen and humongous. So huge to dig.

I forgot to tell the chosen wise for vagrant. I chose vagrant with connectivity for virtualbox because it’s easier. We can’t found wayland gui. Only a terminal, a cli to code everything.

Day 5:

Today I have being coding the linaro setup for kernel buildings. I have now 5 devices kernel sources downloaded and ready to be studied to boot on devices.

Nowadays is easy to get an approach with cli, mostly or basically for me linux is terminal way out. I am used to type commands and scripting with bash or perl.

`→ ``sudo apt-get install abootimg`

I type this too, to get to know how the partition works on an android device.

→ adb shell - with device connected

→ cat /*proc/*partititons

→ `dd if=/dev/block/mmcblk0p6 of=/data/kernel_ramfs.img`

→ `adb pull /data/kernel_ramfs.img`

`Now I am stalled. I have been working around on gcc compilers to be successful on building kernels. I am trying to build a new kernel mainline to offer the 32 bit float and even 64 bit compliance. Every two weeks I will make my devlog updated. I am almost on my 6`^(`th`)` day of working and working arounds. I couldn’t found any solution for now for the compliance. The only thing I got for now was a VM, a building image obs success. Although or being despite on struggles I have my Tizen emulator working too well on the version hd 5.5 and 6.0. The wearables strain are not finished yet. It’s hard to build something in small days. I have been working around on these matters because I knew how to achieve some because the over the years of experience on gnu. I have been around downloading almost 6 devices to get work done. I desired to work on 6 devices that I own. These devices are nexus 5, Nokia n900, Sony z Ultra, Samsung i9300, Samsung S1, 8500 wave and ZTE Kies 3. I want to port the kernel to these devices. One is I want with the community helping. Other is to trying alone and spend a lot of hours against the knowledge behind these matters.`

`For now, I am teaching how to make a dev machine to all of these. The other way is to help community by consuming time for tizen on the open source eco system. I want to help community. So I am here with my devlogs to show how I want and wish for. I will teach over my devlogs how to code c++ for UI, apps, I will teach how to build web widgets or even web apps.`

`Day 6:`

`Today I am still stalled with kernels building and its mainline source code. The code for all my devices I own. I decided to write now to tell I am keeping search for a solution. Instead of I will write my devlogs about c++ and javascript apps for the tizen store.`

`Today day 6 I will teach how to struct and make a structure for javascript applications or even widgets.`

`When the client builds a new project javascript will found a structure inside a project folder. These files and structure are`

`css folder, an img folder, javascript necessary files, a js folder, and 3 files on the root. These files are config.xml, index.html, icon.png. The config.xml is a project file where the metadata can be added and formatted. Is where we can found the icon, the name, the id structure.`

D ay 7:

Today I was reading how to do emulator compilation. I downloaded the qemu source code for macos. But the compilation I got working was for my ubuntu VM.

\<code\>

**html,**

**body** {

width: *100%*;

height: *100%*;

margin: *0* *auto*;

padding: *0*;

background-color: *\#222222*;

color: *\#ffffff*;

}

*.page* {

width: *100%*;

height: *100%*;

display: *table*;

}

*.contents* {

display: *table-cell*;

vertical-align: *middle*;

text-align: *center*;

-webkit-tap-highlight-color: *transparent*;

}

*\#content-text* {

font-weight: *bold*;

font-size: *5em*;

}

*.dark-mode* {

background-color: *black*;

color: *white*;

}

\</code\>

\<code\>

function myFunction() {\
  var element = document.body;\
  element.classList.toggle("dark-mode");\
}

\</code\>

Day 8 and 9:

I was trying to read debugging tools. I think I will can talk about debugging.

I will talk about the software debugging. I will use the tizen emulator to guide us all.

Debugging:

Every time we debug or code an application we can debug with gdb.

Day 9:

Building a repo on dropBox

--make an empty repo on dropbox

cd ~/Dropbox/demo/Git

mkdir -p newname.git

cd newname.git

git –-bare init

--Updating system

cd ~/Projects/newrepo

git remote add dropbox [file://\$HOME/demo/Git/newname.git](/demo/Git/newname.git)

git push dropbox main

I am building a SaaS system at home for my work. I have already built a Ubuntu and a gentoo system for my own code git system. I have now a FreeDOS too on working on virtualbox. I will have my Tizen building folders on a private repository too.

Why I chose Mac and Linux over these years?

I am an aficionado of BSD and Minix. I was over these years gathering and walking more on Apple waters, an openstep fan. I had a ps2 Linux too, when it came out. But I still use it on VMs. Is there always light. I won’t go nowhere, I will stay here to make these devlogs.

Thank you and see you next time.

Devlog \#2

Day 10:

This day is almost over. I will try to have Tizen always updated. Today I will talk about IRC.

It came out around at 1988 with an apple server that time. Today the servers are in Unix or Linux. Is a text-based software very old. It was too successful and still have. Today have new ways to transfer over DCC, XDCC, TDCC. These norms over chat and over user or bot it’s p2p.

What is p2p? It’s a way to communicate two users. Peer to peer is a way as it says, a communication protocol. Imagine a grid, where you are and a friend, you want to send a file. You ask permission to your friend to send a file. That file is on a queue, then it goes to John.

IRC is always working with queues, like the soulseekQT or even DC++. For me DC++ is almost an IRC norm RFC but with dht table. Is there too a proxy detection flooding or even a TLS detection.

I remember my times, my days over Ptnet, or even on Quakenet, today I am into rizon and libera chat. With my nickname plvicente.

Day 11:

Why I chose Apple? I chose Apple because I have Macs since 2005 and before that I was used to be on a G4 user virtualization stream. I rather be on Apple is there so many to see or to learn. Mostly the Linux is coded on Mac users laptops or even iMac.

Day 12:

Typescript for Tizen projects

→ sudo emerge @world

→ sudo emerge vim dosbox

Day 1-2-3:

This day is and will be the day for a turning page way. I will keep the devlogs but now we will dig it up on more coding right now.

We dig it on kernel matters, UI matters and Web App coding stamp examples. I want to make stamp examples to everyone.

What is a stamp example or stamp bit?

A stamp example or stamp bit is a way that I called for microcode or gist code inside a structure folder code project. The stamp is always the classes or even functions divided or split up into several files, instead of, real huge files. Remember the files are always like the post-it or stamp for a letter.

The day 1-2-3 is the launch project startup. We will see the structure of the project as a whole. I will split the project in several stamp projects folders. I think the projects, even bigger should have stamp bit. I think we can avoid bugs with small microcode. I learnt this way when I was young to prevent bugs.

For now, I will test the kernels before any kind of writing. Even if I am with no devlog at posts.

Day 2-1-3:

I will teach html, css and javascript for our projects in tizen web applications.

Devlog \#3

Day Break:

I have downloaded the zte open c/ kies 3 model kernel Linux, I will show how we code kernel for tizen too with this version of kernel.

→ git clone <https://github.com/HacKurx/android_kernel-unofficial-grsec_zte_msm8610.git> kernels/zte/msm8610

→ vim ~/.vimrc

→ filetype plugin ident on

→ syntax on

→ set title

→ set tabstop=8

``` wp-block-preformatted
→ set softtabstop=8
→ set shiftwidth=8
→ set noexpandtab
```

or:

→ :set tabstop=8 softtabstop=8 shiftwidth=8 noexpandtab

→ sudo update-alternatives --config editor

These lines are to be or must be typed to help us on coding the system. The kernel must static libs to prevent the shared linking issues. All the kernel structure must optimized and with the modules necessary. Or even to be mandatory.

Tips:

→ config.vm.synced_folder "myblog/", "/home/vagrant/myblog/"

Add this to prevent the stall on the purge of the system on Vagrant.

On ~/.profile:

→ export ARCH=arm

→ export CROSS_COMPILE=/opt/linaro-4.9/bin/arm-linux-gnueabihf-

→ source ~/.profile

Yesterday I could build a kernel for zte kies/open c. A normal kernel with gperf. I won’t talk about inclosure gperf, for now. Gperf is a good assessment for linux kerrnel. In a future post I will write it about that.

For now, before going in advance with qemu debugging on qemu. I will build a qemu vm for testings.
