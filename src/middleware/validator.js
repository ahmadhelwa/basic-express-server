'use strict';
const errHandler = require('../error-handlers/500');
function validator() {
    return (req, res, next) => {
        let regx = /^[a-zA-Z]+$/;

        if (regx.test(req.query.name)) {
            next();
        }
        else if (req.query.name === "") {
            next('name is empty');
        }
        else if (!regx.test(req.query.name)) {
            next(' should be a valid string');
        }
    }
}
module.exports = validator;