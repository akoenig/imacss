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
 * Constructs a RFC 2397 conform data URI.
 *
 * @param {object} image The vinyl file object
 * 
 * @return {string} The created data URI
 *
 */
module.exports.constructDataURI = function constructDataURI (image) {
	var data = image.base64;
	var type = 'base64';

	if ('image/svg+xml' === image.mime) {
		type = 'utf-8';
		data = image.contents
			.toString(type)
			.replace(/\r?\n|\r/g, '')
			.replace('#', '%23');
	}

    return 'data:' + image.mime + ';' + type + ',' + data;
};
