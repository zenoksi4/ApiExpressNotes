"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ValidateRequest_1 = __importDefault(require("../services/middleware/ValidateRequest"));
const NotesService_1 = __importDefault(require("../services/NotesService"));
const CreateNote_schema_1 = __importDefault(require("../helpers/dto/CreateNote.schema"));
const router = express_1.default.Router();
router.get('/', NotesService_1.default.readAllNotes);
router.get('/stats', NotesService_1.default.readNotesStats);
router.get('/:id', NotesService_1.default.readNote);
router.post('/', (0, ValidateRequest_1.default)(CreateNote_schema_1.default), NotesService_1.default.createNote);
router.delete('/:id', NotesService_1.default.deleteNote);
router.patch('/:id', NotesService_1.default.updateNote);
module.exports = router;
