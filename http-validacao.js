const fetch = require ('node-fetch');//instalação

function manejaErros(erro){
    throw new Error(erro.message);

}

async function checaStatus(arrayLinks){
    try{

        //promises async await
        console.log(1)
    const arrayStatus =  await Promise.all(arrayLinks
        .map( async url =>{
        const resposta = await fetch(url);
        console.log(2)
        return `${resposta.status} - ${resposta.statusText}`;
        //return resposta.status;
    }))
    console.log(3)

    console.log(arrayStatus)

    return arrayStatus;
    } catch(erro){
        manejaErros(erro);
    }    
}

function geraArrayDeURLs(arrayLinks){
// loop para cada {chave:valor}
//Object.values(objeto) (Objeto retornar um array somente com o valor)
return arrayLinks
.map(objetoLink => Object
    .values(objetoLink).join());
//join tira os metodos de uma array e converte para strings 
}

/*async function validaURLs(arrayLinks){
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    console.log(arrayLinks, statusLinks);
    return statusLinks;
    função feita para retornar o satus dos links gerados. 
}*/

async function validaURLs(arrayLinks){
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    //spread operator = espalhar o valor do objeto para incluir algo nele, como ocorre com o ... (Operador de espelhamento
    //Desconstruir um objeto e remontar um objeto
    const resultados = arrayLinks.map((objeto, indice) =>({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados;
}

module.exports = validaURLs;