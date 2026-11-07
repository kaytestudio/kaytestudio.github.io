+++
title = "Tizen part 2 ( Devlogs)"
date = 2021-09-04T10:23:54Z
lastmod = 2021-09-04T10:23:54Z
author = "Kayte Studio"
categories = ["Tizen"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2021/09/04/tizen-part-2-devlogs/"
+++

Devlog days

This day I am trying to teach how to code c++ for efl tizen os, an operating system from Linux Foundation and Samsung partnerships.

Why I chose c++?\
I chose c++ because is too much versatile, very good for operating systems, widely use on embedded systems. The c and c++ I am used to it since high school. I learn to code it when I was on a technical school course, since then I never stopped to code it.

Why is too hard code?

We need to think like binary code, and we must a passionate person to code, remember coding is to give a human solution. Is there too many who couldn’t or can code. It’s an imaginary world of too many options to learn.

The following example code you see:

``` wp-block-preformatted
layout = elm_layout_add(parent);
elm_layout_theme_set(layout, "layout", "drawer", "panel");
```

Shows how the layout can be modified as instantiated. Creating an instance.

``` wp-block-preformatted
typedef struct appdata
{
   // Save the window
   Evas_Object *win;
}
appdata_s;
int
main(int argc, char *argv[])
{
   appdata_s *ad = {0,};
   app_event_callback_s event_callback = {0,};
   int ret = 0;

   event_callback.create = app_create;
   event_callback.terminate = app_terminate;
   event_callback.pause = app_pause;
   event_callback.resume = app_resume;
   event_callback.app_control = app_control;

   ui_app_add_event_handler(&handlers[APP_EVENT_LOW_BATTERY], APP_EVENT_LOW_BATTERY, ui_app_low_battery, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_LOW_MEMORY], APP_EVENT_LOW_MEMORY, ui_app_low_memory, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_DEVICE_ORIENTATION_CHANGED], APP_EVENT_DEVICE_ORIENTATION_CHANGED, ui_app_orient_changed, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_LANGUAGE_CHANGED], APP_EVENT_LANGUAGE_CHANGED, ui_app_lang_changed, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_REGION_FORMAT_CHANGED], APP_EVENT_REGION_FORMAT_CHANGED, ui_app_region_changed, &ad);
   ui_app_remove_event_handler(handlers[APP_EVENT_LOW_MEMORY]);

   ret = ui_app_main(argc, argv, &event_callback, &ad);
   if (ret != APP_ERROR_NONE)
   {
      dlog_print(DLOG_ERROR, LOG_TAG, "ui_app_main() is failed. err = %d", ret);
   }

   return ret;
}

static bool
app_create(void *data)
{
   appdata_s *ad = data;
   create_base_gui(ad);

   return true;
}
```

``` wp-block-preformatted
ad->win = elm_win_util_standard_add(PACKAGE, PACKAGE);
elm_win_autodel_set(ad->win, EINA_TRUE);

// Conformant
conform = elm_conformant_add(ad->win);
elm_win_conformant_set(ad->win, EINA_TRUE);
evas_object_size_hint_weight_set(conform, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
elm_win_resize_object_add(ad->win, conform);
evas_object_show(conform);

// Naviframe
nf = elm_naviframe_add(conform);
elm_object_content_set(conform, nf);
evas_object_show(nf);
// Add the box
box = elm_box_add(nf);
// Create a label
label1 = elm_label_add(box);
// Set text to the label with a tag
elm_object_text_set(label1, "<font_size=110><color=#000000>07:26</color></font_size>");
// Add the label to the box
elm_box_pack_end(box, label1);
// Change label visibility
evas_object_show(label1);

// Repeat with other labels

evas_object_show(box);
elm_naviframe_item_push(nf, _("World Clock"), NULL, NULL, box, "basic");
```

This will tell how the instances can be used to create several apps. Those apps can be a clock, timer or an email GUI form. The following days I will teach c++ with the ui of tizen os. These things to learn are hard to achieve. We need to learn with our own mistakes. We are the learners of the thriving life we do. Mine is to be a teacher, a coder trying to teach others. As my experience as teacher is and was very productive. I rather teach c++, javascript for Linux and Mac. Today I am here to teach embedded systems relied on Linux. On a very good system.

Next steps, we must take to follow our knowledge on the application design and code them are to code a working clock.

The working clock system is a new example that I will show. It’s a very good starting point.

``` wp-block-preformatted
typedef struct appdata
{
   // Save the window
   Evas_Object *win;
}
appdata_s;
```

``` wp-block-preformatted
int
main(int argc, char *argv[])
{
   appdata_s *ad = {0,};
   app_event_callback_s event_callback = {0,};
   int ret = 0;

   event_callback.create = app_create;
   event_callback.terminate = app_terminate;
   event_callback.pause = app_pause;
   event_callback.resume = app_resume;
   event_callback.app_control = app_control;

   ui_app_add_event_handler(&handlers[APP_EVENT_LOW_BATTERY], APP_EVENT_LOW_BATTERY, ui_app_low_battery, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_LOW_MEMORY], APP_EVENT_LOW_MEMORY, ui_app_low_memory, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_DEVICE_ORIENTATION_CHANGED], APP_EVENT_DEVICE_ORIENTATION_CHANGED, ui_app_orient_changed, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_LANGUAGE_CHANGED], APP_EVENT_LANGUAGE_CHANGED, ui_app_lang_changed, &ad);
   ui_app_add_event_handler(&handlers[APP_EVENT_REGION_FORMAT_CHANGED], APP_EVENT_REGION_FORMAT_CHANGED, ui_app_region_changed, &ad);
   ui_app_remove_event_handler(handlers[APP_EVENT_LOW_MEMORY]);

   ret = ui_app_main(argc, argv, &event_callback, &ad);
   if (ret != APP_ERROR_NONE)
   {
      dlog_print(DLOG_ERROR, LOG_TAG, "ui_app_main() is failed. err = %d", ret);
   }

   return ret;
}
static bool
app_create(void *data)
{
   appdata_s *ad = data;
   create_base_gui(ad);

   return true;
}
```

``` wp-block-preformatted
static Evas_Object *
create_clock(Evas_Object *nf)
{
   Evas_Object *box, *label1, *label2, *label3;

   // Box
   box = elm_box_add(nf);

   label1 = elm_label_add(box);
   elm_object_text_set(label1, "<font_size=110><color=#000000>07:26</color></font_size>");
   elm_box_pack_end(box, label1);
   evas_object_show(label1);

   evas_object_show(box);

   return box;
}
static Evas_Object *
create_list(Evas_Object *nf)
{
   Evas_Object* list;
   Elm_Genlist_Item_Class *itc = NULL;
   int i, num_of_item;
   Elm_Object_Item *it;
   
   list = elm_genlist_add(nf);
itc = elm_genlist_item_class_new();
   itc->item_style = "2line.top.4";
   itc->func.text_get = gl_text_get_cb;
   itc->func.content_get = NULL;
   itc->func.del = NULL;
static char*
gl_text_get_cb(void *data, Evas_Object *obj, const char *part)
{
   item_data_s *id = data;
   char buf[1024];

   if (id->index == 0)
   {
      if (!strcmp(part, "elm.text.main.left.top"))
      {
         snprintf(buf, 1023, "%s", "07:26");

         return strdup(buf);
      }
      else if (!strcmp(part, "elm.text.sub.right.top"))
      {
         snprintf(buf, 1023, "%s", "Cardiff");

         return strdup(buf);
      }
      else if (!strcmp(part, "elm.text.sub.left.bottom"))
      {
         snprintf(buf, 1023, "%s", "Wen, Jan 1");

         return strdup(buf);
      }
      else if (!strcmp(part, "elm.text.sub.right.bottom"))
      {
         snprintf(buf, 1023, "%s", "wales");

         return strdup(buf);
      }
   }

   return NULL;
}
```

``` wp-block-preformatted
num_of_item = 3;

   for (i = 0; i < num_of_item; i++)
   {
      item_data_s *id = calloc(sizeof(item_data_s), 1);
      id->index = i;
      it = elm_genlist_item_append(list,
                                   itc,
                                   id,
                                   NULL,
                                   ELM_GENLIST_ITEM_NONE,
                                   NULL,
                                   id);
      id->item = it;
   }
static void
create_base_gui(appdata_s *ad)
{
   Evas_Object *conform, *nf, *box, *clock, *layout, *rect, *button;
   // Window
   ad->win = elm_win_util_standard_add(PACKAGE, PACKAGE);
   elm_win_autodel_set(ad->win, EINA_TRUE);

   // Conformant
   conform = elm_conformant_add(ad->win);
   elm_win_conformant_set(ad->win, EINA_TRUE);
   evas_object_size_hint_weight_set(conform, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
   elm_win_resize_object_add(ad->win, conform);
   evas_object_show(conform);

   // Naviframe
   nf = elm_naviframe_add(conform);
   elm_object_content_set(conform, nf);
   evas_object_show(nf);
}
 // Box
   box = elm_box_add(nf);
   evas_object_size_hint_weight_set(box, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
   evas_object_size_hint_align_set(box, EVAS_HINT_FILL, EVAS_HINT_FILL);
```

This is a box component.

``` wp-block-preformatted
static void
win_back_cb(void *data , int type , void *event)
{
   appdata_s *ad = data;
   elm_win_lower(ad->win);
}
```

You can see how the application behaves.
