import { Router, Request, Response } from "express";
import PalindromeController from "../controllers/Palindrome.controller";

function defaultRoute(request: Request, response: Response){
    response.send('default route');
}

const routes = Router();
/**
 * Retorna uma lista de números palindromos gerados com 
 * base num determinado intervalo
 */
routes.get('/palindrome', PalindromeController.get);

/*
* Rota default da API - teste
*/
routes.get('/', defaultRoute);

export default routes;