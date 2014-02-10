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
    Utilities = require('./utilities')

function Urify (options) {

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options)
}

util.inherits(Urify, stream.Transform);

/**
 * DOCME
 *
 * @param  {[type]}   chunk [description]
 * @param  {[type]}   enc   [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
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