/*Author: Bruno Otávio Ferreira Santos*/
/*The following code will be modified to be called by the front end*/
/*O código a seguir será modificado para ser chamado pelo front end*/

let compra = 3920
let pag = 4563

var countNotes = (compra, pag) => {
	let count = []

	let value = pag - compra
	console.log("Compra: "+compra)
	console.log("Pagamento: "+pag)
	console.log("Troco: "+value)

	count['notas1'] = value%10
	console.log("Notas de 1: "+count['notas1'])

	count['notas10'] = ((value%100) - count['notas1'])/10
	console.log("Notas de 10: "+count['notas10'])

	count['notas100'] = (value - (count['notas1'] + count['notas10']*10))/100 
	console.log("Notas de 100: "+count['notas100'])

	return count
}
console.log(countNotes(compra, pag))