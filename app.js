
function isValidCard() {
var cardNumber = prompt('Favor preencher com o numero de seu cartão de crédito');
var arr = cardNumber.split('').reverse()



var evenIndex = [];
for (var i = 0; i < arr.length; i++){
  if(arr.length === 13 && i % 2 === 0){
  evenIndex.unshift(arr[i]);
  }else if(arr.length !== 13) {alert('Favor preencher o codigo corretamente.');
  }
}
var oddIndex = [];
  for (var j = 0; j < arr.length; j++){
    if(j % 2 !== 0){
      oddIndex.unshift(arr[j]);
    }
    var total = oddIndex.reduce(function(total, num){
      if (total.push(num*2 >= 10){total.push(num*2 - 9);
      }else{total.push(num*2)}
    })console.log(multiplyTwo)

}
var total = [evenIndex, oddIndex, total].reduce(function(a,b){
  return a.concat(b);
})console.log(total)


    myFunction();


   //   multiplyTwo.unshift(oddIndex[k]);
   //   return sum+= evenIndex[i]+oddIndex[j]+multiplyTwo[k];
   //   if(sum % 10 === 0){var mensagem = document.write('cartão válido')
   // }else{var mensagem = document.write('cartão inválido')}
   // }
     }
   // }return document.getElementById("demo").innerHTML = Math.pow(8,2);



  isValidCard();
