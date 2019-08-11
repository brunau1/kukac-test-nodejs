const host = 'http://localhost:3003/api/v1'

var getPalindromeNumbers = async () => {
    const firstNumber = document.querySelector('#inputFirstNumber').value || 0
    const lastNumber = document.querySelector('#inputLastNumber').value|| 0

    var asyncGetPalindromes = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/moto`,
                    type: 'get',
                    dataType: 'jsonp'
                })
                    .done(data => {
                        resolve(data)
                    })
                    .fail(err => {
                        reject(err)
                    });
            })
        } catch (error) { return error }
    }
    const palindromes = await asyncGetPalindromes()
    showPalindromeNumbers(palindromes)
}

var showPalindromeNumbers = (palindromes) => {
    const paragraph = document.querySelector('#show-palindromes')
    paragraph.innerHTML = palindromes
}


document.querySelector('#button-generate').addEventListener('click', getPalindromeNumbers)