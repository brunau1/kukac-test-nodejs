import { Request, Response } from 'express';
import { saveFile } from '../utils/file';
import path from 'path';
import Moto from '../models/Moto';
import fs from 'fs';
const filePath = path.resolve(__dirname,'../../../','database','moto.json');

export default class MotoController {
    public static get(request: Request, response: Response) {
        (async () => {
            try{
            const data: any = await fs.readFileSync(filePath)
            if (!!data.error)
                return response.status(500).send(data);
            else return response.status(200).send({
                'data': JSON.parse(data.toString())
            });
            } catch(error) { 
                return { 
                    'status': 500, 
                    'message': 'file is empty' 
                } 
            }
        })();
    }

    public static post(request: Request, response: Response) {
        const { atributes } = request.body;
        const motoObject: Moto = new Moto(atributes);
        if (!!motoObject) {
            (async () => {
                const message: any = await saveFile(motoObject.toObject(), filePath);
                if (message.error == true) return response.status(500).send(message);
                else return response.status(200).send(message);
            })();
        }
        else return response.status(400).send({
            'error': true,
            'message': 'missing object atributes'
        });
    }
}