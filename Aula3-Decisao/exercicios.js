function ex6() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    
    if (n1 == n2) {
        document.getElementById("comparacao").innerHTML = "Os números são iguais";
    } else {
        document.getElementById("comparacao").innerHTML = "Os números são diferentes";
    }	
}

function ex7() {
    let nA = Number(document.getElementById("nA").value);
    let nB = Number(document.getElementById("nB").value);
    let nC = Number(document.getElementById("nC").value);
    
    if (nA + nB == nC) {
        document.getElementById("comparacao").innerHTML = "A+B é igual a C";
    } else if (nA + nB > nC) {
        document.getElementById("comparacao").innerHTML = "A+B é maior que C";
    } else {
        document.getElementById("comparacao").innerHTML = "A+B é menor que C";
    }	
}

function ex8() {
    let salario = Number(document.getElementById("salario").value);
    
    if (salario >= 500) {
        document.getElementById("reajuste").innerHTML = "Você não está apto para reajuste salarial";
    } else {
        document.getElementById("reajuste").innerHTML = "Você está apto para reajuste salarial";
    } 	
}

function ex9() {
    let salario = Number(document.getElementById("salario").value);
    
    if (salario >= 500) {
        document.getElementById("reajuste").innerHTML = "Você não está apto para reajuste salarial";
    } else {
        document.getElementById("reajuste").innerHTML = "Seu salário será reajustado para " + salario*1.3;
    } 	
}

function ex10() {
    const codigoNike=5;
    const codigoAdidas=10;
    const descricaoNike="Tênis Nike";
    const descricaoAdidas="Tênis Adidas";
    const precoNike=500;
    const precoAdidas=300;
    
    let codigo = Number(document.getElementById("codigo").value);
    let qtde = Number(document.getElementById("qtde").value);

    if (codigo == codigoNike) {
        document.getElementById("descricao").innerHTML = descricaoNike;
        document.getElementById("preco").innerHTML = precoNike;
        document.getElementById("total").innerHTML = precoNike*qtde;
        
    } else if (codigo == codigoAdidas) {
        document.getElementById("descricao").innerHTML = descricaoAdidas;
        document.getElementById("preco").innerHTML = precoAdidas;
        document.getElementById("total").innerHTML = precoAdidas*qtde;
    } else {
        document.getElementById("descricao").innerHTML = "Código inválido";
        document.getElementById("preco").innerHTML = "";
        document.getElementById("total").innerHTML = "";
    }	
}
