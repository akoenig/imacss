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

var vfs      = require('vinyl-fs'),
    pipeline = require('./lib'),
    pkg      = require('./package.json');

/**
 * DOCME
 *
 * @param  {[type]} glob [description]
 * @return {[type]}      [description]
 *
 */
exports.convert = function convert (glob, clazz) {

    clazz = clazz || pkg.name;

    return vfs.src(glob)
         .pipe(pipeline.purify())
         .pipe(pipeline.slugify())
         .pipe(pipeline.mimeify())
         .pipe(pipeline.urify())
         .pipe(pipeline.cssify(clazz));
};