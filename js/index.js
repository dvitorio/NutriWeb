//Cálculo do IMC
function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso/(altura * altura);
        if(imc > 0 && imc < 18.5){
            let texto = document.getElementById("resultado");
            texto.innerText = "Você está abaixo do peso!";
            texto.style.color = 'green';
        }
        else if(imc >= 18.5 && imc <= 24.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Você está com peso normal. Parabéns!";
            texto.style.color = 'green';
        }
        else if(imc >= 25 && imc <= 29.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Cuidado! Você está com sobrepeso!";
            texto.style.color = 'orangered';
        }
        else if(imc >= 30 && imc <= 34.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Perigo! Você está com obesidade Grau I! Procure um nutricionista ou médico";
            texto.style.color = 'red';
        }
        else if(imc >= 35 && imc <= 39.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Perigo! Você está com obesidade Grau II! Procure um nutricionista ou médico";
            texto.style.color = 'red';
        }
        else if(imc >= 40){
            let texto = document.getElementById("resultado");
            texto.innerText = "Perigo! Você está com obesidade mórbida! Procure um nutricionista ou médico";
            texto.style.color = 'red';
        }
    document.getElementById("imc").value = imc.toFixed(2);   
}
function limparIMC(){
    if(peso!=0 && altura!=0 && imc!=0 && resultado!=0){
        document.getElementById("peso").value = " ";
        document.getElementById("altura").value = " ";
        document.getElementById("imc").value = " ";
        document.getElementById("resultado").value = " ";
        var texto = document.getElementById("resultado");
        texto.innerText = " ";
    }   
}
//Fim do cálculo de IMC


//Cálculo da relação cintura/quadril

function cinturaQuadril(){
    var sexo = document.getElementById("masculino").value;
    var cintura = parseFloat(document.getElementById("cintura").value);
    var quadril = parseFloat(document.getElementById("quadril").value);
        if((sexo=='1') && (cintura >= 30 && cintura <= 250) && (quadril >= 50 && quadril <=350)){
            var rcq = (cintura/quadril);
            if(rcq <= 0.80){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada IDEAL";
                textoRCQ.style.color = "green";
            }
            else if(rcq > 0.80 && rcq <= 0.95){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de BAIXO RISCO!";
                textoRCQ.style.color = "orangered";
            }
            else if(rcq > 0.95 && rcq <= 0.99){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de RISCO MODERADO!";
                textoRCQ.style.color = "red";
            }
            else{
                document.getElementById("rcq").value = rcq.toFixed(2);
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de ALTO RISCO!";
                textoRCQ.style.color = "red";
            }
        }
        else if((sexo=='0') && (cintura >= 30 && cintura <= 240) && (quadril >= 60 && quadril <=360)){
            var rcq = (cintura/quadril);
            if(rcq <= 0.70){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var resRCQ = document.getElementById("rcq").value;
                resRCQ.style.color = "green";
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada IDEAL";
                textoRCQ.style.color = "green";
            }
            else if(rcq > 0.70 && rcq <= 0.80){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var resRCQ = document.getElementById("rcq").value;
                resRCQ.style.color = "orangered";
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de BAIXO RISCO!";
                textoRCQ.style.color = "orangered";
            }
            else if(rcq > 0.80 && rcq <= 0.84){
                document.getElementById("rcq").value = rcq.toFixed(2);
                var resRCQ = document.getElementById("rcq").value;
                resRCQ.style.color = "red";
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de RISCO MODERADO!";
                textoRCQ.style.color = "red";
            }
            else{
                document.getElementById("rcq").value = rcq.toFixed(2);
                var resRCQ = document.getElementById("rcq").value;
                resRCQ.style.color = "red";
                var textoRCQ = document.getElementById("resultadoRCQ");
                textoRCQ.innerText = "Sua relação cintura-quadril é considerada de ALTO RISCO!";
                textoRCQ.style.color = "red";
            }
        }
        else{
            alert("Valor(es) da cintura ou quadril inválido(s)! Confira os dados e digite novamente!");
        }
}   

function limparRCQ(){
    if(cintura!=0 && quadril!=0 && rcq!=0 && resultado!=0){
        document.getElementById("cintura").value = " ";
        document.getElementById("quadril").value = " ";
        document.getElementById("rcq").value = " ";
        document.getElementById("resultadoRCQ").value = " ";
        var texto = document.getElementById("resultadoRCQ");
        texto.innerText = " ";
    }   
}
//Fim do cálculo de RCQ


