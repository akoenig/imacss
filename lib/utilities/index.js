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

var mime = require('./mime');
var uri = require('./uri');
var css = require('./css');

exports.getMimeType = mime.detect;
exports.getDataURI = uri.constructDataURI;
exports.getCSSSelector = css.constructSelector;