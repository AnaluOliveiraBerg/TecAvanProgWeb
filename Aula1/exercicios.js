function ex1() {
    let numero = document.getElementById("numero").value;

    let quad = numero**2;
    let cubo = numero**3;

    
    document.getElementById("numdig").innerHTML = "O numero digitado foi " + numero;
    document.getElementById("quad").innerHTML = "O quadrado do numero é " + quad;
    document.getElementById("cubo").innerHTML = "A cubo do numero é " + cubo;

}

function ex2() {
    let fahren = document.getElementById("fahren").value;

    let celsius = (fahren-32)*5/9;

    document.getElementById("fahrenResult").innerHTML = "A temperatura em Fahrenheit foi " + fahren;
    document.getElementById("celsiusResult").innerHTML = "A temperatura em Celsius é " + celsius;
}

function ex3() {
    let prestacao = document.getElementById("prestacao").value;
    let juros = document.getElementById("juros").value;
    let atraso = document.getElementById("atraso").value;

    let valorAtt = prestacao + (prestacao*(juros**2/100)*atraso);

    document.getElementById("valoresInf").innerHTML = "Valores informados:";
    document.getElementById("celsiusResult").innerHTML = "A temperatura em Celsius é " + celsius;
}
