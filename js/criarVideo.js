import { conectaApi } from "./conectaApi.js";

const form = document.querySelector("[data-formulario]");
async function adicionarVideo (evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random()* 10000).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    window.location.href="../pages/envio-concluido.html";
}

form.addEventListener('submit', evento => adicionarVideo(evento));