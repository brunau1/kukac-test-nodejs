import { Request, Response } from 'express';

class PalindromeController {

    async get(request: Request, response: Response) {
        const { first, last } = request.query;
        const palindromes = this.generatePalindromeNumbers(first, last);
        return response.status(200).send(palindromes);
    }

    public generatePalindromeNumbers(first: number, last: number): Array<number> {

        const startInterval = first < last ? first : last;
        const lastInterval = first < last ? last : first;

        let palindromeValues: Array<number> = Array();

        for (let value: number = startInterval; value < lastInterval; value++)
            if (this.verifyPalindrome(value)) palindromeValues.push(parseInt(<any>value));

        return palindromeValues;
    }

    public verifyPalindrome(value: number): boolean {
        const absoluteValue = Math.abs(value);
        const reverseValue = absoluteValue.toString().split('').reverse().join('')
        const isPalindrome = reverseValue == absoluteValue.toString() ? true : false;

        return isPalindrome;
    }
}

export default new PalindromeController;