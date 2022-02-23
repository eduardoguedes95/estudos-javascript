function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#dfc84b'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#3f32b4'
    }
}