let historial = []

function convertir (){
    const moneda1 = document.querySelector('#desde')
    const moneda2= document.querySelector('#hacia')
    let dolar = 41.46;
    let euro = 42.6;
    let resultado = 0;
    let moneda
    //resultado convertido a decimal 
    let resultadoDecimal 
    const parrafoMoneda = document.getElementById('monedaConvertida')
    let valor = parseInt(document.getElementById("moneda").value);
    const btnConvertir = document.querySelector('conversion')
    
    if(moneda1.value === "pesos" && moneda2.value === "dolar"){
        moneda  = "US$"
        resultado = valor / dolar;
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = 'US$ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
        verHistorial()
    }else if (moneda1.value === "pesos" && moneda2.value === "euro"){
        moneda  = "€"
        resultado = valor / euro; 
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = '€ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
    }else if (moneda1.value === "dolar" && moneda2.value === "euro"){
       //convierto dolares a pesos y luego pesos a euro
        moneda = "€"
        resultado = (dolar * valor)/euro
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = '€ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
    }else if (moneda1.value === "dolar" && moneda2.value === "pesos"){
        moneda  = "$"
        resultado = dolar * valor; 
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = '€ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
    }else if(moneda1.value === "euro" && moneda2.value === "pesos"){
        moneda  = "$"
        resultado = euro * valor; 
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = '€ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
    }
    else if (moneda1.value === "euro" && moneda2.value === "dolar"){
        moneda = "€"
        resultado = (euro * valor)/dolar
        resultadoDecimal = resultado.toFixed(2)
        parrafoMoneda.innerHTML = '€ ' + resultadoDecimal
        guardarHistorial(moneda, resultadoDecimal)
    }
    else {
        parrafoMoneda.innerHTML = "No se puede convertir de " + moneda1.value + " a " + moneda2.value 
    }
}




function guardarHistorial(moneda, valor){
    
    let primerConvertido = new valorHistorial(moneda, valor)
    historial.push(primerConvertido)
    console.log(historial)
    //convierto en json)
    const historialEnJson = JSON.stringify(historial)
    //agrego al local storage
    localStorage.setItem("historial", historialEnJson)
}

function verHistorial(){ // muestra el historial por consola

    let verhist = localStorage.getItem("historial")
    let verHistJSON = JSON.parse(verhist)
    console.log(verHistJSON)  
   
}
//Constructor del objeto moneda convertida
class valorHistorial {
    constructor(moneda, valor){
    this.moneda = moneda
    this.valor = valor  
    }
}