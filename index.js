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
 * Transforms image files to base64 encoded data URIs and embeds them into CSS files.
 *
 * @param  {string} glob A globbing expression for matching particular image files.
 * @param {string} clazz The CSS class which will be used as a prefix.
 *
 */
exports.transform = function transform (glob, clazz) {

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