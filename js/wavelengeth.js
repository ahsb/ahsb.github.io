function calculate() {
	var v =parseFloat(document.getElementById("v").value.replace(",","."));
	var f =parseFloat(document.getElementById("f").value.replace(",","."));
	var h =parseFloat(document.getElementById("h").value.replace(",","."));
	if(!h) {
		h = v / f  ;
		document.getElementById("h").value=show(h) + "m";
		}
	if(!v) {
		v = h * f  ;
		document.getElementById("v").value=show(v) + " m/s";
		}
	if(!f) {
		f = v / h  ;
		document.getElementById("f").value=show(f) + " Hz";
		}
}
function show(answer) {
	return answer ;
}