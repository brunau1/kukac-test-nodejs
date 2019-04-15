var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class PalindromeControll {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var responseData;
            let erros = new Array();
            let firstRange = request.body.first_range;
            let lastRange = request.body.last_range;
            if (firstRange == null || firstRange == undefined) {
                erros.push("Digite um número válido para o primeiro intervalo");
            }
            if (lastRange == null || lastRange == undefined) {
                erros.push("Digite um número válido para o ultimo intervalo");
            }
            if (erros.length == 0) {
                responseData = this.verifyPalindrome(firstRange, lastRange);
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
    verifyPalindrome(first, latest) {
        let numLength;
        let numAux;
        let palindromes = new Array();
        for (let num = first; num <= latest; num++) {
            numAux = num.toString();
            numLength = numAux.length;
            if (numLength > 1) {
                if (num == parseInt(numAux.split('').reverse().join(''))) {
                    palindromes.push(num);
                }
            }
        }
        return palindromes;
    }
}
const palindromeController = new PalindromeControll();
export default palindromeController;
