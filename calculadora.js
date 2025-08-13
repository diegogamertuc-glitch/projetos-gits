// calculadora.js

// Variáveis de entrada
let numero1 = 10;
let numero2 = 5;
let operador = "+"; // Pode ser "+", "-", "*", "/"

// Variável para armazenar o resultado
let resultado;

// Estrutura de decisão para verificar o operador
if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Erro: divisão por zero não é permitida!";
    }
} else {
    resultado = "Operador inválido!";
}

// Exibir o resultado
console.log(`Resultado: ${resultado}`);