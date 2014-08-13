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

var streams = require('stream');
var helper = require('./helper');
var imacss = require('../');

describe('The imacss', function () {
    var selector = '.imacss';

    it('"transform" method should be able to handle globs', function (done) {
        var stream = new streams.Writable();

        imacss.transform('./specs/**/*.svg')
            .pipe(stream);

        stream._write = function (css, enc, next) {
            css = css.toString('utf-8');

            expect(css.substring(0, selector.length)).toBe(selector);

            done();
        };
    });

    it('"transform" method should be able to handle a Vinyl file object', function (done) {
        var stream = new streams.Writable();

        imacss.transform(helper.createImageFile())
            .pipe(stream);

        stream._write = function (css, enc, next) {
            css = css.toString('utf-8');

            expect(css.substring(0, selector.length)).toBe(selector);

            done();
        };
    });
});