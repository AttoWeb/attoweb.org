# AttoWeb Basics

## Overview
The minimum necessary for an AttoWeb application is:

* The _atto.js_ file. This provides the core functionality. I put this in a _/js_ folder.
* A _config.js_ file. This defines basic information about the web application and instantiates an
  `atto` object with this information. I put this in the top level. Alternatively, one could put this
  functionality inside `<script>` tags.
* An _index.html_ (or equivalent) that loads _config.js_.
* One or more Markdown files. I usually put these in a _/content_ folder.

## Directory Structure
The basic directory structure I use looks like:

```
$ tree somesite/
somesite/
├── assets
│   └── img
├── config.js
├── content
├── css
│   └── style.css
├── index.html
├── js
└── plugins
```

Linux users can create this easliy like so:

```
mkdir -p somesite/{content,js,css,assets,assets/img,plugins}
touch {somesite/index.html,somesite/config.js,somesite/css/style.css}
```

The only other addition you need is to place _atto.js_ in the `/js` (if that's where
you want to load it from).

## Config File
As far as AttoWeb functions go, the only JS file you need to explicitly load is _config.js_,
which I usually place in the top-level directory. Actually, you can all it whatever you want.
I call it _config.js_. This file does three important things:

1. Loads _atto.js_.
2. Creates an object containing information about the default and initial content of the application
   as well as routes and plugins.
3. Initializes the application passing in this object.

### Loading Atto
The first line in the _config.js_ file is

```
import {Atto} from './js/atto.js';
```

This loads _atto.js_ from its location (in this case, the `/js` directory).

### Default Content
"Default content" means the stuff that will likely be on every web page such as a header, footer,
navigation, and whatever else. You specify this information like:

```
var default_content =
[
  {target: 'header', source: 'content/header.md'},
  {target: 'nav', source: 'content/nav.md'},
  {target: 'footer', source: 'content/footer'}
];
```

The format of each element in the `default_content` object is
```
{
    target: <id of html element>,
    source: <location of markdown file>,
    callback: <a functino to run after loaded>
}
```

The purpose of the default content is to make the web application actually appear to be a REST application.
AttoWeb assumes that there is essentially one HTML element that will be getting updated data. Starting from
a completed page, an HTTP "request" (which is not actually a request) `source=file.md&target=element` will
change out the content in `#element` with a rendering of _file.md_. However, what if you email a link to someone
that looks like `http://mysite.com/#source=file.md&target=element`. There isn't an existing page to swap content
into. Since it is an initial page load, AttoWeb knows to first load the default content, and then process the
"request."

### Initial Content
In light of the above, the default content plays a special role. It needs to always be present. The initial
content is what initially goes in the key element.

```
var initial_content =
{
    target: 'main', source: 'content/about.md', callback: <if any>
};
```

It's worth noting that you can specify any _source_ and _target_ you want, so pages can actually be quite dynamic.

There is probably a better way to do all of this...

### Callbacks
The `callback` function is used to run any special code after loading that particular content. This callback can be used to
add classes and IDs to new elements and add new CSS for styling and dynamic functionality.

### Routes
This is really just candy. If you feel like it, you can set up routes so that you can use prettier links in the nav
or anywhere else you have internal links. With this routes spec,

```
var routes =
{
  page1: {path: "content", source: "page1.md", target: "main", callback: "js/runme.js"},
  side1: {path: "content", source: "page2.md", target: "left_sidebar"}
};
```

You can use links like `[this](page1) page has interesting stuff. A [list](side1) of other stuff`.

### Plugins
AttoWeb has a very primitive plugin system you can use to expand functionality. A [separate page](?source=/content/plugins.md&target=main)
goes into details. In the _config.js_ file you pass a list of plugins such as

```
var plugins =
[
    'simple-dropdown-nav',
];
```

into the `atto` constructor using the `configs` object.

### Loading from Github
If you want to prevent having to push and pull all the time, you can set up to pull material from GitHub. The
GitHub API allows you to pull raw files like so:

```
https://raw.githubusercontent.com/<username>/<repo>/master/<filename>
```

In the case of an "organization," such as AttoWeb, substitute the organization name for the username. To facilitate
this, you can specify a `base_url` to preceed any path.

I have not experimented with all the possible ways one could use this, such as also loading JS, CSS, or pretty
much any content. Hypothetically, the only file one would need to have on the server at all is an HTML shell that
runs a script pulled from GitHub that loads all the other content. Sounds dangerous...and slow.


### Configs Object
You can actually call it whatever you want, but the `configs` object contains `default_content`, `initial_content`,
`routes`, and `base_url`. You pass this to the constructor when you instantiate the web application.

### Instatiate the `atto` object
```
var app = new Atto(configs);
app.initializeApp();
```

## Summary
That's pretty much all there is to it.





