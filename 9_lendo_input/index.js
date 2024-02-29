const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Qual a sua linguagem de programação mais utilizada? ",
  (language) => {
    if (language === "html") {
      console.log("html não é uma linguagem de programação");
    } else {
      console.log(
        `Certo, sua linguagem de programação mais usada é ${language}`
      );
    }
    readline.close();
  }
);
