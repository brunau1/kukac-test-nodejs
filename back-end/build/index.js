import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("server escutando na porta " + this.app.get('port'));
        });
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes);
    }
}
const server = new Server();
server.start();
