function abrirForm(){
    let abrir = document.getElementById("formCadastro");
    abrir.style.visibility = 'visible';
    let menu = document.getElementById("menu");
    menu.style.visibility = 'hidden';
}

function fecharForm(){
    let sair = document.getElementById("formCadastro");
    sair.style.visibility = 'hidden';
    let menu = document.getElementById("menu");
    menu.style.visibility = 'visible';
}