"use strict";
const logging = require("logging");
module.exports.todos = async (event, context, callback) => {
  var result = {Case: '이곳은 로깅'};
    callback(null, result);    
};
