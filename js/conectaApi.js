async function listaVideos (url = " http://localhost:3000/videos") {
    const conexao = await fetch(url);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch(" http://localhost:3000/videos", 
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
    
    const conexaoConvertida = conexao.json();
    
    return conexaoConvertida;
}

async function buscaVideo(termo){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termo}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}