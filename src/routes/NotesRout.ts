import express from 'express';
import { ValidateYup, SchemasCreate, SchemasUpdate } from '../helpers/middleware/ValidateRequest';
import controllers from '../controllers/NotesController'


const router = express.Router();


router.get('/', controllers.readAllNotes);
router.get('/stats', controllers.readNotesStats);
router.get('/:id', controllers.readNote);
router.post('/', ValidateYup(SchemasCreate.data), controllers.createNote);
router.delete('/:id', controllers.deleteNote);
router.patch('/:id', ValidateYup(SchemasUpdate.data), controllers.updateNote)

export = router;