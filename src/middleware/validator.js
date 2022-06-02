"use strict";
function validator() {
  return (req, res, next) => {
    let regx = /^[a-zA-Z]+$/;

    if (req !== "") {
      next("error");
    } else if (regx.test(req.query.name)) {
      next();
    } else if (req.query.name === "") {
      next("name is empty");
    } else if (!regx.test(req.query.name)) {
      next(" should be a valid string");
    }
  };
}
module.exports = validator;
