const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Ainda em processamento");
})

function numberOfAsterisks(n) {
  let filledArray = new Array(n).fill(' ');
  while (filledArray.indexOf(' ') !== -1) {
          filledArray.shift();
          filledArray.push('*');
          console.log(filledArray.join(""));
          n--;
      }
  }
  numberOfAsterisks(6)



