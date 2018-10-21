function calculate() {
	var q =parseFloat(document.getElementById("q").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var s =parseFloat(document.getElementById("s").value.replace(",","."));
	if(!s) {
		s = q / t ;
		document.getElementById("s").value=show(s + " kPa")  ;
		}
	if(!q) {
		 q = t * s ;
		document.getElementById("q").value=show(q);
		}
	if(!t) {
		t = q / s  ;
		document.getElementById("t").value=show(t) ;
		}
}
function show(answer) {
	return answer ;
}
