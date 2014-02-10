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

var domain   = require('domain'),
    vfs      = require('vinyl-fs'),
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

    var execution = domain.create(),
        transformation;

    clazz = clazz || pkg.name;

    execution.on('error', function (err) {
        transformation.emit('error', err);
    });

    execution.run(function() {
        transformation = vfs.src(glob)
            .pipe(pipeline.purify())
            .pipe(pipeline.slugify())
            .pipe(pipeline.mimeify())
            .pipe(pipeline.urify())
            .pipe(pipeline.cssify(clazz));
    }); 

    return transformation;
};