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
 * Constructs a RFC 2397 conform data URI.
 *
 * @param {string} mime The MIME type
 * @param {string} base64 The base64 encoded file
 * 
 * @return {string} The created data URI
 *
 */
exports.constructDataURI = function constructDataURI (mime, base64) {
    return 'data:' + mime + ';base64,' + base64;
};