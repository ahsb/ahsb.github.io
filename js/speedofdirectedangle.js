function calculate() {
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var r =parseFloat(document.getElementById("r").value.replace(",","."));
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	if(!angle) {
		angle = r / t  ;
		document.getElementById("angle").value=show(angle) + " rad/s";
		}

	if(!r) {
		r = t * angle  ;
		document.getElementById("r").value=show(r);
		}
	if(!t) {
		t = r /angle  ;
		document.getElementById("t").value=show(t) + " s";
		}

}
function show(answer) {
	return answer ;
}
