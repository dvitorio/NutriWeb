/**Comandos do IMC */

function abrirIMC(){
    const abrirIMC = document.getElementById("caixaIMC");
    abrirIMC.style.visibility = 'visible';
    abrirIMC.addEventListener(fecharRCQ());
}

function calcularIMC(){
    let alturaIMC = document.getElementById("alturaIMC").value;
    let pesoIMC = document.getElementById("pesoIMC").value;
        let imc = parseFloat(pesoIMC)/((parseFloat(alturaIMC * alturaIMC)));
    document.getElementById("resultadoIMC").value = imc.toFixed(2);
}
function limparCamposIMC(){
    document.getElementById("alturaIMC").value = ""; 
    document.getElementById("pesoIMC").value = "";
    document.getElementById("resultadoIMC").value = "";
}

function fecharIMC(){
    const fecharIMC = document.getElementById("caixaIMC");
    fecharIMC.style.visibility = 'hidden';
}



/**Comandos do RCQ */

function abrirRCQ(){
    const abrirRCQ = document.getElementById("caixaRCQ");
    abrirRCQ.style.visibility = 'visible';
    fecharIMC();
}

function calcularRCQ(){
    let cintura = document.getElementById("cintura").value;
    let quadril = document.getElementById("quadril").value;
        let rcq = parseFloat(cintura)/(parseFloat(quadril));
    document.getElementById("resultadoRCQ").value = rcq.toFixed(2);
}

function limparCamposRCQ(){
    document.getElementById("cintura").value = ""; 
    document.getElementById("quadril").value = "";
    document.getElementById("resultadoRCQ").value = "";
}

function fecharRCQ(){
    const fecharRCQ = document.getElementById("caixaRCQ");
    fecharRCQ.style.visibility = 'hidden';
}