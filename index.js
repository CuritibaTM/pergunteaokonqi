let sorteio = Math.floor(Math.random() * 3)

function getInputValue() {
  let val0 = document.getElementById("InputOne").value
  let val1 = document.getElementById("InputTwo").value
	if(!val0 || !val1) {
		console.log("Tem que inserir algo né serjão!")
		return 1;
	}
    if(`${Math.floor(Math.random() * 2)}` == 0) {
    document.getElementById("konqidiz").innerHTML = "Konqi escolheu: ";
    document.getElementById("resultado").innerHTML = val0;
	} else {
    document.getElementById("konqidiz").innerHTML = "Konqi escolheu: ";
    document.getElementById("resultado").innerHTML = val1;
	}
    console.log(`Valor 1: ${val0}\nValor 2: ${val1}\nAleatorio: ${sorteio}`)
}
