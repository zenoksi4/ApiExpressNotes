"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = void 0;
const yup_1 = require("yup");
exports.Schemas = {
    data: (0, yup_1.object)().shape({
        title: (0, yup_1.string)().required("title is required"),
        category: (0, yup_1.string)().required("category is required"),
        content: (0, yup_1.string)().required("content is required"),
    })
};
