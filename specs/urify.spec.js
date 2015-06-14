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
var urify = require('../lib/urify');

var expect = require('expect.js');

describe('The "urification" stream', function suite () {

    it('should create a data-uri', function test (done) {
        var image = helper.createImage();
        var stream = urify();

        stream.on('data', function (image) {
            expect(image.datauri).not.to.be(undefined);

            done();
        });

        stream.write(image);
        stream.end();
    });
});
