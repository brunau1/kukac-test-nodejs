import { Router } from 'express';

import parkController from '../controllers/parkingControll';
import notesController from '../controllers/countNotesControll';
import palindromeController from '../controllers/palindromeControll';


class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/api/park', parkController.index);
        this.router.post('/api/notes', notesController.index);
        this.router.post('/api/palindrome', parkController.index);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;