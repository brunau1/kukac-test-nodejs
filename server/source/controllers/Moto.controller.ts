import { Request, Response } from 'express';
import { saveObject, readFile } from '../utils/file';
import path from 'path';
import Moto from '../models/Moto';
const filePath = path.resolve(__dirname,'../../../','database','moto.json');

export default class MotoController {
    public static get(request: Request, response: Response) {
        (async () => {
            const data: any = await readFile(filePath)
            if (!!data.error)
                return response.status(500).send(data);
            else return response.status(200).send({
                'error': false,
                'data': JSON.parse(data.toString())
            });
        })();
    }

    public static post(request: Request, response: Response) {
        const { atributes } = request.body;
        const motoObject: Moto = new Moto(atributes);
        if (!!motoObject) {
            (async () => {
                const message = await saveObject(atributes, filePath);
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