import express from 'express'
import cors from 'cors'
import config from './configuration/app.config'
import routes from './routes/app.routes'

class ApplicationController {

    public application: express.Application;

    constructor(){
        this.application = express();
        this.application.use(express.json());
        this.application.use(cors());
        this.routes();
    }

    public listen(port: string | number, callback: () => void): void {
        this.application.listen(port, callback);
    }

    private routes(){
        this.application.use(config.endpoint, routes);
    }
}

export default new ApplicationController();