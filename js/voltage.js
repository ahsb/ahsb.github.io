function calculate() {
	var ambers=parseFloat(document.getElementById("I").value.replace(",","."));
	var ohms=parseFloat(document.getElementById("R").value.replace(",","."));
	var volts=parseFloat(document.getElementById("V").value.replace(",","."));
	if(!ambers) {
		ambers = volts / ohms ;
		if (isNaN(ambers)) ambers = ambers || 0;
		if (isFinite(ambers)) ambers = ambers || 0;
		document.getElementById("I").value=dividing(ambers) + "    A";
	}
	 if(!ohms) {
		ohms = volts / ambers ;
		if (isNaN(ohms)) ohms = ohms || 0;
		if (isFinite(ohms)) ohms = ohms || 0;
		document.getElementById("R").value=dividing(ohms)  + "    Ω";
	}
	if (!volts) {
		volts = ambers * ohms ;
		if (isNaN(volts)) volts = volts || 0;
		if (isFinite(volts)) volts = volts || 0;
		document.getElementById("V").value=multiply(volts) + "    V";
	}
}
function dividing(answer) {
	return answer;
}
function multiply(answer) {
	return answer;
}
