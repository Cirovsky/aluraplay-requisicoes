const urlApi = " http://localhost:3000/videos";
async function listaVideos (url = urlApi) {
    const conexao = await fetch(url);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch(urlApi, 
    {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = conexao.json();
    
    return conexaoConvertida;
}

async function buscaVideo(termo){
    const conexao = await fetch(urlApi + "?q="+`${termo}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}