const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words =  expr.split('**********')
    let word = ''
    let sentence = ''
    for(let i=0; i<words.length; i++){
       for (let j=0; j<Array.from(words[i]).length;j+=10){
        //console.log(Array.from(words[i]).slice(j,j+10).join('').replaceAll('10','.').replaceAll('11','-').replaceAll('0',''))
        Array.from(words[i]).slice(j,j+10).join('').replaceAll('10','.').replaceAll('11','-').replaceAll('0','')
        word = MORSE_TABLE[Array.from(words[i]).slice(j,j+10).join('').replaceAll('10','.').replaceAll('11','-').replaceAll('0','')]
        sentence +=word
       }
       sentence += ' '
       word = ''
  
    }
    return sentence.trimEnd()
}

module.exports = {
    decode
}