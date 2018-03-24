function calculate() {
	var l = parseFloat(document.getElementById("l").value.replace(",","."));
	var t = parseFloat(document.getElementById("t").value.replace(",","."));
	var ti = parseFloat(document.getElementById("ti").value.replace(",","."));
	var g = parseFloat(document.getElementById("g").value.replace(",","."));
	var pi2 = 2 * 3.14
	var pi = 3.14
	if(!l) {
		l = (Math.pow(ti, 2) * g) / (4 * Math.pow(pi, 2)) ;
		document.getElementById("l").value=show(l);
	}
	if(!t) {
		t = pi2 * (Math.sqrt(l / g)) ;
		document.getElementById("t").value=show(t);
	}
	if(!g) {
		g = (4 * Math.pow(pi, 2) * l) / Math.pow(ti, 2) ;
		document.getElementById("g").value=show(g);
	}
}
function show(answer) {
	return answer ;
}