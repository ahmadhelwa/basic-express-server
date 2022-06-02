"use strict";
function validator() {
  return (req, res, next) => {
    let regx = /^[a-zA-Z]+$/;

    if (req.query.name) {
      if (regx.test(req.query.name)) {
        next();
      } else if (!regx.test(req.query.name)) {
        next(" should be a valid string");
      }
    } else {
      next("name not provide");
    }

    // if(req.query.name =="")
    //   {next("error")}
  };
}

module.exports = validator;
