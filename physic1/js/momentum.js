function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var v =parseFloat(document.getElementById("v").value.replace(",","."));
	var p =parseFloat(document.getElementById("p").value.replace(",","."));
	if(!p) {
		 p = v * m  ;
		document.getElementById("p").value=show(p) + " N.s";
		}
	if(!m) {
		 m = p / v  ;
		document.getElementById("m").value=show(m) + " k/g";
		}
	if(!v) {
		 v = p / m  ;
		document.getElementById("v").value=show(v) + " m/s";
		}
}
function show(answer) {
	return answer ;
}