# UNRELEASED

  * ea1d1ea refactoring: `mocha` migration.
  * d90808a breaking change: the CLI does not provide the possibility for piping into a file. Just use `imacss *.svg > images.css`
  * c87cef4 feature: embedding SVG images as raw text strings instead of base64
  * 34639f4 deps: upgrade

# 0.3.0 (2014-08-13)

  * Possibility to define a function which will generate an own CSS class structure (by [@juice49](https://github.com/juice49)).

# Version 0.2.2 (2014-02-21)

  * Added more files to .npmignore.

# Version 0.2.1 (2014-02-17)

  * Added `preferGlobal` flag to the `package.json`.

# Version 0.2.0 (2014-02-17)

  * Implemented support for passing a vinyl file object to the transform method.

# Version 0.1.1 (2014-02-11)

  * Fixed typos in the README.

# Version 0.1.0 (2014-02-11)

  * Initial Release. Implemented the core functionality (CLI and API).