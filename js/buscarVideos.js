import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const pesquisar = document.querySelector("[data-pesquisar]");
const botaoPesquisar = document.querySelector("[data-botaoPesquisar]");
async function buscarVideos(){
    const termo = pesquisar.value;
    const resultado = await conectaApi.buscaVideo(termo);
    const lista = document.querySelector("[data-lista]");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    if(resultado.length == 0){
        lista.innerHTML=`<h2 class="mensagem__titulo">não existem vídeos com esse termo</h2>`;
    }else{
        resultado.forEach(el => lista.appendChild(constroiCard(el)));
    }
}
botaoPesquisar.addEventListener("click", evento => {
    evento.preventDefault();
    buscarVideos();
});
pesquisar.addEventListener("keydown", e => {
    if(e.code == 'Enter'|| e.code =='Tab' || 
    e.code =='Backspace' && pesquisar.value.length == 1){
        buscarVideos();
    }
});