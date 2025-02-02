"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_router_1 = __importDefault(require("./router/client/index.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "pug");
(0, index_router_1.default)(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
