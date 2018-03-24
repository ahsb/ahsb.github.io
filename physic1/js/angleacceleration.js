function calculate() {
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	if(!a) {
		a = angle / t  ;
		document.getElementById("a").value=show(a) + " rad/s²";
		}
	
}
function show(answer) {
	return answer ;
}