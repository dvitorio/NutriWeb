/**ABRE A TELA DE IMC */
function openIMC(){
     const openIMC = document.querySelector('.imc');
     openIMC.classList.remove('d-none');
     closeRCQ();
}

/**CALCULA O IMC */
function calculateIMC(){
     const peso = parseFloat(document.getElementById("peso").value.replace(',','.'));
     const altura = parseFloat(document.getElementById("altura").value.replace(',','.'));
          imc = peso / Math.pow(altura, 2); 
     document.getElementById("resultIMC").value = imc.toFixed(2);
     const imcResult = document.getElementById("resultIMC");
     imcResult.classList.remove('d-none');
     const analisysIMC = document.getElementById("analisysIMC");
     if(imc <= 18.5){
          analisysIMC.innerText = "Você está abaixo do seu peso ideal. Alimente-se regularmente e de forma balanceada. Nem tanto nem tampouco!";
     }
     else if(imc >= 18.5 && imc <= 24.99){
          analisysIMC.innerText = "Você está com um IMC considerado normal. Continue mantendo hábitos saudáveis e alimente-se de forma balanceada.";
     }
     else if(imc >= 25 && imc <= 29.99){
          analisysIMC.innerText = "Cuidado! Você está com sobrepeso. Procure um nutricionista, pratique exercícios físicos e mantenha hábitos alimentares saudáveis!";
     }
     else if(imc >= 30 && imc <= 34.99){
          analisysIMC.innerText = "Alerta! Você está com obesidade grau I! Procure um médico especialista para cuidar de sua saúde!";
     }
     else if(imc >= 35 && imc <= 39.99){
          analisysIMC.innerText = "Alerta! Você está com obesidade grau II! Procure um médico especialista para cuidar de sua saúde!";
     }
     else if(imc >= 40){
          analisysIMC.innerText = "Alerta! Você está com obesidade mórbida (Grau III)! Procure urgente um médico especialista para cuidar de sua saúde!";
     }
     const btnResultIMC = document.querySelector('.btnResultIMC');
     btnResultIMC.classList.remove('d-none');
}

/**LIMPA OS CAMPOS DO IMC */
function cleanIMC(){
     document.getElementById("peso").value = "";
     document.getElementById("altura").value = "";
     document.getElementById("resultIMC").value = "";
     document.getElementById("analisysIMC").innerText = "";
     btnResultIMC.classList.add('d-none');
     analisysIMC.classList.add('d-none');
}

/**FECHA A TELA DE IMC */
function closeIMC(){
     const closeIMC = document.querySelector('.imc');
     closeIMC.classList.add('d-none');
     imcResult.classList.remove('d-none');
     btnResultIMC.classList.add('d-none');
     cleanIMC();
}

/**================================= RELAÇÃO CINTURA/QUADRIL (RCQ) ============================= */
/**ABRE A TELA DE RCQ */
function openRCQ(){
     const openRCQ = document.querySelector('.rcq');
     openRCQ.classList.remove('d-none');
     closeIMC();
     closeIAC();
}

/**CALCULA O RCQ */
function calculateRCQ(){
     const cintura = parseFloat(document.getElementById('cintura').value.replace(',','.'));
     const quadril = parseFloat(document.getElementById('quadril').value.replace(',','.'));
     const homem = document.getElementById("homem").value;
     const mulher = document.getElementById("mulher").value;
          rcq = cintura/quadril;
     document.getElementById("resultRCQ").value = rcq.toFixed(2);
     const rcqResult = document.getElementById('resultRCQ');
     rcqResult.classList.remove('d-none');
     const btnResultRCQ = document.querySelector('.btnResultRCQ');
     btnResultRCQ.classList.remove('d-none');
}    

/**LIMPA OS CAMPOS DO RCQ */
function cleanRCQ(){
     document.getElementById("cintura").value = "";
     document.getElementById("quadril").value = "";
     document.getElementById("resultRCQ").value = "";
     btnResultRCQ.classList.add('d-none');
}

/**FECHA A TELA DE RCQ */
function closeRCQ(){
     const closeRCQ = document.querySelector('.rcq');
     closeRCQ.classList.add('d-none');
     cleanRCQ();
}


/**=============================== INDICE DE ADIPOSIDADE CORPORAL============================= */
/**ABRE A TELA DE IAC */
function openIAC(){
     const openIAC = document.querySelector('.iac');
     openIAC.classList.remove('d-none');
     closeIMC();
     closeRCQ();
}

/**CALCULA O IAC */
function calculateIAC(){
     const altura_iac = parseFloat(document.getElementById("altura_iac").value.replace(',','.'));
     const quadril_iac = parseFloat(document.getElementById("quadril_iac").value.replace(',','.'));
          if((altura_iac > 1 && altura_iac <= 2.72) || (quadril_iac > 40 && quadril_iac <= 400)){
               iac = quadril_iac / Math.pow(altura_iac, 1.5);
               document.getElementById("resultIAC").value = iac.toFixed(2);
               const iacResult = document.getElementById('resultIAC');
               iacResult.classList.remove('d-none');
               const btnResultIAC = document.querySelector('.btnResultIAC');
               btnResultIAC.classList.remove('d-none');
          }
          else{
               alert("Valor(es) inválido(s)! Informe a altura em metros e a medida do quadril em centímetros e continue.");
          }
}

/**FECHA O IAC */
function closeIAC(){
     const closeIAC = document.querySelector('.iac');
     closeIAC.classList.add('d-none');
}



