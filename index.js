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
function limpar(){
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
    let cintura = parseFloat(document.getElementById("cintura").value);
    let quadril = parseFloat(document.getElementById("quadril").value);
        if((cintura >= 30 && cintura <= 250) && (quadril >= 50 && quadril <=350)){
            let rcq = (cintura/quadril);
            document.getElementById("rcq").value = rcq.toFixed(2);
        }
        else{
            alert("Valor(es) da cintura ou quadril inválido(s)! Confira os dados e digite novamente!");
        }

}   

