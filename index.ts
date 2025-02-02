import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

import Topic from "./models/topic";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/topic", async (req: Request, res: Response): Promise<void> => {
  const topic = await Topic.find({
    deleted: false,
  });
  console.log(topic);

  res.render("client/pages/topics/index");
});

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});
