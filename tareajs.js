// Función cálculo de la altura.
function alturaIsosceles(lado1,lado2,lado3){    
    if (lado1===lado2 && lado1!=lado3){   
        const altura = Math.sqrt(lado1**2 - (lado3/2)**2);
        return altura;       
    }
    else if (lado1===lado3 && lado1!=lado2){
        const altura = Math.sqrt(lado1**2 - (lado2/2)**2);        
        return altura;
    }
    else if (lado2===lado3 && lado2!=lado1){   
        const altura = Math.sqrt(lado2**2 - (lado1/2)**2);
        return altura;
    }
    else{console.log("El triángulo debe ser isósceles")
    }
}

// Interactiva página Web

function altuIsos(){
    const input1 = document.getElementById("in1");
    const lad1 = Number(input1.value);
    const input2 = document.getElementById("in2");
    const lad2 = Number(input2.value);
    const input3 = document.getElementById("in3");
    const lad3 = Number(input3.value);
     
    const alturaX = alturaIsosceles(lad1,lad2,lad3);

    alert("La altura es: " + alturaX);    
}





     

