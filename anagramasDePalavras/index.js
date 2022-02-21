const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Ainda em processamento");
})

const fs = require('fs')

fs.readFile('./redacao.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
//   console.log(data)
// var data = ovo;
  anagramas(data)

function anagramas(palavra) {
    palavra=palavra.replace(/[\,\.]/g,"")

    var newtexts = [];
    newtexts = palavra.split(" ");
    // console.log(newtexts)
    newtexts.sort(function(a,b){
       return  a.length-b.length
    })

    // console.log(newtexts)

    let matrix = []
    let i = 0
    let j = -1
    newtexts.forEach(function(item){
        if(item.length>i){
            j++
            matrix[j]=[]
            i=item.length
        }
    matrix[j].push(item)
    })
    // console.log(matrix)
    //percorrer foreach ou map matrix ordenada
    const matrixOrdenada = matrix.map(function(list, idx){
        
        const ordemList = list.map(function(word){
            return ordenarPalavra(word)
        })
         //ordenaçao anagrama
        const listAnagram = ordemList.filter(function(a,b,c){
            return c.indexOf(a)===b && c.lastIndexOf(a)!==b
        })
        return list.filter(function(odr){
            if(ordenarPalavra(odr)===listAnagram[0]){
                return odr
            }else{
                return null
            }

        })
    })
      console.log(matrixOrdenada)
    }

function ordenarPalavra(dados){
    return dados.split("").sort().join("")  

}

})

