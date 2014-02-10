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

function Purify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options)
}

util.inherits(Purify, stream.Transform);

/**
 * DOCME
 *
 * @param  {[type]}   chunk [description]
 * @param  {[type]}   enc   [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 *
 */
Purify.prototype._transform = function _transform (vfile, enc, cb) {

    var image = {};

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