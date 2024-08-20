import { Router } from "express";
import { getUsers, getUserId, createUser } from './user.controller';

const routerConst: Router = Router();

export default routerConst;

routerConst.route('/users').get(getUsers);
routerConst.route('/user/:id').get(getUserId);
routerConst.route('/user').post(createUser);