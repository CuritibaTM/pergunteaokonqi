var sorteio = Math.floor(Math.random() * 2)

function getInputValue() {
  let val0 = document.getElementById("InputOne").value
  let val1 = document.getElementById("InputTwo").value

    if(sorteio < 1) {
    document.getElementById("konqidiz").innerHTML = "Konqi escolheu: ";
    document.getElementById("resultado").innerHTML = val1;
  } else {}
    console.log(`Valor 1: ${val0}\n Valor2: ${val1}\n Aleatorio: ${sorteio}`)
}
