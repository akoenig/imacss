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

var fs     = require('fs'),
    path   = require('path'),
    gutil  = require('gulp-util');

/**
 * DOCME
 *
 * @return {[type]} [description]
 *
 */
exports.createImageFile = function createImageFile () {
    var svg = './specs/assets/twitter.svg';

    return new gutil.File({
        path: svg,
        cwd: './specs/assets/',
        base: './specs/assets/',
        contents: fs.readFileSync(svg)
    });
};

/**
 * DOCME
 *
 * @return {[type]} [description]
 *
 */
exports.createImage = function createImage () {
    var file  = this.createImageFile(),
        image = {};

    image.name     = path.basename(file.path);
    image.contents = file.contents;
    image.base64   = file.contents.toString('base64');

    return image;
};