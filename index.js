function getInputValue() {
    let val0 = document.getElementById("InputOne").value
    let val1 = document.getElementById("InputTwo").value
	if(!val0 || !val1) {
		return 1;
	}
    document.getElementById("konqidiz").innerText = "Konqi escolheu: ";
    document.getElementById("resultado").innerText = Math.random() < .5 ? val0 : val1;
}
