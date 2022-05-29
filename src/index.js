const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

/* Обратная функция (encode)
function decode(expr) {
    const symbolToMorse = (symbol) => {
        if (symbol === ' ') return ' ';

        return Object.keys(MORSE_TABLE).find((element) => MORSE_TABLE[element] === symbol)
    }

    const exprArray = expr.split('');
    const morseExprArray = exprArray.map(symbolToMorse);

    const morseToNumbers = (morse) => {
        if (morse === ' ') return '**********';
        let number = '0'.repeat(10 - morse.length * 2);
        for (let i = 0; i < morse.length; i++) {
            if (morse[i] === '-') {
                number += '11';
            } else if (morse[i] === '.') {
                number += '10';
            }
        }
        return number;
    }

    const numberExprArray = morseExprArray.map(morseToNumbers);

    return numberExprArray.join('')

}*/

function decode(expr) {
    let exprArray = [];

    for (let i = 0; i < expr.length; i += 10) {
        const number = expr.substring(i, i + 10);

        if (number === '**********') exprArray.push(' ');
        let morse = '';
        for (let i = 0; i < 10; i += 2) {
            const rule = {
                '10': '.',
                '11': '-',
            }
            morse += rule[number.toString().substring(i, i + 2)] || '';
        }
        exprArray.push(MORSE_TABLE[morse]);
    }

    return exprArray.join('');
}

module.exports = {
    decode
}