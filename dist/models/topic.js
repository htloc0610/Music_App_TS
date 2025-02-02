"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const topicSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});
const Topic = (0, mongoose_1.model)("Topic", topicSchema, "topics");
exports.default = Topic;
