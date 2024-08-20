"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routerConst = (0, express_1.Router)();
exports.default = routerConst;
routerConst.route('/users').get();
routerConst.route('/user/:id').get();
routerConst.route('/user').post();
