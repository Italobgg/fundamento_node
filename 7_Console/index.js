// Mais de um valor
const x = 5;
const y = "Italo";
const z = [1, 2];

console.log(x, y, z);

// contagem impressoes
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);

// variavel entre string
console.log("O nome é %s, ele é programador", y);

// limpar console
setTimeout(() => {
  console.clear();
}, 2200);
