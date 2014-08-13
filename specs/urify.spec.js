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

describe('The "urification" stream', function () {

    it('should create a data-uri', function (done) {
        var image = helper.createImage();
        var stream = urify();

        stream.on('data', function (image) {
            expect(image.datauri).toBeDefined();

            done();
        });

        stream.write(image);
        stream.end();
    });
});