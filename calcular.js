 
        function calcularSoma() {
            //Lógica JavaScript virá aqui
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
           

            if (!isNaN(nota1) && !isNaN(nota2) ) {
             let soma = nota1 +  nota2 ;
             let media = soma / 2; // Média aritmetica
             document.getElementById("resultado").textContent = soma.toFixed(2);  
            } else{
                document.getElementById("resultado").textContent = "Por favor, insira notas válidas.";
            }
            

        }  
         
        function calcularMedia() {
            //Lógica JavaScript virá aqui
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
            let nota3 = parseFloat(document.getElementById("nota3").value);

            if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
             let soma = nota1 +  nota2 + nota3;
             let media = soma / 3; // Média aritmetica
             document.getElementById("resultado").textContent = media.toFixed(2);  
            } else{
                document.getElementById("resultado").textContent = "Por favor, insira notas válidas.";
            }
            

        }  
        
       