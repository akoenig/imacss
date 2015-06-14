/*
 * imacss
 *
 * Copyright(c) 2014 - 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

/**
 * Creates a CSS selector.
 *
 * @param  {[type]} prefix The class prefix.
 * @param  {string} name The class name.
 * @param  {object} properties A map with all the properties.
 *
 * @return {string} The CSS selector.
 *
 */
exports.constructSelector = function constructSelector (prefix, name, properties) {
    var selector = '';
    var prop;

    // Creating cascade: e.g. .imacss.imacss-foobar {...}
    selector = '.' + prefix + '.' + prefix + '-' + name + '{';

    for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
            selector = selector + prop + ':' + properties[prop] + ';';
        }
    }

    selector = selector + '}';

    return selector;
};