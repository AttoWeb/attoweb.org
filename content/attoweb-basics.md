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

## Config File (_config.js_)
### Loading Atto
The first line in the _config.js_ file is

```
import {Atto} from './js/atto.js';
```

This loads _atto.js_ from its location (in this case, the `/js` directory).

###





