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

/**
 * DOCME
 *
 * @param  {[type]} class    [description]
 * @param  {[type]} slug     [description]
 * @param  {[type]} properties [description]
 * @return {[type]}          [description]
 *
 */
exports.constructSelector = function constructSelector (clazz, slug, properties) {
    var selector = '',
        prop;

    // Creating cascade: e.g. .imacss.imacss-foobar {...}
    selector = '.' + clazz + '.' + clazz + '-' + slug + '{';

    for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
            selector = selector + prop + ':' + properties[prop] + ';';
        }
    }

    selector = selector + '}';

    return selector;
};