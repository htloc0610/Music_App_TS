import { Request, Response } from "express";

export const renderTopicPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  //   const topics = Topic.find({ deleted: false });
  //   console.log(topics);
  res.render("client/pages/topics/index");
  //   res.send("ok");
};
