function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso/(altura * altura);
        if(imc > 0 && imc < 18.5){
            let texto = document.getElementById("resultado");
            texto.innerText = "Você está abaixo do peso!";
        }
        else if(imc >= 18.5 && imc <= 24.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Você está com peso normal. Parabéns!";
        }
        else if(imc >= 25 && imc <= 29.9){
            let texto = document.getElementById("resultado");
            texto.innerText = "Cuidado! Você está com sobrepeso!";
            texto.style.color = 'red';
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