function ex1(n1){
let quadrado = Number(n1)**2;
let numero = Number(n1);
let cubo = Number(n1)**3;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;
document.getElementById("quadrado").innerHTML = "o quadrado do numero é: " + quadrado;

}

function ex6(){
    let qtde = document.getElementById("qtde").value;
    let preco = document.getElementById("preco").value;
    
    let subtotal = qtde*preco;
    let desconto = subtotal*0.1;
    let valorFinal = subtotal-desconto;

    document.getElementById("subtotal").innerHTML = "O subtotal é de: " + subtotal;
    document.getElementById("desconto").innerHTML = "O desconto é de: " + desconto;
    document.getElementById("valorFinal").innerHTML = "O valor final é de: " + valorFinal;

}
    
function ex7() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('media').innerText = 'A média aritmética é: ' + media.toFixed(2);
}

function ex8() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultadoIMC").innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);

    document.getElementById("resultadoIMC").innerText = `O seu IMC é: ${imc.toFixed(2)}`;
}

function ex9() {
    const valorInicial = parseFloat(document.getElementById("valorInicial").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value) / 100; 
    const tempo = parseFloat(document.getElementById("tempo").value);

    if (isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(tempo) || valorInicial <= 0 || taxaJuros < 0 || tempo <= 0) {
        document.getElementById("resultadoMontante").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const montante = valorInicial * (1 + (taxaJuros * tempo));

    document.getElementById("resultadoMontante").innerText = `O montante é: R$ ${montante.toFixed(2)}`;
}

function ex10() {
    const valorHora = parseFloat(document.getElementById("valorHora").value);
    const horasPorDia = parseFloat(document.getElementById("horasPorDia").value);

    if (isNaN(valorHora) || isNaN(horasPorDia) || valorHora <= 0 || horasPorDia <= 0) {
        document.getElementById("resultadoSalario").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const diasTrabalhados = 30;
    const salarioMensal = valorHora * horasPorDia * diasTrabalhados;

    document.getElementById("resultadoSalario").innerText = `O salário mensal é: R$ ${salarioMensal.toFixed(2)}`;
}