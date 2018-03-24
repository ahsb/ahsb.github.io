function calculate() {
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var f =parseFloat(document.getElementById("f").value.replace(",","."));
	if(!f) {
		f = 1 / t  ;
		document.getElementById("f").value=show(f) + " Hz";
		}
	if(!t) {
		t = 1 * f  ;
		document.getElementById("t").value=show("تحت العمل");
		}
	
}
function show(answer) {
	return answer ;
}