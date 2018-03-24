function calculate() {
	var a1 =parseFloat(document.getElementById("a1").value.replace(",","."));
	var a2 =parseFloat(document.getElementById("a2").value.replace(",","."));
	var f1 =parseFloat(document.getElementById("f1").value.replace(",","."));
	var f2 =parseFloat(document.getElementById("f2").value.replace(",","."));
	if(!f2) {
		f2 = (f1 * a2) / a1 ;
		document.getElementById("f2").value=show(f2) + " n";
	}
	if(!f1) {
		f1 = (a1 / a2) * f2 ;
		document.getElementById("f1").value=show(f1) + " n";
	}
	if(!a1) {
		a1 = (f1 * a2 ) / f2 ;
		document.getElementById("a1").value=show(a1) + " m";
	}
	if(!a2) {
		a2 = (f2 * a1) / f1 ;
		document.getElementById("a2").value=show(a2) + " m";
	}	
}
function show(answer) {
	return answer ;
}