function calculate() {
	var uk =parseFloat(document.getElementById("uk").value.replace(",","."));
	var fn =parseFloat(document.getElementById("fn").value.replace(",","."));
	var fk =parseFloat(document.getElementById("fk").value.replace(",","."));
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var g = 9.8 ;
	if(!uk) {
		uk = a / g ;
		document.getElementById("uk").value=show(uk);
	} 
	if(!fn) {
		 fn = m * g;
		document.getElementById("fn").value=show(fn) + " n";
		}
	if(!fk) {
	fk = uk * fn  ;
	document.getElementById("fk").value=show(fk) + " n";
	}
	if(!m) {
	m = fn / g ;
	document.getElementById("m").value=show(m) + " kg";
	}
	if(!a) {
	a = uk * g ;
	document.getElementById("a").value=show(a) + " m/s";
	}
	
	
}
function show(answer) {
	return answer ;
}