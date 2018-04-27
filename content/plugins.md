# Plugins

**NOTE:** The plugin system is currently implemented through page update [callbacks](?target=main&source=content/attoweb-basics.md#callbacks).
More developments to follow...

## Overview
AttoWeb has a simple plugin system. When you instantiate the web application you
can pass in an object that contains a list of plugins to run. You specify this list
in the _config.js_ file which is explained in the [AttoWeb Basics](?source=content/attoweb-basics.md&target=main) page.
These plugins run in a loop when the application is instantiated. The system is
extremely primitive.

## Plugin Loop
In the _plugins_ directory you create a subdirectory with the name of your plugin.
Inside that subdirectory you place a single JS file named _<plugin name>.js_ and
a single CSS file names _<plugin name>.css_. In the function that runs when the app
initially loads there is a loop that runs the plugins. For each plugin, first
the CSS file is loaded and inserted into the DOM. Next the JS file is loaded and
run.

## What You Can Do
I have done some hacky things with this plugin system such as create nav menus
with Markdown. The JS file traverses the HTML generated from the Markdown, and
forcefully adds classes and IDs to elements which will then be styled by the CSS.

It more or less works.

## Examples
The dropdown menu on the [AttoWeb](http://attoweb.org) website is a plubin, as is
the responsive nav on my [personal website](http://arielbalter.com). The link
to the GitHub repo is there.
