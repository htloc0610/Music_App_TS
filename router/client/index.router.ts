import { Application } from "express";
import { topicRouters } from "./topic.router";

const clientRouters = (app: Application): void => {
  app.use("/topic", topicRouters);
};

export default clientRouters;
