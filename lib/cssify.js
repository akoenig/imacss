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
 * The stream which will transform the internal image
 * data structure into a CSS selector with the embedded file.
 *
 * @param {string | function} css The CSS class which will be used as a prefix, or a function to generate the CSS rule set.
 * @param {object} options Stream options.
 *
 */
function Cssify (css, options) {

    this.css = css;

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

    switch (typeof this.css) {
        case 'string':
            this.push(Utilities.getCSSSelector(this.css, image.slug, selector) + '\n');
            break;
        
        case 'function':
            this.push(this.css(image) + '\n');
            break;
    }

    cb();
};

module.exports = function (css) {
    return new Cssify(css);
};