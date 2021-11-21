let scrollant = 0
let valfina = 0
let arqnt = []

function salvqnt(){
    for (let index = 1; index < 11; index++) {
        
        if(document.getElementById(`qnt${index}`) !== null){
            arqnt[index] = document.getElementById(`qnt${index}`).value
        }
        
    }
}


function conserta(){
    for (let index = 1; index < 11; index++) {
        
        if(document.getElementById(`qnt${index}`) !== null){
            document.getElementById(`qnt${index}`).value = arqnt[index]
        }
        
    }
}

function atfin(){
        if(valfina < 0){
            valfina = 0
        }
        valfinf = parseFloat(valfina).toFixed(2)
        document.getElementById("valorfinal").value = valfinf
}

function fecharnavbar(){
    if(scrollY>=scrollant){
        document.getElementById("nav").style.marginTop = "-70px"
    }else{
        document.getElementById("nav").style.marginTop = "0px"
    }
    
    scrollant = scrollY
}

let caraberto = 0
function mostrarcarrinho(){
    if(caraberto == 0){
        caraberto = 1
        document.getElementById("carrinho").style.display = "block"
    }else{
        caraberto = 0
        document.getElementById("carrinho").style.display = "none"
    }
}

function addcar(n){

    if(verificaigual(n)){
    salvqnt()

    nome = document.getElementById(`prod${n}`).innerHTML
    valor = document.getElementById(`val${n}`).innerHTML

    document.getElementById("tabcar").innerHTML += `<tr id="tr${n}"><td>${nome}</td><td><input id="qnt${n}" type="number" onchange="calc(${n})" value="1" min="1"></td><td>R$<output id="valfin${n}">${valor}</output></td><td class="tirar"><button class="btn btn-danger" onclick="tirar(${n})">X</button></td></tr>`
    valfina += parseFloat(valor)
    arqnt[n] = 1
    atfin()
    conserta()
}
}

function tirar(n){
    valorqntant = document.getElementById(`valfin${n}`).value
    valfina -= parseFloat(valorqntant)
    elemento = document.getElementById(`tr${n}`)
    elemento.parentNode.removeChild(elemento)
    atfin()
}

function verificaigual(id){
        if(document.getElementById(`valfin${id}`) !== null){
            return 0
        }else{
            return 1
        }
}

function calc(n){
    valorqntant = document.getElementById(`valfin${n}`).value
    valfina -= parseFloat(valorqntant)
    valor = document.getElementById(`val${n}`).innerHTML
    qnt = document.getElementById(`qnt${n}`).value
    valorqnt = valor*qnt
    valfina += parseFloat(valorqnt)
    document.getElementById(`valfin${n}`).value =  valorqnt.toFixed(2)
    atfin()
}

