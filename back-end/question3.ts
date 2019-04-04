interface Veiculo {
	modelo: string
	anoFabricacao: string
	qtdPortas: number
	marca: string
	text: JSON
}

class Passeio implements Veiculo{

	modelo: string
	anoFabricacao: string
	qtdPortas: number
	marca: string
	text: JSON

	constructor(modelo: string,anoFabricacao: string,qtdPortas: number,marca: string) {
		this.modelo = modelo
		this.anoFabricacao = anoFabricacao
		this.qtdPortas = 4
		this.marca = marca
	}
}

class Moto{

	qtdRodas: number
	passageiros: number

	constructor(passageiros: number) {
		this.qtdRodas = 2
		this.passageiros = passageiros
	}
}