const chalk = require('chalk'); //instalação
const pegarArquivo = require("./ExpressoesRegularesComExec");
const validaURLs = require("./http-validacao");

const caminho = process.argv;//retorna array

async function processaTexto(caminhoDeArquivo){    
    const resultado = await pegarArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }else{
     console.log(chalk.yellow("lista de links"), resultado)   
    }
 }


processaTexto(caminho)