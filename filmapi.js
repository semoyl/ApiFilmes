'use strict'

async function pesquisarFilme(filme){

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}` //Entra na API

    const response = await fetch(url) //Procura item na API

    console.log(filme)
    
    const data = await response.json() //Transforma o que o response recebe em JSON
    const fotoimg = []

    const dataDescription = data.description
    dataDescription.forEach(function(filme){
        fotoimg.push(filme["#IMG_POSTER"])
    })
    
    return fotoimg
}


function criarImagem(link){
    const galeria =  document.getElementById('galeria')
    const novaImg = document.createElement('img')

    novaImg.src = link
    galeria.appendChild(novaImg)

}

async function preencherFotos () {
    const filme = document.getElementById('filme').value
    const fotos = await pesquisarFilme(filme)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(criarImagem)
}

document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)