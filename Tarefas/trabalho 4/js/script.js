function calcular(){
   const valor1 = Number(document.getElementById('valor1').value);
   const valor2 = Number(document.getElementById('valor2').value);

   let resultado = Number(document.getElementById('resultado'));//parseInt/parseFloat

   const op = document.getElementById('operacao').value;
   
   if(valor1 <= 0 || valor2 <= 0){
      alert('Preencha todos os dados');
   }else {      
      if(op == 1){
         resultado = valor1 + valor2;
      }else if(op == 2){
         resultado = valor1 - valor2;
      }else if(op == 3){
         resultado = valor1 / valor2;
      }else {
         resultado = valor1 * valor2;
      } 
         if(isNaN(resultado)){
            alert('Apenas valores Numericos' );
         }else{
            document.getElementById('resultado').value = resultado;    
         }
   } 
 
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click", calcular);