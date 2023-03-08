import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const pesquisar = document.querySelector("[data-pesquisar]").value;
const botaoPesquisar = document.querySelector("[data-botaoPesquisar]");
async function buscarVideos(evento){
    evento.preventDefault();
    const pesquisar = document.querySelector("[data-pesquisar]").value;
    const resultado = await conectaApi.buscaVideo(pesquisar);
    console.log(resultado);
    const lista = document.querySelector("[data-lista]");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    resultado.forEach(el => lista.appendChild(constroiCard(el)))
}
botaoPesquisar.addEventListener("click", evento => {
    buscarVideos(evento)
});
pesquisar.addEventListener("keydown", e => console.log(e) )