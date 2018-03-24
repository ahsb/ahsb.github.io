function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var r = parseFloat(document.getElementById("r").value.replace(",","."));
	var t = parseFloat(document.getElementById("t").value.replace(",","."));
	var g = 6.67 * Math.pow(10, -11)
	var pi = 2 * 3.14
	if(!t) {
		t = pi * (Math.sqrt(Math.pow(r, 3) / (g * m))) ;
		document.getElementById("t").value=show(t);
	}
}
function show(answer) {
	return answer ;
}