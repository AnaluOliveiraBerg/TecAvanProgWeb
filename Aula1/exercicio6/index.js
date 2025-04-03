var quant=Number(prompt("Digite a quandtidade do produto"));
var valor=Number(prompt("O valor do produto"));

subtotal=quant*valor;
desc=subtotal-0.1;
final=subtotal-desc;

document.write("O total "+subtotal+" com desconto de "+desc+" valor final "+final);