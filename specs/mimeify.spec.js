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
var mimeify = require('../lib/mimeify');

var expect = require('expect.js');

describe('The "mimeification" stream', function suite () {

    it('should determine the MIME type of the image', function test (done) {
        var image = helper.createImage();
        var stream = mimeify();

        stream.on('data', function (image) {
            expect(image.mime).not.to.be(undefined);
            expect(image.mime).to.be('image/svg+xml');

            done();
        });

        stream.write(image);
        stream.end();
    });
});
