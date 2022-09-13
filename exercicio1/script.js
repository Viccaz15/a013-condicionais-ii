const numero = prompt("Informe um número")

if(numero %2 === 0){
    console.log("O número é divisivel por 2.")
    if(numero %3 === 0){
        console.log("O número é dividido por 3.")

    }
} else {
    console.log("Não é divisivel por 2 ou 3.")
}

if(numero %2 === 0 && numero %3 === 0){
console.log("O número é divisível por 2 ou 3")
} else {
    console.log("O número não é divisivel por 2 ou 3")
}