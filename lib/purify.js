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
    util   = require('util'),
    path   = require('path'),
    slug   = require('slug');

/**
 * The stream which will convert the vinyl file to
 * an internal image data structure.
 *
 * @param {object} options Stream options.
 *
 */
function Purify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Purify, stream.Transform);

/**
 * The transformation process.
 *
 */
Purify.prototype._transform = function _transform (vfile, enc, cb) {

    var image = {};

    if (!vfile.contents) {
        return cb(new Error('Please define a valid glob, which will find some image files.'));
    }

    //
    // Converting the vinyl file into an own data model.
    //
    image.name     = path.basename(vfile.path);
    image.contents = vfile.contents;
    image.base64   = vfile.contents.toString('base64');

    this.push(image);

    cb();
};

module.exports = function () {
    return new Purify();
};