/*
 * imacss
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var stream = require('stream'),
    path   = require('path'),
    util   = require('util'),
    slug   = require('slug');

function Slugify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options)
}

util.inherits(Slugify, stream.Transform);

/**
 * DOCME
 *
 * @param  {[type]}   chunk [description]
 * @param  {[type]}   enc   [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 *
 */
Slugify.prototype._transform = function _transform (image, enc, cb) {

    image.slug = slug(path.basename(image.name, path.extname(image.name)));

    this.push(image);

    cb();
};

module.exports = function () {
    return new Slugify();
};