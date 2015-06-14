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
var purify = require('../lib/purify');

var expect = require('expect.js');

describe('The "purification" stream', function suite () {

    it('should transform a vinyl file to an internal data structure', function test (done) {
        var imageFile = helper.createImageFile();
        var stream = purify();

        stream.on('data', function (image) {
            expect(image.name).not.to.be(undefined);
            expect(image.contents).not.to.be(undefined);
            expect(image.base64).not.to.be(undefined);

            done();
        });

        stream.write(imageFile);
        stream.end();
    });
});
