const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")

nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    console.log(estado);
    if (estado == 0){
        sim.style.transform="translate(+5vw)"
        nao.style.transform="translate(17vw, -7px)"
    }
    if (estado == 1){
        nao.style.transform="translate(17vw, +13vw)"
    }
    if (estado == 2){
        nao.style.transform="translate(-25vw, +13vw)"
    }
    if (estado == 3){
        nao.style.transform="translate(-25vw, -13vw)"
    }
    if (estado == 4){
        nao.style.transform="translate(+20vw, +13vw)"
    }
    if (estado == 5){
        nao.style.transform="translate(+20vw, -13vw)"
    }
    if (estado == 6){
        nao.style.transform="translate(-10vw, +0vw)"
    }
    if (estado == 7){
        nao.style.transform="translate(-25vw, -15vw)"
        estado = -1
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ='certa resposta <img src="pessi-transformed.png" alt="pessi">'
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"

    resp.style.opacity= 1;

    setTimeout(function(){
        resp.style.opacity = 0;
    }, 7000 )
    
}