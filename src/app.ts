import {Application} from "express"
import express from "express"
import routerConst from "./routes";

const appConst : Application = express();
export default appConst;

appConst.set("port",3000);

appConst.use(express.json());

appConst.set("uriMongo",'mongodb+srv://testuser:1234@estudianteprueba.822mjnj.mongodb.net/?retryWrites=true&w=majority');

appConst.use("/api",routerConst);