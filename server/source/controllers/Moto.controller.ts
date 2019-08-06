import { Request, Response } from 'express';
import { saveObject } from '../utils/file'
import Moto from '../models/Moto'

export default class MotoController {
    public static get(request: Request, response: Response) {
        return response.status(200).send();
    }

    public static post(request: Request, response: Response) {
        const { atributes } = request.body;
        const motoObject = new Moto(atributes);
        if (!!motoObject) {
            (async () => {
                const message = await saveObject(atributes, '../filesJson/motoObjects.json');
                if (message.error)
                    return response.status(500).send(message);
            })();
        }
        else return response.status(400).send({
            'error': true,
            'message': 'missing object atributes'
        });
    }
}