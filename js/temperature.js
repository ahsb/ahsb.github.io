function calculate() {
	var n =parseFloat(document.getElementById("n").value.replace(",","."));
	var r =parseFloat(document.getElementById("r").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var pv =parseFloat(document.getElementById("pv").value.replace(",","."));
	if(!pv) {
		pv = n * r * t ;
		document.getElementById("pv").value=show(pv) + " J"  ;
		}
	if(!n) {
		 n = pv / (r * t) ;
		document.getElementById("n").value=show(n) + " J.kg";
		}
	if(!r) {
		 r = pv / (n * t) ;
		document.getElementById("r").value=show(r) + " °";
		}
	if(!t) {
		 t = pv / (r * n) ;
		document.getElementById("t").value=show(t) + " g";
		}
}
function show(answer) {
	return answer ;
}