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

var through = require('through2');
var vfs = require('vinyl-fs');
var purify = require('./purify');
var slugify = require('./slugify');
var mimeify = require('./mimeify');
var urify = require('./urify');
var cssify = require('./cssify');

exports.purify  = purify;
exports.slugify = slugify;
exports.mimeify = mimeify;
exports.urify   = urify;
exports.cssify  = cssify;

/**
 * Creates a filestream which can be piped through the 'imacss' pipeline
 *
 * @param  {object||string} glob A glob string or a Vinyl file object.
 *
 * @return {Stream}
 *
 */
exports.createFileStream = function createFileStream (glob) {
    var strom;

    function convert (file, enc, callback) {
        /*jshint validthis:true */
        this.push(glob);

        callback();
    }

    if (glob.pipe) {
        strom = glob.pipe(through.obj(convert));
    } else {
        strom = vfs.src(glob);
    }

    return strom;
};