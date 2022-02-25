const chalk = require ('chalk');
const fs = require ('fs'); //biblioteca que não há necessidade de instalar

function trataErro(erro){ // função criada para tratar um erro, pode ser um diretorio sem arquivo por exemplo
    throw new Error (chalk.red(erro.code, "Não há arquivo no caminho"));
    //conteudo recebido erro    
}


function pegaArquivo(caminhoDoArquivo){// função criada para pegar um arquivo, para este caso
    //o arquivo já esta nessa pasta.
    const encoding = 'utf-8'; 
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        //sao tres parametros para usar o readfile, o arquivo, encoding que pode ser utilizado
        //sem uma variavel, e uma função callback que exige dois parametros
        // o de erro e o data (acerto).
        
        if(erro){// para chamar a função caso tenha dado algum erro
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md');
