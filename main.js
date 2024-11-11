document.querySelector("#idade").addEventListener("submit", function(event) {
    let anoNascimento = document.querySelector("#nascimento");
    let anoAtual = document.querySelector("#anoatual");
    
        // Conversão para números
        let primeiraDataConvertida = parseInt(anoNascimento.value);
        let segundaDataConvertida = parseInt(anoAtual.value);
        
        // Verificar se a conversão foi bem-sucedida
        if (isNaN(primeiraDataConvertida) || isNaN(segundaDataConvertida)) {
            alert("Por favor, insira valores numéricos válidos.");
            event.preventDefault(); // Impede o envio da conta
            return;
        }
        // Verificar se o primeiro número é maior que o segundo
        if(primeiraDataConvertida >= segundaDataConvertida) {
            alert("Inválido, para proseguir digite um valor maior no segundo campo");
            event.preventDefault(); // Impede o envio do formulário
        } else {
           let idade = segundaDataConvertida - primeiraDataConvertida;
            alert(`Sua idade é de ${idade} anos.`); 
            //Vai fazer a conta entre a data do ano atual e a data de nascimento
            
        }
        
    });
    



    


        
