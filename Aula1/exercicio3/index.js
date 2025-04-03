var valor=Number(prompt("Digite o valor em atraso"));
var taxa=Number(prompt("Digite a taxa de juros"));
var tempo=Number(prompt("Digite os dias de atraso"));

parcela=valor+(valor*(taxa**2/100)*tempo);

document.write("O valor da parcela eh: "+parcela);