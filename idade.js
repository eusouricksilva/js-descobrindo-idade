function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    var fsexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/foto-bebe-m.png')
        }
        else if (idade < 20) {
            img.setAttribute('src', 'imagens/foto-jovem-m.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'imagens/foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'imagens/foto-idoso-m.png')
        }

    } else if (fsexo[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }
            else if (idade < 20) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}