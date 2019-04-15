import { Request, Response } from 'express'
import axios from 'axios'

interface Veiculo {
	modelo: string
	anoDeFabrica: string
	qtdPortas: number
	marca: string
}

class Passeio implements Veiculo {

	public modelo : string
	public anoDeFabrica : string
	public qtdPortas : number
	public marca : string
	
	constructor(modelo, anoDeFabrica, marca) {
		this.modelo = modelo
		this.anoDeFabrica = anoDeFabrica
		this.marca = marca
		this.qtdPortas = 4
	}
}

class Moto {
	
	public qtdRodas : number
	public numPassageiros : number

	constructor(numPassageiros) {
		this.qtdRodas = 2
		this.numPassageiros = numPassageiros
	}
}

class ParkingControll{

	public async index ( request: Request, response: Response ){

		let tipo = request.body.tipoVeiculo
		var responseData
		let erros = new Array();

		if(tipo){
			if (tipo == 'passeio') {
				let modelo = request.body.modelo
				let anoDeFabrica = request.body.ano_de_fabrica
				let marca = request.body.marca

				if ( modelo.trim() === '' || !modelo ) {
					erros.push( "Digite um modelo válido" )
				}

				if ( anoDeFabrica.trim() === '' || !anoDeFabrica ) {
					erros.push( "Digite um ano de fabricação válido" )
				}

				if ( marca.trim() === '' || !marca ) {
					erros.push( "Digite uma marca válida" )
				}

				if ( erros.length == 0 && tipo == 'passeio') {
					responseData = new Passeio(modelo, anoDeFabrica, marca)
					response.send( responseData );
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

			else if (tipo == 'moto') {
				let numPassageiros = request.body.num_passageiros

				if ( numPassageiros == null || numPassageiros < 1 || numPassageiros > 2){
					erros.push( "Digite um número válido de passageiros " )
				}

				if ( erros.length == 0 && tipo == 'moto') {
					responseData = new Moto(numPassageiros)
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
		}
	}
}
const parkController = new ParkingControll()
export default parkController		