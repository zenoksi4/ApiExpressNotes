"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    body: {
        title: (0, yup_1.string)().required("title is required"),
        category: (0, yup_1.string)().required("category is required"),
        content: (0, yup_1.string)().required("content is required"),
    }
});
