function login(){
    let usuario = document.getElementById("usuarioLogin").value;
    let senha = document.getElementById("senhaLogin").value;
        if((usuario == "") && (senha == "")){
            window.open('imc.html');
        }
}


