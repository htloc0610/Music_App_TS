import { Router, Request, Response } from "express";
import * as TopicController from "../../controller/client/topic.controller";

const router = Router();

// Define your routes here
router.get("/", TopicController.renderTopicPage);

export const topicRouters: Router = router;
