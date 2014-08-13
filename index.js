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

var domain   = require('domain');

var pipeline = require('./lib');
var pkg = require('./package.json');

/**
 * Transforms image files to base64 encoded data URIs and embeds them into CSS files.
 *
 * @param  {string} glob A globbing expression for matching particular image files.
 * @param {string | function} css The CSS class which will be used as a prefix, or a function to generate the CSS rule set.
 *
 */
exports.transform = function transform (glob, css) {

    var execution = domain.create();
    var transformation;

    css = css || pkg.name;

    execution.on('error', function (err) {
        transformation.emit('error', err);
    });

    execution.run(function () {

        transformation = pipeline.createFileStream(glob)
            .pipe(pipeline.purify())
            .pipe(pipeline.slugify())
            .pipe(pipeline.mimeify())
            .pipe(pipeline.urify())
            .pipe(pipeline.cssify(css));
    }); 

    return transformation;
};