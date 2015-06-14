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

var expect = require('expect.js');

describe('The "cssification" stream', function suite () {

    it('should generate a CSS selector based on the image data', function test (done) {
        var image = helper.createImage();
        var prefix = 'imacss';
        var stream = cssify(prefix);

        stream.on('data', function (selector) {
            expect(selector).not.to.be(undefined);

            expect(selector.substring(1, prefix.length + 1)).to.be(prefix);

            done();
        });

        stream.write(image);
        stream.end();
    });

    it('should generate a custom CSS rule set if a function is passed instead of a prefix string', function test (done) {
      
        var image  = helper.createImage();
        var generateCss = function generateCss(image) { return image.name; };
        var stream = cssify(generateCss);
      
        stream.on('data', function(ruleset) {
            expect(ruleset).not.to.be(undefined);
            expect(ruleset).to.be(image.name + '\n');

            done();
        });
      
        stream.write(image);
        stream.end();
    });
});
