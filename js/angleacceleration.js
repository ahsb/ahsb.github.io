function calculate() {
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	if(!a) {
		a = angle / t  ;
		document.getElementById("a").value=show(a) + " rad/s²";
		}
	if(!angle) {
		angle = a * t  ;
		document.getElementById("angle").value=show(angle);
		}
	if(!t) {
		t = angle / a  ;
		document.getElementById("t").value=show(t) + " s";
		}

}
function show(answer) {
	return answer ;
}
