const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo_Assincrono.txt", "Oi assincrono", function (err) {
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("FIM");
