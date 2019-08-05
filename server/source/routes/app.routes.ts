import { Router, Request, Response } from "express";
import PalindromeController from "../controllers/Palindrome.controller";
import CashController from "../controllers/Cash.controller";

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
* Rota default da API - teste
*/
routes.get('/', defaultRoute);

export default routes;