'use strict';

var parseColor = require('../parsers').parseColor;

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-text-stroke-color', parseColor(v));
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-stroke-color');
    },
    enumerable: true
};