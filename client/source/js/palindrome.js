const host = 'http://localhost:3003/api/v1'

var getPalindromeNumbers = async () => {
    const firstNumber = document.querySelector('#inputFirstNumber').value || 0
    const lastNumber = document.querySelector('#inputLastNumber').value || 0

    var asyncGetPalindromes = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/palindrome?first=${firstNumber}&last=${lastNumber}`,
                    type: 'get',
                    dataType: 'json',
                    crossDomain: true,
                    contentType: "application/json",
                    headers: {
                        "Accept": 'application/json',
                        "Access-Control-Allow-Origin": 'http://localhost:3003',
                        "Access-Control-Allow-Credentials": 'true'
                    }
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
    return palindromes
}

var showPalindromeNumbers = async () => {
    const palindromes = await getPalindromeNumbers()
    const paragraph = document.querySelector('#show-palindromes')
    paragraph.innerHTML = palindromes
}

document.querySelector('#button-generate').addEventListener('click', showPalindromeNumbers)