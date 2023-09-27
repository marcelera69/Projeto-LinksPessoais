function toggleMode(){
    const html = document.documentElement

     // if(html.classList.contains('light')){
     //      html.classList.remove('light')
     // } else {
     //      html.classList.add('light')
     // }
     html.classList.toggle('light')

    //Pegar a tag da img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a img light
        img.setAttribute("src", "assets/img/MinhaFotoLight.png")
        img/setAttribute("alt", "Minha foto light")
    } else {
        //se tiver light mode, adicionar a img light
        img.setAttribute("src", "assets/img/MinhaFotoDark.png")
        img/setAttribute("alt", "Minha foto dark")
    }
}

