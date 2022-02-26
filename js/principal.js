/**Comandos do IMC */

function abrirIMC(){
    const abrirIMC = document.getElementById("caixaIMC");
    abrirIMC.style.visibility = 'visible';
    abrirIMC.addEventListener(fecharRCQ());
    abrirIMC.addEventListener(fecharIAC());
}

function calcularIMC(){
    let alturaIMC = document.getElementById("alturaIMC").value.replace(",", ".");
    let pesoIMC = document.getElementById("pesoIMC").value.replace(",", ".");
        let imc = parseFloat(pesoIMC)/((parseFloat(alturaIMC * alturaIMC)));
        let mostrarResultado = document.getElementById("caixaResultadoIMC");
        mostrarResultado.style.visibility = 'visible';
        document.getElementById("alturaResultadoIMC").value = alturaIMC.replace(",", ".");
        document.getElementById("pesoResultadoIMC").value = pesoIMC.replace(",", ".");
        if(imc < 18.5){
            document.getElementById("conclusaoIMC").innerText = "Você está com peso abaixo do normal. Seu IMC deveria ser de no mínimo 18.0!";
        }
        else if(imc > 18.5 && imc <= 24.9){
            document.getElementById("conclusaoIMC").innerText = "Parabéns! Você está com peso normal. Continue praticando hábitos saudáveis e praticando exercícios!";
        }
        else if(imc > 24.9 && imc <= 29.9){
            document.getElementById("conclusaoIMC").innerText = "Você está com sobrepeso! Pratique exercícios e coma alimentos saudáveis!";
        }
        else if(imc > 29.9 && imc <= 34.9){
            document.getElementById("conclusaoIMC").innerText = "Cuidado! Você está com obesidade grau I. Procure um médico endocrinologista e/ou nutricionista!";
        }
        else if(imc > 34.9 && imc <= 39.9){
            document.getElementById("conclusaoIMC").innerText = "Cuidado! Você está com obesidade grau II. Procure um médico endocrinologista e/ou nutricionista!";
        }
        else if(imc > 39.9){
            document.getElementById("conclusaoIMC").innerText = "Perigo! Você está com obesidade mórbida. Procure urgentemente um médico endocrinologista!";
        }
        else{
            document.getElementById("conclusaoIMC").innerText = "Dados incorretos! Revise as informações e tente novamente!";
        }
    document.getElementById("resultadoIMC").value = imc.toFixed(2).replace(",", ".");
}

function limparCamposIMC(){
    document.getElementById("alturaIMC").value = ""; 
    document.getElementById("pesoIMC").value = "";
    document.getElementById("resultadoIMC").value = "";
    let esconderResultado = document.getElementById("caixaResultadoIMC");
    esconderResultado.style.visibility = 'hidden';
}

function fecharIMC(){
    const fecharIMC = document.getElementById("caixaIMC");
    fecharIMC.style.visibility = 'hidden';
    const fecharConclusao = document.getElementById("caixaResultadoIMC");
    fecharConclusao.style.display = 'none';
}

/**============================================================================= */
/**Comandos do RCQ */

function abrirRCQ(){
    const abrirRCQ = document.getElementById("caixaRCQ");
    abrirRCQ.style.visibility = 'visible';
    fecharIMC();
    abrirRCQ.addEventListener(fecharIAC());
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


/**============================================================================= */
/**Comandoe e métodos IAC */

function abrirIAC(){
    let telaIAC = document.getElementById("caixaIAC");
    telaIAC.style.visibility = 'visible';
    telaIAC.addEventListener(fecharRCQ());
    telaIAC.addEventListener(fecharIMC());
}

function calcularIAC(){
    let altura = document.getElementById("alturaIAC").value;
    let quadril = document.getElementById("quadrilIAC").value;
        let iac = (quadril/(altura * Math.sqrt(altura)) - 18);
    document.getElementById("resultadoIAC").value = iac.toFixed(2);
}

function limparCamposIAC(){
    document.getElementById("alturaIAC").value = ""; 
    document.getElementById("quadrilIAC").value = "";
    document.getElementById("resultadoIAC").value = "";
}

function fecharIAC(){
    const fecharIAC = document.getElementById("caixaIAC");
    fecharIMC();
    fecharIAC.style.visibility = 'hidden';
}
