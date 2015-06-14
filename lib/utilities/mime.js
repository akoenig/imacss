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

var filetypes = [
    {mime: 'image/jpeg', magicnumber: 'FFD8', extensions: ['jpg', 'jpeg']},
    {mime: 'image/png', magicnumber: '89504E470D0A1A0A', extensions: ['png']}
];

/**
 * Determines the MIME type of the given image.
 *
 * @param {buffer} image The image as a buffer.
 * @param {function} callback -> err, mime{string}
 *
 */
module.exports.detect = function detect (image, callback) {
    var buffer = image.toString('hex').toUpperCase();
    var i = filetypes.length - 1;
    var filetype;
    var magic;
    var mime;

    //
    // Helper function for checking if a file is a SVG.
    // (Thanks to grunticon: https://github.com/filamentgroup/grunticon)
    //
    function isSVG (data) {

        var i = 0;
        var len = data.length;
        var snippet;

        for (i; i < len; i = i + 1) {
            snippet = data.slice(i, i + 2).toString('hex');

            if ('73' === snippet) {
                i = i + 2;
                snippet = data.slice(i, i + 2).toString('hex');

                if ('76' === snippet) {
                    i = i + 2;
                    snippet = data.slice(i, i + 2).toString('hex');

                    if ('67' === snippet) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    search: for (i; i >= 0; i = i - 1) {
        filetype = filetypes[i];

        magic = buffer.substring(0, filetype.magicnumber.length);

        if (magic === filetype.magicnumber) {
            mime = filetype.mime;

            break search;
        }
    }

    if (!mime && isSVG(buffer)) {
        mime = 'image/svg+xml';
    }

    return callback(null, mime || 'Unknown');
};
