const nacionalidade = prompt("informe sua nacionalidade")

switch (nacionalidade) {
    case "brasileira":
        console.log("A pessoa é do Brasil")
        break;
    case "argentina":
        console.log("A pessoa é da argentina")
        break;
    case "uruguaia":
        console.timeLog("A pessoa é do Uruguai")
        break;
    case "chilena":
        console.log("A pessoa é do Chile")
        break;
    case "colombiana":
        console.log("A pessoa é da Colômbia")
        break;
        default:
            console.log("Nacionalidade não encontrada")