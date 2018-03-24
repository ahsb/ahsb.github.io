function calculate() {
	var ambers=parseFloat(document.getElementById("I").value.replace(",","."));
	var ohms=parseFloat(document.getElementById("R").value.replace(",","."));
	var volts=parseFloat(document.getElementById("V").value.replace(",","."));
	if(!ambers) {
		ambers = volts / ohms ;
		document.getElementById("I").value=dividing(ambers) + "    A";
	} else if(!ohms) {
		ohms = volts / ambers ;
		document.getElementById("R").value=dividing(ohms)  + "    Ω";
	} else {
		volts = ambers * ohms ;
		document.getElementById("V").value=multiply(volts) + "    V";
	}
}
function dividing(answer) {
	return answer
}
function multiply(answer) {
	return answer
}
