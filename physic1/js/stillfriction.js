function calculate() {
	var us =parseFloat(document.getElementById("us").value.replace(",","."));
	var fn =parseFloat(document.getElementById("fn").value.replace(",","."));
	var fs =parseFloat(document.getElementById("fs").value.replace(",","."));
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var g = 9.8 ;
	if(!us) {
		us = a / g ;
		document.getElementById("us").value=show(us);
	} 
	if(!fn) {
		 fn = m * g;
		document.getElementById("fn").value=show(fn) + " n";
		}
	if(!fs) {
	fs = us * fn  ;
	document.getElementById("fs").value=show(fs) + " n";
	}
	if(!m) {
	m = fn / g ;
	document.getElementById("m").value=show(m) + " kg";
	}
	if(!a) {
	a = us * g ;
	document.getElementById("a").value=show(a) + " m/s";
	}
	
	
}
function show(answer) {
	return answer ;
}