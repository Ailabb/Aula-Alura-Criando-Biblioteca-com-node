/*linguagem propria, para increver expressao  */

const chalk = require ('chalk');
const fs = require ('fs');

const texto = "A interface File provê informações sobre arquivos e permite ao JavaScript a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>] (https://developer.mozilla.org/pt-BR/docs/web/HTML/Element/Input) , a partir do objeto [DataTransfer] (https://developer.mozilla.org/pt-BR/docs/web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement] (https://developer.mozilla.org/pt-BR/docs/web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes] (https://developer.mozilla.org/pt-BR/docs/web/API/File#implemention_notes) para mais informações.)";

function extraiLinks(texto){
    const regex = /\[([^\]]*)\] \((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linksExtraidos = texto.match(regex);
    console.log(linksExtraidos);
}

extraiLinks(texto);

function trataErro(erro){ 
    throw new Error (chalk.red(erro.code, "Não há arquivo no caminho"));
     
}

/*async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))   
    }
    catch(erro){
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto1.md');*/

//\[([^\]]*)\]
//\((https?:\/\/[^$#\s].[^\s]*)\)