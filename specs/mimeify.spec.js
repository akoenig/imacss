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

describe('The "mimeification" stream', function () {

    it('should determine the MIME type of the image', function (done) {
        var image = helper.createImage();
        var stream = mimeify();

        stream.on('data', function (image) {
            expect(image.mime).toBeDefined();
            expect(image.mime).toBe('image/svg+xml');

            done();
        });

        stream.write(image);
        stream.end();
    });
});