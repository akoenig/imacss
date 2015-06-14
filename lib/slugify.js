/*
 * imacss
 *
 * Copyright(c) 2014 - 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var stream = require('stream');
var path = require('path');
var util = require('util');
var slug = require('slug');

/**
 * The stream which will create a slug based on the
 * image name. A slug is a short, normalized name.
 *
 * @param {object} options Stream options.
 *
 */
function Slugify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Slugify, stream.Transform);

/**
 * The transformation process.
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