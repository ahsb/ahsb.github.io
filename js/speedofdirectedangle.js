function calculate() {
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var r =parseFloat(document.getElementById("r").value.replace(",","."));
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	if(!angle) {
		angle = r / t  ;
		document.getElementById("angle").value=show(angle) + " rad/s";
		}
	
}
function show(answer) {
	return answer ;
}