# Quickstart

## Overview
The minimum necessary for an AttoWeb application is:

* The _atto.js_ file. This provides the core functionality. I put this in a _/js_ folder.
* A _config.js_ file. This defines basic information about the web application and instantiates an
  `atto` object with this information. I put this in the top level. Alternatively, one could put this
  functionality inside `<script>` tags.
* An _index.html_ (or equivalent) that loads _config.js_.
* One or more Markdown files. I usually put these in a _/content_ folder.

The quickest way to start would be to clone the [quickstart repo](_https://github.com/AttoWeb/quickstart).

This demonstrates the basic REST function.

To learn more advanced methods of using AttoWeb, see the [attoweb basics](#target=main&source=content/attoweb-basics) page.
