import { conectaApi } from "./conectaApi.js";
const lista = document.querySelector("[data-lista]");

function constroiCard(el){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${el.url}"
    title="${el.titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${el.imagem}" alt="logo canal alura">
    <h3>${el.titulo}</h3>
    <p>${el.descricao}</p>
</div>`
    return video;
}

async function listaVideos (){
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(el => lista.appendChild(
        constroiCard(el)));
}
listaVideos();