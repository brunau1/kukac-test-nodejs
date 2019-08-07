import { Router, Request, Response } from "express";
import PalindromeController from "../controllers/Palindrome.controller";
import CashController from "../controllers/Cash.controller";
import MotoController from "../controllers/Moto.controller";

function defaultRoute(request: Request, response: Response){
    response.send({
        'message': 'default API route'
    });
}

const routes = Router();
/**
 * Retorna uma lista de números palindromos gerados com 
 * base num determinado intervalo
 */
routes.get('/palindrome', PalindromeController.get);

/** 
 * Retorna uma um objeto com a quantidade de cada nota para o troco
 */
routes.get('/cash', CashController.get);

/* 
* Retorna um objeto JSON com todos os objetos da classe moto
*/
routes.get('/moto', MotoController.get)

/* 
* Cria um objeto da classe moto e salva em um arquivo JSON
*/
routes.post('/moto/create', MotoController.post)

/*
* Rota default da API - teste
*/
routes.get('/', defaultRoute);

export default routes;