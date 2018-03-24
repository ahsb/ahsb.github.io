function calculate() {
	var w =parseFloat(document.getElementById("w").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var p =parseFloat(document.getElementById("p").value.replace(",","."));
	if(!p) {
		 p = w / t  ;
		document.getElementById("p").value=show(p) + " m";
		}
	if(!t) {
		 t = w / p  ;
		document.getElementById("t").value=show(t) + " kg";
		}
	if(!w) {
		 w = t * p  ;
		document.getElementById("w").value=show(w) + " mol";
		}

}
function show(answer) {
	return answer ;
}