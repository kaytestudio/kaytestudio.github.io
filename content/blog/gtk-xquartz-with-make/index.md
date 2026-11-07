+++
title = "GTK XQuartz with make"
date = 2023-10-07T09:37:03Z
lastmod = 2023-10-07T09:37:04Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2023/10/07/gtk-xquartz-with-make/"
+++

Hello readers,

Today, we bring with more tips, how to compile with make with your Apple.

As we seen before, we have this command:

``` bash
gcc `pkg-config --cflags gtk+-3.0` -o example-0 mainwindow.cc `pkg-config --libs gtk+-3.0`
```

<https://gist.github.com/vic3t3chn0/313707f0372c6b89ac598181716060b4>

To start, we must create a file called Makefile, we have a gist above also:

``` bash
all:
    world

#clean:
#   rm example-0
# Para despues / for after for libs
world:
    rm example-0 && gcc `pkg-config --cflags gtk+-3.0` -o example-0 mainwindow.cc `pkg-config --libs gtk+-3.0`
```

Now we have the same source code seen before about GTK.

``` c
#include <gtk/gtk.h>

static void
activate (GtkApplication* app,
          gpointer        user_data)
{
  GtkWidget *window;

  window = gtk_application_window_new (app);
  gtk_window_set_title (GTK_WINDOW (window), "Window");
  gtk_window_set_default_size (GTK_WINDOW (window), 200, 200);
  gtk_widget_show_all (window);
}

int
main (int    argc,
      char **argv)
{
  GtkApplication *app;
  int status;

  app = gtk_application_new ("org.gtk.example", G_APPLICATION_FLAGS_NONE);
  g_signal_connect (app, "activate", G_CALLBACK (activate), NULL);
  status = g_application_run (G_APPLICATION (app), argc, argv);
  g_object_unref (app);

  return status;
}
```

Now, we have all to start coding gtk. We must call the terminal application to go to your source code directory.

For us, we have on ~/Documents/Projects. Now you can see your files on the screen as we see ours.

![](Screenshot-2023-10-07-at-10.23.59.png)

We must type make world:

![](Screenshot-2023-10-07-at-10.25.39.png)

At last, execute your binary file on your screen terminal:

![](Screenshot-2023-10-07-at-10.27.22.png) ![](Screenshot-2023-10-07-at-10.28.30.png)
