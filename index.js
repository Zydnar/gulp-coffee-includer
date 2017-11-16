"use strict";
const through2 = require('through2'),
    CI = require('coffee-includer'),
    Includer = new CI.Includer();

module.exports = through2.obj(Includer, Includer._transform);
