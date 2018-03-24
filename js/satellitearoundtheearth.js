function calculate() {
	var r = parseFloat(document.getElementById("r").value.replace(",","."));
	var t = parseFloat(document.getElementById("t").value.replace(",","."));
	var g = 6.67 * Math.pow(10, -11)
	var me = 5.57 * Math.pow(10, 24)
	var pi = 2 * 3.14
	if(!t) {
		t = pi * (Math.sqrt(Math.pow(r, 3) / (g * me))) ;
		document.getElementById("t").value=show(t);
	}
}
function show(answer) {
	return answer ;
}