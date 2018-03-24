function calculate() {
	var d =parseFloat(document.getElementById("d").value.replace(",","."));
	var f =parseFloat(document.getElementById("f").value.replace(",","."));
	var w =parseFloat(document.getElementById("w").value.replace(",","."));
	if(!w) {
		 w = d * f  ;
		document.getElementById("w").value=show(w) + " n/m";
		}
	if(!f) {
		 f = w / d  ;
		document.getElementById("f").value=show(f) + " m";
		}
	if(!d) {
		 d = w / f  ;
		document.getElementById("d").value=show(d) + " n";
		}
}
function show(answer) {
	return answer ;
}