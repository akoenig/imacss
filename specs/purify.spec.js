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

var helper = require('./helper'),
    purify = require('../lib/purify');

describe('The "purification" stream', function () {

    it('should transform a vinyl file to an internal data structure', function (done) {
        var imageFile = helper.createImageFile(),
            stream = purify();

        stream.on('data', function (image) {
            expect(image.name).toBeDefined();
            expect(image.contents).toBeDefined();
            expect(image.base64).toBeDefined();

            done();
        });

        stream.write(imageFile);
        stream.end();
    });
});