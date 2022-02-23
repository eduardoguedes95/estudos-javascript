function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Tente novamento com outro ano!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#5861e9'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagens/fotocriancam.png'
            } else if (idade < 21) {
                //adolescente
                img.src = 'imagens/fotoadolescm.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'imagens/fotoadultom.png'
            } else {
                //idoso
                img.src = 'imagens/fotoidoso.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#cf50d3'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = 'imagens/fotocriancaf.png'
            } else if (idade < 21) {
                //adolescente
                img.src = 'imagens/fotoadolescf.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'imagens/fotoadultof.png'
            } else {
                //idoso
                img.src = 'imagens/fotoidosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}