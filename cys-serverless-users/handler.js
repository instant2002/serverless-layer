"use strict";
const hooks = require("hooks");
module.exports.users = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: hooks.hooking(),
        Case: event.Case
      },
      null,
      2
    ),
  };
};
