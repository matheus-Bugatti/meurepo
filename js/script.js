let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = ""

function comecarEtapa() {
    let etapa = etapas[etapaAtual]
    let numeroHtml = ""


    for (let cont = 0; cont < etapa.numeros; cont++) {
        if (cont == 0) {
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero pisca"></div>'
        }
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    lateral.innerHTML = ''
    aviso.style.display = 'none'
    numeros.innerHTML = numeroHtml

}
function atualizarInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true
        } else {
            return false
        }
    })
    if (candidato.lenght > 0 ) {
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`

        let fotosHtml = ''
        for (let i in candidato.foto) {
            fotosHtml += `<div class="d-1-image"><img src="img/${candidato.foto[i].url}" alt=""> ${candidato.foto[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHtml
    } else {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizarInterface()
        }
    }
}
function corrige() {
    alert("clicou em corrige")
}
function branco() {
    alert("clicou em branco")
}

comecarEtapa()