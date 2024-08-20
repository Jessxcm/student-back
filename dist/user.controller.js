"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.getUsers = void 0;
const array_user_1 = require("./array.user");
function getUsers(req, res) {
    return res.json(array_user_1.users);
}
exports.getUsers = getUsers;
function getUser(req, res) {
    const id = req.params.id;
    let user = array_user_1.users.find(user => user.id === id);
    return res.json(user);
}
exports.getUser = getUser;
function createUser(req, res) {
    let newuser = req.body;
    newuser.id = '' + (array_user_1.users.length + 1);
    array_user_1.users.push(newuser);
    return res.json(newuser);
}
exports.createUser = createUser;
