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

var mime = require('./mime'),
    uri  = require('./uri'),
    css  = require('./css');

exports.getMimeType    = mime.detect;
exports.getDataURI     = uri.constructDataURI;
exports.getCSSSelector = css.constructSelector;