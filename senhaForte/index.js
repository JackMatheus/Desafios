const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Ainda em processamento");
})

function valida(senha) {
  let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
  if (regex.test(senha)) {
      console.log(senha, '= válida');
  } else {
      console.log(senha, '= inválida');
  }
}

['bb@11', 'maria@123', 'maab@123'].forEach(s => valida(s));
