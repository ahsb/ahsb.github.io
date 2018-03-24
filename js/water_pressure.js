function calculate() {
	var p =parseFloat(document.getElementById("p").value.replace(",","."));
	var h =parseFloat(document.getElementById("h").value.replace(",","."));
	var P =parseFloat(document.getElementById("P").value.replace(",","."));
	var g = 9.8
	if(!P) {
	 P = p * h * g ;
		document.getElementById("P").value=show(P)  ;
		}
	if(!h) {
		 h = P / (g * p) ;
		document.getElementById("h").value=show(h);
		}
	if(!p) {
		 p = P / (g * h) ;
		document.getElementById("p").value=show(p);
		}
}
function show(answer) {
	return answer ;
}