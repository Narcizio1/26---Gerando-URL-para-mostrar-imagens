// Escreva seu código aqui

/* Descomentar a linha abaixo antes de submeter e exportar a função que deve
ser chamada:

Ex: 
  function x() {
    console.log()
  }

  module.exports = x
*/
//module.exports = sua funcao aqui;

function gerarURLImagem(gerarURLImagem){
   //let teste = gerarURLImagem;
   if(gerarURLImagem.indexOf(" ") == 0 && gerarURLImagem.lastIndexOf(" ") == gerarURLImagem.length-1){
    gerarURLImagem = gerarURLImagem.slice(1, gerarURLImagem.length-1)
   }

    if (gerarURLImagem.match(/[àáâãéêèóõ]/gi)) {
        gerarURLImagem = gerarURLImagem
            .replace(/à/g, "a")
            .replace(/á/g, "a")
            .replace(/â/g, "a")
            .replace(/ã/g, "a")
            .replace(/é/g, "e")
            .replace(/ê/g, "e")
            .replace(/è/g, "e")
            .replace(/ó/g, "o")
            .replace(/ô/g, "o")
            .replace(/õ/g, "o");
    }
    gerarURLImagem = gerarURLImagem.toLowerCase();

    if(gerarURLImagem.match(/ /g)){
        gerarURLImagem = gerarURLImagem.replace(/ /g, "-");
    }

    return gerarURLImagem;

}

const titulo = " Grande Vitória na Final do Campeonato ";
const urlImagem = gerarURLImagem(titulo);
console.log(`URL da imagem: ${urlImagem}`);
