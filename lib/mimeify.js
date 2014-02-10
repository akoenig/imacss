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
 * DOCME
 *
 * @param {[type]} options [description]
 *
 */
function Mimeify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Mimeify, stream.Transform);

/**
 * DOCME
 *
 * @param  {[type]}   chunk [description]
 * @param  {[type]}   enc   [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
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