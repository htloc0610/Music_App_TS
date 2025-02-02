import { Request, Response } from "express";
import Topic from "../../models/topic";

export const renderTopicPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const topics = await Topic.find({ deleted: false });

  res.render("client/pages/topics/index", { topics });
};
