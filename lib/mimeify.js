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
var util = require('util');
var Utilities = require('./utilities');

/**
 * The stream which will determine the respective image MIME type
 * and appends it to the internal image data structure.
 *
 * @param {object} options Stream options.
 *
 */
function Mimeify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Mimeify, stream.Transform);

/**
 * The transformation process.
 *
 */
Mimeify.prototype._transform = function _transform (image, enc, cb) {
    var self = this;

    function done (err, mime) {
        image.mime = mime;

        self.push(image);
        
        return cb();
    }

    Utilities.getMimeType(image.contents, done);
};

module.exports = function () {
    return new Mimeify();
};