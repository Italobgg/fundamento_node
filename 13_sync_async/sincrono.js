const fs = require("fs");

console.log("inicio");

fs.writeFileSync("arquivo_Sincrono.txt", "oi sincrono");

console.log("Fim");
