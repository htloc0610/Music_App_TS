import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import path from "path";

import clientRouters from "./router/client/index.router";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

clientRouters(app);

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});
