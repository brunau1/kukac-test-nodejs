var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class Passeio {
    constructor(modelo, anoDeFabrica, marca) {
        this.modelo = modelo;
        this.anoDeFabrica = anoDeFabrica;
        this.marca = marca;
        this.qtdPortas = 4;
    }
}
class Moto {
    constructor(numPassageiros) {
        this.qtdRodas = 2;
        this.numPassageiros = numPassageiros;
    }
}
class ParkingControll {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipo = request.body.tipoVeiculo;
            var responseData;
            let erros = new Array();
            if (tipo) {
                if (tipo == 'passeio') {
                    let modelo = request.body.modelo;
                    let anoDeFabrica = request.body.anoDeFabrica;
                    let marca = request.body.marca;
                    if (modelo.trim() === '' || !modelo) {
                        erros.push("Digite um modelo válido");
                    }
                    if (anoDeFabrica.trim() === '' || !anoDeFabrica) {
                        erros.push("Digite um ano de fabricação válido");
                    }
                    if (marca.trim() === '' || !marca) {
                        erros.push("Digite uma marca válida");
                    }
                    if (erros.length == 0 && tipo == 'passeio') {
                        responseData = new Passeio(modelo, anoDeFabrica, marca);
                        response.send(responseData);
                    }
                    else {
                        const errosJson = {
                            "erro": true,
                            "messages": erros
                        };
                        response.status(400);
                        response.send(errosJson);
                    }
                }
                else if (tipo == 'moto') {
                    let numPassageiros = request.body.numPassageiros;
                    if (numPassageiros == null || numPassageiros < 1 || numPassageiros > 2) {
                        erros.push("Digite um número válido de passageiros ");
                    }
                    if (erros.length == 0 && tipo == 'moto') {
                        responseData = new Moto(numPassageiros);
                        response.send(responseData);
                    }
                    else {
                        const errosJson = {
                            "erro": true,
                            "messages": erros
                        };
                        response.status(400);
                        response.send(errosJson);
                    }
                }
            }
        });
    }
}
const parkController = new ParkingControll();
export default parkController;
