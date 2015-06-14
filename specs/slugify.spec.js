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

var expect = require('expect.js');

describe('The "slugification" stream', function suite () {

    it('should create a slug', function test (done) {
        var image = helper.createImage();
        var stream = slugify();

        stream.on('data', function (image) {
            expect(image.slug).not.to.be(undefined);

            done();
        });

        stream.write(image);
        stream.end();
    });
});
