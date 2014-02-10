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

function Cssify (clazz, options) {

    this.$$class = clazz;

    options = options || {};

    options.objectMode = true;

    stream.Transform.call(this, options);
}

util.inherits(Cssify, stream.Transform);

/**
 * DOCME
 *
 * @param  {[type]}   chunk [description]
 * @param  {[type]}   enc   [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
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