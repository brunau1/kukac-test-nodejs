import { Request, Response } from 'express'
import axios from 'axios'

class PalindromeControll{

	public async index ( request: Request, response: Response ){

		var responseData
		let erros = new Array();

		let firstRange = request.body.first_range
		let lastRange = request.body.last_range

		if ( firstRange == null || firstRange == undefined){
			erros.push( "Digite um número válido para o primeiro intervalo" )
		}
		if ( lastRange == null || lastRange == undefined){
			erros.push( "Digite um número válido para o ultimo intervalo" )
		}

		if ( erros.length == 0) {
			
			responseData = this.verifyPalindrome(firstRange, lastRange)
			response.send( responseData )
		}
		else{
			const errosJson = {
				"erro": true,
				"messages": erros
			}
			response.status(400);
			response.send( errosJson );
		}
		

	}

	public verifyPalindrome(first : number, latest : number) : any{
		let numLength 
		let numAux
		let palindromes = new Array()
		for (let num = first; num <= latest; num++) {
			numAux = num.toString()
			numLength = numAux.length

			if (numLength > 1) {
				if (num == parseInt(numAux.split('').reverse().join(''))) {
					palindromes.push(num)
				}
			}
		}
		return palindromes
	}
}

const palindromeController = new PalindromeControll()
export default palindromeController		