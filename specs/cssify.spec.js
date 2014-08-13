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

var helper  = require('./helper');
var cssify  = require('../lib/cssify');

describe('The "cssification" stream', function () {

    it('should generate a CSS selector based on the image data', function (done) {
        var image = helper.createImage();
        var prefix = 'imacss';
        var stream = cssify(prefix);

        stream.on('data', function (selector) {
            expect(selector).toBeDefined();

            expect(selector.substring(1, prefix.length + 1)).toBe(prefix);

            done();
        });

        stream.write(image);
        stream.end();
    });

    it('should generate a custom CSS rule set if a function is passed instead of a prefix string', function(done) {
      
        var image  = helper.createImage();
        var generateCss = function generateCss(image) { return image.name; };
        var stream = cssify(generateCss);
      
        stream.on('data', function(ruleset) {
            expect(ruleset).toBeDefined();
            expect(ruleset).toBe(image.name + '\n');
            done();
        });
      
        stream.write(image);
        stream.end();
    });
});