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

var Stream = require('stream').Stream;

/**
 * DOCME
 *
 * @param  {[type]}  checkable [description]
 * @return {Boolean}           [description]
 *
 */
exports.isStream = function isStream (checkable) {
    return !!checkable && checkable instanceof Stream;
};