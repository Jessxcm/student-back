import { connect } from "mongoose";
import appConst from "./app";

export async function startConnection() {
    await connect(appConst.get('uriMongo'))
    .then(()=> console.log('Connected'))
}