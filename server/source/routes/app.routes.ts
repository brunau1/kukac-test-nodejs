import { Router } from "express";
import PalindromeController from "../controllers/Palindrome.controller";

const routes = Router();
/**
 * Retorna uma lista de números palindromos gerados com 
 * base num determinado intervalo
 */
routes.get('/palindrome', PalindromeController.get);

export default routes;