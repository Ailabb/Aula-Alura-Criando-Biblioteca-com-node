//Escreve de forma sincrona e executa de forma assincrona 
/*O Javascript utiliza o bloco try para envolver o trecho de código que pode gerar
 algum tipo de exceção e o bloco catch é o responsável por capturar o que ocorreu 
 e permitir à pessoa que está desenvolvendo tratar o erro. */

const chalk = require ('chalk');
const fs = require ('fs');

function trataErro(erro){ 
    throw new Error (chalk.red(erro.code, "Não há arquivo no caminho"));
     
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))   
    }
    catch(erro){
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto1.md');