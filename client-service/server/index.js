'use strict';

const fs = require("fs");

module.exports = (router) => {
    const path = __dirname + '/api/'
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            require(path + file)(router)
        });
    });
};
