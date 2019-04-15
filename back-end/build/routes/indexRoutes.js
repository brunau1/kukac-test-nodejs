import { Router } from 'express';
import parkController from '../controllers/parkingControll';
import notesController from '../controllers/countNotesControll';
class IndexRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/api/park', parkController.index);
        this.router.post('/api/notes', notesController.index);
        this.router.post('/api/palindrome', parkController.index);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
