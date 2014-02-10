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

var stream    = require('stream'),
    util      = require('util'),
    Utilities = require('./utilities');

/**
 * The stream which generate the data URI of the image.
 *
 * @param {object} options Stream options.
 *
 */
function Urify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Urify, stream.Transform);

/**
 * The transformation process.
 *
 */
Urify.prototype._transform = function _transform (image, enc, cb) {

    image.datauri = Utilities.getDataURI(image.mime, image.base64);

    this.push(image);

    cb();
};

module.exports = function () {
    return new Urify();
};