import { Request, Response } from 'express';
import { saveObject, readFile } from '../utils/file'
import Moto from '../models/Moto'

export default class MotoController {
    public static get(request: Request, response: Response) {
        (async () => {
            const data: any = await readFile('../filesJson/motoObjects.json')
            if (!!data.error)
                return response.status(500).send(data);
            else return response.status(200).send(data);
        })();
    }

    public static post(request: Request, response: Response) {
        const { atributes } = request.body;
        const motoObject: Moto = new Moto(atributes);
        if (!!motoObject) {
            (async () => {
                const message = await saveObject(atributes, '../filesJson/motoObjects.json');
                if (!!message.error) return response.status(500).send(message);
                else return response.status(200).send(message);
            })();
        }
        else return response.status(400).send({
            'error': true,
            'message': 'missing object atributes'
        });
    }
}