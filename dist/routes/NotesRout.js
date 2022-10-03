"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ValidateRequest_1 = require("../helpers/middleware/ValidateRequest");
const NotesController_1 = __importDefault(require("../controllers/NotesController"));
const router = express_1.default.Router();
router.get('/', NotesController_1.default.readAllNotes);
router.get('/stats', NotesController_1.default.readNotesStats);
router.get('/:id', NotesController_1.default.readNote);
router.post('/', (0, ValidateRequest_1.ValidateYup)(ValidateRequest_1.SchemasCreate.data), NotesController_1.default.createNote);
router.delete('/:id', NotesController_1.default.deleteNote);
router.patch('/:id', (0, ValidateRequest_1.ValidateYup)(ValidateRequest_1.SchemasUpdate.data), NotesController_1.default.updateNote);
module.exports = router;
