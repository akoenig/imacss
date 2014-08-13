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

var helper = require('./helper');
var slugify = require('../lib/slugify');

describe('The "slugification" stream', function () {

    it('should create a slug', function (done) {
        var image = helper.createImage();
        var stream = slugify();

        stream.on('data', function (image) {
            expect(image.slug).toBeDefined();

            done();
        });

        stream.write(image);
        stream.end();
    });
});