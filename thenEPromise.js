const chalk = require ('chalk');
const fs = require ('fs');

function trataErro(erro){ 
    throw new Error (chalk.red(erro.code, "Não há arquivo no caminho"));
     
}
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'; 
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))// ler o arquivo e depois executa o que se pede, é um metodo callback
    .catch((erro) => trataErro(erro))

}

pegaArquivo('./arquivos/texto1.md');
