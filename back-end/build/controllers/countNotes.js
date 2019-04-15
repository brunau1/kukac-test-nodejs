var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class NotesControll {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var responseData;
            let erros = new Array();
            let compra = request.body.compra;
            let pagamento = request.body.pagamento;
            if (compra == null || compra == undefined) {
                erros.push("Digite um número válido para a compra");
            }
            if (pagamento == null || pagamento == undefined) {
                erros.push("Digite um número válido para o pagamento");
            }
            if (compra < pagamento)
                erros.push("O pagamento é menor do que o valor da compra");
            if (erros.length == 0) {
                responseData = this.countNotes(compra, pagamento);
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
        });
    }
    countNotes(compra, pagamento) {
        let count = new Array();
        let value = pagamento - compra;
        let countNotas1 = value % 10;
        let countNotas10 = ((value % 100) - countNotas1) / 10;
        let countNotas100 = (value - (countNotas1 + countNotas10 * 10)) / 100;
        count.push(countNotas1, countNotas10, countNotas100);
        return count;
    }
}
const notesController = new NotesControll();
export default notesController;
