'use strict';

var parseMeasurement = require('../parsers').parseInheritingMeasurement;

module.exports.definition = {
  set: function (v) {
    this._setProperty('bottom', parseMeasurement(v));
  },
  get: function () {
    return this.getPropertyValue('bottom');
  },
  enumerable: true,
  configurable: true,
};
