/*Author: Bruno Otávio Ferreira Santos*/
/*The following code will be modified to be called by the front end*/
/*O código a seguir será modificado para ser chamado pelo front end*/

//get the ranges
let first = 0
let latest = 1000

var verifyPalindrome = (first, latest) => {
	let numLength 
	let numAux
	let palindromes = []
	for (let num = first; num <= latest; num++) {
		numAux = num.toString()
		numLength = numAux.length

		if (numLength > 1) {
			//compares two values and verifies that the current value equals to it own inverse value
			//compara dois valores e verifica se o valor atual é igual ao seu valor inverso
			if (num == parseInt(numAux.split('').reverse().join(''))) {
				palindromes.push(num)
			}
		}
	}
	return palindromes
}

console.log(verifyPalindrome(first, latest))