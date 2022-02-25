const chalk = require ('chalk');// requisição para chamar a biblioteca é necesario a instalação 

console.log(chalk.blue('vamos começar!'));

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
