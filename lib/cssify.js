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
 * The stream which will transform the internal image
 * data structure into a CSS selector with the embedded file.
 *
 * @param {string} clazz The CSS class which will be used as a prefix.
 * @param {object} options Stream options.
 *
 */
function Cssify (clazz, options) {

    this.$$class = clazz;

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Cssify, stream.Transform);

/**
 * The transformation process.
 *
 */
Cssify.prototype._transform = function _transform (image, enc, cb) {

    var selector = {
        'background-image': 'url(\'' + image.datauri + '\')'
    };

    this.push(Utilities.getCSSSelector(this.$$class, image.slug, selector) + '\n');

    cb();
};

module.exports = function (clazz) {
    return new Cssify(clazz);
};