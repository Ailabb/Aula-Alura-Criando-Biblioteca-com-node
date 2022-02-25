
const pegarArquivo = require("./ExpressoesRegularesComExec")
const caminho = process.argv;

//console.log(caminho);
/*[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\aiane\\OneDrive\\Documentos\\AÍLA\\Semana 10\\cli.js'
] */

console.log(pegarArquivo(caminho[2]));
/* RESPOSTA NO TERMINAL
Promise { <pending> }
[
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/web/API/FileList'
  },
  {
  },
    DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/web/API/DataTransfer'      
  },
  {
    HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/web/API/HTMLCanvasElement'
  },
  {
    'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/web/API/File#implemention_notes'
  }
]

*/
