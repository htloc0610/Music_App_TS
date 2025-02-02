"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topic_router_1 = require("./topic.router");
const clientRouters = (app) => {
    app.use("/", topic_router_1.topicRouters);
};
exports.default = clientRouters;
