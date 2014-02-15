# imacss [![Build Status](https://travis-ci.org/akoenig/imacss.png?branch=master)](https://travis-ci.org/akoenig/imacss)

_pronunciation: imax_

An application and library that transforms image files to [data URIs (rfc2397)](https://www.ietf.org/rfc/rfc2397.txt) and embeds them into a single CSS file as background images.

Let's say you have a web-based frontend which embeds a lot of images (e.g. icons). This referencing produces HTTP requests for every single image. What if you would like to minimize it to just one request? That is something `imacss` can do for you.

## What?

Okay, enough words. Let's dive straight into a transformation example. If we assume that you have two SVGs, like `github.svg` and `quitter.svg`, `imacss` will generate this CSS code for you.

```css
.imacss.imacss-github {
    background:url(data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEBg...);
}

.imacss.imacss-quitter {
    background:url(data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhADA...);
}
```

You can refer to this images by using the respective CSS classes:

```html
<div class="imacss imacss-quitter">...</div>
```

## CLI

`imacss` comes with a command-line interface which pipes the output to stdout by default (yeah, plain old text streams FTW!).

### Installation

Install with [npm](https://npmjs.org/package/imacss) globally.

    npm install -g imacss

### Usage examples

Embed all SVGs in a particular directory and all its subdirectories (will pipe the output to stdout).

    $ imacss "~/projects/webapp/images/**/*.svg"

Embed all SVGs in a particular directory and transfer them to a CSS file which will be saved in the CWD.

    $ imacss "~/projects/webapp/images/*.svg" images.svg.css

Embed all SVGs _and_ PNGs in a particular directory and transfer them to a CSS file which will be saved in the CWD.

    $ imacss "~/projects/webapp/images/*.{svg,png}" images.css

If you don't like the `imacss` selector namespace you are able to modify it as well.

    $ imacss "~/projects/webapp/images/*.{svg,png}" images.css foobar

will produce this selector structure in the CSS file:

```css
.foobar.foobar-github {...}
```

## API

If you would like to use the `imacss` functionality within your application, there is an API for that.

### Install

Install with [npm](https://npmjs.org/package/imacss)

    npm install --save imacss

### Methods

#### transform(glob[, namespace]);

Transforms the image files from the specified glob and returns a stream with the CSS selectors that can be piped to somewhere else.

**Arguments**

`glob`

The path to the images which should be transformed. You can use any glob pattern you want.

`namespace` (optional; default=imacss)

The CSS selector namespace.

### Usage example

```javascript
var imacss = require('imacss');

imacss
    .transform('/path/to/your/images/*.png')
    .on('error', function (err) {
        error('Transforming images failed: ' + err);
    })
    .pipe(process.stdout);
```


## Changelog

### Version 0.1.1 (20140211)

- Fixed typos in the README.

### Version 0.1.0 (20140211)

- Initial Release. Implemented the core functionality (CLI and API).

## Author

Copyright 2014, [André König](http://iam.andrekoenig.info) (andre.koenig@posteo.de)
